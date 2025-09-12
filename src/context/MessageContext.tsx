"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from "react";
import { io, Socket } from "socket.io-client";

// ======================= Types =======================
export type Message = {
  id: number;
  text: string;
  sender: "me" | "them";
  time: string;
  userId: number;
  isSent: boolean;
  tempId?: string;
};

export type ConversationMessage = {
  id: number;
  conversationId: number;
  senderId: number;
  receiverId: number | null;
  content: string;
  direction: "outgoing" | "incoming";
  createdAt: string;
};

export type Conversation = {
  id: number;
  userId: number;
  messages: ConversationMessage[];
};

interface MessageContextType {
  activeConversationId: number | null;
  setActiveConversationId: (id: number | null) => void;
  messageText: string;
  setMessageText: (text: string) => void;
  localMessages: Record<number, Message[]>;
  handleSendMessage: () => void;
  initializeConversations: () => Promise<void>;
}

// ======================= Context =======================
const MessageContext = createContext<MessageContextType | undefined>(undefined);

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

// ✅ Token helper
const getToken = () =>
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

// ======================= API Calls =======================
export const fetchConversationsApi = async (): Promise<{
  conversations: Conversation[];
}> => {
  const token = getToken();
  const res = await fetch(`${BASE_URL}/chat/conversations`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) throw new Error("Failed to fetch conversations");
  return res.json();
};

export const sendMessageApi = async (
  content: string,
  conversationId: number
) => {
  const token = getToken();
  const res = await fetch(`${BASE_URL}/chat/send-message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ content, conversationId }),
  });
  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
};

// ======================= Provider =======================
export const MessageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeConversationId, setActiveConversationId] = useState<
    number | null
  >(null);
  const [messageText, setMessageText] = useState("");
  const [localMessages, setLocalMessages] = useState<Record<number, Message[]>>(
    {}
  );
  const socketRef = useRef<Socket | null>(null);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasInitialized = useRef(false);
  const userId = 1; // Replace with actual user ID

  // ======================= Initialize Conversations =======================
  const initializeConversations = async () => {
    if (hasInitialized.current) return;
    try {
      const res = await fetchConversationsApi();
      const messages: Record<number, Message[]> = {};
      res.conversations.forEach((conv) => {
        messages[conv.id] = conv.messages.map((m) => ({
          id: m.id,
          text: m.content,
          sender: (m.direction === "outgoing" ? "me" : "them") as "me" | "them",
          time: new Date(m.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          userId: m.senderId,
          isSent: true,
        }));
      });
      setLocalMessages(messages);
      if (res.conversations.length > 0)
        setActiveConversationId(res.conversations[0].id);
      hasInitialized.current = true;
    } catch (err) {
      console.error("Failed to initialize conversations:", err);
    }
  };

  // ======================= Handle Sending Message =======================
  const handleSendMessage = () => {
    if (!messageText.trim() || !activeConversationId || !socketRef.current)
      return;

    const tempId = `temp-${Date.now()}`;
    const tempMessage: Message = {
      id: 0,
      text: messageText,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      userId: activeConversationId,
      isSent: false,
      tempId,
    };

    setLocalMessages((prev) => ({
      ...prev,
      [activeConversationId]: [
        ...(prev[activeConversationId] || []),
        tempMessage,
      ],
    }));

    setMessageText("");

    // Emit via socket
    socketRef.current.emit("sendMessage", {
      conversationId: activeConversationId,
      senderId: userId,
      content: messageText,
      tempId,
    });

    // Persist via API
    sendMessageApi(messageText, activeConversationId)
      .then((msg: ConversationMessage) => {
        setLocalMessages((prev) => ({
          ...prev,
          [activeConversationId]: prev[activeConversationId].map((m) =>
            m.tempId === tempId
              ? { ...m, id: msg.id, isSent: true, tempId: undefined }
              : m
          ),
        }));
      })
      .catch(console.error);
  };

  // ======================= Receive Message =======================
  const onReceiveMessage = (message: ConversationMessage) => {
    const newMessage: Message = {
      id: message.id,
      text: message.content,
      sender: (message.direction === "outgoing" ? "me" : "them") as
        | "me"
        | "them",
      time: new Date(message.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      userId: message.senderId,
      isSent: true,
    };

    setLocalMessages((prev) => ({
      ...prev,
      [message.conversationId]: [
        ...(prev[message.conversationId] || []),
        newMessage,
      ],
    }));
  };

  // ======================= Socket + Polling =======================
  useEffect(() => {
    const token = getToken();
    if (!token) return;

    const socket = io(BASE_URL, { auth: { token }, transports: ["websocket"] });
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅ Socket connected:", socket.id);
      socket.emit("joinUserRoom", userId);
    });

    socket.on("newMessage", onReceiveMessage);

    // Polling fallback if socket fails
    pollingRef.current = setInterval(() => {
      initializeConversations();
    }, 5000);

    return () => {
      socket.disconnect();
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, []);

  return (
    <MessageContext.Provider
      value={{
        activeConversationId,
        setActiveConversationId,
        messageText,
        setMessageText,
        localMessages,
        handleSendMessage,
        initializeConversations,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

// ======================= Hook =======================
export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context)
    throw new Error("useMessage must be used within a MessageProvider");
  return context;
};

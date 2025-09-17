// context/MessageContext.ts
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
  useCallback,
} from "react";
import io, { Socket } from "socket.io-client";

// ================= Interfaces =================
export interface ConversationMessage {
  id: number;
  conversationId: number;
  senderId: number;
  content: string;
  direction: "outgoing" | "incoming";
  read: boolean;
  createdAt: string;
  updatedAt: string;
  sender?: {
    id: number;
    firstName: string;
    lastName: string;
    role?: string;
    email?: string;
  };
  receiver?: null | any;
}

export interface ConversationUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface ConversationAgent {
  id: number;
  firstName: string;
  lastName: string;
}

export interface ConversationAdmin {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Conversation {
  id: number;
  userId?: number;
  adminId?: number | null;
  assignedAgentId?: number | null;
  isAssigned?: boolean;
  status?: string;
  lastMessageAt?: string;
  createdAt?: string;
  updatedAt?: string;
  user?: ConversationUser;
  admin?: ConversationAdmin | null;
  agent?: ConversationAgent | null;
  messages: ConversationMessage[];
}

export interface ConversationsResponse {
  success: boolean;
  conversations: Conversation[];
  totalCount?: number;
}

export interface Message {
  id: number;
  text: string;
  sender: "me" | "them";
  time: string;
  userId: number;
  isSent: boolean;
  tempId?: string;
}

export interface SendMessageResponse {
  success: boolean;
  message: ConversationMessage;
  conversationId: number;
}

export type ConversationsLocal = Record<number, Message[]>;

// ================= Context Type =================
interface MessageContextType {
  activeConversationId: number | null;
  setActiveConversationId: (id: number | null) => void;
  messageText: string;
  setMessageText: (text: string) => void;
  apiConversations: Conversation[];
  localMessages: ConversationsLocal;
  handleSendMessage: () => void;
  isSocketConnected: boolean;
  isLoading: boolean;
}

// ================= Context =================
const MessageContext = createContext<MessageContextType | undefined>(undefined);

// ================= API =================
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
const getToken = () =>
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const fetchConversationsApi =
  async (): Promise<ConversationsResponse> => {
    const token = getToken();
    const res = await fetch(`${BASE_URL}/chat/conversations`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(`Failed to fetch conversations: ${res.status} ${txt}`);
    }
    return await res.json();
  };

export const sendMessageApi = async (
  content: string,
  conversationId: number
): Promise<SendMessageResponse> => {
  const token = getToken();
  const res = await fetch(`${BASE_URL}/chat/send-message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ content }),
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Failed to send message: ${res.status} ${txt}`);
  }
  return await res.json();
};

// ================= Helper Functions (keeps signatures used by UI) =================
export const getReceiverName = (conversation: Conversation): string => {
  if (conversation.agent) {
    return `${conversation.agent.firstName} ${conversation.agent.lastName}`.trim();
  } else if (conversation.admin) {
    return `${conversation.admin.firstName} ${conversation.admin.lastName}`.trim();
  } else if (conversation.user) {
    return `${conversation.user.firstName} ${conversation.user.lastName}`.trim();
  }
  return "Support Team";
};

export const getReceiverInitials = (conversation: Conversation): string => {
  if (conversation.agent) {
    return `${conversation.agent.firstName.charAt(0) || ""}${
      conversation.agent.lastName.charAt(0) || ""
    }`;
  } else if (conversation.admin) {
    return `${conversation.admin.firstName.charAt(0) || ""}${
      conversation.admin.lastName.charAt(0) || ""
    }`;
  } else if (conversation.user) {
    return `${conversation.user.firstName?.charAt(0) || ""}${
      conversation.user.lastName?.charAt(0) || ""
    }`;
  }
  return "ST";
};

export const getReceiverRole = (conversation: Conversation): string => {
  if (conversation.agent) return "Agent";
  if (conversation.admin) return "Admin";
  if (conversation.user) return "User";
  return "Support";
};

export const getUnreadCount = (conversation: Conversation): number => {
  return conversation.messages.filter(
    (msg) => msg.direction === "incoming" && !msg.read
  ).length;
};

export const getLastMessage = (
  conversation: Conversation
): ConversationMessage | null => {
  if (
    !conversation ||
    !conversation.messages ||
    conversation.messages.length === 0
  )
    return null;
  return conversation.messages[conversation.messages.length - 1];
};

export const formatMessageTime = (dateString: string): string => {
  try {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
};

// Convert API message → UI message (MessageBox expects this shape)
const convertApiMessageToLocal = (
  apiMessage: ConversationMessage
): Message => ({
  id: apiMessage.id,
  text: apiMessage.content,
  sender: apiMessage.direction === "outgoing" ? "me" : "them",
  time: formatMessageTime(apiMessage.createdAt),
  userId: apiMessage.conversationId,
  isSent: true,
});

// ================= Provider =================
export const MessageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeConversationId, setActiveConversationId] = useState<
    number | null
  >(null);
  const [messageText, setMessageText] = useState("");
  const [apiConversations, setApiConversations] = useState<Conversation[]>([]);
  const [localMessages, setLocalMessages] = useState<ConversationsLocal>({});
  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const socketRef = useRef<Socket | null>(null);
  const hasInitializedRef = useRef(false);

  // Convert arrays from API into localMessages shape
  const convertApiMessagesToLocal = (
    apiMessages: ConversationMessage[],
    conversationId: number
  ): Message[] => apiMessages.map((m) => convertApiMessageToLocal(m));

  // Load conversations once (production: called once per mount)
  const initializeConversations = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchConversationsApi();
      setApiConversations(response.conversations || []);

      const initialMessages: ConversationsLocal = {};
      (response.conversations || []).forEach((conv) => {
        initialMessages[conv.id] = convertApiMessagesToLocal(
          conv.messages || [],
          conv.id
        );
      });
      setLocalMessages(initialMessages);

      if (
        response.conversations &&
        response.conversations.length > 0 &&
        !activeConversationId
      ) {
        setActiveConversationId(response.conversations[0].id);
      }
    } catch (err) {
      console.error("initializeConversations error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [activeConversationId]);

  // Real-time handler: called when a new ConversationMessage arrives
  const onReceiveMessage = useCallback((message: ConversationMessage) => {
    // update localMessages
    setLocalMessages((prev) => {
      const existing = prev[message.conversationId] || [];
      // avoid duplicates (by id)
      if (existing.some((m) => m.id === message.id)) return prev;

      const newLocal = convertApiMessageToLocal(message);
      return { ...prev, [message.conversationId]: [...existing, newLocal] };
    });

    // update apiConversations for sidebar/listing
    setApiConversations((prev) =>
      prev.map((conv) =>
        conv.id === message.conversationId
          ? {
              ...conv,
              messages: [...(conv.messages || []), message],
              lastMessageAt: message.createdAt,
            }
          : conv
      )
    );
  }, []);

  // Send message → call API, update states, emit socket event
  const handleSendMessage = useCallback(async () => {
    if (
      !messageText.trim() ||
      activeConversationId === null ||
      activeConversationId === undefined
    )
      return;

    const textToSend = messageText;
    setMessageText("");
    setIsLoading(true);

    try {
      const response = await sendMessageApi(textToSend, activeConversationId);

      if (response && response.success) {
        const savedMessage = response.message;

        // Update localMessages with the saved message (no temp)
        setLocalMessages((prev) => {
          const existing = prev[activeConversationId] || [];
          // avoid duplicate
          if (existing.some((m) => m.id === savedMessage.id)) return prev;

          return {
            ...prev,
            [activeConversationId]: [
              ...existing,
              convertApiMessageToLocal(savedMessage),
            ],
          };
        });

        // Update apiConversations (sidebar)
        setApiConversations((prev) =>
          prev.map((conv) =>
            conv.id === activeConversationId
              ? {
                  ...conv,
                  messages: [...(conv.messages || []), savedMessage],
                  lastMessageAt: savedMessage.createdAt,
                }
              : conv
          )
        );

        // Emit socket so other participants get the message (server may also broadcast)
        try {
          socketRef.current?.emit("send_message", savedMessage);
        } catch (emitErr) {
          // ignore emit errors (server may broadcast on save)
        }
      } else {
        // restore text if send fails
        setMessageText(textToSend);
      }
    } catch (err) {
      console.error("handleSendMessage error:", err);
      setMessageText(textToSend);
    } finally {
      setIsLoading(false);
    }
  }, [messageText, activeConversationId]);

  // Initialize once
  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      initializeConversations();
    }
  }, [initializeConversations]);

  // Socket setup: listen for new_message and keep connection alive
  useEffect(() => {
    const token = getToken();
    if (!token) {
      // no socket without token
      return;
    }

    // create socket
    const socket = io(BASE_URL, {
      auth: { token },
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      setIsSocketConnected(true);

      // join conversation rooms so server can route messages to this socket
      const conversationIds = apiConversations.map((c) => c.id);
      if (conversationIds.length) {
        socket.emit("join_conversations", conversationIds);
      }
    });

    socket.on("new_message", (message: ConversationMessage) => {
      // ensure shape then update
      if (message && message.conversationId) {
        onReceiveMessage(message);
      }
    });

   

    socket.on("disconnect", (reason) => {
      setIsSocketConnected(false);
      // reconnection handled by socket.io client config
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connect_error:", err);
    });

    return () => {
      try {
        socket.disconnect();
      } catch {}
      socketRef.current = null;
      setIsSocketConnected(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiConversations, onReceiveMessage]);

  // Make sure to re-join rooms when conversations list changes (e.g., after creating new conv)
  useEffect(() => {
    const socket = socketRef.current;
    if (!socket || !socket.connected) return;
    const ids = apiConversations.map((c) => c.id);
    if (ids.length) {
      socket.emit("join_conversations", ids);
    }
  }, [apiConversations]);

  const value: MessageContextType = {
    activeConversationId,
    setActiveConversationId,
    messageText,
    setMessageText,
    apiConversations,
    localMessages,
    handleSendMessage,
    isSocketConnected,
    isLoading,
  };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

// ================= Hook =================
export const useMessage = () => {
  const ctx = useContext(MessageContext);
  if (!ctx) throw new Error("useMessage must be used within a MessageProvider");
  return ctx;
};

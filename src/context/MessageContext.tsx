"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useRef,
  useCallback,
} from "react";
import { getSocket } from "@/lib/socket";

// --------- Types ----------
export interface User {
  id: number;
  firstName: string;
  lastName: string;

  email: string;
  phone?: string;
  role: string;
}

export interface Message {
  id?: number;
  tempId?: string;
  conversationId: number;

  senderId: number;
  receiverId: number | null;
  content: string;
  docs: string[];
  images: string[];
  videos: string[];
  direction: "incoming" | "outgoing";
  read: boolean;
  messageType: string;
  createdAt?: string;
  updatedAt?: string;
  sender: User;
  receiver: User | null;
  failed?: boolean;
  isSent?: boolean;
}

export interface Conversation {
  id: number;
  userId: number;
  adminId: number | null;
  assignedAgentId: number | null;
  isAssigned: boolean;
  status: "open" | "closed";

  lastMessageAt: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  admin: User | null;
  agent: User | null;
  messages: Message[];
}

export interface ConversationsResponse {
  success: boolean;
  conversations: Conversation[];
  totalCount: number;
}

export interface SendMessageResponse {
  success: boolean;
  message: Message;
  conversationId: number;
}

interface MessageContextType {
  conversations: Conversation[];
  conversationId: number | null;
  setConversationId: (id: number | null) => void;
  handleSendMessage: (
    content: string,
    messageType?: string,
    files?: File[]
  ) => Promise<void>;
  fetchConversations: () => Promise<void>;
  currentUser: User | null;
  isLoading: boolean;
  isSending: boolean;

  sendMessageApi: (
    conversationId: number,
    content: string,
    files?: File[]
  ) => Promise<SendMessageResponse>;
  startSupportChat: (initialMessage?: string) => Promise<number | null>;
}

const MessageContext = createContext<MessageContextType | null>(null);

// ---------------- Helpers ----------------
const safeMessageType = (type: string): string =>
  ["text", "image", "video", "file"].includes(type) ? type : "text";

const getToken = () => {
  if (typeof window !== "undefined") return localStorage.getItem("token");
  return null;
};

const generateTempId = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : "temp-" + Math.random().toString(36).substring(2, 9);

// ---------- Provider ----------
export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const socketRef = useRef<any>(null);
  const isSocketSetupRef = useRef(false);
  const receivedMessageIdsRef = useRef<Set<number>>(new Set());
  const processedTempIdsRef = useRef<Set<string>>(new Set());
  
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  // ---------------- API ----------------
  const getConversationsApi =
    useCallback(async (): Promise<ConversationsResponse> => {
      const token = getToken();
      const res = await fetch(`${BASE_URL}/chat/conversations`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch conversations");
      return res.json();
    }, [BASE_URL]);

  const sendMessageApi = useCallback(
    async (
      conversationId: number,
      content: string,
      files: File[] = []
    ): Promise<SendMessageResponse> => {
      const token = getToken();
      const formData = new FormData();

      if (conversationId) {
        formData.append("conversationId", conversationId.toString());
      } // 🔑 skip for new chat

      // formData.append("conversationId", conversationId.toString());
      formData.append("content", content);

      files.forEach((file) => {
        if (file.type.startsWith("image/")) formData.append("images", file);
        else if (file.type.startsWith("video/"))
          formData.append("videos", file);
        else formData.append("docs", file);
      });

      const res = await fetch(`${BASE_URL}/chat/send-message`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    },
    [BASE_URL]
  );
 
  // --------------- + new chat-----------------------
  const startSupportChat = useCallback(
    async (
      initialMessage: string = "Hi Support Team. I need an assistance."
    ): Promise<number | null> => {
      try {
        // use your existing sendMessageApi with conversationId = 0 to create a new chat
        const response = await sendMessageApi(0, initialMessage);
        const newConversationId: number = response.conversationId;
        setConversationId(newConversationId);
        return newConversationId;
      } catch (err) {
        console.error("startSupportChat error:", err);
        return null;
      }
    },
    [sendMessageApi]
  );

  // ---------------- Conversations ----------------
  const fetchConversations = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getConversationsApi();
      setConversations(response.conversations);

      if (response.conversations.length > 0) {
        setCurrentUser(response.conversations[0].user);
        if (!conversationId) {
          setConversationId(response.conversations[0].id);
        }
      }
      console.log("Conversations updated:", response.conversations);
    } catch (err) {
      console.error("Fetch Conversations Error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [getConversationsApi, conversationId]);

  // ---------------- Socket ----------------
  useEffect(() => {
    let active = true;
    const setupSocket = async () => {
      try {
        const s = await getSocket();
        if (!active) return;
        socketRef.current = s;
        isSocketSetupRef.current = true;

        s.removeAllListeners();

        // -------- New Message --------
        s.on("newMessage", (msg: Message) => {
          if (!msg || receivedMessageIdsRef.current.has(msg.id!)) return;
          receivedMessageIdsRef.current.add(msg.id!);

          const safeMsg: Message = {
            ...msg,
            messageType: safeMessageType(msg.messageType || "text"),
            images:
              typeof msg.images === "string"
                ? JSON.parse(msg.images)
                : msg.images || [],
            videos:
              typeof msg.videos === "string"
                ? JSON.parse(msg.videos)
                : msg.videos || [],
            docs:
              typeof msg.docs === "string"
                ? JSON.parse(msg.docs)
                : msg.docs || [],
          };

          setConversations((prev) =>
            prev.map((conv) =>
              conv.id === safeMsg.conversationId
                ? {
                    ...conv,
                    messages: [
                      ...conv.messages.filter(
                        (m) =>
                          (m.id && m.id !== safeMsg.id) ||
                          (m.tempId &&
                            safeMsg.tempId &&
                            m.tempId !== safeMsg.tempId)
                      ),
                      safeMsg,
                    ].sort(
                      (a, b) =>
                        new Date(a.createdAt || "").getTime() -
                        new Date(b.createdAt || "").getTime()
                    ),
                  }
                : conv
            )
          );

          console.log("New message received:", safeMsg);
        });

        // -------- Message Failed --------
      } catch (err) {
        console.error("[Socket] Setup error:", err);
        isSocketSetupRef.current = false;
      }
    };

    setupSocket();

    return () => {
      active = false;
      if (socketRef.current) {
        socketRef.current.removeAllListeners();
        socketRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!socketRef.current || !isSocketSetupRef.current) return;
    if (conversationId)
      socketRef.current.emit("joinConversation", conversationId);
    if (currentUser) socketRef.current.emit("joinUserRoom", currentUser.id);
  }, [conversationId, currentUser]);

  // ---------------- Send Message ----------------
  const handleSendMessage = useCallback(
    async (
      content: string,
      messageType: string = "text",
      files: File[] = []
    ) => {
      if (!conversationId || !currentUser) return;

      // 🔑 Find conversation to decide receiver
      const conv = conversations.find((c) => c.id === conversationId);
      const receiverId = conv?.agent?.id || conv?.admin?.id || null;
      const tempId = generateTempId();
      processedTempIdsRef.current.add(tempId);

      const imageFiles = files.filter((f) => f.type.startsWith("image/"));
      const videoFiles = files.filter((f) => f.type.startsWith("video/"));
      const docFiles = files.filter(
        (f) => !f.type.startsWith("image/") && !f.type.startsWith("video/")
      );

      const optimisticMessage: Message = {
        tempId,
        conversationId,
        senderId: currentUser.id,
        receiverId,
        content: content || "",
        images: imageFiles.map((f) => URL.createObjectURL(f)),
        videos: videoFiles.map((f) => URL.createObjectURL(f)),
        docs: docFiles.map((f) => f.name),
        direction: "outgoing",
        read: false,
        messageType: safeMessageType(messageType),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        sender: currentUser,
        receiver: null,
        isSent: false,
        failed: false,
      };

      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === conversationId
            ? { ...conv, messages: [...conv.messages, optimisticMessage] }
            : conv
        )
      );

      setIsSending(true);
      try {
        const response = await sendMessageApi(conversationId, content, files);

        const messageFromServer = {
          ...response.message,
          images:
            typeof response.message.images === "string"
              ? JSON.parse(response.message.images)
              : response.message.images || [],
          videos:
            typeof response.message.videos === "string"
              ? JSON.parse(response.message.videos)
              : response.message.videos || [],
          docs:
            typeof response.message.docs === "string"
              ? JSON.parse(response.message.docs)
              : response.message.docs || [],
          isSent: true,
          failed: false,
        };

        setConversations((prev) =>
          prev.map((conv) =>
            conv.id === conversationId
              ? {
                  ...conv,
                  messages: conv.messages.map((msg) =>
                    msg.tempId === tempId ? messageFromServer : msg
                  ),
                }
              : conv
          )
        );

        socketRef.current?.emit("messageSent", {
          tempId,
          message: messageFromServer,
        });
      } catch (err) {
        console.error("[SendMessage] Failed:", err);

        setConversations((prev) =>
          prev.map((conv) =>
            conv.id === conversationId
              ? {
                  ...conv,
                  messages: conv.messages.map((msg) =>
                    msg.tempId === tempId
                      ? { ...msg, failed: true, isSent: false }
                      : msg
                  ),
                }
              : conv
          )
        );

        socketRef.current?.emit("messageFailed", { tempId });
      } finally {
        setIsSending(false);
      }
    },
    [conversationId, currentUser, conversations, sendMessageApi]
  );

  // ---------------- Init ----------------
  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  return (
    <MessageContext.Provider
      value={{
        conversations,
        conversationId,
        setConversationId,
        handleSendMessage,
        fetchConversations,
        currentUser,
        isLoading,
        isSending,
        startSupportChat,
        sendMessageApi,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const ctx = useContext(MessageContext);
  if (!ctx) throw new Error("useMessage must be used inside MessageProvider");
  return ctx;
};
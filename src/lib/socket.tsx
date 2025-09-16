import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
  messageSent: (data: {
    messageId: number;
    tempId?: string;
    conversationId: number;
  }) => void;
  newMessage: (msg: any) => void;
  messageError: (data: { error: string; tempId?: string }) => void;
  newMessageNotification: (data: any) => void;
}

interface ClientToServerEvents {
  sendMessage: (data: {
    conversationId: number;
    senderId: number;
    content: string;
    messageType: string;
    tempId?: string;
    files?: File[];
  }) => void;
  joinConversation: (conversationId: number) => void;
  leaveConversation: (conversationId: number) => void;
  joinUserRoom: (userId: number) => void;
  joinAdminRoom: () => void;
}

let socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;
let connectionPromise: Promise<
  Socket<ServerToClientEvents, ClientToServerEvents>
> | null = null;

const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export const getSocket = async (): Promise<
  Socket<ServerToClientEvents, ClientToServerEvents>
> => {
  // Return existing connected socket
  if (socket && socket.connected) return socket;

  // Return existing connection promise to prevent multiple connection attempts
  if (connectionPromise) return connectionPromise;

  connectionPromise = new Promise((resolve, reject) => {
    const token = getToken();
    console.log("Initializing new socket connection...");

    const s = io("https://whatsapp.marifahsol.com", {
      transports: ["websocket"],
      auth: { token },
      timeout: 10000,
    });

    const connectionTimeout = setTimeout(() => {
      if (!s.connected) {
        reject(new Error("Socket connection timeout"));
        connectionPromise = null;
      }
    }, 10000);

    s.on("connect", () => {
      console.log("✅ Socket connected, ID:", s.id);
      clearTimeout(connectionTimeout);
      socket = s;
      connectionPromise = null;
      resolve(s);
    });

    s.on("connect_error", (err) => {
      console.error("❌ Connection error:", err.message);
      clearTimeout(connectionTimeout);
      connectionPromise = null;
      reject(err);
    });

    s.on("disconnect", (reason) => {
      console.warn("⚠️ Socket disconnected:", reason);
      if (reason === "io server disconnect") {
        // Server intentionally disconnected, need to manually reconnect
        socket = null;
      }
    });

    s.on("reconnect", (attemptNumber) => {
      console.log("🔌 Socket reconnected after", attemptNumber, "attempts");
    });

    s.on("reconnect_error", (error) => {
      console.error("❌ Reconnection error:", error);
    });

    s.on("reconnect_failed", () => {
      console.error("❌ Reconnection failed");
      connectionPromise = null;
    });
  });

  return connectionPromise;
};

export const isSocketConnected = (): boolean => {
  return socket?.connected || false;
};

// Clean up socket when needed
export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
  connectionPromise = null;
};













/*"use client";

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
import {
  getConversations,
  Conversation,
  User,
  Message, // ✅ using updated Message type that includes tempId, isSent, isProcessing, failed
} from "@/context/service/messageapi";

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
  retryFailedMessage: (tempId: string) => void;
  isSending: boolean;
}

const MessageContext = createContext<MessageContextType | null>(null);

const receivedMessageIds = new Set<string>();

const safeMessageType = (type: string): string =>
  ["text", "image", "video", "file"].includes(type) ? type : "text";

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const socketRef = useRef<any>(null);
  const sendingRef = useRef(false);

  // ✅ Setup socket
  useEffect(() => {
    let active = true;
    const setupSocket = async () => {
      try {
        const s = await getSocket();
        if (!active) return;
        socketRef.current = s;

        console.log("[Socket] Connected & listeners setup");

        s.removeAllListeners();

        s.on("newMessage", (msg: any) => {
          console.log("[Socket:newMessage] Received:", msg);

          const safeMsg: Message = {
            ...msg,
            messageType: safeMessageType(msg.messageType || "text"),
            isSent: true,
            isProcessing: false,
            failed: false,
          };

          setConversations((prev) =>
            prev.map((conv) => {
              if (conv.id !== safeMsg.conversationId) return conv;

              // 1️⃣ If tempId matches → replace optimistic
              const hasTemp = conv.messages?.some(
                (m) => m.tempId && safeMsg.tempId && m.tempId === safeMsg.tempId
              );

              if (hasTemp) {
                console.log("[Socket:newMessage] Replacing by tempId");
                return {
                  ...conv,
                  messages: conv.messages.map((m) =>
                    m.tempId === safeMsg.tempId ? safeMsg : m
                  ),
                  lastMessageAt: new Date().toISOString(),
                };
              }

              // 2️⃣ If server didn’t send tempId → match by (senderId + content + createdAt)
              const optimisticMatch = conv.messages?.find(
                (m) =>
                  m.tempId && // must be optimistic
                  m.senderId === safeMsg.senderId &&
                  m.content === safeMsg.content &&
                  Math.abs(
                    new Date(m.createdAt).getTime() -
                      new Date(safeMsg.createdAt).getTime()
                  ) < 5000 // within 5s
              );

              if (optimisticMatch) {
                console.log(
                  "[Socket:newMessage] Replacing by optimistic fallback"
                );
                return {
                  ...conv,
                  messages: conv.messages.map((m) =>
                    m.tempId === optimisticMatch.tempId ? safeMsg : m
                  ),
                  lastMessageAt: new Date().toISOString(),
                };
              }

              // 3️⃣ Skip if already exists by real ID
              const alreadyExists = conv.messages?.some(
                (m) => m.id === safeMsg.id
              );
              if (alreadyExists) {
                console.log(
                  "[Socket:newMessage] Skipped duplicate:",
                  safeMsg.id
                );
                return conv;
              }

              // 4️⃣ Otherwise → append new incoming
              console.log(
                "[Socket:newMessage] Appending new incoming",
                safeMsg
              );
              return {
                ...conv,
                messages: [...(conv.messages || []), safeMsg],
                lastMessageAt: new Date().toISOString(),
              };
            })
          );
        });

        // 🔹 Confirmation for sent messages
        s.on(
          "messageSent",
          (data: {
            messageId: number;
            tempId?: string;
            conversationId: number;
          }) => {
            console.log("[Socket:messageSent] Confirmation:", data);

            setIsSending(false);
            sendingRef.current = false;

            setConversations((prev) =>
              prev.map((conv) =>
                conv.id === data.conversationId
                  ? {
                      ...conv,
                      messages: (conv.messages || []).map((m) =>
                        m.tempId === data.tempId
                          ? {
                              ...m,
                              id: data.messageId,
                              isSent: true,
                              isProcessing: false,
                              failed: false,
                            }
                          : m
                      ),
                    }
                  : conv
              )
            );
          }
        );

        // 🔹 Error while sending
        s.on("messageError", (data: { error: string; tempId?: string }) => {
          console.error("[Socket:messageError] Error:", data);

          setIsSending(false);
          sendingRef.current = false;

          if (data.tempId) {
            setConversations((prev) =>
              prev.map((conv) => ({
                ...conv,
                messages: (conv.messages || []).map((m) =>
                  m.tempId === data.tempId
                    ? { ...m, isSent: false, failed: true, isProcessing: false }
                    : m
                ),
              }))
            );
          }
        });

        if (conversationId) {
          console.log("[Socket] Joining conversation", conversationId);
          s.emit("joinConversation", conversationId);
        }
        if (currentUser) {
          console.log("[Socket] Joining user room", currentUser.id);
          s.emit("joinUserRoom", currentUser.id);
        }
      } catch (err) {
        console.error("[Socket] Setup error:", err);
      }
    };

    setupSocket();
    return () => {
      active = false;
      console.log("[Socket] Cleanup listeners");
      socketRef.current?.removeAllListeners();
    };
  }, [conversationId, currentUser]);

  // ✅ Send message
  const handleSendMessage = useCallback(
    async (
      content: string,
      messageType: string = "text",
      files: File[] = []
    ) => {
      if (!conversationId || !currentUser || sendingRef.current) {
        console.warn("[SendMessage] Blocked: missing data or already sending");
        return;
      }

      setIsSending(true);
      sendingRef.current = true;

      const tempId = `temp-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}`;

      const newMsg: Message = {
        id: 0,
        tempId,
        conversationId,
        senderId: currentUser.id,
        receiverId: null,
        content,
        docs: files.filter((f) => f.type.includes("application")),
        images: files.filter((f) => f.type.includes("image")),
        videos: files.filter((f) => f.type.includes("video")),
        direction: "outgoing",
        read: false,
        messageType: safeMessageType(messageType),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isSent: false,
        isProcessing: true,
        failed: false,
        sender: currentUser,
        receiver: null,
      };

      console.log("[SendMessage] Optimistic message:", newMsg);

      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === conversationId
            ? { ...conv, messages: [...(conv.messages || []), newMsg] }
            : conv
        )
      );

      try {
        console.log("[SendMessage] Emitting to server:", {
          conversationId,
          senderId: currentUser.id,
          content,
          messageType,
          tempId,
        });
        socketRef.current?.emit("sendMessage", {
          conversationId,
          senderId: currentUser.id,
          content,
          messageType,
          tempId,
        });
      } catch (error) {
        setIsSending(false);
        sendingRef.current = false;
        console.error("[SendMessage] Failed:", error);
      }
    },
    [conversationId, currentUser]
  );

  // ✅ Retry failed
  const retryFailedMessage = useCallback(
    (tempId: string) => {
      console.log("[Retry] Attempting retry for tempId:", tempId);

      if (sendingRef.current) {
        console.warn("[Retry] Blocked, already sending");
        return;
      }

      const conv = conversations.find((c) =>
        c.messages?.some((m) => m.tempId === tempId && m.failed)
      );
      if (!conv) {
        console.warn("[Retry] No conversation found for tempId", tempId);
        return;
      }

      const failedMsg = conv.messages?.find((m) => m.tempId === tempId);
      if (!failedMsg) {
        console.warn("[Retry] No failed message found for tempId", tempId);
        return;
      }

      setIsSending(true);
      sendingRef.current = true;

      console.log("[Retry] Re-emitting failed message:", failedMsg);

      socketRef.current?.emit("sendMessage", {
        conversationId: failedMsg.conversationId,
        senderId: failedMsg.senderId,
        content: failedMsg.content,
        messageType: failedMsg.messageType,
        tempId: failedMsg.tempId,
      });
    },
    [conversations]
  );

  // ✅ Fetch initial conversations
  const fetchConversations = useCallback(async () => {
    setIsLoading(true);
    console.log("[FetchConversations] Fetching...");
    try {
      const response = await getConversations();
      console.log("[FetchConversations] Response:", response);
      setConversations(response.conversations);

      if (response.conversations[0]?.user) {
        console.log(
          "[FetchConversations] Setting current user:",
          response.conversations[0].user
        );
        setCurrentUser(response.conversations[0].user);
      }
    } catch (err) {
      console.error("[FetchConversations] Failed:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

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
        retryFailedMessage,
        isSending,
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
*/

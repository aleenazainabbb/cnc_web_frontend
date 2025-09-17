// context/service/messageapi.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: string;
}

export interface OptimisticMessage {
  id?: number | null;
  tempId?: string;
  conversationId: number;
  senderId: number;
  receiverId: number | null;
  content: string;
  docs: File[];
  images: File[];
  videos: File[];
  direction: "incoming" | "outgoing";
  read: boolean;
  messageType: string;
  createdAt: string;
  updatedAt: string;
  isSent: boolean;
  isProcessing: boolean;
  failed: boolean;
  sender: User;
  receiver: User | null;
}

export interface Message {
  tempId?: string;
  isSent: boolean;
  isProcessing: boolean;
  failed: boolean;
  id: number | null;
  conversationId: number;
  senderId: number;
  receiverId: number | null;
  content: string;
  docs: any[];
  images: any[];
  videos: any[];
  direction: "incoming" | "outgoing";
  read: boolean;
  messageType: string;
  createdAt: string;
  updatedAt: string;
  sender: User;
  receiver: User | null;
}

export interface Conversation {
  id: number;
  userId: number;
  adminId: number | null;
  assignedAgentId: number | null;
  isAssigned: boolean;
  status: string;
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

const getToken = () => {
  if (typeof window !== "undefined") return localStorage.getItem("token");
  return null;
};

// ✅ Get all conversations
export const getConversations = async (): Promise<ConversationsResponse> => {
  const token = getToken();
  const res = await fetch(`${BASE_URL}/chat/conversations`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch conversations");
  return res.json();
};

// ✅ Send message (text, image, video, file)
export const sendMessage = async (
  conversationId: number,
  content: string,
  files: File[] = []
): Promise<SendMessageResponse> => {
  const token = getToken();
  const formData = new FormData();
  formData.append("conversationId", conversationId.toString());
  formData.append("content", content);

  files.forEach((file) => {
    if (file.type.includes("image")) formData.append("images", file);
    else if (file.type.includes("video")) formData.append("videos", file);
    else formData.append("docs", file);
  });

  const res = await fetch(`${BASE_URL}/chat/send-message`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` }, // Do NOT set Content-Type manually
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
};

export const messageapi = {
  getConversations,
  sendMessage,
};

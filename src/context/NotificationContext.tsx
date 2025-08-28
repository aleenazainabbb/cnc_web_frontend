const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export interface Notification {
  id: number;
  type: string;
  message: string;
  read: boolean;
  createdAt: string;
}
export const getNotification = async (): Promise<Notification[]> => {
  try {
    const token = getToken();
    if (!token) throw new Error("No token found");

    const res = await fetch(`${BASE_URL}/userNotify/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch notifications");

    const data = await res.json();
    console.log("📩 Notifications API response:", data);

    // Map API response to Notification[]
    const notifications: Notification[] = data.notifications.map((n: any) => ({
      id: n.id,
      type: n.type,
      message: n.message,
      read: n.read,
      createdAt: n.createdAt,
    }));

    return notifications;
  } catch (error) {
    console.error("Error in getNotification:", error);
    throw error;
  }
};

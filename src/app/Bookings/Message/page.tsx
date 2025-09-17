// app/Bookings/Message/page.tsx
"use client";

import { MessageProvider } from "@/context/MessageContext";
import MessageBox from "@/components/MessagesComponents/MessageBox";

export default function MessagePage() {
  return (
    <MessageProvider>
      <MessageBox />
    </MessageProvider>
  );
}

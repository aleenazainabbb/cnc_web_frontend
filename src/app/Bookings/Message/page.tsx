// app/Bookings/Message/page.tsx
"use client";

import { MessageProvider } from "@/context/MessageContext";
import MessageBox from "@/components/MessagesComponents/MessageBox";
import HeaderBar from "@/components/navbar/HeaderBar";

export default function MessagePage() {
  return (
    <MessageProvider>
      <HeaderBar title="Message" />
      <MessageBox />
    </MessageProvider>
  );
}

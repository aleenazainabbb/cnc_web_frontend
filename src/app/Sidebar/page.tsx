'use client';
import Sidebar from "@/components/navbar/Sidebar";
import HeaderBar from '@/components/navbar/HeaderBar';
export default function RequestPage() {
  return (
    <div>
       <HeaderBar
        title="Booking"
        onNotifyClick={() => alert('Notifications clicked')}
        onAvatarClick={() => alert('Avatar clicked')}
      />
      {/* <Sidebar /> */}
    </div>
  );
}

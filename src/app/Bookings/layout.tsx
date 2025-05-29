// components/Layout.jsx
// components/Layout.jsx
// app/Bookings/layout.jsx
// app/Bookings/layout.tsx
'use client';

import Sidebar from "@/components/navbar/Sidebar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#fafafa' }}>
      <Sidebar />
      <div style={{ flex: 1}}>
        {children}
      </div>
    </div>
  );
}

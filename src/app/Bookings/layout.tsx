'use client';

import Sidebar from "@/components/navbar/Sidebar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function BookingLayout({ children }: LayoutProps) {
  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#fafafa" }}>
      <Sidebar />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}

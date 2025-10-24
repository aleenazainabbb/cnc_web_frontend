"use client";

import Sidebar from "@/components/navbar/Sidebar";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import SpinnerLoader from "@/components/Loader/spinner";

interface BookingLayoutProps {
  children: ReactNode;
}

export default function BookingLayout({ children }: BookingLayoutProps) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const autoHeight = pathname?.toLowerCase().includes("/bookings/profile");

  // Hydration-safe mount
  useEffect(() => {
    setMounted(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    // Prevent hydration mismatch by rendering nothing until client mounts
    return null;
  }

  return (
    <ProtectedRoute>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <div
          style={{
            display: "flex",
            height: "100vh", 
            backgroundColor: "#fafafa",
            overflow: "hidden", // prevent global page scroll
          }}
        >
          {/* Sidebar on left */}
          <aside style={{ flex: "0 0 10%", borderRight: "1px solid #ddd" }}>
            <Sidebar />
          </aside>

          {/* Main (takes remaining space, allows table to resize) */}
          <main
            style={{
              flex: 1,
              overflowX: "auto",
              overflowY: "auto",
            }}
          >
            {children}
          </main>
        </div>
      )}
    </ProtectedRoute>
  );
}

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
    // ✅ Prevent hydration mismatch by rendering nothing until client mounts
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
            height: autoHeight ? "auto" : "100vh",
            backgroundColor: "#fafafa",
          }}
        >
          <Sidebar />
          <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {children}
          </main>
        </div>
      )}
    </ProtectedRoute>
  );
}

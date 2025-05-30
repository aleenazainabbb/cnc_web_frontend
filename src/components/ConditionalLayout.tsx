"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import TopBar from "@/components/navbar/Topbar";
import Footer from "@/components/footer/Footer";
import MiniFooter from "@/components/footer/MiniFooter";

interface Props {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: Props) {
  const pathname = usePathname();

  // Adjust this to your booking route path
  const isBookingRoute = pathname?.startsWith("/Bookings");
  const isLoginRoute = pathname?.startsWith("/Login");

  return (
    <>
      {!isBookingRoute && !isLoginRoute && <TopBar />}
      {!isBookingRoute && !isLoginRoute && <Navbar />}
      {children}
      {!isBookingRoute && !isLoginRoute && <Footer />}
      {!isBookingRoute  && !isLoginRoute && <MiniFooter />}
    </>
  );
}

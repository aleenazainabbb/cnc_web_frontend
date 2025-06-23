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
  const isSignupLayout = pathname?.startsWith("/Signup");
  const isBookingLayout = pathname?.startsWith("/BookAservicePage");
  const isGetAQuotePage = pathname?.startsWith("/GetAquote");


  return (
    <>
      {!isBookingRoute && !isLoginRoute && !isSignupLayout && !isBookingLayout && !isGetAQuotePage &&  <TopBar />}
      {!isBookingRoute && !isLoginRoute && !isSignupLayout && !isBookingLayout && !isGetAQuotePage && <Navbar />}
      {children}
      {!isBookingRoute && !isLoginRoute && !isSignupLayout && !isBookingLayout && !isGetAQuotePage && <Footer />}
      {!isBookingRoute  && !isLoginRoute && !isSignupLayout && !isBookingLayout && !isGetAQuotePage && <MiniFooter />}
    </>
  );
}

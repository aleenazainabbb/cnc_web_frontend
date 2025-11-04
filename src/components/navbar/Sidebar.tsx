"use client";
import React, { useState, useEffect, useRef } from "react";
import side from "./styles/sidebar.module.css";
import Image from "next/image";
import LinkWithLoader from "@/components/Loader/Link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logoutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsOpen(false); // Closed by default on mobile
      } else {
        setIsOpen(true); // Always open on large screens
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobile &&
        isOpen &&
        sidebarRef.current &&
        !(sidebarRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isOpen]);

  const handleLogout = () => {
    logoutUser();
    router.push("/");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      href: "/Bookings/Dashboard",
      icon: "fa-table-list",
      color: "#3B82F6",
      text: "My Booking",
      path: "/Bookings/Dashboard",
    },
    {
      href: "/Bookings/QuoteList",
      icon: "fa-rectangle-list",
      color: "#10B981",
      text: "My Quotes",
      path: "/Bookings/QuoteList",
    },
    {
      href: "/Bookings/Profile",
      icon: "fa-user",
      color: "#8B5CF6",
      text: "Profile",
      path: "/Bookings/Profile",
    },
    {
      href: "/Bookings/PaymentMethods",
      icon: "fa-money-check",
      color: "#F59E0B",
      text: "Payment Methods",
      path: "/Bookings/PaymentMethods",
    },
    {
      href: "/Bookings/MyWallet",
      icon: "fa-wallet",
      color: "#EF4444",
      text: "My Wallet",
      path: "/Bookings/MyWallet",
    },
    {
      href: "/Bookings/Complaint",
      icon: "fa-triangle-exclamation",
      color: "#F97316",
      text: "Complaint",
      path: "/Bookings/Complaint",
    },
    {
      href: "/Bookings/Message",
      icon: "fa-envelope",
      color: "#06B6D4",
      text: "Message",
      path: "/Bookings/Message",
    },
    {
      href: "/Bookings/COPYandPAYPayment",
      icon: "fa-envelope",
      color: "#88d406ff",
      text: "Add Payment",
      path: "/Bookings/COPYandPAYPayment",
    },
  ];

  return (
    <>
      {/* Toggle Button - Show only when sidebar is closed on mobile */}
      {isMobile && !isOpen && (
        <button className={side.toggleBtn} onClick={toggleSidebar}>
          <i className="fa-solid fa-bars"></i>
        </button>
      )}

      {/* Overlay when sidebar is open on mobile */}
      {isMobile && isOpen && (
        <div className={side.overlay} onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`${side.sidebar} ${!isOpen ? side.sidebarClosed : ""} ${
          isMobile ? side.sidebarMobile : ""
        }`}
      >
        <div className={side.sidebarContent}>
          <div className={side.logoContainer}>
            <Image
              src="/images/bookingLogo.svg"
              alt="CarenClean"
              width={isMobile && !isOpen ? 50 : 232}
              height={isMobile && !isOpen ? 50 : 58.34}
              priority
              className={side.logoImage}
              style={{
                width: isMobile && !isOpen ? "50px" : "auto",
                height: isMobile && !isOpen ? "50px" : "auto",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          {isOpen && <div className={side.divider} />}

          <ul className={side.navList}>
            {navItems.map((item, index) => (
              <li key={index}>
                <LinkWithLoader
                  href={item.href}
                  className={`${side.navLink} ${
                    pathname.includes(item.path) ? side.active : ""
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <span className={side.iconText}>
                    <i
                      className={`fa-${
                        item.icon.includes("table-list") ||
                        item.icon.includes("money-check") ||
                        item.icon.includes("wallet") ||
                        item.icon.includes("triangle-exclamation")
                          ? "solid"
                          : "regular"
                      } ${item.icon}`}
                      style={{
                        color: item.color,
                        marginRight: isOpen ? "12px" : "0",
                        fontSize: isMobile ? "1.2rem" : "1rem",
                      }}
                    ></i>
                    {isOpen && (
                      <span className={side.navText}>{item.text}</span>
                    )}
                  </span>
                </LinkWithLoader>
              </li>
            ))}
          </ul>

          {isOpen ? (
            <button className={side.logoutBtnn} onClick={handleLogout}>
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                style={{
                  color: "#6B7280",
                  marginRight: "12px",
                  fontSize: "1.1rem",
                }}
              ></i>
              <span className={side.navText}>Logout</span>
            </button>
          ) : (
            <button className={side.logoutBtnIcon} onClick={handleLogout}>
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                style={{ color: "#6B7280", fontSize: "1.1rem" }}
              ></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

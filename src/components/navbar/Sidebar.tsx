"use client";
import React from "react";
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

  const handleLogout = () => {
    logoutUser();
    router.push("/");
  };

  return (
    <div className={side.sidebar}>
      <div className={side.logoContainer}>
        <Image
          src="/images/bookingLogo.svg"
          alt="CarenClean"
          width={232}
          height={58.34}
          priority
          className={side.logoImage}
        />
      </div>
      <div className={side.divider} />
      <ul className={side.navList}>
        <li>
          <LinkWithLoader
            href="/Bookings/Dashboard"
            className={`${side.navLink} ${
              pathname.includes("/Bookings/Dashboard") ? side.active : ""
            }`}
          >
            <span className={side.iconText}>
              <i
                className="fa-solid fa-table-list"
                style={{ color: "#3B82F6", marginRight: "8px" }}
              ></i>
              My Booking
            </span>
          </LinkWithLoader>
        </li>

        <li>
          <LinkWithLoader
            href="/Bookings/QuoteList"
            className={`${side.navLink} ${
              pathname.includes("/Bookings/QuoteList") ? side.active : ""
            }`}
          >
            <span className={side.iconText}>
              <i
                className="fa-regular fa-rectangle-list"
                style={{ color: "#10B981", marginRight: "8px" }}
              ></i>
              My Quotes
            </span>
          </LinkWithLoader>
        </li>

        <li>
          <LinkWithLoader
            href="/Bookings/Profile"
            className={`${side.navLink} ${
              pathname.includes("/Bookings/Profile") ? side.active : ""
            }`}
          >
            <span className={side.iconText}>
              <i
                className="fa-regular fa-user"
                style={{ color: "#8B5CF6", marginRight: "8px" }}
              ></i>
              Profile
            </span>
          </LinkWithLoader>
        </li>

        <li>
          <LinkWithLoader
            href="/Bookings/PaymentMethods"
            className={`${side.navLink} ${
              pathname.includes("/Bookings/PaymentMethods") ? side.active : ""
            }`}
          >
            <span className={side.iconText}>
              <i
                className="fa-solid fa-money-check"
                style={{ color: "#F59E0B", marginRight: "8px" }}
              ></i>
              Payment Methods
            </span>
          </LinkWithLoader>
        </li>

        <li>
          <LinkWithLoader
            href="/Bookings/MyWallet"
            className={`${side.navLink} ${
              pathname.includes("/Bookings/MyWallet") ? side.active : ""
            }`}
          >
            <span className={side.iconText}>
              <i
                className="fa-solid fa-wallet"
                style={{ color: "#EF4444", marginRight: "8px" }}
              ></i>
              My Wallet
            </span>
          </LinkWithLoader>
        </li>

        <li>
          <LinkWithLoader
            href="/Bookings/Complaint"
            className={`${side.navLink} ${
              pathname.includes("/Bookings/Complaint") ? side.active : ""
            }`}
          >
            <span className={side.iconText}>
              <i
                className="fa-solid fa-triangle-exclamation"
                style={{ color: "#F97316", marginRight: "8px" }}
              ></i>
              Complaint
            </span>
          </LinkWithLoader>
        </li>

        <li>
          <LinkWithLoader
            href="/Bookings/Message"
            className={`${side.navLink} ${
              pathname.includes("/Bookings/Message") ? side.active : ""
            }`}
          >
            <span className={side.iconText}>
              {/* Option 1: Message bubbles */}
              <i
                className="fa-regular fa-envelope"
                style={{ color: "#06B6D4", marginRight: "8px" }}
              ></i>
              Message
            </span>
          </LinkWithLoader>
        </li>
      </ul>

      <button className={side.logoutBtnn} onClick={handleLogout}>
        <i
          className="fa-solid fa-arrow-right-from-bracket"
          style={{ color: "#6B7280", marginRight: "8px" }}
        ></i>
        Logout
      </button>
    </div>
  );
}
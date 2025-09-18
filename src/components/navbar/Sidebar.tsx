"use client";
import React from "react";
import side from "./styles/sidebar.module.css";
import Image from "next/image";
import LinkWithLoader from "@/components/Loader/Link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // ✅ Import your auth context

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logoutUser } = useAuth(); // ✅ Access logoutUser from context

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
              <i className="fa-solid fa-table-list"></i>
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
              <i className="fa-regular fa-rectangle-list"></i>
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
              <i className="fa-regular fa-user"></i>
              Profile
            </span>
          </LinkWithLoader>
        </li>

        {/* <li>
          <LinkWithLoader href="/Bookings/Location" className={`${side.navLink} ${pathname.includes('/Bookings/Location') ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-location-dot"></i>
              Saved Locations
            </span>
          </LinkWithLoader>
        </li> */}

        <li>
          <LinkWithLoader
            href="/Bookings/PaymentMethods"
            className={`${side.navLink} ${
              pathname.includes("/Bookings/PaymentMethods") ? side.active : ""
            }`}
          >
            <span className={side.iconText}>
              <i className="fa-solid fa-money-check"></i>
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
              <i className="fa-solid fa-wallet"></i>
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
              <i className="fa-solid fa-triangle-exclamation"></i>
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
              <i className="fa-regular fa-comment"></i>
              Message
            </span>
          </LinkWithLoader>
        </li>
      </ul>
      <button className={side.logoutBtnn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

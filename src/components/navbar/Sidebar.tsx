'use client';
import React from 'react';
import side from './styles/sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className={side.sidebar}>
      <div className={side.logoContainer}>
        <Image
          src="/images/carelogo.svg"
          alt="CarenClean"
          width={78.71}
          height={58.34}
        />
      </div>
      <div className={side.divider} />
      <ul className={side.navList}>

        <li>
          <Link href="/Bookings/Dashboard" className={`${side.navLink} ${pathname === '/Signup' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-table-list"></i>
              My Booking
            </span>
          </Link>
        </li>

        <li>
          <Link href="/GetAquote" className={`${side.navLink} ${pathname === '/Quotes' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-regular fa-rectangle-list"></i>
              My Quotes
            </span>
          </Link>
        </li> 
         <li>
        <Link href="/Bookings/Profile" className={`${side.navLink} ${pathname === '/Profile' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-regular fa-user"></i>
              Profile
            </span>
          </Link>
        </li>

        <li>
          <Link href="/Bookings/Location" className={`${side.navLink} ${pathname === '/Locations' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-location-dot"></i>
              Saved Locations
            </span>
          </Link>
        </li>

        <li>
          <Link href="/Bookings/PaymentMethods" className={`${side.navLink} ${pathname === '/Payments' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-money-check"></i>
              Payment Methods
            </span>
          </Link>
        </li>

        <li>
          <Link href="/Bookings/MyWallet" className={`${side.navLink} ${pathname === '/Wallet' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-wallet"></i>
              My Wallet
            </span>
          </Link>
          {/* <Link href="/Bookings" className={`${side.navLink} ${pathname === '/Delete' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-delete"></i>
              Delete
            </span>
          </Link> */}
        </li>
</ul>
       <button className={side.logoutBtnn}>Logout</button>
       {/* <Link href="Login" className={side.logoutBtnn}>Logout</Link> */}
    </div >
  );
}

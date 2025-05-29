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
          <Link href="/" className={`${side.navLink} ${pathname === '/' ? side.active : ''}`}>
            <span className={side.iconText}><i className="fa-solid fa-plus"></i>
              Add a Booking
            </span>
          </Link>
        </li>


        <li>
          <Link href="/Signup" className={`${side.navLink} ${pathname === '/Signup' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-table-list"></i>
              My Booking
            </span>
          </Link>
        </li>

        <li>
          <Link href="/Quotes" className={`${side.navLink} ${pathname === '/Quotes' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-regular fa-rectangle-list"></i>
              My Quotes
            </span>
          </Link>
        </li>

        <li>
          <Link href="/Locations" className={`${side.navLink} ${pathname === '/Locations' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-location-dot"></i>
              Saved Locations
            </span>
          </Link>
        </li>

        <li>
          <Link href="/Payments" className={`${side.navLink} ${pathname === '/Payments' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-money-check"></i>
              Payment Methods
            </span>
          </Link>
        </li>

        <li>
          <Link href="/Sidebar" className={`${side.navLink} ${pathname === '/Wallet' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-wallet"></i>
              My Wallet
            </span>
          </Link>
        </li>
</ul>
      <button className={side.logoutBtn}>Logout</button>
    </div >
  );
}

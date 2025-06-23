'use client';
import React from 'react';
import side from './styles/sidebar.module.css';
import Image from 'next/image';
import LinkWithLoader from '@/components/Loader/Link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
   const router = useRouter();
   const handleLogout = () => {
    router.push('/');
  };
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
          <LinkWithLoader href="/Bookings/Dashboard" className={`${side.navLink} ${pathname === '/Signup' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-table-list"></i>
              My Booking
            </span>
          </LinkWithLoader>
        </li>

        <li>
          <LinkWithLoader href="/Bookings/MyQuotes" className={`${side.navLink} ${pathname === '/myQuote' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-regular fa-rectangle-list"></i>
              My Quotes
            </span>
          </LinkWithLoader>
        </li>
        <li>
          <LinkWithLoader href="/Bookings/Profile" className={`${side.navLink} ${pathname === '/Profile' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-regular fa-user"></i>
              Profile
            </span>
          </LinkWithLoader>
        </li>

        <li>
          <LinkWithLoader href="/Bookings/Location" className={`${side.navLink} ${pathname === '/Locations' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-location-dot"></i>
              Saved Locations
            </span>
          </LinkWithLoader>
        </li>

        <li>
          <LinkWithLoader href="/Bookings/PaymentMethods" className={`${side.navLink} ${pathname === '/Payments' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-money-check"></i>
              Payment Methods
            </span>
          </LinkWithLoader>
        </li>

        <li>
          <LinkWithLoader href="/Bookings/MyWallet" className={`${side.navLink} ${pathname === '/Wallet' ? side.active : ''}`}>
            <span className={side.iconText}>
              <i className="fa-solid fa-wallet"></i>
              My Wallet
            </span>
          </LinkWithLoader>
        </li>
      </ul>
      <button className={side.logoutBtnn} onClick={handleLogout}>Logout</button>
    </div >
  );
}

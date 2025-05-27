'use client';
import React from 'react';
import { useState } from 'react';
import side from './styles/sidebar.module.css';
import Image from 'next/image';


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={side.toggleBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      <aside className={`${side.sidebar} ${isOpen ? side.open : ''}`}>

        <nav>
          <ul className={side.navList}>
            {/* logo */}
                
                    <Image
                        src="/images/carelogo.svg"
                        alt="CarenClean"
                        width={73}
                        height={57}
                    />
                
            <li><a href="#">My Booking</a></li>
            <li><a href="#">My Quotes</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Saved Locations</a></li>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">My Wallet</a></li>
            <li><a href="#">Delete Account</a></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

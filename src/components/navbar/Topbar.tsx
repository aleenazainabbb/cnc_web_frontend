"use client";
import React, { useEffect, useState } from "react";
import LinkWithLoader from "@/components/Loader/Link";
import styles from "./styles/HeaderBar.module.css";

const TopBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check token in localStorage (modify if using cookies)
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear session
    setIsLoggedIn(false);
    window.location.reload(); // refresh to update UI
  };

  return (
    <div className="bg_green text-white py-2">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex align-items-center gap-lg-3 gap-md-3">
          <i className="fa-brands fa-facebook me-2 fs-24"></i>
          <i className="fa-solid fa-clock me-2 fs-24"></i>
          <span>Sat - Thu: 08.00am - 07.00pm </span>
        </div>

        <div className="d-flex align-items-center justify-content-between emergency_contact mt-lg-0 mg-md-0">
          <span className="text-danger fw-bold me-2 d-none d-lg-inline-block d-md-inline-block">
            24H
          </span>
          <span className="d-none d-lg-inline-block d-md-inline-block">
            EMERGENCY SERVICE |
          </span>
          <a href="tel:+971525280307" className="mx-lg-2 mx-md-2 text-white">
            <i className="fa-solid fa-phone me-1"></i> 052 528 0307 |
          </a>

          {isLoggedIn ? (
            <>
              <button onClick={handleLogout} className={styles.button}>
                Logout
              </button>
              <LinkWithLoader
                href="/Bookings/Dashboard"
                className={styles.button}
              >
                Go to Dashboard
              </LinkWithLoader>
            </>
          ) : (
            <LinkWithLoader href="/Login" className={styles.button}>
              Login
            </LinkWithLoader>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
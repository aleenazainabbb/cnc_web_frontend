"use client";
import React from "react";
import Link from "next/link";

const TopBar: React.FC = () => { //declares a React functional component TopBar
  const scrollToSection = () => {
    const section = document.getElementById("contact_us_main");
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg_green text-white py-2">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex align-items-center gap-lg-3 gap-md-3">
          <i className="fa-brands fa-facebook me-2 fs-24"></i>
          <i className="fa-solid fa-clock me-2 fs-24"></i>
          <span>Sat - Thu: 08.00am - 07.00pm</span>
        </div>
        <div className="d-flex align-items-center justify-content-between emergency_contact mt-2 mt-lg-0 mg-md-0">
          <span className="text-danger fw-bold me-2 d-none d-lg-inline-block d-md-inline-block">
            24H
          </span>
          <span className="d-none d-lg-inline-block d-md-inline-block">
            EMERGENCY SERVICE |
          </span>
          <a href="tel:+971525280307" className="mx-lg-2 mx-md-2 text-white">
              <i className="fa-solid fa-phone me-1"></i> 052 528 0307 |
          </a>
          <Link href="Login" className="mx-lg-2 mx-md-2 text-white">
             Login
          </Link>


          {/* <button
            onClick={scrollToSection}
            className="btn header_btn btn-light ms-3 fw-600 text_green"
          >
            Contact Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;

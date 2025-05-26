"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link href="/home" className="navbar-brand">
          <Image
            src="/images/carelogo.svg"
            alt="CarenClean"
            width={40}
            height={40}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link be-vietnam-pro-regular active text-success"
              >
                HOME
              </Link>
            </li>

            <li className="nav-item">
                <Link href="BookAservicePage" className="nav-link be-vietnam-pro-regular">
                  BookAService
                </Link>
              </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link be-vietnam-pro-regular dropdown-toggle"
                href="#"
                id="maintenanceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MAINTENANCE
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="maintenanceDropdown"
              >
                <li>
                  <Link
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 2
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="CleaningServicePage" className="nav-link be-vietnam-pro-regular">
                CLEANING SERVICES
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link be-vietnam-pro-regular dropdown-toggle"
                href="#"
                id="cleaningDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CLEANING SERVICES
              </a>
              <ul className="dropdown-menu" aria-labelledby="cleaningDropdown">
                <li>
                  <Link
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 2
                  </Link>
                </li>
              </ul>
            </li> */}

            <li className="nav-item dropdown">
              <a
                className="nav-link be-vietnam-pro-regular dropdown-toggle"
                href="#"
                id="movingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MOVING
              </a>
              <ul className="dropdown-menu" aria-labelledby="movingDropdown">
                <li>
                  <Link
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link be-vietnam-pro-regular dropdown-toggle"
                href="#"
                id="pestDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PEST CONTROL
              </a>
              <ul className="dropdown-menu" aria-labelledby="pestDropdown">
                <li>
                  <Link
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link be-vietnam-pro-regular dropdown-toggle"
                href="#"
                id="disinfectionDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                DISINFECTION 
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="disinfectionDropdown"
              >
                <li>
                  <Link
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 2
                  </Link>
                </li>
              </ul>

              

            </li>
          </ul>


          <Link
            href="GetAquote"
            className="btn bg_green header_btn text-white headerBtn_green"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

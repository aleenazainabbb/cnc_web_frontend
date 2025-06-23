"use client";
import React from "react";
import LinkWithLoader from '@/components/Loader/Link';
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <LinkWithLoader href="/home" className="navbar-brand">
          <Image
            src="/images/carelogo.svg"
            alt="CarenClean"
            width={40}
            height={40}
          />
        </LinkWithLoader>
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
              <LinkWithLoader
                href="/"
                className="nav-link be-vietnam-pro-regular active text-success"
              >
                HOME
              </LinkWithLoader>
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
                  <LinkWithLoader
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 1
                  </LinkWithLoader>
                </li>
                <li>
                  <LinkWithLoader
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 2
                  </LinkWithLoader>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <LinkWithLoader href="CleaningServicePage" className="nav-link be-vietnam-pro-regular">
                CLEANING SERVICES
              </LinkWithLoader>
            </li>   
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
                  <LinkWithLoader
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 1
                  </LinkWithLoader>
                </li>
                <li>
                  <LinkWithLoader
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 2
                  </LinkWithLoader>
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
                  <LinkWithLoader
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 1
                  </LinkWithLoader>
                </li>
                <li>
                  <LinkWithLoader
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 2
                  </LinkWithLoader>
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
                  <LinkWithLoader
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 1
                  </LinkWithLoader>
                </li>
                <li>
                  <LinkWithLoader
                    href="#"
                    className="dropdown-item be-vietnam-pro-regular"
                  >
                    Service 2
                  </LinkWithLoader>
                </li>
              </ul>
            </li>
          </ul>
          <LinkWithLoader
            href="GetAquote"
            className="btn bg_green header_btn text-white headerBtn_green">
            Get a quote
          </LinkWithLoader>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

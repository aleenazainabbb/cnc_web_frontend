"use client";

import React, { useEffect, useState } from "react";
import LinkWithLoader from "@/components/Loader/Link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [movingOpen, setMovingOpen] = useState(false);
  const [cleaningOpen, setCleaningOpen] = useState(false);
  const [maintenanceOpen, setMaintenanceOpen] = useState(false);
  const [pestOpen, setPestOpen] = useState(false);
  const pathname = usePathname();

  const handleDropdownLeave = () => {
    setTimeout(() => {
      setMovingOpen(false);
      setCleaningOpen(false);
      setMaintenanceOpen(false);
      setPestOpen(false);
    }, 200);
  };

  useEffect(() => {
    setMovingOpen(false);
    setCleaningOpen(false);
    setMaintenanceOpen(false);
    setPestOpen(false);
  }, [pathname]);

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
               className={`nav-link be-vietnam-pro-regular home-link ${pathname === "/" ? "active-link" : ""}`}
              >
                HOME
              </LinkWithLoader>
            </li>

            {/* MAINTENANCE */}
            <li
              className={`nav-item dropdown ${maintenanceOpen ? "show" : ""}`}
              onMouseEnter={() => setMaintenanceOpen(true)}
              onMouseLeave={handleDropdownLeave}
            >
              <LinkWithLoader
                href="/AllServices/MaintenanceServices"
                className={`nav-link be-vietnam-pro-regular dropdown-toggle moving-link ${pathname.startsWith("/AllServices/MaintenanceServices") ? "active-link" : ""}`}
                id="maintenanceDropdown"
                role="button"
              >
                MAINTENANCE
              </LinkWithLoader>
              <ul
                className={`dropdown-menu ${maintenanceOpen ? "show" : ""}`}
                aria-labelledby="maintenanceDropdown"
              >
                {[
                  "Plumbing Services",
                  "Landscaping Services",
                  "Carpentry Services",
                  "AC Maintenance Services",
                  "Electrical Services",
                  "Handyman Services",
                  "Painting Services",
                ].map((service, i) => (
                  <li key={i}>
                    <LinkWithLoader
                      href="#"
                      className="dropdown-item be-vietnam-pro-regular dropdown-link"
                      onClick={() => setMaintenanceOpen(false)}
                    >
                      {service}
                    </LinkWithLoader>
                  </li>
                ))}
              </ul>
            </li>

            {/* CLEANING */}
            <li
              className={`nav-item dropdown ${cleaningOpen ? "show" : ""}`}
              onMouseEnter={() => setCleaningOpen(true)}
              onMouseLeave={handleDropdownLeave}
            >
              <LinkWithLoader
                href="/AllServices/CleaningServices"
                className={`nav-link be-vietnam-pro-regular dropdown-toggle moving-link ${pathname.startsWith("/AllServices/CleaningServices") ? "active-link" : ""}`}
                id="cleaningDropdown"
                role="button"
              >
                CLEANING
              </LinkWithLoader>
              <ul
                className={`dropdown-menu ${cleaningOpen ? "show" : ""}`}
                aria-labelledby="cleaningDropdown"
              >
                {[
                  "Deep Cleaning",
                  "Grease Trap",
                  "Chandelier Cleaning",
                  "Swimming Pool Cleaning",
                  "Vehicle Cleaning",
                  "Upholstery Cleaning",
                  "Duct Cleaning",
                  "Windows Cleaning",
                  "Maid Cleaning",
                ].map((service, i) => (
                  <li key={i}>
                    <LinkWithLoader
                      href="#"
                      className="dropdown-item be-vietnam-pro-regular dropdown-link"
                      onClick={() => setCleaningOpen(false)}
                    >
                      {service}
                    </LinkWithLoader>
                  </li>
                ))}
              </ul>
            </li>

            {/* MOVING */}
            <li
              className={`nav-item dropdown ${movingOpen ? "show" : ""}`}
              onMouseEnter={() => setMovingOpen(true)}
              onMouseLeave={handleDropdownLeave}
            >
              <LinkWithLoader
                href="/AllServices/MovingServices"
                className={`nav-link be-vietnam-pro-regular dropdown-toggle moving-link ${pathname.startsWith("/AllServices/MovingServices") ? "active-link" : ""}`}
                id="movingDropdown"
                role="button"
              >
                MOVING
              </LinkWithLoader>
              <ul
                className={`dropdown-menu ${movingOpen ? "show" : ""}`}
                aria-labelledby="movingDropdown"
              >
                {[
                  "Local Moving",
                  "Storage Services",
                  "International Moving",
                ].map((service, i) => (
                  <li key={i}>
                    <LinkWithLoader
                      href="#"
                      className="dropdown-item be-vietnam-pro-regular dropdown-link "
                      onClick={() => setMovingOpen(false)}
                    >
                      {service}
                    </LinkWithLoader>
                  </li>
                ))}
              </ul>
            </li>

            {/* PEST CONTROL */}
            <li
              className={`nav-item dropdown ${pestOpen ? "show" : ""}`}
              onMouseEnter={() => setPestOpen(true)}
              onMouseLeave={handleDropdownLeave}
            >
              <LinkWithLoader
                href="/AllServices/PestControl"
                className={`nav-link be-vietnam-pro-regular dropdown-toggle moving-link ${pathname.startsWith("/AllServices/PestControl") ? "active-link" : ""}`}
                id="pestDropdown"
                role="button"
              >
                PEST CONTROL
              </LinkWithLoader>
              <ul
                className={`dropdown-menu ${pestOpen ? "show" : ""}`}
                aria-labelledby="pestDropdown"
              >
                {[
                  "Pigeons & Birds Control",
                  "Rats & Rodents Control",
                  "Termites Control",
                  "Bees & Wasps Control",
                  "Ants & Insects Control",
                  "Flees & Ticks Control",
                  "Bed Bugs Control",
                  "Cockroach Control",
                ].map((service, i) => (
                  <li key={i}>
                    <LinkWithLoader
                      href="#"
                      className="dropdown-item be-vietnam-pro-regular dropdown-link"
                      onClick={() => setPestOpen(false)}
                    >
                      {service}
                    </LinkWithLoader>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <LinkWithLoader
            href="GetAquote"
            className="btn bg_green header_btn text-white headerBtn_green"
          >
            Get a quote
          </LinkWithLoader>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

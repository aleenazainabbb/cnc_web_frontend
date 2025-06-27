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
                className={`nav-link be-vietnam-pro-regular dropdown-toggle moving-link ${pathname.startsWith("/AllServices/MaintenanceServices") ? "active-link" : ""
                  }`}
                id="maintenanceDropdown"
                role="button"
              >
                MAINTENANCE
              </LinkWithLoader>

              <ul className={`dropdown-menu ${maintenanceOpen ? "show" : ""}`} aria-labelledby="maintenanceDropdown">
                {[
                  { name: "Plumbing Services", path: "/AllServices/MaintenanceServices/Plumbing" },
                  { name: "Landscaping Services", path: "/AllServices/MaintenanceServices/Landscaping" },
                  { name: "Carpentry Services", path: "/AllServices/MaintenanceServices/Carpentry" },
                  { name: "AC Maintenance Services", path: "/AllServices/MaintenanceServices/ACmaintenance" },
                  { name: "Electrical Services", path: "/AllServices/MaintenanceServices/Electrical" },
                  { name: "Handyman Services", path: "/AllServices/MaintenanceServices/Handyman" },
                  { name: "Painting Services", path: "/AllServices/MaintenanceServices/Painting" },
                ].map(({ name, path }) => (
                  <li key={name}>
                    <LinkWithLoader
                      href={path}
                      className="dropdown-item be-vietnam-pro-regular dropdown-link"
                      onClick={() => setMaintenanceOpen(false)}
                    >
                      {name}
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
                className={`nav-link be-vietnam-pro-regular dropdown-toggle moving-link ${pathname.startsWith("/AllServices/CleaningServices") ? "active-link" : ""
                  }`}
                id="cleaningDropdown"
                role="button"
              >
                CLEANING
              </LinkWithLoader>

              <ul className={`dropdown-menu ${cleaningOpen ? "show" : ""}`} aria-labelledby="cleaningDropdown">
                {[
                  { name: "Deep Cleaning", path: "/AllServices/CleaningServices/DeepCleaning" },
                  { name: "Grease Trap", path: "/AllServices/CleaningServices/GreaseTrap" },
                  { name: "Chandelier Cleaning", path: "/AllServices/CleaningServices/Chandelier" },
                  { name: "Swimming Pool Cleaning", path: "/AllServices/CleaningServices/SwimmingPool" },
                  { name: "Vehicle Cleaning", path: "/AllServices/CleaningServices/Vehicle" },
                  { name: "Upholstery Cleaning", path: "/AllServices/CleaningServices/UpholsteryCleaning" },
                  { name: "Duct Cleaning", path: "/AllServices/CleaningServices/Duct" },
                  { name: "Windows Cleaning", path: "/AllServices/CleaningServices/Windows" },
                  { name: "Maid Services", path: "/AllServices/CleaningServices/Maid" },
                ].map(({ name, path }) => (
                  <li key={name}>
                    <LinkWithLoader
                      href={path}
                      className="dropdown-item be-vietnam-pro-regular dropdown-link"
                      onClick={() => setCleaningOpen(false)}
                    >
                      {name}
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
                className={`nav-link be-vietnam-pro-regular dropdown-toggle moving-link ${pathname.startsWith("/AllServices/MovingServices") ? "active-link" : ""
                  }`}
                id="movingDropdown"
                role="button"
              >
                MOVING
              </LinkWithLoader>

              <ul className={`dropdown-menu ${movingOpen ? "show" : ""}`} aria-labelledby="movingDropdown">
                {[
                  { name: "Local Moving", path: "/AllServices/MovingServices/Local" },
                  { name: "Storage Service", path: "/AllServices/MovingServices/Storage" },
                  { name: "International Moving", path: "/AllServices/MovingServices/International" },
                ].map(({ name, path }) => (
                  <li key={name}>
                    <LinkWithLoader
                      href={path}
                      className="dropdown-item be-vietnam-pro-regular dropdown-link"
                      onClick={() => setMovingOpen(false)}
                    >
                      {name}
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
                className={`nav-link be-vietnam-pro-regular dropdown-toggle moving-link ${pathname.startsWith("/AllServices/PestControl") ? "active-link" : ""
                  }`}
                id="pestDropdown"
                role="button"
              >
                PEST CONTROL
              </LinkWithLoader>

              <ul className={`dropdown-menu ${pestOpen ? "show" : ""}`} aria-labelledby="pestDropdown">
                {[
                  { name: "Pigeons & Birds Control", path: "/AllServices/PestControl/Pigeons&Birds" },
                  { name: "Rats & Rodents Control", path: "/AllServices/PestControl/Rats&Rodents" },
                  { name: "Termites Control", path: "/AllServices/PestControl/Termites" },
                  { name: "Bees & Wasps Control", path: "/AllServices/PestControl/Bees&Wasps" },
                  { name: "Ants & Insects Control", path: "/AllServices/PestControl/Ants&Insects" },
                  { name: "Fleas & Ticks Control", path: "/AllServices/PestControl/Fleas&Ticks" },
                  { name: "Bed Bugs Control", path: "/AllServices/PestControl/BedBugs" },
                  { name: "Cockroach Control", path: "/AllServices/PestControl/Cockroach" },
                ].map(({ name, path }) => (
                  <li key={name}>
                    <LinkWithLoader
                      href={path}
                      className="dropdown-item be-vietnam-pro-regular dropdown-link"
                      onClick={() => setPestOpen(false)}
                    >
                      {name}
                    </LinkWithLoader>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <LinkWithLoader
            href="/GetAquote"
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

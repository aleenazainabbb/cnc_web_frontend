import React from "react";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
  return (
    <div className="w-full bg-[#36B864] text-white text-sm py-3 px-4 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Time and day */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} className="text-white w-[20px] h-[20px]" />
          <span className="text-[16px] font-medium left-98" style={{ fontFamily: "Be Vietnam Pro" }}>
            Sat - Thu: 08.00am - 07.00pm
          </span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

          {/* Emergency Service */}
          <div className="flex items-center text-[13px] font-medium" style={{ fontFamily: "Poppins" }}>
            <span className="text-[#EF4444] mr-1">24H</span>EMERGENCY SERVICE
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-white" />

          {/* Phone */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhoneVolume} className="w-[16px] h-[16px] text-white" />
            <span className="text-[16px] font-black" style={{ fontFamily: "Roboto" }}>
              052 528 0307
            </span>
          </div>

          {/* Contact Button */}
          <button className="w-full sm:w-[159px] h-[40px] bg-white text-[#36B864] rounded-[6px] font-semibold text-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
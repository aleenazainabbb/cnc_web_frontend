import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
  return (
    <div className="w-full bg-[#36B864] text-white text-sm h-auto py-3 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

        {/* Left: Time and day */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faClock} className="absolute left-[98px] text-white text-[20px] w-[24px] h-[24px]" />
          <span
            className="absolute left-[142px] w-[248px] h-[20px] text-[16px] font-medium leading-[100%] text-white" style={{ fontFamily: "Be Vietnam Pro" }}
          >
            Mon - Thu: 10:00am - 07:00pm
          </span>
        </div>

        {/* Right: Emergency, Phone, Contact Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Emergency Service */}
          <div
            className="absolute top-[21px] left-[887px] w-[162px] h-[20px] text-[13px] font-medium leading-[100%] tracking-[0%] whitespace-nowrap text-white flex items-center"
            style={{ fontFamily: "Poppins" }}
          >
            <span className="text-[#EF4444] mr-1">24H</span>EMERGENCY SERVICE
          </div>


          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-white"></div>

          {/* Phone Icon and Number */}
          <div className="flex items-center space-x-2">
            <BsFillTelephoneFill className="w-[16px] h-[16px] text-white border border-white p-[1px] rounded-full" />
            <span className="text-[16px] font-black text-center align-middle" style={{ fontFamily: "Roboto" }}>
              052 528 0307
            </span>
          </div>

          {/* Contact Us Button */}
          <button className="w-full sm:w-[159px] h-[48px] bg-white text-[#36B864] rounded-[6px] font-semibold text-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

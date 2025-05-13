import React from "react";
import { FaUserTie, FaCalendarAlt, FaHeadset, FaSmile, FaShieldAlt } from "react-icons/fa";
import { MdMasks } from "react-icons/md";

const features = [
  { icon: <FaUserTie size={52} />, label: "Trained Experts" },
  { icon: <FaCalendarAlt size={52} />, label: "Quick Booking" },
  { icon: <MdMasks size={52} />, label: "Safety Measures" },
  { icon: <FaHeadset size={52} />, label: "Live Support" },
  { icon: <FaSmile size={52} />, label: "Satisfaction" },
  { icon: <FaShieldAlt size={52} />, label: "Guaranteed" },
];

const FeatureBar = () => {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div
        className="w-[1276px] h-[217px] relative rounded-[46px] overflow-hidden shadow-md px-4 py-8"
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Mask.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // opacity: 0.65,
          }}
        ></div>

        {/* Overlay Color Layer */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: "#398950", // Your desired color
            opacity: 0.85, // Adjust opacity to blend with the image
          }}
        ></div>

        {/* Content Layer */}
       <div className="relative z-20 flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-white text-center h-full md:px-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1 min-w-[120px]">
              <div className="mb-4">{item.icon}</div>
              <span
                className="mt-2 font-[700] text-[18px] leading-[100%] tracking-[0%] text-center"
                style={{ fontFamily: "Be Vietnam Pro", color: "#FFFFFF" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;

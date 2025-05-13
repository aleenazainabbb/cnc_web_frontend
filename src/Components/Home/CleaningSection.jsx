import React from "react";

const CleaningSection = () => {
  return (
    <div className="w-full bg-white flex justify-center py-10">
      <div className="w-[1440px] h-[571px] flex items-center justify-center px-8">
        {/* Left Content */}
        <div className="max-w-xl">
          <h4 className="text-[#1E1E1E] text-sm font-semibold mb-2">About Us</h4>
          <h2 className="text-[36px] text-[#111D15] font-bold leading-tight mb-4">
            Book a Reliable Home <br /> Cleaning Service Now
          </h2>
          <p className="text-[#444] text-base leading-6 mb-6">
            Care n Clean offers professional housekeeping and maintenance
            services, including laundry, ironing, disinfecting, and sanitizing. Our
            eco-friendly solutions cater to both residential and commercial
            needs with a simple booking process. Our skilled team includes
            plumbers, handymen, carpenters, electricians, painters, tillers, and
            AC technicians, ensuring all your home and business needs are
            covered. Spend your time on what you love while we handle the rest.
          </p>
          <button className="bg-[#2EBD85] text-white font-medium py-2 px-6 rounded-md">
            Book a Services
          </button>
        </div>

        {/* Right Images */}
        <div className="relative w-[478px] h-[421px]">
          <img
            src="CleaningService/Cleaning Service 1.png"
            alt="Cleaning Service 1"
            className="absolute top-0 right-0 w-[300px] h-[250px] object-cover rounded-[20px] shadow-lg"
          />
          <img
            src="CleaningService/Cleaning Service 2.png"
            alt="Cleaning Service 2"
            className="absolute bottom-0 left-0 w-[250px] h-[220px] object-cover rounded-[20px] shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CleaningSection;
import React from "react";

const achievements = [
  { src: "/Achievement/achievement1.png", alt: "Elite Service" },
  { src: "/Achievement/achievement2.png", alt: "Top Rated" },
  { src: "/Achievement/achievement3.png", alt: "ISO 9001" },
  { src: "/Achievement/achievement4.png", alt: "ISO 14001" },
  { src: "/Achievement/achievement5.png", alt: "ISO 45001" },
];

const AchievementsBar = () => {
  return (
    <div className="w-full flex justify-center px-4 bg-[#FFFFFF] py-12" >
        

      <div className="w-full max-w-[1276px] text-center text-white">
        
        <h2
          className="text-[40px] text-[#111D15] font-[700] leading-[56px] mb-4"
          style={{ fontFamily: "Be Vietnam Pro" }}
        >
          Our Achievements
        </h2>
        <p
          className="text-[16px] text-[#111D15] font-[500] leading-[22px] mb-10 mx-auto max-w-2xl"
          style={{ fontFamily: "Be Vietnam Pro" }}
        >
          We take pride in being acknowledged for our dedication to innovation, quality, and service.
          Our certifications and awards showcase the trust and recognition we’ve earned globally.
        </p>
        <div className="flex flex-wrap justify-center gap-16">
          {achievements.map((item, index) => (
            <div key={index} className="flex justify-center items-center w-[132px] h-[136px]">
              <img
                src={item.src}
                alt={item.alt}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsBar;
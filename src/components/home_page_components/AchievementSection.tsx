import React from "react";
import Image from "next/image";

const AchievementSection: React.FC = () => {
  const achievements = [
    "/images/ach-1.png",
    "/images/ach-2.png",
    "/images/ach-3.png",
    "/images/ach-4.png",
    "/images/ach-5.png",
  ];

  return (
    <div className="container pb-lg-5 pb-md-5 pb-3">
      <div className="col-12">
        <div className="achievement_content text-center">
          <h2 className="be-vietnam-pro-bold">Our Achievements</h2>
          <p className="be-vietnam-pro-medium">
            We take pride in being acknowledged for our dedication to
            innovation, quality, and service. Our certifications and awards
            showcase the trust and recognition we’ve earned globally.
          </p>
        </div>
      </div>
      <div className="row align-items-center text-center my-lg-5 my-md-5">
        {achievements.map((src, index) => (
          <div key={index} className="col col-lg col-md mt-4 mt-lg-0 mt-md-0">
            <div className="achievement_card">
              <Image
                src={src}
                alt="Achievement Image"
                className="img-fluid"
                width={175}
                height={195}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;

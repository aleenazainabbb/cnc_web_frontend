import React from "react";

// using public folder
const steps = [
  {
    id: 1,
    title: "Book Service Online",
    image: "StepsToClean/s1.png",
  },
  {
    id: 2,
    title: "Wait till Completion",
    image: "StepsToClean/s2.png",
  },
  {
    id: 3,
    title: "Enjoy the Cleaning",
    image: "StepsToClean/s3.png",
  },
];

const StepsToClean = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 bg-white font-[Cairo]">
      <div className="flex gap-16 justify-center flex-wrap">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <div className="relative w-[240px] h-[240px] rounded-full overflow-hidden">
              <img
                src={step.image}
                alt={`Step ${step.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#2EBD85] text-white text-xs flex items-center justify-center rounded-full shadow-md">
                {step.id}
              </div>
            </div>
            <p className="mt-6 text-[24px] font-bold text-[#1E1E1E] leading-none">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsToClean;
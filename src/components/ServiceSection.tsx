import React from "react";
import Image from "next/image";

const ServiceSection: React.FC = () => {
  const services = [
    { src: "/images/service-1.png", title: "Trained Experts" },
    { src: "/images/service-2.png", title: "Quick Booking" },
    { src: "/images/service-3.png", title: "Safety Measures" },
    { src: "/images/service-4.png", title: "Live Support" },
    { src: "/images/service-5.png", title: "Satisfaction" },
    { src: "/images/service-6.png", title: "Guaranteed" },
  ];

  return (
    <div className="container" >
      <div className="service_main my-5">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-6 col-lg-2 col-md-2 my-3 my-lg-0 my-md-0"
            >
              <div className="service_main_content text-center">
                <Image
                  src={service.src}
                  alt="Service Image"
                  className="img-fluid-service"
                  width={52}
                  height={52}
                />
                <p className="be-vietnam-pro-bold text-white mt-4">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

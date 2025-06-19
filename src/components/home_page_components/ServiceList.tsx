"use client";

import React from "react";
import Image from "next/image";

const serviceMethods = [
  { src: "/images/about-us-1.png", title: "Book Service Online", number: 1 },
  { src: "/images/about-us-2.png", title: "Wait till Completion", number: 2 },
  { src: "/images/about-us-3.png", title: "Enjoy the Cleaning", number: 3 },
];

const ServiceStepsSection: React.FC = () => {
  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 py-lg-5 py-md-5 service_method">
        {serviceMethods.map((method) => (
          <div
            key={method.number}
            className="col-4 col-lg-4 col-md-4 mb-4 mb-lg-0 mb-md-0"
          >
            <div className="text-center service_method_card">
              <div className="position-relative d-inline-block">
                <Image
                  src={method.src}
                  alt="About Image"
                  className="img-fluid"
                  width={150}
                  height={150}
                />
                <span className="bg_green text-white d-flex align-items-center justify-content-center fs-24">
                  {method.number}
                </span>
              </div>
              <p className="be-vietnam-pro-bold mt-4 fs-24">{method.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStepsSection;

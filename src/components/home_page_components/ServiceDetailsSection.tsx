"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceDetailsSection: React.FC = () => {
  const serviceMethods = [
    { src: "/images/about-us-1.png", title: "Book Service Online", number: 1 },
    { src: "/images/about-us-2.png", title: "Wait till Completion", number: 2 },
    { src: "/images/about-us-3.png", title: "Enjoy the Cleaning", number: 3 },
  ];

  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
        <div className="col-12 col-lg-6 col-md-6">
          <div className="service_details_content">
            <p className="be-vietnam-pro-regular">About Us</p>
            <h2 className="be-vietnam-pro-semibold mt-2 mb-4">
              Book a Reliable Home Cleaning Service Now
            </h2>
            <p className="be-vietnam-pro-regular text-justify">
              Care n Clean offers professional housekeeping and maintenance
              services, including laundry, ironing, disinfecting, and
              sanitizing. Our eco-friendly solutions cater to both residential
              and commercial needs with a simple booking process. Our skilled
              team includes plumbers, handymen, carpenters, electricians,
              painters, tillers, and AC technicians, ensuring all your home and
              business needs are covered. Spend your time on what you love while
              we handle the rest.
            </p>
            <Link href="/book" className="bg_green text-white about_btn mt-3">
              Book a Services
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6">
          <div className="d-inline-block position-relative float-end mt-4 mt-lg-0 mt-md-0">
            <Image
              src="/images/about-us.jpg"
              alt="Main Image"
              className="main-image"
              width={378} // Adjust based on your image size
              height={379}
              style={{borderRadius: "20px",borderTop: "10px", borderRight:"10px"}} // Adjust position as needed
            />
            <Image
              src="/images/about-us-0.png"
              alt="Overlay Image"
              className="overlay-image"
              width={231} // Adjust based on your image size
              height={265}
              style={{ border: "10px", borderRadius: "36px" }} // Adjust position as needed
            />
          </div>
        </div>
      </div>
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
                  width={150} // Adjust based on your image size
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

export default ServiceDetailsSection;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesSliderSection: React.FC = () => {
  const services = [
    { title: "Office Cleaning", img: "/images/ServiceSliderSection/office.png" },
    { title: "Spring Cleaning", img: "/images/ServiceSliderSection/spring.png" },
    { title: "House Cleaning", img: "/images/ServiceSliderSection/house.png" },
  ];

  return (
    <div className="container">
      <div className="row service_border pb-lg-4 gy-10">
        <div className="col-12 col-lg-6 col-md-6">
          <div className="services_heading">
            <h2 className="be-vietnam-pro-semibold">
              YOUR <span className="text_green">#1</span> CHOICE FOR HOME
              CLEANING SERVICE
            </h2>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6 ms-auto">
          <div className="services_rightSection pb-3 pb-lg-0 pb-md-0 text-start">
            <p className="be-vietnam-pro-semibold">Services</p>
            <p className="be-vietnam-pro-regular" style={{ color: "#666666" }}>
              We treat your home as our own. With Care n Clean, a pristine home
              is just a few clicks away. Visit us for reliable cleaning services
              and enjoy peace of mind.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-8 mt-3 mt-md-5 service_slider">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-4 px-4">
              <div className="service_card">
                <div className="w-100">
                  <Image
                    src={service.img}
                    alt={service.title}
                    className="w-100 h-auto rounded"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>

                <p className="fs-24 be-vietnam-pro-semibold my-3 text-start">
                  {service.title}
                </p>
                <p
                  className="be-vietnam-pro-regular mb-3 text-start"
                  style={{ color: "#666666" }}
                >
                  While we can customize your cleaning plan to suit your needs,
                  most clients schedule regular cleaning services:
                </p>
                <Link
                  href="/book"
                  className="d-inline-block fw-24 be-vietnam-pro-semibold slider_btn"
                >
                  Book Now{" "}
                  <i
                    className="fa-solid fa-arrow-right-long"
                    style={{ color: "#9D9D9D" }}
                  ></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSliderSection;

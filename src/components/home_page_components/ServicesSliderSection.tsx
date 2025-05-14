"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const ServicesSliderSection: React.FC = () => {
  const services = [
    { title: "Office Cleaning", img: "/images/ServiceSliderSection/office.png" },
    { title: "Spring Cleaning", img: "/images/ServiceSliderSection/spring.png" },
    { title: "House Cleaning", img: "/images/ServiceSliderSection/house.png" },
    // { title: "Office Cleaning", img: "/images/about-us.jpg" },
    // { title: "Spring Cleaning", img: "/images/about-us.jpg" },
    // { title: "House Cleaning", img: "/images/about-us.jpg" },
  ];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container">
      <div className="row service_border pb-lg-4">
        <div className="col-12 col-lg-6 col-md-6">
          <div className="services_heading">
            <h2 className="be-vietnam-pro-semibold">
              YOUR <span className="text_green">#1</span> CHOICE FOR HOME
              CLEANING SERVICE
            </h2>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6">
          <div className="services_rightSection pb-3 pb-lg-0 pb-md-0">
            <p className="be-vietnam-pro-semibold">Services</p>
            <p className="be-vietnam-pro-regular">
              We treat your home as our own. With Care n Clean, a pristine home
              is just a few clicks away. Visit us for reliable cleaning services
              and enjoy peace of mind.
            </p>
          </div>
        </div>
      </div>
      <div className="slider-container mt-3 mt-lg-5 mt-md-5 service_slider">
        <Slider {...settings} className="slider slider-main">
          {services.map((service, index) => (
            <div key={index}>
              <div className="service_card">
                <Image
                  src={service.img}
                  alt={service.title}
                  className="img-fluid"
                  width={300} // Adjust based on your image size
                  height={200}
                />
                <p className="fs-24 be-vietnam-pro-semibold my-3">
                  {service.title}
                </p>
                <p className="be-vietnam-pro-regular mb-3">
                  While we can customize your cleaning plan to suit your needs,
                  most clients schedule regular cleaning services:
                </p>
                <Link
                  href="/book"
                  className="d-inline-block fw-24 be-vietnam-pro-semibold slider_btn"
                >
                  Book Now <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesSliderSection;

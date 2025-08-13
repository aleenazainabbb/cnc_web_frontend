"use client";

import React from "react";
import Image from "next/image";
import LinkwithLoader from "@/components/Loader/Link";

const ServiceDetailsSection: React.FC = () => {
  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
        <div className="col-12 col-lg-6 col-md-6">
          <div className="service_details_content">
            <p className="be-vietnam-pro-regular-aboutus ">About Us</p>
            <h2 className="be-vietnam-pro-semibold-homepage mb-4 heading">
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
            <LinkwithLoader href="/BookAservicePage" className="about_btn-custom">
              Book a Service
            </LinkwithLoader>
          </div>
        </div>
        <div className="col-12 col-6 col-md-6 serviceDetail-sectin whycare_images">
          <div className="d-inline-block position-relative float-end mt-4 mt-lg-0 mt-md-0 custom-images">
          
            <Image
              src="/images/about-us.jpg"
              alt="Main Image"
              className="main-image-servicesection"
              width={378}
              height={379}
              style={{
                borderWidth: "10px 10px 0px 0px",
                borderStyle: "solid",
                borderColor: "#36B864",
                borderRadius: "20px"
              }}

            />
            <Image
              src="/images/about-us-0.png"
              alt="Overlay Image"
              className="overlay-image servicesection"
              width={231}
              height={265}
              style={{ border: "10px", borderRadius: "36px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSection;


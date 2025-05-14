import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhyChooseUsSection: React.FC = () => {
  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
        <div className="col-12 col-lg-6 col-md-6 mb-3 mb-lg-0 mb-md-0">
          <div className="service_details_content">
            <h2 className="be-vietnam-pro-semibold mt-2 mb-4">Why Choose Us</h2>
            <strong className="be-vietnam-pro-bold">
              We Will Make Absolutely Any Place Clean, Neat & Tidy.
            </strong>
            <p className="be-vietnam-pro-regular text-justify mt-4 mb-2 text-muted why_choose_dec">
              We, at Care n Clean, offer multiple options to use our platform
              and schedule the needed services on the go. Primarily, you can use
              the search bar, enter few keywords related to your desired
              services and fill out the form to schedule it.
            </p>
            <strong className="be-vietnam-pro-bold">
              Our Best Handyman Services Dubai
            </strong>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Vetted
                  professionals
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Same Day
                  Availability
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Standard cleaning
                  tasks
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Affordable Prices
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Best Quality
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> 24/7 Live Support
                </div>
              </div>
            </div>
            <Link
              href="/book"
              className="bg_green text-white about_btn mt-3 me-3"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              
              className=" mt-3 Lato slider_btn font-medium text-[20px]">
            
              View Our Services
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6">
          <div className="d-inline-block position-relative">
            <Image
              src="/images/WhyChooseUs/WhyChooseUs-1.png"
              alt="Main Image"
              className="main-image shadow-left"
              width={365.63} // Adjust based on your image size
              height={394}
              //radioGroup="20px"
          
              style={{ borderRadius: "10px", borderTop: "10px", borderRight: "10px" , left:"745px", top:"88px"}} // Adjust position as needed
            />
            <Image
              src="/images/WhyChooseUs/WhyChooseUs-2.png"
              alt="Overlay Image"
              className="overlay-image overly-right"
              width={200} // Adjust based on your image size
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;

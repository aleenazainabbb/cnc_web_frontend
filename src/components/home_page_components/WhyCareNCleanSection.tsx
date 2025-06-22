import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhyCareNCleanSection: React.FC = () => {
  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
        <div className="col-12 col-lg-6 col-md-6 whycare_images custom-images">
          <div className="d-inline-block position-relative ">
            <Image
              src="/images/WhyCareNCleanSection/1.png"
              alt="Main Image"
              className="main-image"
              width={365.63} 
              height={394}
            />
            <Image
              src="/images/WhyCareNCleanSection/2.png"
              alt="Overlay Image"
              className="overlay-image overly-right"
              width={230.76} 
              height={265}
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6">
          <div className="service_details_content">
            <h2 className=" be-vietnam-pro-medium-custom mb-4 heading">
              Why Care n Clean?
            </h2>
            <p className="be-vietnam-pro-regular text-justify">
              Care n Clean was established in 2019 with the aim of providing
              high quality cleaning service for the commercial and residential
              sector with a higher level of satisfaction and customer support.
            </p>
            <div className="row mt-lg-5 mt-md-5">
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
              className="about_btn-bookNow mt-3 me-3"
            >
              Book Now
            </Link>

             <Link href="/about" className=" mt-3 Lato knowMore_btn" style={{width:"168px", height:"48px"}}>
              Know More
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCareNCleanSection;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhyChooseUsSection: React.FC = () => {
  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
      <div className="col-12 col-lg-6 col-md-6 mb-3 mb-lg-0 mb-md-0 ">

          <div>
            <h2
              className=" mb-4 heading"
              style={{
                fontSize: "44px",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: "500",
              }}
            >
              Why Choose Us
            </h2>

            <strong
              className="mt-2 mb-4"
              style={{
                fontSize: "16px",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: "700",
              }}
            >
              We Will Make Absolutely Any Place Clean, Neat & Tidy.
            </strong>

            <p
              className="text-justify mt-4 mb-2 text-muted why_choose_dec"
              style={{
                fontSize: "16px",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: "400",
              }}
            >
              We, at Care n Clean, offer multiple options to use our platform and schedule the needed services on the go. Primarily, you can use the search bar, enter few keywords related to your desired services and fill out the form to schedule it.
            </p>

            <strong
              className="mt-2 mb-4"
              style={{
                fontSize: "16px",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: "700",
              }}
            >
              Our Best Handyman Services Dubai
            </strong>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Handymen
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Electricians
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> AC Technicians
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Plumbers
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Painters
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Carpenters
                </div>
              </div>
            </div>

            <Link href="/book" className=" about_btn-bookNow mt-3 me-3">
              Book Now
            </Link>
            <Link
              href="/services"
              className="mt-3 Lato slider_btn font-medium text-[20px]"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* <div className="col-12 col-lg-6 col-md-5"> */}
        <div className="col-12 col-lg-6 col-md-6 whycare_images padding-images" >
          <div className="d-inline-block position-relative custom-images  ">
            <Image
              src="/images/WhyChooseUs/WhyChooseUs-1.png"
              alt="Main Image"
              className="main-image"
              width={365.63}
              height={394}
              style={{
                borderRadius: "20px", 
                borderTop: "10px",
                borderRight: "10px",
                
              }}
            />
            <Image
              src="/images/WhyChooseUs/WhyChooseUs-2.png"
              alt="Overlay Image"
              className="overlay-image overly-right"
              width={230.76}
              height={265}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection ;








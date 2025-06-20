import React from "react";
import Link from "next/link";

const GetAQuoteSection: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="service_main quote_main">
        <div className="row">
          <div className="get_quote text-center">
            <p className="text-white be-vietnam-pro-bold fs-24 m-auto">
              Complete Residential and Commercial Handyman & Maintenance
              Services in Dubai.
            </p>
            <Link href="/quote" className="btn getaquote_btn Lato btn-light ms-3 fw-500 text_green mt-3" >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuoteSection;

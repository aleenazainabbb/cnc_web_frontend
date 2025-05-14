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
            {/* <Link href="/quote" className="bg_green text-white about_btn mt-3"> */}
            <Link href="/quote" className="btn header_btn Lato btn-light ms-3 fw-500 text_green" style={{ width: "173px", height: "48px"}}>
             {/* className="btn header_btn btn-light ms-3 fw-600 text_green" */}

              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuoteSection;

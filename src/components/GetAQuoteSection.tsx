"use client";

import React from "react";
import Link from "next/link";

interface GetAQuoteSectionProps {
  text?: string;
}

const GetAQuoteSection: React.FC<GetAQuoteSectionProps> = ({
  text = "Complete Residential and Commercial Handyman & Maintenance Services in Dubai.",
}) => {
  return (
    <div className="container mb-4 mt-3">
      <div className="service_main quote_main">
        <div className="row">
          <div className="get_quote text-center">
            <p className="text-white be-vietnam-pro-bold fs-24 m-auto">{text}</p>
            <Link
              href="/quote"
              className="btn getaquote_btn Lato btn-light ms-3 fw-500 text_green mt-3"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuoteSection;

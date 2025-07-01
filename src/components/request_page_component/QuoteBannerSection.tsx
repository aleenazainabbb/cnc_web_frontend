"use client";

import React from "react";
import Link from "next/link";

interface QuoteBannerSectionProps {
  heading?: React.ReactNode;
  subheading?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  subheadingFirst?: boolean;
  imageSrc?: string;
  subheadingColor?: string;
}

const QuoteBannerSection: React.FC<QuoteBannerSectionProps> = ({
  heading = "GET A QUOTE!",
  subheading = "Want to hire us or need to know details about our cleaning services, please give us a call at 052 528 0307.",
  showButton = false,
  buttonText = "Contact Us",
  buttonLink = "/contact",
  subheadingFirst = false,
  imageSrc = "/images/services-banner.png",
  subheadingColor,
}) => {
  return (
    <div
      className="d-flex align-items-center position-relative h-auto services_banner"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "80px 0",
        height: "100%",
      }}
    >
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-12">

            <div className="banner_content quote_desc">
              {!subheadingFirst && heading && (
                <h1 className="be-vietnam-pro-bold my-3">{heading}</h1>
              )}

              {subheading && (
                <p
                  className="be-vietnam-pro-regular subheading"
                  style={{ color: subheadingColor || (heading && !subheadingFirst ? "#494949" : "inherit") }}
                >
                  {subheading}
                </p>

              )}

              {subheadingFirst && heading && (
                <h1 className="be-vietnam-pro-bold my-3">{heading}</h1>
              )}

              {showButton && (
                <Link href={buttonLink}>
                  <button className="bg_green text-white about_btn-servicebanner mt-3">
                    {buttonText}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="round-icon d-flex align-items-center justify-content-center text-white position-absolute bg_green">
        <i className="fa-regular fa-comment-dots"></i>
      </div>
    </div>
  );
};

export default QuoteBannerSection;

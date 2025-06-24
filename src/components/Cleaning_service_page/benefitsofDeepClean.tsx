"use client";

import React from "react";
import Image from "next/image";
import LinkWithLoader from '@/components/Loader/Link';

interface BenefitsProps {
  title?: string;
  content?: string;
  imageLeft?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  points?: string[];
}

const BenefitsOfDeepCleaning: React.FC<BenefitsProps> = ({
  title = "Benefits of Deep Cleaning",
  content = `Proficient cleaning techniques eliminate allergens and bacteria
  alongside dust, producing cleaner air and minimizing infection
  risks. The complete cleaning routine reaches every location that
  regular maintenance fails to achieve, ensuring a contamination-free
  environment. The cleaning method enhances sanitation standards and
  comfort quality, which produces better home and workplace health
  conditions.`,
  imageLeft = false,
  imageSrc = "/images/WhyChooseUs/WhyChooseUs-1.png",
  imageAlt = "Main Image",
  points = [
    "Handymen",
    "Electricians",
    "AC Technicians",
    "Plumbers",
    "Painters",
    "Carpenters"
  ],
}) => {
  const ImageBlock = (
    <div className="col-12 col-lg-6 col-md-6">
      <div className="d-inline-block position-relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="main-image-benefits"
          width={504.82}
          height={544}
          style={{
            borderRadius: "20px",
            borderTop: "10px",
            borderRight: "10px",
          }}
        />
      </div>
    </div>
  );

  const splitPoints = [
    points.slice(0, Math.ceil(points.length / 2)),
    points.slice(Math.ceil(points.length / 2)),
  ];

  const TextBlock = (
    <div className="col-12 col-lg-6 col-md-6 mb-3 mb-lg-0 mb-md-0">
      <div>
        <h2
          className="mt-2 mb-4 heading"
          style={{
            fontSize: "44px",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontWeight: 500,
          }}
        >
          {title}
        </h2>

        <p
          className="text-justify mt-4 mb-2 text-muted why_choose_dec"
          style={{
            fontSize: "16px",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontWeight: 400,
          }}
        >
          {content}
        </p>

        <div className="row mt-3">
          {splitPoints.map((group, colIndex) => (
            <div className="col-md-6" key={colIndex}>
              {group.map((point, idx) => (
                <div className="feature-box be-vietnam-pro-semibold" key={idx}>
                  <i className="fa-solid fa-circle-check"></i> {point}
                </div>
              ))}
            </div>
          ))}
        </div>

        <LinkWithLoader href="/BookAservicePage" className="bg_green text-white about_btn mt-3 me-3">
          Book Now
        </LinkWithLoader>
        <LinkWithLoader
          href="/services"
          className="mt-3 Lato slider_btn font-medium text-[20px]"
        >
          View Our Services
        </LinkWithLoader>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
        {imageLeft ? (
          <>
            {ImageBlock}
            {TextBlock}
          </>
        ) : (
          <>
            {TextBlock}
            {ImageBlock}
          </>
        )}
      </div>
    </div>
  );
};

export default BenefitsOfDeepCleaning;

"use client";

import React from "react";

interface Section {
  title?: string;
  content: string | React.ReactNode;
}

interface OurBestDeepCleanProps {
  sections?: Section[];
  mainTitle?: string;
  description?: string;
  hideSectionTitles?: boolean;
  hideMainTitle?: boolean;
}

const defaultSections: Section[] = [
  {
    title: "Home Deep Cleaning",
    content:
      "Dust together with dirt and germs gradually accumulates throughout your residence. The process of deep cleaning surpasses typical maintenance to eliminate all possible bacteria together with allergens from an environment. The home deep cleaning service provided by our team includes a clean-up of every living space, from living rooms through bedrooms and kitchens to bathrooms. We maintain our emphasis on major areas and contact zones to provide a safe and hygienic setting that serves your family.",
  },
  {
    title: "Office Deep Cleaning",
    content:
      "Physical office cleanliness directly improves the work performance of employees. Building dirt accumulates on wood surfaces, rugs, and air ventilation systems, leading to unhealthy conditions. Deep cleaning includes dust removal from workstations and shared space cleaning with carpet and furniture refreshments. The cleaning process includes disinfection work in both bathrooms and kitchens. The office's cleanliness protects staff health while making beneficial first impressions on employees and business guests.",
  },
];

const OurBestDeepClean: React.FC<OurBestDeepCleanProps> = ({
  sections = defaultSections,
  mainTitle,
  description,
  hideSectionTitles = false,
  hideMainTitle = false,
}) => {
  const resolvedTitle = mainTitle || "Our Deep Cleaning Services";

  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
        <div className="col-12">
          <div>
            {!hideMainTitle && (
              <h2
                className="font-semibold text-[44px] leading-[120%] tracking-[0%] mt-2 mb-4 ourdeepClean-heading heading"
                style={{ fontFamily: "Be Vietnam Pro" }}
              >
                {resolvedTitle}
              </h2>
            )}

            {description && (
              <p
                className="text-justify leading-[30px] tracking-normal mb-4"
                style={{
                  fontFamily: "Be Vietnam Pro",
                  fontSize: "20px",
                  color: "#666666",
                }}
              >
                {description}
              </p>
            )}

            {sections.map((section, index) => (
              <React.Fragment key={index}>
                {!hideSectionTitles && section.title && (
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-3"
                    style={{
                      fontFamily: "Be Vietnam Pro",
                      fontSize: "20px",
                    }}
                  >
                    {section.title}
                  </h3>
                )}

                <div
                  className="text-justify leading-[30px] tracking-normal mb-4 sections"
                  style={{
                    fontFamily: "Be Vietnam Pro",
                    fontSize: "20px",
                    color: "#666666",
                  }}
                >
                  {section.content}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBestDeepClean;

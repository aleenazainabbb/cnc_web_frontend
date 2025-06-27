"use client";

import React from "react";
import Image from "next/image";

interface BestDeepCleanProps {
  title?: string;
  paragraph?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

const BestDeepClean: React.FC<BestDeepCleanProps> = ({
  title = "Best Deep Cleaning Service in UAE from Care N Clean",
  paragraph = (
    <>
      The UAE market requires deep cleaning services.{" "}
      <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
        Care N Clean
      </a>{" "}
      provides expert deep cleaning services for both residential and commercial buildings. Our professionals create a spotless
      environment with fresh air free from germs. With our expert team, we deliver optimal results using high-quality equipment
      along with sustainable cleaning products of the best quality. Your well-being and comfort, together with your mental serenity,
      improve through an environment maintained in clean condition. Deep cleaning performed beyond regular cleaning eliminates
      the complete presence of hidden dirt along with allergens and germs.
    </>
  ),
  imageSrc = "/images/deepclean.png",
  imageAlt = "Deep Clean Image",
}) => {
  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
        {/* Text Content */}
        <div className="col-12 col-lg-6 col-md-6">
          <div className="service_details_content">
            <h2
              className="font-semibold heading leading-[120%] tracking-[0%] mt-2 mb-4"
              style={{ fontFamily: "Be Vietnam Pro", fontSize: "44px" }}
            >
              {title}
            </h2>
            <p
              className="text-justify leading-[30px] tracking-normal"
              style={{ fontFamily: "Be Vietnam Pro", fontSize: "20px", color: "#666666" }}
            >
              {paragraph}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 col-lg-5">
          <div className="position-relative mt-4 mt-md-0 text-center text-md-end">
            <div style={{ maxWidth: "100%", margin: "0 auto" }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={419}
                height={451}
                className="main-image-deepClean"
                style={{
                  borderRadius: "20px",
                  borderTop: "10px solid",
                  borderRight: "10px solid",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeepClean;


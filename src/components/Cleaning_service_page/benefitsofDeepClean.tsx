import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BenefitsProps {
  title?: string;
  content?: string;
  imageLeft?: boolean; 
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
}) => {
  const ImageBlock = (
    <div className="col-12 col-lg-6 col-md-6">
      <div className="d-inline-block position-relative">
        <Image
          src="/images/WhyChooseUs/WhyChooseUs-1.png"
          alt="Main Image"
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

        <Link href="/book" className="bg_green text-white about_btn mt-3 me-3">
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




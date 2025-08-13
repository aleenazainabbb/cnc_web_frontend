import React from "react";
import LinkWithLoader from "@/components/Loader/Link";

interface LifeMadeEasySectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  useSectionDescClass?: boolean; 
}

const LifeMadeEasySection: React.FC<LifeMadeEasySectionProps> = ({
  title = "LIFE MADE EASY",
  description = "Book your house cleaning service Now.<br /> Our experienced professionals will take care of the rest.",
  buttonText = "GET AN ESTIMATE",
  buttonLink = "/estimate",
  useSectionDescClass = true, 
}) => {
  const descriptionClasses = [
    "be-vietnam-pro-medium",
    "text-white",
    useSectionDescClass ? "section_desc" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className="bg_green py-5">
      <div className="container">
        <div className="row">
          <div className="black_layer text-center p-5">
            <h2 className="be-vietnam-pro-bold text-white ">{title}</h2>
            <p
              className={descriptionClasses}
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <LinkWithLoader
              href="/GetAquote"
              className="bg-white be-vietnam-pro-semibold text-black text-[14px] estimate_btn tracking-[0%] mt-3 me-3"
            >
              {buttonText}
            </LinkWithLoader>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeMadeEasySection;

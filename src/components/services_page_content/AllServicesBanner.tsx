import React from "react";

interface AllServicesBannerProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  reverseContentOrder?: boolean;
}

const AllServicesBanner: React.FC<AllServicesBannerProps> = ({
  title = "ALL SERVICES",
  description,
  imageUrl = "/images/all-services-banner.png",
  reverseContentOrder = false,
}) => {
  const showDescription = description !== undefined;

  return (
    <div
      className="all_services_banner d-flex align-items-center position-relative h-auto"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "115px 0",
      }}
    >
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12">
            <div className="banner_content">
              {reverseContentOrder ? (
                <>
                  <h1 className="be-vietnam-pro-bold my-3">{title}</h1>
                  {showDescription && (
                    <p className="be-vietnam-pro-regular-banner">
                      {description}
                    </p>
                  )}
                </>
              ) : (
                <>
                  {showDescription && (
                    
                    <p className="be-vietnam-pro-regular">{description}</p>
                  )}
                  <h1 className="be-vietnam-pro-bold my-3">{title}</h1>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="services_icon round-icon d-flex align-items-center justify-content-center text-white position-absolute bg_green">
        <i className="fa-regular fa-comment-dots"></i>
      </div>
    </div>
  );
};

export default AllServicesBanner;

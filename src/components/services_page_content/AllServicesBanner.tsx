import React from "react";

const AllServicesBanner: React.FC = () => {
  return (
    <div className="all_services_banner d-flex align-items-center position-relative h-auto">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12">
            <div className="banner_content">
              <p className="be-vietnam-pro-regular">
                Quality cleaning at a fair price.
              </p>
              <h1 className="be-vietnam-pro-bold my-3">ALL SERVICES</h1>
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

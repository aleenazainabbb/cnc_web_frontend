import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllServicesSection: React.FC = () => {
  const services = [
    { title: "Office Cleaning", img: "/images/AllServicesSection/1.png" },
    { title: "Spring Cleaning", img: "/images/AllServicesSection/2.png" },
    { title: "House Cleaning", img: "/images/AllServicesSection/3.png" },
    { title: "Office Cleaning", img: "/images/AllServicesSection/1.png" },
    { title: "Spring Cleaning", img: "/images/AllServicesSection/2.png" },
    { title: "House Cleaning", img: "/images/AllServicesSection/3.png" },
    { title: "Office Cleaning", img: "/images/AllServicesSection/1.png" },
    { title: "Spring Cleaning", img: "/images/AllServicesSection/2.png" },
    { title: "House Cleaning", img: "/images/AllServicesSection/3.png" },
  ];

  return (
    <div className="container my-5">
      <div className="row service_border pb-lg-4">
        <div className="col-12 col-lg-6 col-md-6">
          <div className="services_heading">
            <h2 className="be-vietnam-pro-semibold">
              YOUR <span className="text_green">#1</span> CHOICE FOR HOME
              CLEANING SERVICE
            </h2>
          </div>
        </div>
        <div className="col-12 col-lg-5 col-md-5 offset-lg-1 offset-md-1">
          <div className="services_rightSection pb-3 pb-lg-0 pb-md-0">
            <p className="be-vietnam-pro-semibold">Services</p>
            <p className="be-vietnam-pro-regular">
              We treat your home as our own. With Care n Clean, a pristine home
              is just a few clicks away. Visit us for reliable cleaning services
              and enjoy peace of mind.
            </p>
          </div>
        </div>
      </div>
      <div className="row pt-5">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-lg-4 col-md-4 mb-5">
            <div className="service_card">
              <Image
                src={service.img}
                alt={service.title}
                className="img-fluid"
                width={300} // Adjust based on your image size
                height={200}
              />
              <p className="fs-24 be-vietnam-pro-semibold my-3">
                {service.title}
              </p>
              <p className="be-vietnam-pro-regular mb-3">
                While we can customize your cleaning plan to suit your needs,
                most clients schedule regular cleaning services:
              </p>
              <Link
                href="/book"
                className="d-inline-block fw-24 be-vietnam-pro-semibold slider_btn"
              >
                Book Now <i className="fa-solid fa-arrow-right-long ms-2"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServicesSection;

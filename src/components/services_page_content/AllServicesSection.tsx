import React from "react";
import ServicesList from "./servicesList";
const myServices = [
  {
    title: "Office Cleaning",
    img: "/images/AllServicesSection/1.png",
    description: "Professional office cleaning to keep your workspace fresh.",
  },
  {
    title: "Spring Cleaning",
    img: "/images/AllServicesSection/2.png",
  },
  {
    title: "House Cleaning",
    img: "/images/AllServicesSection/3.png",
    description: "Thorough home cleaning tailored to your family's needs.",
  }, {
    title: "House Cleaning",
    img: "/images/AllServicesSection/3.png",
    description: "Thorough home cleaning tailored to your family's needs.",
  }, {
    title: "House Cleaning",
    img: "/images/AllServicesSection/3.png",
    description: "Thorough home cleaning tailored to your family's needs.",
  }, {
    title: "House Cleaning",
    img: "/images/AllServicesSection/3.png",
    description: "Thorough home cleaning tailored to your family's needs.",
  },
];

const AllServicesSection: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row service_border pb-lg-4">
        <div className="services_heading">
          <h2 className="be-vietnam-pro-semibold">
            YOUR <span className="text_green">#1</span> CHOICE FOR{" "}
            <a href="/about" style={{ color: "#36B864" }}>
              CARE N CLEAN
            </a>{" "}
            SERVICES
          </h2>
        </div>
      </div>

      {/* Services list only */}
      <ServicesList title="Cleaning Services"
        services={myServices}
        defaultDescription="Custom cleaning services you can rely on."/>
    </div>
  );
};

export default AllServicesSection;

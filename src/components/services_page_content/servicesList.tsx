"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import LinkWithLoader from "@/components/Loader/Link";

interface ServiceItem {
  title: string;
  img: string;
  description?: string;
}

interface ServicesListProps {
  title: string;
  services: ServiceItem[];
  defaultDescription?: string;
}

const ServicesList: React.FC<ServicesListProps> = ({
  title,
  services,
  defaultDescription = "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let currentIndex = 0;

  // Auto-scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || services.length <= 3) return;

    const interval = setInterval(() => {
      const cardWidth = container.scrollWidth / services.length;
      currentIndex = (currentIndex + 1) % services.length;
      container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }, 9000); // scroll every 3 seconds

    return () => clearInterval(interval);
  }, [services]);

  return (
    <div className="pt-5">
      <h4
        className="be-vietnam-pro-bold"
        style={{ color: "#36B864", marginBottom: "30px" }}
      >
        {title}
      </h4>

      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "20px",
          paddingBottom: "10px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 33.33%",
              maxWidth: "33.33%",
              scrollSnapAlign: "start",
            }}
          >
            <div className="service_card">
              <Image
                src={service.img}
                alt={service.title}
                className="servicesList"
                width={300}
                height={200}
              />
              <p className="fs-24 be-vietnam-pro-semibold my-3">
                {service.title}
              </p>
              <p className="be-vietnam-pro-regular mb-3 service_list">
                {service.description || defaultDescription}
              </p>
              <LinkWithLoader
                href="/book"
                className="d-inline-block fw-24 be-vietnam-pro-semibold slider_btn"
              >
                Book Now <i className="fa-solid fa-arrow-right-long ms-2"></i>
              </LinkWithLoader>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import LinkWithLoader from "@/components/Loader/Link";

interface ServiceItem {
  title: string;
  img: string;
  description?: string;
  link?: string;

}

interface ServicesListProps {
  title?: string;
  services: ServiceItem[];
}

const ServicesList: React.FC<ServicesListProps> = ({
  title,
  services,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let currentIndex = 0;

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
    }, 4000);

    return () => clearInterval(interval);
  }, [services]);

  return (
    <div className="pt-5">
      {title && ( // Only render heading if title is passed
        <h4 className="be-vietnam-pro-bold text-[#36B864] mb-6">{title}</h4>
      )}

      <div
        ref={scrollRef}
        className="scroll-container"
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "20px",
          paddingBottom: "10px",
          paddingTop: "10px",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 box-service"
            style={{
              width: "32.3333%",
              // width: "32%",
              scrollSnapAlign: "start",
            }}
          >
            <div className="group w-full container-services hover-box">

              {/* Clickable wrapper for the card (excluding the button) */}
              <LinkWithLoader
                href={service.link || "#"}
                className="block hover:scale-[1.01] transition-transform"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={300}
                  height={220}
                  className="w-full h-[180px] object-cover imagecard mt-3"
                />
                <p className="fs-24 be-vietnam-pro-semibold my-3 px-3 title-services">
                  {service.title}
                </p>
                <p className="be-vietnam-pro-regular mb-3 service_list text-sm text-gray-600 w-full break-words px-3">
                  {service.description}
                </p>
              </LinkWithLoader>

              {/* Book Now button (separate link) */}
              <div className="px-3 pb-3">
                <LinkWithLoader
                  href="/BookAservicePage"
                  className=" btn-services mt-3 me-3 group"
                >
                  Book Now
                  <i className="fa-solid fa-arrow-right ms-2 hidden group-hover:inline"></i>
                </LinkWithLoader>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ServicesList;

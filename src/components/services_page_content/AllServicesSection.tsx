import React from "react";
import ServicesList from "./servicesList";
const cleaningServices = [
  {
    title: "Deep Cleaning",
    img: "/images/deepclean/3.jpg",
    description: "Detailed cleaning of hidden dirt and hard-to-reach areas.",
    link: "/AllServices/CleaningServices/DeepCleaning",
  },
  {
    title: "Grease Trap",
    img: "/images/GreaseTrap/2.jpg",
    description: "Removes grease buildup for odor-free, smooth drainage.",
    link: "/AllServices/CleaningServices/GreaseTrap",
  },
  {
    title: "Chandelier",
    img: "/images/Chandelier/2.jpg",
    description: "Restores sparkle with delicate and safe cleaning.",
    link: "/AllServices/CleaningServices/Chandelier",
  },
  {
    title: "Swimming Pool",
    img: "/images/swimmingpool/3.jpg",
    description: "Keeps your pool clean, balanced, and swim-ready.",
    link: "/AllServices/CleaningServices/SwimmingPool",
  },
  {
    title: "Vehicle",
    img: "/images/vehicle/3.jpg",
    description: "Cleans, sanitizes, and shines your car inside out.",
    link: "/AllServices/CleaningServices/Vehicle",
  },
  {
    title: "Upholstery",
    img: "/images/Upholstery/2.jpg",
    description: "Refreshes fabric and removes stains and allergens.",
    link: "/AllServices/CleaningServices/UpholsteryCleaning",
  },
  {
    title: "Duct",
    img: "/images/duct/2.jpg",
    description: "Improves air quality by clearing out dirty ducts.",
    link: "/AllServices/CleaningServices/Duct",
  },
  {
    title: "Windows",
    img: "/images/windows/1.jpg",
    description: "Streak-free shine for brighter, clearer windows.",
    link: "/AllServices/CleaningServices/Windows",
  },
  {
    title: "Maid Services",
    img: "/images/maid/2.jpg",
    description: "Reliable daily or weekly home cleaning help from us.",
    link: "/AllServices/CleaningServices/Maid",
  }
];
const MaintenanceServices =
  [
    {
      title: "Plumbing",
      img: "/images/Maintenance/benefits.png",
      description: "Fixes leaks, clears drains, and ensures smooth water flow.",
      link: "/AllServices/MaintenanceServices/Plumbing",
    },
    {
      title: "Landscaping",
      img: "/images/Maintenance/landscaping/1.jpg",
      description: "Keeps your lawn and garden neat, green, and inviting.",
      link: "/AllServices/MaintenanceServices/Landscaping",
    },
    {
      title: "Carpentry",
      img: "/images/Maintenance/carpentry/2.jpg",
      description: "Custom woodwork, repairs, and installations with care.",
      link: "/AllServices/MaintenanceServices/Carpentry",
    },
    {
      title: "AC Maintenance",
      img: "/images/Maintenance/AC/1.jpg",
      description: "Cleans and checks AC systems for cool, clean air.",
      link: "/AllServices/MaintenanceServices/ACmaintenance",
    },
    {
      title: "Electrical",
      img: "/images/Maintenance/Electrical/3.png",
      description: "Safe and fast fixes for all wiring and power issues.",
      link: "/AllServices/MaintenanceServices/Electrical",
    },
    {
      title: "Handyman",
      img: "/images/Maintenance/Handyman/1.png",
      description: "Quick help for repairs, fixes, cleaning and home tasks.",
      link: "/AllServices/MaintenanceServices/Handyman",
    },
    {
      title: "Painting",
      img: "/images/Maintenance/Painting/2.png",
      description: "Fresh and clean paintwork to brighten your space.",
      link: "/AllServices/MaintenanceServices/Painting",
    }
  ];
const MovingServices = [
  {
    title: "Local",
    img: "/images/Moving/local/3.jpg",
    description: "Smooth and safe moving within the same city.",
    link: "/AllServices/MovingServices/Local",
  },
  {
    title: "Storage",
    img: "/images/Moving/storage/2.jpg",
    description: "Secure and climate-controlled storage for your items.",
    link: "/AllServices/MovingServices/Storage",
  },
  {
    title: "International",
    img: "/images/Moving/international/1.jpg",
    description: "Complete support for moves across the countries.",
    link: "/AllServices/MovingServices/International",
  },
];

const PestControlServices = [
  {
    title: "Pigeons & Birds",
    img: "/images/birds1.png",
    description: "Humane bird removal and prevention for clean spaces.",
    link: "/AllServices/PestControl/Pigeons&Birds",
  },
  {
    title: "Rats & Rodents",
    img: "/images/rats2.jpg",
    description: "Eliminates rodents and blocks future entry points.",
    link: "/AllServices/PestControl/Rats&Rodents",
  },
  {
    title: "Termites",
    img: "/images/termites.png",
    description: "Protects wood structures with targeted termite removal.",
    link: "/AllServices/PestControl/Termites",
  },
  {
    title: "Bees & Wasps",
    img: "/images/bees.png",
    description: "Safely removes bird's nests and prevents new hives.",
    link: "/AllServices/PestControl/Bees&Wasps",
  },
  {
    title: "Ants & Insects",
    img: "/images/ants2.jpg",
    description: "Removes ants and insects from nests to entry paths.",
    link: "/AllServices/PestControl/Ants&Insects",
  },
  {
    title: "Fleas & Ticks",
    img: "/images/fleas.png",
    description: "Treats indoor and outdoor areas to stop biting pests.",
    link: "/AllServices/PestControl/Fleas&Ticks",
  },
  {
    title: "Bed Bugs",
    img: "/images/bedbugs.png",
    description: "Eliminates bed bugs at all stages with safe methods.",
    link: "/AllServices/PestControl/BedBugs",
  },
  {
    title: "Cockroach",
    img: "/images/Cockroach.png",
    description: "Targets breeding spots for complete roach removal.",
    link: "/AllServices/PestControl/Cockroach",
  }
];
interface AllServicesSectionProps {
  children?: React.ReactNode;
}
const AllServicesSection: React.FC<AllServicesSectionProps> = ({ children }) => {
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
      {children ?? (
        <>
          {/* Services list only */}
          <ServicesList title="Cleaning Services"
            services={cleaningServices}
          />

          <ServicesList title="Maintenance Services"
            services={MaintenanceServices}
          />

          <ServicesList title="Moving Services"
            services={MovingServices}
          />

          <ServicesList title="Pest Control Services"
            services={PestControlServices}
          />
        </>
      )}

    </div>

  );
};

export default AllServicesSection;

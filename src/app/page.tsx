"use client";
import AchievementSection from "@/components/home_page_components/AchievementSection";
import BannerSection from "@/components/home_page_components/BannerSection";
import ContactUsSection from "@/components/ContactUsSection";
import GetAQuoteSection from "@/components/GetAQuoteSection";
import LifeMadeEasySection from "@/components/home_page_components/LifeMadeEasySection";
import ServiceDetailsSection from "@/components/home_page_components/ServiceDetailsSection";
import ServicesSliderSection from "@/components/home_page_components/ServicesSliderSection";
import TestimonialsSection from "@/components/home_page_components/TestimonialsSection";
import WhyCareNCleanSection from "@/components/home_page_components/WhyCareNCleanSection";
import WhyChooseUsSection from "@/components/home_page_components/WhyChooseUsSection";
import ServiceStepsSection from "@/components/home_page_components/ServiceList";
import RoutePrefetcher from "@/components/RoutePrefetcher";
import NeedHelp from "@/components/request_page_component/NeedHelp";
import ServicesList from "@/components/services_page_content/servicesList";
import AllServicesSection from "@/components/services_page_content/AllServicesSection";
export default function Home() {
  const Services = [
    {
      title: "Cleaning Services",
      img: "/images/cleaning2.png",
      description:
        "Home, office, windows, duct, vehicle, Grease Trap cleaning services.",
      link: "/AllServices/CleaningServices",
    },
    {
      title: "Maintenance Services",
      img: "/images/Maintenance/whatis.png",
      description:
        "Plumbing, electrical, AC, Handyman, carpentry maintenance services.",
      link: "/AllServices/MaintenanceServices",
    },
    {
      title: "Moving Services",
      img: "/images/Moving/1.jpg",
      description: "Local Moving, Storage Moving and International Moving",
      link: "/AllServices/MovingServices",
    },
    {
      title: "Pest Control Services",
      img: "/images/Pest Control/1.jpg",
      description:
        "Removal of insects, rodents, termites, with long-term prevention solutions.",
      link: "/AllServices/PestControl",
    },
    {
      title: "Deep Cleaning",
      img: "/images/deepclean/3.jpg",
      description: "Detailed cleaning of hidden dirt and hard-to-reach areas.",
      link: "/AllServices/CleaningServices/DeepCleaning",
    },
    {
      title: "Chandelier",
      img: "/images/Chandelier/2.jpg",
      description: "Restores sparkle with delicate and safe cleaning.",
      link: "/AllServices/CleaningServices/Chandelier",
    },
    {
      title: "Maid Services",
      img: "/images/maid/2.jpg",
      description: "Reliable daily or weekly home cleaning help from us.",
      link: "/AllServices/CleaningServices/Maid",
    },
    {
      title: "Plumbing",
      img: "/images/Maintenance/benefits.png",
      description: "Fixes leaks, clears drains, and ensures smooth water flow.",
      link: "/AllServices/MaintenanceServices/Plumbing",
    },
    {
      title: "Electrical",
      img: "/images/Maintenance/Electrical/3.png",
      description: "Safe and fast fixes for all wiring and power issues.",
      link: "/AllServices/MaintenanceServices/Electrical",
    },
    {
      title: "Local Moving",
      img: "/images/Moving/local/3.jpg",
      description: "Smooth and safe moving within the same city.",
      link: "/AllServices/MovingServices/Local",
    },
    {
      title: "Ants & Insects",
      img: "/images/ants2.jpg",
      description: "Removes ants and insects from nests to entry paths.",
      link: "/AllServices/PestControl/Ants&Insects",
    },
    {
      title: "Cockroach",
      img: "/images/Cockroach.png",
      description: "Targets breeding spots for complete roach removal.",
      link: "/AllServices/PestControl/Cockroach",
    },
  ];

  return (
    <div>
      <RoutePrefetcher />
      <BannerSection />
      <AllServicesSection>
        <ServicesList services={Services} />
      </AllServicesSection>

      <div className="responsive-margin">
        <WhyCareNCleanSection />
      </div>
      <AchievementSection />

      <WhyChooseUsSection />
      <ServiceStepsSection />
      <LifeMadeEasySection />

      <TestimonialsSection />
      <div className="responsive-margin-custom">
        <ServiceDetailsSection />
      </div>
      <ContactUsSection />
      <div id="get-a-quote">
        <NeedHelp />
      </div>
      <GetAQuoteSection />
    </div>
  );
}

"use client";
import ContactUsSection from "@/Components/ContactUsSection";
import GetAQuoteSection from "@/Components/GetAQuoteSection";
import AllServicesBanner from "@/Components/services_page_content/AllServicesBanner";
import AllServicesSection from "@/Components/services_page_content/AllServicesSection";

export default function ServicesPage() {
  return (
    <div>
      
      <AllServicesBanner />
      <AllServicesSection />
      <ContactUsSection />
      <GetAQuoteSection />
    </div>
  );
}

"use client";
import ContactUsSection from "@/components/ContactUsSection";
import GetAQuoteSection from "@/components/GetAQuoteSection";
import AllServicesBanner from "@/components/services_page_content/AllServicesBanner";
import AllServicesSection from "@/components/services_page_content/AllServicesSection";

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

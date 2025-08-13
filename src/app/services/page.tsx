"use client";

import AutoBreadcrumb from "@/components/popups/Breadcrumbs";
import ContactUsSection from "@/components/ContactUsSection";
import GetAQuoteSection from "@/components/GetAQuoteSection";
import AllServicesBanner from "@/components/services_page_content/AllServicesBanner";
import AllServicesSection from "@/components/services_page_content/AllServicesSection";

export default function ServicesPage() {
  return (
    <div>

      <AllServicesBanner 
       description="Quality cleaning at a fair price."/>
      <AutoBreadcrumb />
      <AllServicesSection />
      <ContactUsSection
        title="Service Information"
        formHeading="Schedule your Service"
        infoItems={[
          {
            iconClass: "fa-solid fa-envelope",
            label: "Email",
            value: "support@example.com",
          },
          {
            iconClass: "fa-solid fa-phone",
            label: "24/7 Emergency Service",
            value: "(+971) 52 528 0307",
          },
        ]}
      />

      <GetAQuoteSection />
    </div>
  );
}

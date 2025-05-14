"use client";
import AchievementSection from "@/components/home_page_components/AchievementSection";
import BannerSection from "@/components/home_page_components/BannerSection";
import ContactUsSection from "@/components/ContactUsSection";
import GetAQuoteSection from "@/components/GetAQuoteSection";
import LifeMadeEasySection from "@/components/home_page_components/LifeMadeEasySection";
import ServiceDetailsSection from "@/components/home_page_components/ServiceDetailsSection";
import ServiceSection from "@/components/ServiceSection";
import ServicesSliderSection from "@/components/home_page_components/ServicesSliderSection";
import TestimonialsSection from "@/components/home_page_components/TestimonialsSection";
import WhyCareNCleanSection from "@/components/home_page_components/WhyCareNCleanSection";
import WhyChooseUsSection from "@/components/home_page_components/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <ServiceSection />
      <AchievementSection />
      <ServiceDetailsSection />
      <ServicesSliderSection />
      <WhyCareNCleanSection />
      <LifeMadeEasySection />
      <WhyChooseUsSection />
      <ContactUsSection />
      <TestimonialsSection />
      <GetAQuoteSection />
    </div>
  );
}

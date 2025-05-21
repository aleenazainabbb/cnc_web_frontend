"use client";
import AchievementSection from "@/Components/home_page_components/AchievementSection";
import BannerSection from "@/Components/home_page_components/BannerSection";
import ContactUsSection from "@/Components/ContactUsSection";
import GetAQuoteSection from "@/Components/GetAQuoteSection";
import LifeMadeEasySection from "@/Components/home_page_components/LifeMadeEasySection";
import ServiceDetailsSection from "@/Components/home_page_components/ServiceDetailsSection";
import ServiceSection from "@/Components/ServiceSection";
import ServicesSliderSection from "@/Components/home_page_components/ServicesSliderSection";
import TestimonialsSection from "@/Components/home_page_components/TestimonialsSection";
import WhyCareNCleanSection from "@/Components/home_page_components/WhyCareNCleanSection";
import WhyChooseUsSection from "@/Components/home_page_components/WhyChooseUsSection";

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

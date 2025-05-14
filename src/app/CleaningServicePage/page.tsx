"use Client"
import AchievementSection from "@/components/home_page_components/AchievementSection"
import LifeMadeEasySection from "@/components/home_page_components/LifeMadeEasySection"
import WhyChooseUsSection from "@/components/home_page_components/WhyChooseUsSection"
import ContactUsSection from "@/components/ContactUsSection"
import GetAQuoteSection from "@/components/GetAQuoteSection"
export default function ServicePage() {
  return (
    <div>
      <AchievementSection />
      <LifeMadeEasySection
        title="How We Work"
        description="Our service for deep cleaning requires an effortless booking process. You can reach out to us by phone or through our website to book an appointment time. A member of our staff develops a specialized cleaning plan after analyzing your space requirements. Our team appears on the appointed day with state-of-the-art devices and environmentally friendly cleaning materials. A systematic, complete cleaning of every space takes place before our team conducts an inspection to verify flawless results. We align our work to satisfy customers while assuring exceptional results in every service."
        buttonText="Get an estimate"
        buttonLink="/booking"
         useSectionDescClass={false}
      />

      <WhyChooseUsSection />
      <ContactUsSection />
      <GetAQuoteSection />

    </div>
  )
}
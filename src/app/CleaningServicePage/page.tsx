"use Client"
import QuoteBannerSection from "@/components/request_page_component/QuoteBannerSection"
import BestDeepCleaning from "@/components/Cleaning_service_page/DeepCleanBanner"
import AchievementSection from "@/components/home_page_components/AchievementSection"
import LifeMadeEasySection from "@/components/home_page_components/LifeMadeEasySection"
import BenefitsOfDeepCleaning from "@/components/Cleaning_service_page/benefitsofDeepClean"
//import WhyChooseUsSection from "@/components/home_page_components/WhyChooseUsSection"
import ContactUsSection from "@/components/ContactUsSection"
import GetAQuoteSection from "@/components/GetAQuoteSection"
import OurBestDeepClean from "@/components/Cleaning_service_page/OurDeepCleanServices"
//import BenefitsOfDeepCleaning from "@/components/Cleaning_service_page/benefitsofDeepClean"
const sixSections = [
  { title: "Home Deep Cleaning", content: "Dust together with dirt and germs gradually accumulates throughout your residence. The process of deep cleaning surpasses typical maintenance to eliminate all possible bacteria together with allergens from an environment. The home deep cleaning service provided by our team includes a clean-up of every living space, from living rooms through bedrooms and kitchens to bathrooms. We maintain our emphasis on major areas and contact zones to provide a safe and hygienic setting that serves your family." },
  { title: "Office Deep Cleaning", content: "Physical office cleanliness directly improves the work performance of employees. Building dirt accumulates on wood surfaces, rugs, and air ventilation systems, leading to unhealthy conditions. Deep cleaning includes dust removal from workstations and shared space cleaning with carpet and furniture refreshments. The cleaning process includes disinfection work in both bathrooms and kitchens. The office's cleanliness protects staff health while making beneficial first impressions on employees and business guests." },
  { title: "Kitchen Deep Cleaning", content: "Your kitchen requires heightened attention during cleaning since food preparation areas accumulate grease together with spills as well as bacteria. Our team cleans all surface types by degreasing them, followed by sanitizing appliances and mopping floor surfaces. Through our extensive kitchen cleaning process, we guarantee safety and hygiene performance for preparation and eating activities." },
  { title: "Bathroom Deep Cleaning", content: "The combination of humidity and high traffic in bathrooms allows mold, along with mildew and bacteria, to grow. Professional bathroom cleaning eliminates bacteria together with unsightly stains from your surfaces. Our team conducts tile scrubbing and sink and toilet disinfection while mirror polishing and odorous substance elimination. Our professional cleaning solutions eliminate hard-to-remove stains to make your bathroom look magnificent again." },
  { title: "Carpet and Upholstery Cleaning", content: "Soil, irritants, and microorganisms become entangled in the fabric of carpets together with upholstery furniture. A thorough cleaning operation successfully clears deep-seated stains and dirt. Through steam cleaning, we both remove stains and freshen carpets while also extending their useful life." },
  { title: "Move-In & Move-Out Deep Cleaning", content: "Moving frequently causes stress, which prevents you from dedicating enough time to completely clean either your new or previous spaces. Our company activates a deep cleaning process for newly acquired living spaces during the move-in period. Our team conducts floor cleaning while performing bathroom sanitization and surface wiping operations throughout the area. Also, our service cleans your former house so well that it will be ready for the new resident. The cleaning work is our responsibility while you diligently handle your relocation." },
];
export default function ServicePage() {
  return (
    <div>
      <QuoteBannerSection
        heading={
          <>
            Best Deep Cleaning Service in <br />
            UAE from Care N Clean
          </>
        }
        subheading="Quality cleaning at a fair price."
        subheadingFirst={true} // ✅ This changes the order
        showButton={true}
        buttonText="Contact Us"
        buttonLink="/contact"
      // subheadingGray={false}
      />

      <BestDeepCleaning />
      <AchievementSection />
      <OurBestDeepClean />

      <LifeMadeEasySection
        title="How We Work"
        description="Our service for deep cleaning requires an effortless booking process. You can reach out to us by phone or through our website to book an appointment time. A member of our staff develops a specialized cleaning plan after analyzing your space requirements. Our team appears on the appointed day with state-of-the-art devices and environmentally friendly cleaning materials. A systematic, complete cleaning of every space takes place before our team conducts an inspection to verify flawless results. We align our work to satisfy customers while assuring exceptional results in every service."
        buttonText="Get an estimate"
        buttonLink="/booking"
        useSectionDescClass={false}
      />
      <BenefitsOfDeepCleaning />
      <ContactUsSection />
      <OurBestDeepClean sections={sixSections} />
      <GetAQuoteSection />

    </div>
  )
}
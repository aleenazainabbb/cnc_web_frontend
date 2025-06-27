"use Client"
import QuoteBannerSection from "@/components/request_page_component/QuoteBannerSection"
import BestDeepCleaning from "@/components/Cleaning_service_page/BestDeepCleanBanner"
import AchievementSection from "@/components/home_page_components/AchievementSection"
import LifeMadeEasySection from "@/components/home_page_components/LifeMadeEasySection"
import BenefitsOfDeepCleaning from "@/components/Cleaning_service_page/benefitsofDeepClean"
import ContactUsSection from "@/components/ContactUsSection"
import GetAQuoteSection from "@/components/GetAQuoteSection"
import OurBestDeepClean from "@/components/Cleaning_service_page/OurDeepCleanServices"
import BookYourService from "@/components/Cleaning_service_page/bookYourService"
import NeedHelp from "@/components/request_page_component/NeedHelp"
const sixSections = [
  {
    title: "Deep Cleaning",
    content:
      "Deep cleaning tackles the hidden grime and buildup that regular cleaning misses. From baseboards to ceiling fans, we target hard-to-reach areas, sanitize high-touch surfaces, and remove stubborn dirt and bacteria. This comprehensive process ensures your home or office is spotless, refreshed, and hygienic—creating a healthier space for your family or team."
  },
  {
    title: "Grease Trap Cleaning",
    content:
      "Kitchen grease traps, if left uncleaned, can lead to blockages and bad odors. Our grease trap cleaning service involves full removal of built-up fat, oil, and food waste, ensuring smooth drainage and compliance with health regulations. We use safe, effective methods to keep your commercial or residential kitchen running efficiently and odor-free."
  },
  {
    title: "Chandelier Cleaning",
    content:
      "Chandeliers enhance elegance, but they collect dust and lose their shine over time. Our specialized chandelier cleaning restores brilliance by delicately wiping every crystal and fixture with precision. Whether your piece is small or grand, we clean it thoroughly and safely—reviving its sparkle without damaging its structure or wiring."
  },
  {
    title: "Swimming Pool Cleaning",
    content:
      "A clean pool is vital for safety and enjoyment. Our pool cleaning service includes skimming, vacuuming, tile brushing, and chemical balancing. We remove debris, algae, and contaminants while ensuring your water is crystal clear and safe to swim in. Whether it's routine care or a deep seasonal clean, we keep your pool swim-ready."
  },
  {
    title: "Vehicle Cleaning",
    content:
      "Vehicles accumulate dust, pollutants, and interior stains that can affect comfort and hygiene. Our vehicle cleaning service includes interior vacuuming, fabric sanitization, dashboard detailing, and exterior washing. We restore your vehicle’s shine while eliminating bacteria and odors—making it look and feel like new again."
  },
  {
    title: "Upholstery Cleaning",
    content:
      "Furniture fabrics collect dust, allergens, and spills that dull appearance and cause health risks. Our upholstery cleaning process gently lifts stains and refreshes textures using safe, effective products. We clean sofas, chairs, and cushions to preserve fabric integrity and keep your home’s interior fresh and comfortable."
  },
  {
    title: "Duct Cleaning",
    content:
      "Dirty air ducts circulate dust, allergens, and bacteria throughout your space. Our duct cleaning removes debris from vents and HVAC systems, improving airflow and indoor air quality. This service helps reduce allergy symptoms, lowers energy bills, and promotes a healthier breathing environment for everyone."
  },
  {
    title: "Windows Cleaning",
    content:
      "Clear, streak-free windows brighten your space and enhance curb appeal. Our window cleaning service removes dirt, smudges, and water spots from both interior and exterior surfaces. Using eco-friendly solutions and proper techniques, we deliver a spotless finish—making your windows crystal clear and your rooms naturally brighter."
  },
  {
    title: "Maid Services",
    content:
      "Our maid services offer consistent, reliable cleaning for daily or weekly needs. Whether it’s dusting, mopping, dishwashing, or tidying up, our trained staff ensures your home stays neat and welcoming. Flexible scheduling, trustworthy staff, and attention to detail make our maid services a dependable part of your routine."
  }
];

export default function ServicePage() {
  return (
    <div>
      <QuoteBannerSection
        heading={
          <>
            Best Cleaning Services in <br />
            UAE from Care N Clean
          </>
        }
        subheading="Quality cleaning at a fair price."
        subheadingFirst={true}
        showButton={true}
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <BestDeepCleaning
        title="Best Cleaning Services in UAE from Care N Clean"
        paragraph={
          <>
            A clean space is not just about looks, it is about health, comfort, and peace of mind.{" "}
            <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
              Care N Clean
            </a>{" "}
            delivers top-tier cleaning services for both residential and commercial properties across the UAE. From dusting and disinfecting to deep cleaning and sanitization, our trained professionals use eco-friendly products and modern tools to ensure a spotless, germ-free environment. Whether it’s your home, office, or facility, we keep every corner clean, safe, and welcoming. Trust our team to maintain the hygiene and freshness you deserve.
          </>
        }
        imageSrc="/images/deepclean.png"
        imageAlt="Cleaning Services"
      />
      <AchievementSection />
      <BenefitsOfDeepCleaning
        title="What are Cleaning Services?"
        content="Cleaning services go beyond simple tidying. Our team inspects and deep-cleans every area of your home or workplace—including those often overlooked. From dust removal to disinfecting, we ensure a spotless, healthy environment. Regular cleaning prevents buildup, improves air quality, and keeps your space safe, fresh, and fully functional for your family or team."
        imageLeft={true}
        imageSrc="/images/cleaning2.png"
        imageAlt="Maintenance Image"
        points={[
          "Deep Cleaning",
          "Grease Trap",
          "Chandelier Cleaning",
          "Swimming Pool Cleaning",
          "Vehicle Cleaning",
          "Upholstery Cleaning",
          "Duct Cleaning",
          "Windows Cleaning",
          "Maid Services"
        ]}
      />
      <BookYourService
        title="Book Your Cleaning Services Today!"
        description="Refresh your home or office with Care N Clean’s professional cleaning services. From deep cleaning to upholstery, windows, and more, our trained team uses advanced tools and safe techniques to leave your space spotless and sanitized. Book today for a healthier, cleaner environment you can feel good about."
      />

      <LifeMadeEasySection
        title="How We Work"
        description="Booking cleaning services with Care N Clean is simple and seamless. Just call us or use our website to schedule a time that suits you. Our expert team assesses your space and creates a custom cleaning plan tailored to your needs. On the scheduled day, we arrive fully equipped with advanced tools and eco-friendly products. From deep corners to high surfaces, we clean every area thoroughly. After the job, we inspect everything to ensure it meets our high standards—delivering spotless results that exceed expectations."
        buttonText="Get an estimate"
        buttonLink="/booking"
        useSectionDescClass={false}
      />
      <BenefitsOfDeepCleaning
        title="Benefits of Cleaning"
        content="Regular cleaning enhances the hygiene, comfort, and overall look of your home or workspace. Our professional cleaning helps eliminate dust, allergens, and bacteria, creating a healthier environment. Deep and routine cleaning keeps surfaces, furnishings, and systems in better condition while preventing damage and wear. Whether it’s your floors, upholstery, or air ducts—consistent care ensures everything stays fresh, safe, and inviting for everyone who walks in."
        imageLeft={false}
        imageSrc="/images/cleaning3.png"
        imageAlt="Cleaning Benefits Image"
        points={[
          "Hygiene",
          "Allergen Removal",
          "Odor Control",
          "Surface Protection",
          "Air Quality",
          "Health Safety",
          "Freshness",
          "Well-being"
        ]}
      />
      <ContactUsSection />
       <NeedHelp/>
      <OurBestDeepClean
        sections={sixSections}
        mainTitle="Our Cleaning Services"
      />
     
      <GetAQuoteSection text="Expert Cleaning Services Across the UAE – Quick, Affordable, and Always Reliable." />
    </div>
  )
}
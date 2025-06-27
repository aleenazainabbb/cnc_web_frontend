"use Client"
import QuoteBannerSection from "@/components/request_page_component/QuoteBannerSection"
import BestDeepCleaning from "@/components/Cleaning_service_page/BestDeepCleanBanner"
import BenefitsOfDeepCleaning from "@/components/Cleaning_service_page/benefitsofDeepClean"
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
    // {
    //     title: "Swimming Pool Cleaning",
    //     content:
    //         "A clean pool is vital for safety and enjoyment. Our pool cleaning service includes skimming, vacuuming, tile brushing, and chemical balancing. We remove debris, algae, and contaminants while ensuring your water is crystal clear and safe to swim in. Whether it's routine care or a deep seasonal clean, we keep your pool swim-ready."
    // },
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

export default function SwimmingPoolPage() {
    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Swimming Pool Cleaning Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Swimming Pool Cleaning Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/deepclean/HeroSection.png"
            />
            <BestDeepCleaning
                title="Best Swimming Pool Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        A clean swimming pool is essential for relaxation, hygiene, and safety, especially in the UAE's warm climate.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        provides professional swimming pool cleaning services for homes, hotels, and recreational facilities. Our expert team uses advanced tools and eco-friendly solutions to remove dirt, algae, and debris while balancing water chemicals. Whether it’s regular upkeep or deep pool cleaning, we ensure crystal-clear water, safe pH levels, and a refreshing swimming experience for all users.
                    </>
                }
                imageSrc="/images/SwimmingPool/1.png"
                imageAlt="Swimming Pool Cleaning"
            />
            <BenefitsOfDeepCleaning
                title="Common Swimming Pool Problems"
                content="Over time, swimming pools can accumulate leaves, bacteria, algae, and chemical imbalances that affect water quality and user safety. Stagnant water, blocked filters, and slippery surfaces are just some of the issues that can make your pool unusable or unhealthy. Our trained professionals handle everything from skimming and vacuuming to pH balancing and filter cleaning—ensuring a clean, safe, and inviting pool environment."
                imageLeft={true}
                imageSrc="/images/SwimmingPool/2.jpg"
                imageAlt="Swimming Pool Problems"
                points={[
                    "Algae Growth",
                    "Cloudy Water",
                    "Chemical Imbalance",
                    "Clogged Filters",
                    "Slippery Surfaces",
                    "Floating Debris",
                    "Unpleasant Odors"
                ]}
                showViewServicesBtn={false}
            />
            <BookYourService
                title="Book Your Swimming Pool Cleaning Services Today!"
                description="Make your pool sparkle with Care N Clean's expert cleaning services. Whether it’s a private villa pool or a large commercial facility, our team ensures proper sanitation and maintenance. Book your service today and dive into a cleaner, safer swimming experience."
                defaultService="Swimming Pool"
            />
            <BenefitsOfDeepCleaning
                title="Benefits of Swimming Pool Cleaning"
                content="Regular swimming pool cleaning improves water quality, extends the life of your pool equipment, and ensures a safe experience for swimmers. From removing algae to maintaining proper chlorine levels, our service keeps your pool in top condition. Trust Care N Clean to deliver a hygienic and stress-free pool environment all year round."
                imageLeft={true}
                imageSrc="/images/SwimmingPool/3.jpg"
                imageAlt="Swimming Pool Benefits"
                points={[
                    "Clean & Clear Water",
                    "Algae Prevention",
                    "Balanced pH Levels",
                    "Safer Swim Experience",
                    "Odor Elimination",
                    "Longer Equipment Life",
                    "Regular Maintenance"
                ]}
                showViewServicesBtn={false}
            />
              <NeedHelp/>
            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />
          
            <GetAQuoteSection text="Trusted Swimming Pool Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
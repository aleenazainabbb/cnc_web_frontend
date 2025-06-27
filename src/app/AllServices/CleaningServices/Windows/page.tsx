"use Client"
import QuoteBannerSection from "@/components/request_page_component/QuoteBannerSection"
import BestDeepCleaning from "@/components/Cleaning_service_page/BestDeepCleanBanner"
import BenefitsOfDeepCleaning from "@/components/Cleaning_service_page/benefitsofDeepClean"
import GetAQuoteSection from "@/components/GetAQuoteSection"
import OurBestDeepClean from "@/components/Cleaning_service_page/OurDeepCleanServices"
import BookYourService from "@/components/Cleaning_service_page/bookYourService"
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
    // {
    //     title: "Windows Cleaning",
    //     content:
    //         "Clear, streak-free windows brighten your space and enhance curb appeal. Our window cleaning service removes dirt, smudges, and water spots from both interior and exterior surfaces. Using eco-friendly solutions and proper techniques, we deliver a spotless finish—making your windows crystal clear and your rooms naturally brighter."
    // },
    {
        title: "Maid Services",
        content:
            "Our maid services offer consistent, reliable cleaning for daily or weekly needs. Whether it’s dusting, mopping, dishwashing, or tidying up, our trained staff ensures your home stays neat and welcoming. Flexible scheduling, trustworthy staff, and attention to detail make our maid services a dependable part of your routine."
    }
];

export default function WindowsPage() {
    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Window Cleaning Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Window Cleaning Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/deepclean/HeroSection.png"
            />
            <BestDeepCleaning
                title="Best Windows Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Sparkling windows make a big impact on both residential and commercial spaces, enhancing natural light and overall appearance.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers professional window cleaning services across the UAE using safe techniques and streak-free solutions. Whether you have high-rise glass panels or home windows, our trained team delivers crystal-clear results without damaging frames or glass. Enjoy unobstructed views and a brighter space with our reliable, high-standard cleaning approach.
                    </>
                }
                imageSrc="/images/windows/1.jpg"
                imageAlt="Window Cleaning Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Window Cleaning Problems"
                content="Windows are exposed to dust, water spots, pollution, and fingerprints that build up over time and block natural light. Hard-to-reach areas often get neglected, and improper cleaning methods can leave streaks or damage the glass. Our experts ensure your windows are thoroughly cleaned inside and out, enhancing visibility, safety, and curb appeal."
                imageLeft={true}
                imageSrc="/images/windows/2.jpg"
                imageAlt="Window Cleaning Problems"
                points={[
                    "Water Spots",
                    "Dust Buildup",
                    "Streaky Glass",
                    "Sticky Residue",
                    "Bird Droppings",
                    "Blocked Sunlight",
                    "Hard-to-Reach Areas"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Window Cleaning Services Today!"
                description="Let the sunshine in! Book Care N Clean’s expert window cleaning service to enjoy spotless, streak-free windows. Whether it’s your home or commercial property, we’ll bring back the shine with professional care and efficiency."
                defaultService="Windows Cleaning"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Window Cleaning"
                content="Clean windows improve natural lighting, boost aesthetics, and extend the lifespan of your glass surfaces. With regular maintenance, you can prevent etching, reduce allergens, and create a cleaner, more inviting space. Trust Care N Clean for a reliable shine every time."
                imageLeft={true}
                imageSrc="/images/windows/3.jpg"
                imageAlt="Window Cleaning Benefits"
                points={[
                    "Streak-Free Shine",
                    "Improved Lighting",
                    "Enhanced Curb Appeal",
                    "Dust Reduction",
                    "Glass Preservation",
                    "Allergy Control",
                    "Professional Finish"
                ]}
                showViewServicesBtn={false}
            />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />
            <GetAQuoteSection text="Trusted Window Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
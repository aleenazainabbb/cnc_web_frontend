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
    // {
    //     title: "Chandelier Cleaning",
    //     content:
    //         "Chandeliers enhance elegance, but they collect dust and lose their shine over time. Our specialized chandelier cleaning restores brilliance by delicately wiping every crystal and fixture with precision. Whether your piece is small or grand, we clean it thoroughly and safely—reviving its sparkle without damaging its structure or wiring."
    // },
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

export default function ChandelierPage() {
    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Chandelier Cleaning Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Chandelier Cleaning Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            imageSrc="/images/banners/chandeliercleaning.png"
            />
            <BestDeepCleaning
                title="Best Chandelier Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Chandelier cleaning is essential for maintaining elegance, brightness, and safety in your space.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers specialized chandelier cleaning services for homes, hotels, offices, and event spaces across the UAE. Our skilled professionals use safe methods and delicate equipment to reach and clean every intricate piece—removing dust, grime, and tarnish from glass, crystal, and metallic elements. Whether it’s a simple ceiling fixture or a grand centerpiece, we restore your chandelier’s brilliance while preserving its integrity and beauty.
                    </>
                }
                imageSrc="/images/Chandelier/1.png"
                imageAlt="Chandelier Cleaning"
            />

            <BenefitsOfDeepCleaning
                title="Common Chandelier Problems"
                content="Over time, chandeliers collect dust, insects, and fingerprints, reducing their sparkle and causing dim lighting. Improper or infrequent cleaning can lead to corrosion, glass stains, or damage to delicate parts. Our trained staff handles every chandelier with care, ensuring thorough cleaning without disrupting its structure or design."
                imageLeft={true}
                imageSrc="/images/Chandelier/2.jpg"
                imageAlt="Chandelier Problems"
                points={[
                    "Dust Accumulation",
                    "Glass Smudges",
                    "Dull Appearance",
                    "Loose Fittings",
                    "Hard-to-Reach Fixtures",
                    "Delicate Parts at Risk",
                    "Reduced Light Output"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Chandelier Cleaning Services Today!"
                description="Let your chandelier shine like new. Whether in a home or commercial space, Care N Clean offers precise and professional chandelier cleaning. We ensure a safe, spotless, and sparkling result every time. Book now and restore the brilliance above your head."
                defaultService="Chandelier Cleaning"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Chandelier Cleaning"
                content="Regular chandelier cleaning not only enhances your interior aesthetics but also ensures safety and optimal lighting. Removing built-up dirt and grime improves brightness, prolongs fixture lifespan, and prevents wear or fire hazards. Trust Care N Clean for a meticulous clean that revives elegance and protects your valuable fixture."
                imageLeft={true}
                imageSrc="/images/Chandelier/3.jpg"
                imageAlt="Chandelier Benefits"
                points={[
                    "Improved Lighting",
                    "Enhanced Elegance",
                    "Dust-Free Fixtures",
                    "Safe Handling",
                    "Longer Lifespan",
                    "Brighter Interiors",
                    "Preserved Beauty"
                ]}
                showViewServicesBtn={false}
            />
             <NeedHelp/>
            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />
           
            <GetAQuoteSection text="Trusted Chandelier Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
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

export default function GreaseTrapPage() {
    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best GreaseTrap Cleaning Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality GreaseTrap Cleaning Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/deepclean/HeroSection.png"
            />
            <BestDeepCleaning
                title="Best Grease Trap Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Grease trap cleaning is essential for hygiene and plumbing efficiency in commercial kitchens and food establishments across the UAE.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers specialized grease trap cleaning services designed to remove built-up fats, oils, and sludge that can clog drainage systems and cause foul odors. Our skilled technicians use advanced equipment and eco-friendly solutions to fully clean, sanitize, and deodorize your traps—ensuring compliance with safety and health regulations. Count on us for timely, effective service that keeps your kitchen running clean and smoothly.
                    </>
                }
                imageSrc="/images/GreaseTrap/3.jpg"
                imageAlt="Grease Trap Cleaning"
            />
            <BenefitsOfDeepCleaning
                title="Common Grease Trap Problems"
                content="Grease traps, when neglected, can cause major hygiene and plumbing issues in commercial kitchens. Overflowing grease, slow drainage, and foul odors are signs of buildup that can lead to health code violations and system blockages. Our team clears out solid waste and greasy sludge to keep your trap functioning properly, ensuring a clean and safe working environment."
                imageLeft={true}
                imageSrc="/images/GreaseTrap/1.png"
                imageAlt="Grease Trap Problem"
                points={[
                    "Foul Odors",
                    "Grease Buildup",
                    "Clogged Lines",
                    "Overflow Risks",
                    "Slow Drainage",
                    "Health Hazards",
                    "Compliance Issues"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Grease Trap Cleaning Services Today!"
                description="Avoid costly plumbing repairs and unpleasant odors—book your grease trap cleaning with Care N Clean today. Our experts provide thorough, reliable service tailored to your kitchen's needs. Stay compliant, stay clean, and keep your operations running without interruption."
                defaultService="Grease Trap"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Grease Trap Cleaning"
                content="Regular grease trap cleaning improves kitchen hygiene, prevents blockages, and ensures compliance with local safety regulations. It also helps maintain efficient drainage, reduces odors, and supports better wastewater management. With Care N Clean, you get expert service that protects your business and keeps your kitchen running without interruption."
                imageLeft={true}
                imageSrc="/images/GreaseTrap/2.jpg"
                imageAlt="Grease Trap Benefits"
                points={[
                    "Odor Control",
                    "Drain Flow",
                    "Health Compliance",
                    "Blockage Prevention",
                    "Eco-Friendly Disposal",
                    "Kitchen Safety",
                    "Efficient Operation"
                ]}
                showViewServicesBtn={false}
            />
             <NeedHelp/>
            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />
           
            <GetAQuoteSection text="Trusted GreaseTrap Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
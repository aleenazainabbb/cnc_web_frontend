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
    // {
    //     title: "Duct Cleaning",
    //     content:
    //         "Dirty air ducts circulate dust, allergens, and bacteria throughout your space. Our duct cleaning removes debris from vents and HVAC systems, improving airflow and indoor air quality. This service helps reduce allergy symptoms, lowers energy bills, and promotes a healthier breathing environment for everyone."
    // },
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

export default function VehiclePage() {
    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Duct Cleaning Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Duct Cleaning Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/deepclean/HeroSection.png"
            />
            <BestDeepCleaning
                title="Best Duct Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Air ducts play a crucial role in maintaining indoor air quality and ventilation.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers professional duct cleaning services for residential and commercial spaces. Our expert technicians use advanced suction tools and sanitizing techniques to remove accumulated dust, mold, allergens, and pollutants. With our duct cleaning, you’ll enjoy healthier air circulation, improved HVAC efficiency, and reduced respiratory risks—making your indoor environment safer and more comfortable.
                    </>
                }
                imageSrc="/images/duct/2.jpg"
                imageAlt="Duct Cleaning Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Duct Problems"
                content="Over time, air ducts can become clogged with dust, pet dander, mold, and even pest debris—polluting the air you breathe and affecting your HVAC system’s performance. Dirty ducts reduce air quality, cause bad odors, and lead to uneven cooling or heating. Our trained team targets these hidden contaminants, restoring clean airflow and protecting your health and system longevity."
                imageLeft={true}
                imageSrc="/images/duct/1.jpg"
                imageAlt="Duct Cleaning Problems"
                points={[
                    "Dust Accumulation",
                    "Mold Growth",
                    "Unpleasant Odors",
                    "Blocked Vents",
                    "Pollen & Allergens",
                    "Pest Contaminants",
                    "Reduced Airflow"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Duct Cleaning Services Today!"
                description="Breathe easier with professional duct cleaning by Care N Clean. Our team ensures your ducts are thoroughly cleaned and sanitized—boosting indoor air quality and HVAC efficiency. Book now and improve your space with healthier, cleaner air."
                defaultService="Duct Cleaning"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Duct Cleaning"
                content="Regular duct cleaning leads to fresher air, reduced allergens, and better energy efficiency. Clean ducts help your HVAC system work smoothly while protecting your family or staff from respiratory issues. Let Care N Clean keep your ventilation system safe, clean, and efficient all year round."
                imageLeft={true}
                imageSrc="/images/duct/3.jpg"
                imageAlt="Duct Cleaning Benefits"
                points={[
                    "Cleaner Airflow",
                    "Energy Savings",
                    "Allergen Control",
                    "Odor Reduction",
                    "Improved HVAC Efficiency",
                    "Mold Prevention",
                    "Healthier Environment"
                ]}
                showViewServicesBtn={false}
            />

            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />
            <GetAQuoteSection text="Trusted Upholstery Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
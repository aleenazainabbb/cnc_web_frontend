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
    // {
    //     title: "Maid Services",
    //     content:
    //         "Our maid services offer consistent, reliable cleaning for daily or weekly needs. Whether it’s dusting, mopping, dishwashing, or tidying up, our trained staff ensures your home stays neat and welcoming. Flexible scheduling, trustworthy staff, and attention to detail make our maid services a dependable part of your routine."
    // }
];

export default function MaidPage() {
    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Maid Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Maid Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/deepclean/HeroSection.png"
            />
            <BestDeepCleaning
                title="Best Maid Services in UAE from Care N Clean"
                paragraph={
                    <>
                        A clean home brings comfort, peace, and productivity—and{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        makes it effortless with our professional maid services. Whether you need daily cleaning, weekly upkeep, or occasional deep cleaning, our trained maids provide flexible and reliable service for homes across the UAE. We handle everything from dusting, mopping, and bathroom sanitization to organizing spaces, using safe cleaning materials and thorough attention to detail. Relax and let our team maintain a fresh, hygienic environment for your family.
                    </>
                }
                imageSrc="/images/maid/4.jpg"
                imageAlt="Maid Cleaning Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Maid Service Needs"
                content="Busy schedules, guests, kids, or just everyday messes can leave homes cluttered and unclean. Dust on surfaces, smudged mirrors, messy kitchens, and unsanitary bathrooms are frequent issues. Our maids are trained to handle all routine and customized tasks to keep your space spotless, organized, and welcoming."
                imageLeft={true}
                imageSrc="/images/maid/2.jpg"
                imageAlt="Maid Cleaning Challenges"
                points={[
                    "Dusty Surfaces",
                    "Unclean Bathrooms",
                    "Kitchen Grease",
                    "Smudged Glass",
                    "Unmade Beds",
                    "Cluttered Spaces",
                    "Floor Dirt"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Maid Services Today!"
                description="Leave the cleaning to us! Book Care N Clean’s trusted maid services for consistent, high-quality home care. Choose from flexible plans and let our professionals handle the dirt—so you can enjoy a fresher, calmer home."
                defaultService="Maid Services"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Maid Cleaning"
                content="Hiring professional maids means more free time, consistent cleanliness, and peace of mind. Regular maid services reduce stress, improve hygiene, and help maintain the overall quality of your living environment. With Care N Clean, enjoy reliable service tailored to your lifestyle."
                imageLeft={true}
                imageSrc="/images/maid/3.jpg"
                imageAlt="Maid Service Benefits"
                points={[
                    "Time-Saving",
                    "Daily Freshness",
                    "Sanitized Spaces",
                    "Consistent Cleaning",
                    "Stress Reduction",
                    "Flexible Scheduling",
                    "Trained Professionals"
                ]}
                showViewServicesBtn={false}
            />
             <NeedHelp/>

            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />
           
            <GetAQuoteSection text="Trusted Maid Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
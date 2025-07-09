export const metadata = {
    title: "Hepler Maid Services in UAE - Care N Clean",
    description: "Looking for a reliable maid service in UAE? Care n Clean provides trained and trustworthy helpers for all your home cleaning needs.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Expert Maid Services in UAE",
        description: "Enjoy stress-free cleaning with our trusted maid services. From daily upkeep to deep sanitation, we keep your home clean, safe, and fresh.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/CleaningServices/Maid",
        images: [
            {
                url: "http://192.168.18.13:3000/images/maid/4.jpg",
                width: 1200,
                height: 630,
                alt: "Professional Maid Services UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Care N Clean - Trusted Maid Services in UAE",
        description: "Book reliable and flexible maid services for your home or office. Consistent cleanliness and expert care from trained staff.",
        images: ["http://192.168.18.13:3000/images/maid/4.jpg"],
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};

import QuoteBannerSection from "@/components/request_page_component/QuoteBannerSection"
import BestDeepCleaning from "@/components/Cleaning_service_page/BestDeepCleanBanner"
import BenefitsOfDeepCleaning from "@/components/Cleaning_service_page/benefitsofDeepClean"
import GetAQuoteSection from "@/components/GetAQuoteSection"
import OurBestDeepClean from "@/components/Cleaning_service_page/OurDeepCleanServices"
import BookYourService from "@/components/Cleaning_service_page/bookYourService"
import NeedHelp from "@/components/request_page_component/NeedHelp"
import AutoBreadcrumb from "@/components/popups/Breadcrumbs";
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
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/Maid.png"
            />
            <AutoBreadcrumb />
            <BestDeepCleaning
                title="Best Maid Services in UAE from Care N Clean"
                paragraph={
                    <>
                        We want to reassure you that our teams strictly adhere to sanitization guidelines. We follow cleaning processes and procedures that are sketched out to help
                        create a cleaner and healthier environment for you and your family. For additional safety and protection for everyone, our teams are provided with masks and
                        gloves to use while working at your home. Our team of experts is at your service at any time of the day. {" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        is the best company where you can take help regarding all these cleaning tasks in UAE.
                    </>
                }
                imageSrc="/images/maid/4.jpg"
                imageAlt="Maid Cleaning Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Maid Service Needs"
                content="Busy schedules, guests, kids, or just everyday messes can leave homes cluttered and unclean. Dust on surfaces, smudged mirrors, messy kitchens, and unsanitary
                 bathrooms are frequent issues. Our maids are trained to handle all routine and customized tasks to keep your space spotless, organized, and welcoming. Our proficient 
                 staff members are eagerly waiting to help you out, therefore, before wasting any further time we encourage you to start with your booking to benefit yourself from this
                  service!"
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
                description="Our helpers are trained in hard skills and soft skills to perform all their work efficiently. We give in-house training to keep our workers proficient. 
                Our proficient staff members are eagerly waiting to help you out, therefore, before wasting any further time we encourage you to start with your booking to benefit 
                yourself from this service! Book Our Maid Services now!"
                defaultService="Maid Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Maid Services Needs"
                content="If you're based in UAE and desire to get your home cleaned then book a Care N Clean’s helpers maid service UAE and spend your time with your friends 
                 and family instead of washing the dishes and doing other random stuff at home. Regular maid services reduce stress, improve hygiene, and help
                 maintain the overall quality of your living environment. With Care N Clean, enjoy reliable service tailored to your lifestyle."
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
            <div id="get-a-quote">
                <NeedHelp />
            </div>

            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />

            <GetAQuoteSection text="Trusted Maid Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
export const metadata = {
    title: "Commercial Vehicle Cleaning Service in UAE - Care N Clean",
    description: "Ensure a clean and hygienic fleet with Care n Clean’s commercial vehicle cleaning service in UAE. Professional washing and detailing.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Professional Vehicle Cleaning in UAE",
        description: "Get your car cleaned inside and out by professionals. We offer interior detailing, dashboard sanitization, and full exterior wash.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/CleaningServices/VehicleCleaning",
        images: [
            {
                url: "http://192.168.18.13:3000/images/vehicle/1.jpg",
                width: 1200,
                height: 630,
                alt: "Vehicle Cleaning UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vehicle Cleaning by Care N Clean",
        description: "Interior and exterior car detailing in UAE. Book your expert vehicle cleaning service today with Care N Clean.",
        images: ["http://192.168.18.13:3000/images/vehicle/1.jpg"],
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

export default function VehiclePage() {
    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Vehicle Cleaning Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Vehicle Cleaning Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/vehiclecleaning.png"
            />
            <AutoBreadcrumb />
            <BestDeepCleaning
                title="Best Vehicle Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        A clean vehicle not only enhances appearance but also preserves its value and performance.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers professional vehicle cleaning services across the UAE for cars, SUVs, vans, and more. Our expert team uses premium products and tools to perform
                        thorough exterior washes, interior detailing, upholstery cleaning, and engine bay cleaning. Whether for regular upkeep or deep cleaning, we make sure your
                        vehicle stays spotless, sanitized, and road ready inside and out. Our team is well equipped with the
                        knowledge and skills to take it to the wow factor.
                    </>
                }
                imageSrc="/images/vehicle/1.jpg"
                imageAlt="Vehicle Cleaning Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Vehicle Problems"
                content="Vehicles gather dust, stains, road grime, and bacteria over time, especially in the UAE’s dusty environment. Dirty interiors, stained upholstery, unpleasant
                 odors, and water spots can affect both hygiene and driving comfort. Our vehicle cleaning experts tackle every detail—from dashboard to carpets—to remove stubborn 
                 buildup and restore a fresh, clean feel. No need to take tension, when you have a well-managed team of Care n Clean."
                imageLeft={true}
                imageSrc="/images/vehicle/2.jpg"
                imageAlt="Vehicle Cleaning Issues"
                points={[
                    "Stained Upholstery",
                    "Dusty Interiors",
                    "Sticky Surfaces",
                    "Exterior Dirt Build-up",
                    "Unpleasant Odors",
                    "Smudged Windows",
                    "Tire and Rim Grime"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Vehicle Cleaning Services Today!"
                description="We will help you achieve your goals with our services. So, you can focus on your work only! Our workers are eagerly waiting to help you out, therefore,
                 before wasting any further time we encourage you to start with your booking in order to benefit yourself from this service!"
                defaultService="Vehicle Cleaning"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Vehicle Cleaning"
                content="Regular vehicle cleaning enhances appearance, preserves resale value, and promotes a healthier environment inside your car. With deep cleaning of fabrics, surfaces, and ventilation, our team removes dust, bacteria, and allergens—leaving your vehicle refreshed and protected from long-term wear and tear."
                imageLeft={true}
                imageSrc="/images/vehicle/3.jpg"
                imageAlt="Vehicle Cleaning Benefits"
                points={[
                    "Shiny Exterior",
                    "Clean Interiors",
                    "Odor-Free Cabin",
                    "Better Air Quality",
                    "Stain Removal",
                    "Preserved Value",
                    "Driver Comfort"
                ]}
                showViewServicesBtn={false}
            />
            <div id="get-a-quote">
                <NeedHelp />
            </div>

            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />

            <GetAQuoteSection text="Trusted Vehicle Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
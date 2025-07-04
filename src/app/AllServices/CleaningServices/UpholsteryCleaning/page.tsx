export const metadata = {
    title: "Upholstery Cleaning Services in UAE - Care N Clean",
    description: "Revive your furniture with expert upholstery cleaning services in UAE. Care N Clean offers deep cleaning for sofas, carpets, and mattresses.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Expert Upholstery Cleaning in UAE",
        description: "Book expert upholstery cleaning in UAE for sofas, chairs, cushions, and more. We restore freshness and remove allergens using safe products.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/CleaningServices/UpholsteryCleaning",
        images: [
            {
                url: "http://192.168.18.13:3000/images/maid/4.jpg",
                width: 1200,
                height: 630,
                alt: "Upholstery Cleaning UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Upholstery Cleaning by Care N Clean",
        description: "Revive your furniture with deep upholstery cleaning services across UAE by Care N Clean.",
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
                        Best Upholstery Cleaning Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Upholstery Cleaning Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/Upholstery.png"
            />
            <AutoBreadcrumb />
            <BestDeepCleaning
                title="Best Upholstery Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Upholstery cleaning is essential for keeping your home or office furniture fresh, hygienic, and long-lasting.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers specialized upholstery cleaning services across the UAE using advanced tools and eco-safe products. Our skilled professionals remove deep-seated dust, stains, and allergens from sofas, chairs, mattresses, and fabric panels. Whether you need stain removal, odor treatment, or overall fabric refresh, we restore your upholstery to a clean, like-new condition—improving air quality and comfort in your space.
                    </>
                }
                imageSrc="/images/upholstery/1.jpg"
                imageAlt="Upholstery Cleaning Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Upholstery Problems"
                content="Over time, upholstery collects dust, body oils, food crumbs, allergens, and stains that affect both the appearance and hygiene of your furniture. Left 
                untreated, these issues can lead to unpleasant odors, faded colors, and worn-out fabrics.
                Our trained technicians demonstrate upholstery cleaning with the highly-effective techniques. The cleaning will help in removing the invisible bacteria and completely 
                wipe it away from your expensive upholstery.
"
                imageLeft={true}
                imageSrc="/images/upholstery/2.jpg"
                imageAlt="Upholstery Cleaning Issues"
                points={[
                    "Stubborn Stains",
                    "Dust Buildup",
                    "Foul Odors",
                    "Allergen Accumulation",
                    "Color Fading",
                    "Pet Hair & Dander",
                    "Fabric Deterioration"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Upholstery Cleaning Services Today!"
                description="We can sterilize, disinfect and secure your furniture after every cleaning. Our proficient staff members
                 are eagerly waiting to help you out. Therefore, before wasting any further time, hire the finest upholstery cleaning services in UAE.  Book your service today and 
                 enjoy a cleaner, healthier indoor space."
                defaultService="Upholstery Cleaning"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Upholstery Cleaning"
                content="Regular upholstery cleaning improves indoor air quality, extends furniture life, and enhances your living or working environment. Our service removes deep-set dirt, bacteria, and allergens—giving your space a fresh feel and a hygienic touch. Whether at home or in the office, clean furniture makes a big difference."
                imageLeft={true}
                imageSrc="/images/upholstery/3.jpg"
                imageAlt="Upholstery Cleaning Benefits"
                points={[
                    "Stain-Free Surfaces",
                    "Odor Removal",
                    "Improved Air Quality",
                    "Prolonged Fabric Life",
                    "Allergen Reduction",
                    "Fresh Appearance",
                    "Comfort Restoration"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />

            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />

            <GetAQuoteSection text="Trusted Upholstery Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
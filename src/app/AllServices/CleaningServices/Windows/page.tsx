export const metadata = {
    title: "Window Cleaning Services in UAE - Care N Clean",
    description: "Get sparkling clean windows with Care n Clean’s professional window cleaning services in UAE. Expert service for homes and offices.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Expert Window Cleaning in UAE",
        description: "Clear your view with professional window cleaning services across UAE. From high-rise buildings to homes—we make glass shine!",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/CleaningServices/Windows",
        images: [
            {
                url: "http://192.168.18.13:3000/images/windows/1.jpg",
                width: 1200,
                height: 630,
                alt: "Window Cleaning UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Window Cleaning by Care N Clean",
        description: "Enjoy crystal-clear windows in your home or office with Care N Clean’s expert glass cleaning services in UAE.",
        images: ["http://192.168.18.13:3000/images/windows/1.jpg"],
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
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/windowclean.png"
            />
            <AutoBreadcrumb />
            <BestDeepCleaning
                title="Best Windows Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Sparkling windows make a big impact on both residential and commercial spaces, enhancing natural light and overall appearance.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers professional window cleaning services across the UAE using safe techniques and streak-free solutions. Our technicians are experienced in cleaning all
                        types of windows including single pane, double pane, French pane, skylights, glass panels, storm windows, etc. We have all the equipment necessary to clean
                        the window. Care n Clean is the best company where you can take help regarding all these cleaning tasks in UAE.
                    </>
                }
                imageSrc="/images/windows/1.png"
                imageAlt="Window Cleaning Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Window Cleaning Problems"
                content="Windows are exposed to dust, water spots, pollution, and fingerprints that build up over time and block natural light. Hard-to-reach areas often get neglected, and improper cleaning methods can leave streaks or damage the glass. Our experts ensure your windows are thoroughly cleaned inside and out, enhancing visibility, safety, and curb appeal."
                imageLeft={true}
                imageSrc="/images/windows/2.png"
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
                description="Our team of experts is at your service at any time of the day. Our proficient staff members are eagerly waiting to help you out, therefore, before wasting
                 any further time we encourage you to start with your booking in order to benefit yourself from this service. Book your Window Cleaning Service now!"
                defaultService="Windows Cleaning"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Window Cleaning"
                content="Clean windows improve natural lighting, boost aesthetics, and extend the lifespan of your glass surfaces. With regular maintenance, you can prevent etching, 
                reduce allergens, and create a cleaner, more inviting space. Trust Care N Clean for a reliable shine every time. If you have dirty windows, you won’t be getting as much
                 light as it should come! No need to worry, Care n Clean has a solution to all of your problems."
                imageLeft={true}
                imageSrc="/images/windows/3.png"
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
            <div id="get-a-quote">
                <NeedHelp />
            </div>
            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />
            <GetAQuoteSection text="Trusted Window Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
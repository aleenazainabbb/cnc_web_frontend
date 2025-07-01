export const metadata = {
    title: "Best Deep Cleaning Services in UAE - Care N Clean",
    description: "Professional deep cleaning services by Care N Clean in UAE. We eliminate hidden dirt, allergens, and germs using eco-friendly products and expert techniques.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Best Deep Cleaning Services in UAE",
        description: "Book reliable deep cleaning services for homes, offices, and commercial spaces. Remove stains, dust, and odors for a fresher, healthier environment.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/CleaningServices/DeepCleaning", 
        images: [
            {
                url: "http://192.168.18.13:3000/images/deepclean/2.png",
                width: 1200,
                height: 630,
                alt: "Deep Cleaning Services UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Care N Clean - Deep Cleaning UAE",
        description: "Revitalize your space with professional deep cleaning. Safe, thorough, and eco-friendly—Care N Clean is trusted across the UAE.",
        images: ["http://192.168.18.13:3000/images/deepclean/2.png"],
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
    {
        title: "Maid Services",
        content:
            "Our maid services offer consistent, reliable cleaning for daily or weekly needs. Whether it’s dusting, mopping, dishwashing, or tidying up, our trained staff ensures your home stays neat and welcoming. Flexible scheduling, trustworthy staff, and attention to detail make our maid services a dependable part of your routine."
    }
];

export default function ServicePage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Deep Cleaning Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Deep Cleaning Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
                imageSrc="/images/banners/DeepCleaning.png"
            />
            <AutoBreadcrumb/>
            <BestDeepCleaning
                title="Best Deep Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        The UAE market requires deep cleaning services.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        provides expert deep cleaning services for both residential and commercial buildings. Our professionals create a spotless environment with fresh air free from germs. With our expert team, we deliver optimal results using high-quality equipment along with sustainable cleaning products of the best quality. Your well-being and comfort, together with your mental serenity, improve through an environment maintained in clean condition. Deep cleaning performed beyond regular cleaning eliminates the complete presence of hidden dirt along with allergens and germs.   </>
                }
                imageSrc="/images/deepclean/2.png"
                imageAlt="Deep Cleaning Services"
            />
            <BenefitsOfDeepCleaning
                title="Common Deep Cleaning Problems"
                content="Dirt and germs often hide in places regular cleaning can’t reach—under furniture, behind appliances, or deep in carpets and vents. Without proper care, these areas collect dust, bacteria, and allergens that affect air quality and hygiene. Common issues include stained tiles, mold in bathrooms, greasy kitchen surfaces, and buildup in corners and fixtures. Our deep cleaning team tackles these hidden messes with advanced tools and techniques, ensuring your space is not just clean—but truly refreshed and sanitized."
                imageLeft={true}
                imageSrc="/images/deepclean/3.png"
                imageAlt="Deep Cleaning Image"
                points={[
                    "Tile Stains",
                    "Hidden Dust",
                    "Greasy Surfaces",
                    "Mold Growth",
                    "Odor Buildup",
                    "Allergen Traps",
                    "Neglected Corners"
                ]}
                showViewServicesBtn={false}
            />
            <BookYourService
                title="Book Your Deep Cleaning Services Today!"
                description="The deep cleaning service performed by Care N Clean delivers a superior quality solution in the UAE market. Our company provides cleaning services for 
                homes and offices together with commercial spaces. Our skilled staff members provide top-quality cleaning services that match every specific requirement. Secure your 
                deep cleaning service right now to get a healthier environment and a clean space."
                defaultService="Deep Cleaning" />
            <BenefitsOfDeepCleaning
                title="Benefits of Deep Cleaning"
                content="Proficient cleaning techniques eliminate allergens and bacteria alongside dust, producing cleaner air and minimizing infection risks. The complete cleaning routine reaches every location that regular maintenance fails to achieve, ensuring a contamination-free environment. The cleaning method enhances sanitation standards and comfort quality, which produces better home and workplace health conditions."
                imageLeft={true}
                imageSrc="/images/benefits.png"
                imageAlt="Carpentry Image"
                points={[
                    "Cleaner Air",
                    "Germ Removal",
                    "Allergen Reduction",
                    "Hidden Dirt Cleanup",
                    "Better Hygiene",
                    "Odor Elimination",
                    "Healthier Spaces"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />
            <GetAQuoteSection text="Trusted Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
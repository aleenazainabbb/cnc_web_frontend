export const metadata = {
    title: "Grease Trap Cleaning Services in Dubai - Care N Clean",
    description: "Maintain hygiene with Care n Clean’s grease trap cleaning services in Dubai. Professional cleaning for restaurants, hotels, and commercial kitchens.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Grease Trap Cleaning Services in Dubai - Care N Clean",
        description: "Professional grease trap cleaning in Dubai by Care n Clean. Trusted by restaurants, hotels, and commercial kitchens for hygiene and safety.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/CleaningServices/GreaseTrap", // update if needed
        images: [
            {
                url: "http://192.168.18.13:3000/images/GreaseTrap/3.jpg", // update path if hosted elsewhere
                width: 1200,
                height: 630,
                alt: "Grease Trap Cleaning Dubai",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Grease Trap Cleaning Services Dubai - Care n Clean",
        description: "Ensure hygiene in your kitchen with expert grease trap cleaning from Care n Clean in Dubai.",
        images: ["http://192.168.18.13:3000/images/GreaseTrap/3.jpg"], // match the Open Graph image
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
                imageSrc="/images/banners/GreaseTrap.png"
            />
            <BestDeepCleaning
                title="Best Grease Trap Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        A grease trap plays a vital role in your foodservice operation.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers specialized grease trap cleaning services designed to remove built-up fats, oils, and sludge that can clog drainage systems and cause foul odors.
                        Our skilled technicians use advanced equipment and eco-friendly solutions to fully clean, sanitize, and deodorize your traps—ensuring compliance with safety
                        and health regulations. The grease trap service is a safe, clean
                        way to get rid of your restaurant of fats, oil, and grease (FOG).
                    </>
                }
                imageSrc="/images/GreaseTrap/3.jpg"
                imageAlt="Grease Trap Cleaning"
            />
            <BenefitsOfDeepCleaning
                title="Common Grease Trap Problems"
                content="Grease traps, when neglected, can cause major hygiene and plumbing issues in commercial kitchens. Overflowing grease, slow drainage, and foul odors are
                 signs of buildup that can lead to health code violations and system blockages. Our team clears out solid waste and greasy sludge to keep your trap functioning 
                 properly, ensuring a clean and safe working environment. The professionals at Care n Clean have broadened their ability, information, and experience that is 
                 fundamental for making the oil traps stainless and usable.
"
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
                description="Customer’s satisfaction and trust on our organization is very important to us. We ensure the quality of work. As our logo says “your happiness, our pride”.
                 You can take advantage of our grease trap cleaning services Dubai. Therefore, we encourage you to start with your booking to benefit yourself from this service!"
                defaultService="Grease Trap"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Grease Trap Cleaning"
                content="If you notice any pitfall in your grease trap system, it can lead to sewer or drain backups and poisonous smells. Proper grease trap cleaning and maintenance
                 is a must to keep your operations running efficiently. With Care N Clean, you get expert service that protects your business and keeps your 
                kitchen running without interruption. Our workers are well trained and experienced. We give in-house training to keep our workers proficient. "
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
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />

            <GetAQuoteSection text="Trusted GreaseTrap Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
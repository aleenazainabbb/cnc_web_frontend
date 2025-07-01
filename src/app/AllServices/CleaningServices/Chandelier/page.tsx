export const metadata = {
    title: "Chandelier Cleaning Services in UAE - Care N Clean",
    description: "Restore the shine of your chandeliers with Care n Clean’s expert chandelier cleaning services in UAE. Professional and delicate cleaning solutions.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Chandelier Cleaning Services UAE - Care N Clean",
        description: "Restore the shine of your chandeliers with Care n Clean’s expert chandelier cleaning services in UAE. Professional and delicate cleaning solutions.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/CleaningServices/Chandelier", // Update to actual route
        images: [
            {
                url: "http://192.168.18.13:3000/images/Chandelier/1.png",
                width: 1200,
                height: 630,
                alt: "Chandelier Cleaning Services UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Care N Clean - Professional Chandelier Cleaning",
        description: "Make your chandeliers sparkle again. Safe, professional, and trusted chandelier cleaning services available across the UAE.",
        images: ["http://192.168.18.13:3000/images/Chandelier/1.png"],
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
            <AutoBreadcrumb/>
            <BestDeepCleaning
                title="Best Chandelier Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Chandelier cleaning is essential for maintaining elegance, brightness, and safety in your space.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers offer comprehensive chandelier cleaning services designed to meet your specific needs. We offer comprehensive chandelier cleaning services designed to
                        meet your specific needs. From dust removal to crystal polishing our skilled team ensures your chandelier regains its original brilliance. No matter the size,
                        style, or complexity, we handle each piece with expert care and precision. With 15 years of experience, we specialize in cleaning all types of chandeliers
                        that shine like new. Trusted by homes, hotels, businesses, and major names across the UAE—including government entities and the hotel industry. We deliver
                        reliable, safe, and stunning results every time.
                    </>
                }
                imageSrc="/images/Chandelier/1.png"
                imageAlt="Chandelier Cleaning"
            />

            <BenefitsOfDeepCleaning
                title="Common Chandelier Problems"
                content="If your chandelier has lost its sparkle and looks darker or dirtier than before, it’s likely covered in dust and grime.Dust buildup on chandeliers can spread 
                allergens into the air, causing sneezing, coughing, or itchy eyes. If you're experiencing allergy symptoms at home, your chandelier could be part of the problem.
                 If your lighting seems dim or uneven, it’s time for a thorough cleaning."
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
                description="Let your chandeliers shine again with our professional cleaning service in UAE. Safety, professionalism, and a dazzling finish are guaranteed. Whether in a home or commercial space, Care N Clean offers precise and professional chandelier cleaning. We ensure a safe, spotless, and sparkling result every time. Book now and restore the brilliance above your head."
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
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />

            <GetAQuoteSection text="Complete Residential and Commercial Handyman & Maintenance Services in UAE." />
        </div>

    )
}
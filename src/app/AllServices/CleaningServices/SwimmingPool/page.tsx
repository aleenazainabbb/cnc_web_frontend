export const metadata = {
  title: "Swimming Pool Cleaning Services in UAE - Care N Clean",
  description: "Keep your pool clean and safe with Care n Clean’s swimming pool cleaning services in UAE. Expert maintenance for crystal-clear water.",
  authors: [{ name: "Softnio" }],
  openGraph: {
    title: "Care N Clean - Expert Swimming Pool Cleaning in UAE",
    description: "Book reliable pool cleaning for homes, hotels, spas, and more. Our certified experts ensure your water is safe, clean, and swim-ready.",
    type: "website",
    url: "http://192.168.18.13:3000/AllServices/CleaningServices/SwimmingPool",
    images: [
      {
        url: "http://192.168.18.13:3000/images/SwimmingPool/1.png",
        width: 1200,
        height: 630,
        alt: "Swimming Pool Cleaning UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swimming Pool Cleaning by Care N Clean",
    description: "Keep your pool safe and sparkling with Care N Clean’s expert pool cleaning services in the UAE.",
    images: ["http://192.168.18.13:3000/images/SwimmingPool/1.png"],
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

export default function SwimmingPoolPage() {
    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Swimming Pool Cleaning Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Swimming Pool Cleaning Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            imageSrc="/images/banners/PoolCleaning.png"
            />
            <AutoBreadcrumb/>
            <BestDeepCleaning
                title="Best Swimming Pool Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        provides professional swimming pool cleaning services for homes, hotels, and recreational facilities. Our expert team uses advanced tools and eco-friendly 
                        solutions to remove dirt, algae, and debris while balancing water chemicals. We provide swimming pool cleaning services for swimming and wading pools, as well 
                        as cleaning services for spas, hot tubs, whirlpools, and saunas. Our pool professionals are highly skilled, trained, and licensed to handle any pool cleaning
                         project, no matter how big or small it is.
                    </>
                }
                imageSrc="/images/SwimmingPool/1.png"
                imageAlt="Swimming Pool Cleaning"
            />
            <BenefitsOfDeepCleaning
                title="Common Swimming Pool Problems"
                content="Over time, swimming pools can accumulate leaves, bacteria, algae, and chemical imbalances that affect water quality and user safety. Stagnant water, blocked 
                filters, and slippery surfaces are just some of the issues that can make your pool unusable or unhealthy. Dirty water can even break down pool filters and pumps. Water
                 should be clean enough to see the bottom of your pool, and it should feel good on the skin. Unclean water can leave spots on the surface of your pool and sting the eyes
                  of your swimmers."
                imageLeft={true}
                imageSrc="/images/SwimmingPool/2.jpg"
                imageAlt="Swimming Pool Problems"
                points={[
                    "Algae Growth",
                    "Cloudy Water",
                    "Chemical Imbalance",
                    "Clogged Filters",
                    "Slippery Surfaces",
                    "Floating Debris",
                    "Unpleasant Odors"
                ]}
                showViewServicesBtn={false}
            />
            <BookYourService
                title="Book Your Swimming Pool Cleaning Services Today!"
                description="Caren Clean has partnered with one of the best pool cleaning experts that evaluate your pool's cleaning condition thoroughly and perform cleaning activities with such
                 dexterity that you’ll find zero cleaning problems once they’re done. Schedule your cleaning appointment right away!"
                defaultService="Swimming Pool"
            />
            <BenefitsOfDeepCleaning
                title="Benefits of Swimming Pool Cleaning"
                content="Regular swimming pool cleaning improves water quality, extends the life of your pool equipment, and ensures a safe experience for swimmers. From removing algae to maintaining proper chlorine levels, our service keeps your pool in top condition. Trust Care N Clean to deliver a hygienic and stress-free pool environment all year round."
                imageLeft={true}
                imageSrc="/images/SwimmingPool/3.jpg"
                imageAlt="Swimming Pool Benefits"
                points={[
                    "Clean & Clear Water",
                    "Algae Prevention",
                    "Balanced pH Levels",
                    "Safer Swim Experience",
                    "Odor Elimination",
                    "Longer Equipment Life",
                    "Regular Maintenance"
                ]}
                showViewServicesBtn={false}
            />
              <NeedHelp/>
            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />
            <GetAQuoteSection text="Trusted Swimming Pool Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
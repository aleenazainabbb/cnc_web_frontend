export const metadata = {
    title: "International Moving Services - International Movers in UAE - Care N Clean",
    description: "Care n Cleans provides the best International Moving Services in UAE. We're top-rated International movers in UAE that ensures every aspect of your move is seamless and hassle-free!",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Expert International Relocation Services from UAE",
        description: "From paperwork to delivery, trust Care N Clean for professional international moving services. Safe, fast, and efficient worldwide relocation.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/MovingServices/International",
        images: [
            {
                url: "http://192.168.18.13:3000/images/Moving/international/1.jpg",
                width: 1200,
                height: 630,
                alt: "International Moving Services UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Smooth International Moves from UAE | Care N Clean",
        description: "Need help relocating abroad? Care N Clean offers international moving services with customs support and secure transport. Book your move today!",
        images: ["http://192.168.18.13:3000/images/Moving/international/1.jpg"],
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
        title: "Local Moving",
        content:
            "Local moves still require careful planning and safe handling. Our team helps you move your home or office within the city with ease. We pack your items, load them safely, and deliver everything to your new place on time. With our support, even short-distance moves feel smooth, fast, and stress-free.",
    },
    {
        title: "Storage Services",
        content:
            "Sometimes you need a safe space to store your things during or after a move. Our secure storage service gives you peace of mind, whether it's for a few days or a few months. We handle your belongings with care and keep them in clean, climate-controlled spaces until you're ready to use them again.",
    },
];

export default function InternationalMovingPage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best International Moving Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality International Moving Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/InternationalMoving.png"
            />
            <AutoBreadcrumb />
            <BestDeepCleaning
                title="Best International Moving Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Moving abroad can be overwhelming, but{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        makes international relocation smooth and hassle-free. With years of experience, we are a team of competent people who will do everything in order to be able to
                        meet the needs and requirements of our clients. We ensure professionalism and world-class quality standards in international moving services. Now, you can move
                        anywhere in the world without stressing about your essentials being safe or not. Because Care n Clean has a solution to all of your transport-related issues.
                        Our team of efficient and hard-working people makes sure to provide you with the best of services.
                    </>
                }
                imageSrc="/images/Moving/international/1.jpg"
                imageAlt="International Moving Services"
            />

            <BenefitsOfDeepCleaning
                title="Common International Moving Problems"
                content="International relocation can be stressful due to customs delays, poor packing, damaged items, and unclear regulations. Inexperienced movers may also mismanage timelines or lose track of inventory. These issues can lead to unexpected expenses, frustration, and delays. With professional support, you can avoid these pitfalls and ensure a smooth, efficient moving experience."
                imageLeft={true}
                imageSrc="/images/Moving/international/2.jpg"
                imageAlt="International Moving Problems"
                points={[
                    "Customs Delays",
                    "Improper Packing",
                    "Damaged Items",
                    "Inventory Loss",
                    "Hidden Costs",
                    "Poor Coordination",
                    "Regulatory Issues"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your International Moving Service Today!"
                description="Our team of experts is at your service at any time of the day. Care n Clean is the best company where you can take help regarding all these international
                 moving services-related queries in UAE. Our proficient staff members are eagerly waiting to help you out, therefore, before wasting any further time we encourage you
                  to start with your booking in order to benefit yourself from this service!"
                defaultService="International Moving"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of International Moving"
                content="Relocating internationally brings exciting opportunities but requires careful planning. Professional moving services help streamline the experience, reduce risks, and protect your belongings. From organized logistics to customs expertise, you gain more time to focus on settling in. With Care N Clean, you benefit from a smooth transition and peace of mind."
                imageLeft={true}
                imageSrc="/images/Moving/international/3.jpg"
                imageAlt="International Moving Benefits"
                points={[
                    "Stress Reduction",
                    "Customs Handling",
                    "Damage Prevention",
                    "Time Savings",
                    "Secure Packing",
                    "Global Coverage",
                    "Peace of Mind"
                ]}
                showViewServicesBtn={false}
            />

            <NeedHelp />

            <OurBestDeepClean sections={sixSections} mainTitle="Other Moving Services" />
            <GetAQuoteSection text="Trusted International Moving Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
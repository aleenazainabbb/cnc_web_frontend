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
        title: "Local Moving",
        content:
            "Local moves still require careful planning and safe handling. Our team helps you move your home or office within the city with ease. We pack your items, load them safely, and deliver everything to your new place on time. With our support, even short-distance moves feel smooth, fast, and stress-free.",
    },
    {
        title: "Storage Services",
        content:
            "Sometimes you need a safe space to store your things during or after a move. Our secure storage service gives you peace of mind, whether it's for a few days or a few months. We handle your belongings with care and keep them in clean, climate-controlled spaces until you're ready to use them again.",
    },
    // {
    //     title: "International Moving",
    //     content:
    //         "Moving to a new country takes more than just packing boxes. Our international moving service covers everything from paperwork and customs to careful packing and long-distance transport. We guide you through the entire process, making sure your items arrive safely—no matter how far you're going.",
    // }
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
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/Maintenance/header.avif"
            />
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
                        makes international relocation smooth and hassle-free. From secure packing to customs handling and overseas shipping, our experts manage every step of the process with care and precision. Whether you're moving for work, family, or a fresh start, we ensure your belongings arrive safely and on time. Enjoy peace of mind with a trusted moving partner committed to reliability and excellence.
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
                description="Planning an overseas move? Let Care N Clean handle it all—from packing and documentation to secure international transport. We offer door-to-door solutions tailored to your timeline and destination. Book now and start your journey stress-free with a team you can trust."
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
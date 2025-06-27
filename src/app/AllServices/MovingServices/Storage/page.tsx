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
    // {
    //     title: "Storage Services",
    //     content:
    //         "Sometimes you need a safe space to store your things during or after a move. Our secure storage service gives you peace of mind, whether it's for a few days or a few months. We handle your belongings with care and keep them in clean, climate-controlled spaces until you're ready to use them again.",
    // },
    {
        title: "International Moving",
        content:
            "Moving to a new country takes more than just packing boxes. Our international moving service covers everything from paperwork and customs to careful packing and long-distance transport. We guide you through the entire process, making sure your items arrive safely—no matter how far you're going.",
    }
];

export default function StoragePage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Storage Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Storage Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/Maintenance/header.avif"
            />
            <BestDeepCleaning
                title="Best Storage Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Need a safe place to store your belongings during a move or renovation?{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        offers secure, flexible, and reliable storage moving solutions across the UAE. We carefully pack, transport, and store your items in clean, monitored facilities for short or long-term needs. Whether you're downsizing, transitioning, or decluttering, we ensure your possessions stay protected and accessible when you need them.
                    </>
                }
                imageSrc="/images/Moving/storage/1.jpg"
                imageAlt="Storage Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Storage Problems"
                content="When moving items into storage, poor handling, lack of labeling, and unsecured environments can lead to damage or loss. Unorganized packing, delays, and limited access are common frustrations. Without professional help, valuable items may be misplaced, broken, or exposed to poor conditions. Avoid these pitfalls with expert-managed storage moving services."
                imageLeft={true}
                imageSrc="/images/Moving/storage/2.jpg"
                imageAlt="Storage Problems"
                points={[
                    "Item Misplacement",
                    "Poor Packing",
                    "Delayed Pickup",
                    "Unsecured Storage",
                    "Limited Access",
                    "Moisture Damage",
                    "Disorganized Inventory"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Storage Service Today!"
                description="Need temporary or long-term storage during a move? Care N Clean provides safe transportation and storage for your belongings with flexible access and secure handling. Schedule your service today and store with confidence!"
                defaultService="Storage Service"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Storage Service"
                content="Storage services provide peace of mind during transitions, renovations, or space management. With expert packing, climate-controlled units, and clear labeling, your items are stored safely and accessibly. Our professional team ensures everything remains intact, organized, and easy to retrieve when you’re ready."
                imageLeft={true}
                imageSrc="/images/Moving/storage/4.png"
                imageAlt="Storage Benefits"
                points={[
                    "Secure Storage",
                    "Flexible Duration",
                    "Organized Packing",
                    "Damage Prevention",
                    "Climate Protection",
                    "Space Optimization",
                    "Peace of Mind"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Moving Services" />
            <GetAQuoteSection text="Trusted Storage Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
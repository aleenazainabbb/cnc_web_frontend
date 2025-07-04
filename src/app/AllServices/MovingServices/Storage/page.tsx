export const metadata = {
    title: "Secure Storage Services in UAE - Care N Clean",
    description: "Looking for secure storage in UAE? Care N Clean provides affordable and safe storage solutions for homes and businesses.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Trusted Storage Services in UAE",
        description: "Store your belongings securely with Care N Clean. We provide climate-controlled storage units, organized packing, and hassle-free delivery throughout UAE.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/MovingServices/Storage",
        images: [
            {
                url: "http://192.168.18.13:3000/images/Moving/storage/1.jpg",
                width: 1200,
                height: 630,
                alt: "Storage Services UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Affordable & Secure Storage Services | Care N Clean UAE",
        description: "Temporary or long-term storage? We handle everything—from pickup to delivery—so your items stay protected and accessible.",
        images: ["http://192.168.18.13:3000/images/Moving/storage/1.jpg"],
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
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/StorageMoving.png"
            />
            <AutoBreadcrumb />
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
                        provides you with enough space to store your extra things and most importantly, at an affordable price. You can store your stuff without any
                        struggle! We pick your things up, store them carefully and deliver them when you need them without costing you more. Our team of experts is at your service
                        at any time of the day. Now you do not have to sell the things that you have once bought with love, just because you ran out of space. Care n Clean is the
                        best company where you can take help regarding all these storage services in UAE.
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
                description="Need temporary or long-term storage during a move?
                 Our proficient staff members are eagerly waiting to help you out, therefore, before wasting any further time we encourage you to start with your booking in order to 
                 benefit yourself from this service!"
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
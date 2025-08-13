export const metadata = {
    title: "Professional Local Movers in UAE – Care N Clean",
    description: "Moving in UAE? Care N Clean offers professional local movers for a hassle-free relocation experience. Reliable, affordable, and efficient service.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Trusted Local Moving Services in UAE",
        description: "Care N Clean offers fast, efficient, and safe local moving services for homes and offices in the UAE. Get a smooth and organized relocation today.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/MovingServices/Local",
        images: [
            {
                url: "http://192.168.18.13:3000/images/Moving/local/1.jpg",
                width: 1200,
                height: 630,
                alt: "Local Moving Services UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Local Moving Made Easy in UAE | Care N Clean",
        description: "Move across town effortlessly with Care N Clean’s professional local moving services. Safe packing, transport, and on-time delivery every time.",
        images: ["http://192.168.18.13:3000/images/Moving/local/1.jpg"],
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
        title: "Storage Moving",
        content:
            "Sometimes you need a safe space to store your things during or after a move. Our secure storage service gives you peace of mind, whether it's for a few days or a few months. We handle your belongings with care and keep them in clean, climate-controlled spaces until you're ready to use them again.",
    },
    {
        title: "International Moving",
        content:
            "Moving to a new country takes more than just packing boxes. Our international moving service covers everything from paperwork and customs to careful packing and long-distance transport. We guide you through the entire process, making sure your items arrive safely—no matter how far you're going.",
    }
];

export default function LocalMovingPage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Local Moving Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Local Moving Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/LocalMoving.png"
            />
            <AutoBreadcrumb />
            <BestDeepCleaning
                title="Best Local Moving Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Moving to a new home or office within the UAE?{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        makes your local move smooth, efficient, and stress-free. From professional packing and safe loading to quick transport and careful unloading, our team ensures
                        every detail is handled with care. Whether you're relocating a small apartment or a large office, we provide reliable, on-time service tailored to your needs.
                        Enjoy a hassle-free move backed by trusted professionals. Care N Clean provides local moving services related to both the home you are moving out of as well as the one you are moving into.
                        Professionals assist in moving services from packing to loading to transportation and storage for your household goods.
                    </>
                }
                imageSrc="/images/Moving/local/1.jpg"
                imageAlt="Local Moving Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Local Moving Problems"
                content="In local moving, although you are resettling your home or your business across your town, you still have to pack, move, and then unpack a lot of stuff.
                 Do you have any idea that moving is one of the most stressful events in a person’s life? If you have ever moved, or are in the middle of one, you may not find this 
                 reality all too astonishing. It is so much more than just transporting your belongings from one location to another."
                imageLeft={true}
                imageSrc="/images/Moving/local/2.jpg"
                imageAlt="Local Moving Problems"
                points={[
                    "Furniture Damage",
                    "Late Arrivals",
                    "Poor Packing",
                    "Lost Items",
                    "Hidden Charges",
                    "Lack of Equipment",
                    "Disorganized Moves"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Local Moving Service Today!"
                description="Need help with a local move? Our team of experts is at your service at any time of the day. Care n Clean is the best company where
                 you can take help regarding all these local moving tasks in UAE. Our proficient staff members are eagerly waiting to help you out, therefore, before wasting any 
                 further time we encourage you to start with your booking to benefit yourself from this service!"
                defaultService="Local Moving"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Local Moving"
                content="A local move gives you a fresh start without the hassle when managed by professionals. From careful handling to efficient scheduling, our services save you time and protect your belongings. Whether you're upgrading your space or relocating for convenience, our team ensures a seamless moving experience from start to finish."
                imageLeft={true}
                imageSrc="/images/Moving/local/3.jpg"
                imageAlt="Local Moving Benefits"
                points={[
                    "Time Saving",
                    "Safe Transport",
                    "Furniture Protection",
                    "Quick Turnaround",
                    "Stress-Free Move",
                    "Affordable Service",
                    "Peace of Mind"
                ]}
                showViewServicesBtn={false}
            />
            <div id="get-a-quote">
                <NeedHelp />
            </div>
            <OurBestDeepClean sections={sixSections} mainTitle="Other Moving Services" />
            <GetAQuoteSection text="Trusted Local Moving Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
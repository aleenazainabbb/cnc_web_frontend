"use Client"
import QuoteBannerSection from "@/components/request_page_component/QuoteBannerSection"
import BestDeepCleaning from "@/components/Cleaning_service_page/BestDeepCleanBanner"
import BenefitsOfDeepCleaning from "@/components/Cleaning_service_page/benefitsofDeepClean"
import GetAQuoteSection from "@/components/GetAQuoteSection"
import OurBestDeepClean from "@/components/Cleaning_service_page/OurDeepCleanServices"
import BookYourService from "@/components/Cleaning_service_page/bookYourService"
import NeedHelp from "@/components/request_page_component/NeedHelp"
const sixSections = [

    // {
    //     title: "Local Moving",
    //     content:
    //         "Local moves still require careful planning and safe handling. Our team helps you move your home or office within the city with ease. We pack your items, load them safely, and deliver everything to your new place on time. With our support, even short-distance moves feel smooth, fast, and stress-free.",
    // },
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
                buttonText="Contact Us"
                buttonLink="/contact"
                imageSrc="/images/banners/LocalMoving.png"
            />
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
                        makes your local move smooth, efficient, and stress-free. From professional packing and safe loading to quick transport and careful unloading, our team ensures every detail is handled with care. Whether you're relocating a small apartment or a large office, we provide reliable, on-time service tailored to your needs. Enjoy a hassle-free move backed by trusted professionals.
                    </>
                }
                imageSrc="/images/Moving/local/1.jpg"
                imageAlt="Local Moving Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Local Moving Problems"
                content="Local moves can be more stressful than expected—damaged furniture, late movers, poor packing, and miscommunication are common issues. Without proper planning, moving day can turn chaotic. Delays, extra costs, and lost items are avoidable with professional service. Choosing an experienced team means fewer headaches and a smoother transition to your new location."
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
                description="Need help with a local move? Care N Clean offers efficient packing, secure transport, and reliable delivery within the UAE. Whether it's a residential or commercial move, we make relocation simple and worry-free. Book now and move with ease!"
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
            <NeedHelp />

            <OurBestDeepClean sections={sixSections} mainTitle="Other Moving Services" />
            <GetAQuoteSection text="Trusted Local Moving Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
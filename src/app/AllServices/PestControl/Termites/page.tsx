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
        title: "Pigeons & Birds Control",
        content:
            "Bird droppings and nesting can damage buildings and create unsanitary conditions. Our pigeon and bird control service safely removes birds and prevents them from returning, using humane and effective methods like spikes, nets, and repellents to keep your property clean and protected.",
    },
    {
        title: "Rats & Rodents Control",
        content:
            "Rodents can cause serious health risks and property damage by chewing wires and spreading disease. Our rat and rodent control service identifies entry points, sets traps, and applies treatments to remove and block rodent activity—ensuring your space stays safe and rodent-free.",
    },
    // {
    //     title: "Termites Control",
    //     content:
    //         "Termites silently damage wooden structures, often going unnoticed until it’s too late. Our termite control service uses deep inspection and targeted treatments to remove colonies and protect your home or business from costly structural damage.",
    // },
    {
        title: "Bees & Wasps Control",
        content:
            "Bee and wasp nests near homes or buildings can be dangerous. Our team safely removes active hives and applies deterrents to prevent new nests. We ensure the area is secure while handling the pests with care and proper safety measures.",
    },
    {
        title: "Ants & Insects Control",
        content:
            "Ants and other small insects can quickly take over kitchens, pantries, and floors. Our insect control service targets the nests and pathways, using safe treatments to remove current infestations and keep them from coming back.",
    },
    {
        title: "Fleas & Ticks Control",
        content:
            "Fleas and ticks are harmful to both people and pets. Our control service treats carpets, furniture, and outdoor areas to eliminate these pests and reduce the chance of bites, itching, and disease transmission.",
    },
    {
        title: "Bed Bugs Control",
        content:
            "Bed bugs hide in mattresses, furniture, and walls, causing discomfort and sleepless nights. Our bed bug treatment finds and eliminates them at every stage of life using safe and effective heat or chemical methods to restore your peace of mind.",
    },
    {
        title: "Cockroach Control",
        content:
            "Cockroaches carry germs and multiply quickly in kitchens and bathrooms. Our cockroach control service uses advanced treatments to target hiding spots and breeding areas, ensuring complete removal and lasting protection.",
    }
];

export default function PestPage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Termites Control Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Termites Control Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/Maintenance/header.avif"
            />
            <BestDeepCleaning
                title="Best Termites Control Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Termites are silent destroyers that can severely damage the wooden structures of your home or office before you're even aware of their presence.{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        provides expert termite control services across the UAE, using advanced detection and treatment methods to eliminate colonies at the root. From pre-construction soil treatments to post-infestation control, we ensure long-term protection for your property and peace of mind.
                    </>
                }
                imageSrc="/images/termites.png"
                imageAlt="Termites Control Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Termites Problems"
                content="Termites often go unnoticed while they eat through wood, flooring, and walls, leading to expensive structural damage. Common problems include hollow-sounding wood, mud tubes on walls, discarded wings, and sagging floors or ceilings. Without timely intervention, termite damage can become severe and irreversible. DIY solutions rarely reach hidden nests deep inside structures."
                imageLeft={true}
                imageSrc="/images/termites1.jpg"
                imageAlt="Termite Infestation"
                points={[
                    "Structural Damage",
                    "Hollow Wood",
                    "Mud Tubes",
                    "Discarded Wings",
                    "Sagging Floors",
                    "Hidden Nests",
                    "Expensive Repairs"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Termites Control Service Today!"
                description="Worried about termites damaging your property? Care N Clean provides reliable detection, treatment, and long-term prevention. Book your termite control service today to protect your home or office from costly repairs."
                defaultService="Termites Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Termites Control"
                content="Professional termite control stops damage early, protects your building’s integrity, and prevents future infestations. With specialized treatments and routine monitoring, Care N Clean ensures lasting defense and peace of mind against these hidden threats."
                imageLeft={true}
                imageSrc="/images/termites2.png"
                imageAlt="Benefits of Termites Control"
                points={[
                    "Early Detection",
                    "Damage Prevention",
                    "Structural Safety",
                    "Hidden Nest Removal",
                    "Long-Term Protection"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Pest Control Services" />
            <GetAQuoteSection text="Trusted Termites Control Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
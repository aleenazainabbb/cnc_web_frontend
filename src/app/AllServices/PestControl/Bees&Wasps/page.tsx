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
    {
        title: "Termites Control",
        content:
            "Termites silently damage wooden structures, often going unnoticed until it’s too late. Our termite control service uses deep inspection and targeted treatments to remove colonies and protect your home or business from costly structural damage.",
    },
    // {
    //     title: "Bees & Wasps Control",
    //     content:
    //         "Bee and wasp nests near homes or buildings can be dangerous. Our team safely removes active hives and applies deterrents to prevent new nests. We ensure the area is secure while handling the pests with care and proper safety measures.",
    // },
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
                        Best Bees & Wasps Control Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Bees & Wasps Control Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/Maintenance/header.avif"
            />
            <BestDeepCleaning
                title="Best Bees & Wasps Control Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Bees and wasps nesting near your home or workplace can pose serious safety risks.{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        offers safe and effective bees and wasps control services across the UAE. Our trained professionals locate nests, assess the threat, and apply eco-friendly removal methods to protect your space. Whether it’s a single nest or multiple hives, we ensure a swift and secure solution while respecting environmental safety.
                    </>
                }
                imageSrc="/images/bees.png"
                imageAlt="Bees and Wasps Control"
            />

            <BenefitsOfDeepCleaning
                title="Common Bees & Wasps Problems"
                content="Bees and wasps can build nests in walls, roofs, or gardens, creating danger for residents, especially those with allergies. Their aggressive behavior when disturbed can lead to painful stings or medical emergencies. DIY removal is risky and often ineffective. Without professional help, nests may return or spread to new areas."
                imageLeft={true}
                imageSrc="/images/bees2.jpg"

                imageAlt="Bees and Wasps Infestation"
                points={[
                    "Painful Stings",
                    "Aggressive Behavior",
                    "Nest Recurrence",
                    "Allergic Reactions",
                    "Outdoor Disturbance",
                    "Roof & Wall Damage",
                    "Unsafe DIY Attempts"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Bees & Wasps Control Service Today!"
                description="Concerned about bees or wasps on your property? Care N Clean offers expert nest removal and prevention services using safe and effective techniques. Book now for a quick response and a sting-free environment."
                defaultService="Bees & Wasps Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Bees & Wasps Control"
                content="Professional bees and wasps control keeps your property safe from stings, allergies, and structural damage. Our expert solutions remove nests efficiently and prevent re-infestation. With Care N Clean, you gain a safe, peaceful, and hazard-free outdoor and indoor space."
                imageLeft={true}
                imageSrc="/images/bees1.jpg"
                imageAlt="Benefits of Bees & Wasps Control"
                points={[
                    "Sting Prevention",
                    "Allergy Safety",
                    "Safe Nest Removal",
                    "Structural Protection",
                    "Quick Response",
                    "Long-Term Relief"
                ]}
                showViewServicesBtn={false}
            />

            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Pest Control Services" />
            <GetAQuoteSection text="Trusted Bees & Wasps Control Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
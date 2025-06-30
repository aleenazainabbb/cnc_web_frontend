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
    //     title: "Pigeons & Birds Control",
    //     content:
    //         "Bird droppings and nesting can damage buildings and create unsanitary conditions. Our pigeon and bird control service safely removes birds and prevents them from returning, using humane and effective methods like spikes, nets, and repellents to keep your property clean and protected.",
    // },
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
                        Best Pigeons & Birds Control Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Pigeons & Birds Control Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
                imageSrc="/images/banners/pigeons.png"
            />
            <BestDeepCleaning
                title="Best Pigeons & Birds Control Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Pigeons and birds nesting on rooftops, balconies, and AC units can cause mess, noise, and health hazards.{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        offers expert pigeons and birds control services across the UAE, using humane and effective methods to deter nesting and roosting. Our trained team installs bird spikes, nets, and repellents to protect your property without harming the birds—ensuring a clean, quiet, and hygienic space.
                    </>
                }
                imageSrc="/images/birds.png"
                imageAlt="Pigeons and Birds Control"
            />

            <BenefitsOfDeepCleaning
                title="Common Pigeons & Birds Problems"
                content="Pigeons and birds can damage property with droppings, feathers, and nesting debris. Their presence causes blocked AC vents, foul smells, and potential disease spread. DIY deterrents often fail, and infestations worsen over time without expert help. Common issues include surface stains, noise pollution, and constant cleaning needs."
                imageLeft={true}
                imageSrc="/images/birds1.png"
                imageAlt="Bird Infestation Problems"
                points={[
                    "Dropping Stains",
                    "Blocked AC Units",
                    "Health Hazards",
                    "Constant Noise",
                    "Foul Odor",
                    "Damaged Surfaces",
                    "Failed DIY Deterrents"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Pigeons & Birds Control Service Today!"
                description="Dealing with pigeons or nesting birds? Care N Clean provides humane and effective bird control solutions including netting, spikes, and safe repellents. Book now to protect your property and enjoy a cleaner, quieter space."
                defaultService="Pigeons & Birds Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Pigeons & Birds Control"
                content="Our birds control service helps prevent damage, reduce mess, and protect health without harming wildlife. With long-lasting deterrents, your building stays cleaner and more peaceful. Trust Care N Clean for safe, discreet, and effective pigeon control that keeps your space bird-free."
                imageLeft={true}
                imageSrc="/images/birds2.png"
                imageAlt="Benefits of Pigeons and Birds Control"
                points={[
                    "Mess Reduction",
                    "Health Safety",
                    "AC Protection",
                    "Property Cleanliness",
                    "Noise Control",
                    "Humane Deterrents",
                    "Lasting Results"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Pest Control Services" />
            <GetAQuoteSection text="Trusted Pigeons & Birds Control Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
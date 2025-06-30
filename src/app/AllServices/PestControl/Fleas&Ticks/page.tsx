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
    // {
    //     title: "Fleas & Ticks Control",
    //     content:
    //         "Fleas and ticks are harmful to both people and pets. Our control service treats carpets, furniture, and outdoor areas to eliminate these pests and reduce the chance of bites, itching, and disease transmission.",
    // },
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
                        Best Fleas & Ticks Control Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Fleas & Ticks Control Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            imageSrc="/images/banners/fleas.png"
            />
            <BestDeepCleaning
                title="Best Fleas & Ticks Control Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Fleas and ticks not only cause irritation but also pose serious health risks to both humans and pets.{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        provides professional fleas and ticks control services across the UAE, targeting infestations with safe, effective treatments. Our expert team inspects your home, treats affected areas, and implements preventive measures to ensure long-term protection. Whether indoors or outdoors, we help you reclaim a pest-free, healthy environment.
                    </>
                }
                imageSrc="/images/tick.jpg"
                imageAlt="Fleas and Ticks Control"
            />

            <BenefitsOfDeepCleaning
                title="Common Fleas & Ticks Problems"
                content="Fleas and ticks can quickly spread through carpets, furniture, and pets, causing itching, rashes, and potential disease transmission. These pests are hard to detect and eliminate without expert help. DIY solutions often miss eggs and larvae, leading to reinfestation. Common problems include persistent bites, skin infections, and pet discomfort."
                imageLeft={true}
                 imageSrc="/images/fleas1.jpg"
                imageAlt="Fleas and Ticks Infestation"
                points={[
                    "Itchy Bites",
                    "Skin Rashes",
                    "Pet Irritation",
                    "Reinfestation Risk",
                    "Disease Transmission",
                    "Hidden Eggs",
                    "Ineffective DIY Treatments"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Fleas & Ticks Control Service Today!"
                description="Struggling with fleas or ticks in your home? Care N Clean delivers expert pest control treatments that eliminate infestations at the source. Book your service now for a safer space for your family and pets."
                defaultService="Fleas & Ticks Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Fleas & Ticks Control"
                content="With expert pest control, you can eliminate fleas and ticks effectively and prevent future outbreaks. Our treatments improve hygiene, reduce skin and allergy problems, and safeguard your pets and loved ones. Trust Care N Clean to bring lasting relief and peace of mind."
                imageLeft={true}
                 imageSrc="/images/fleas2.jpg"
                imageAlt="Benefits of Fleas and Ticks Control"
                points={[
                    "Pet Protection",
                    "Allergy Relief",
                    "Disease Prevention",
                    "Complete Eradication",
                    "Long-Term Results",
                    "Comfort & Hygiene"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Pest Control Services" />
            <GetAQuoteSection text="Trusted Fleas & Ticks Control Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
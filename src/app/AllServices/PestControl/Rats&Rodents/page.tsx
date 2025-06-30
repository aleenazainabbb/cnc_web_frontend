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
    // {
    //     title: "Rats & Rodents Control",
    //     content:
    //         "Rodents can cause serious health risks and property damage by chewing wires and spreading disease. Our rat and rodent control service identifies entry points, sets traps, and applies treatments to remove and block rodent activity—ensuring your space stays safe and rodent-free.",
    // },
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
                        Best Rats & Rodents Control Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Rats & Rodents Control Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
                imageSrc="/images/banners/RatsControl.png"
            />
            <BestDeepCleaning
                title="Best Rats & Rodents Control Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Rats and rodents can cause serious damage to your property and pose major health risks through contamination and disease.{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        offers professional rats and rodents control services across the UAE. Our experts identify entry points, set up targeted traps and treatments, and implement long-term prevention strategies to ensure your space stays rodent-free. Whether residential or commercial, we bring safety, hygiene, and peace of mind back to your property.
                    </>
                }
                imageSrc="/images/rats.png"
                imageAlt="Rats and Rodents Control"
            />

            <BenefitsOfDeepCleaning
                title="Common Rats & Rodents Problems"
                content="Rodents can gnaw through wires, pipes, and insulation, leading to fire risks and structural damage. They contaminate food, leave behind droppings, and carry diseases like leptospirosis and salmonella. Common signs include foul smells, scratching noises, chewed surfaces, and nesting debris. Ignoring infestations allows them to multiply rapidly, making professional control essential."
                imageLeft={true}
                imageSrc="/images/rats1.jpg"
                imageAlt="Rodent Infestation Problems"
                points={[
                    "Chewed Wires",
                    "Food Contamination",
                    "Disease Spread",
                    "Foul Odors",
                    "Nesting Debris",
                    "Nocturnal Activity",
                    "Property Damage"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Rats & Rodents Control Service Today!"
                description="Noticing signs of rats or rodents? Care N Clean offers effective detection, removal, and prevention services to keep your property safe. Book your rodent control service today for fast and lasting relief."
                defaultService="Rats & Rodents Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Rats & Rodents Control"
                content="Our rodent control services eliminate existing infestations and prevent future intrusions. With expert sealing, trapping, and sanitation, you protect your health, property, and peace of mind. Trust Care N Clean for thorough, discreet, and reliable rodent management."
                imageLeft={true}
                imageSrc="/images/rats2.jpg"
                imageAlt="Benefits of Rats and Rodents Control"
                points={[
                    "Health Protection",
                    "Food Safety",
                    "Property Security",
                    "Fire Risk Reduction",
                    "Odor Elimination",
                    "Long-Term Prevention"
                ]}
                showViewServicesBtn={false}
            />

            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Pest Control Services" />
            <GetAQuoteSection text="Trusted Rats & Rodents Control Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
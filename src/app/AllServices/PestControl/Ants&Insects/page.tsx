export const metadata = {
    title: "Ants & Insects Pest Control Services in UAE - Care N Clean",
    description:
        "Struggling with ants? Care n Clean provides expert ant pest control services in UAE to eliminate infestations and prevent future issues.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Ants & Insects Control in UAE",
        description:
            "Care N Clean offers expert pest control services to remove ants, crawling insects, and other pests. Safe and effective treatments for a hygienic, pest-free environment.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/PestControl/Ants&Insects",
        images: [
            {
                url: "http://192.168.18.13:3000/images/ants3.jpg",
                width: 1200,
                height: 630,
                alt: "Ants and Insects Pest Control UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ants & Insects Pest Control Services UAE | Care N Clean",
        description:
            "Get rid of ants and crawling insects with Care N Clean. Professional pest control services across UAE and the UAE – fast, affordable, and long-lasting.",
        images: ["http://192.168.18.13:3000/images/ants3.jpg"],
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
                        Best Ants & Insects Pest Control Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Ants & Insects Control Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/AntsControl.png"
            />
            <AutoBreadcrumb />
            <BestDeepCleaning
                title="Best Ants & Insects Pest Control Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Ants and insects can quickly become a serious nuisance in your home or workplace.{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        provides various ant and insect control service and treatments for you so you can completely eliminate them from your premises. First, we identify the
                        species of ants present in your home. In order to deal with them, one must know about their type of related species and their biology. And then, after the
                        analysis our professional teammates set-up a proper plan or strategy to remove them. Let the proficient and experienced members of Care n Clean do the chore.
                    </>
                }
                imageSrc="/images/ants3.jpg"
                imageAlt="Ants and Insects Control"
            />

            <BenefitsOfDeepCleaning
                title="Common Ants & Insects Problems"
                content="Insects like ants, cockroaches, and crawling pests often invade in search of food, water, or shelter. Common problems include food contamination, damaged 
                wiring, unpleasant odors, and health risks due to bacteria. Home-based solutions or techniques usually offer only short-term relief. Without proper treatment, infestations spread quickly and become harder to control."
                imageLeft={true}
                imageSrc="/images/ants2.jpg"
                imageAlt="Ant and Insect Infestation"
                points={[
                    "Food Contamination",
                    "Rapid Infestation",
                    "Hidden Nests",
                    "Odor Issues",
                    "Skin Irritation",
                    "Wiring Damage",
                    "Failed Home-based Solutions"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Ants & Insects Pest Control Service Today!"
                description="Tired of ants and crawling insects invading your space? Our services are available all over UAE and we are ready to serve you at any time of the day.
                 So, what are you waiting for? Book your service. We are eagerly waiting to serve you!"
                defaultService="Ants & Insects Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Ants & Insects Pest Control"
                content="Effective pest control eliminates active infestations and prevents future outbreaks. With targeted treatments and ongoing prevention, your property stays protected from health hazards, damage, and discomfort. Our expert services create a clean, pest-free environment for your family or business."
                imageLeft={true}
                imageSrc="/images/ants.png"
                imageAlt="Benefits of Ants Control"
                points={[
                    "Health Protection",
                    "Hygienic Environment",
                    "Odor Removal",
                    "Property Safety",
                    "Lasting Results",
                    "Fast Elimination"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Pest Control Services" />
            <GetAQuoteSection text="Trusted Ants & Insects Pest Control Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
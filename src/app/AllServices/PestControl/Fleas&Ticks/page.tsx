export const metadata = {
    title: "Fleas & Ticks Control Services in UAE - Care N Clean",
    description:
        "Protect your pets and family from ticks with Care N Clean’s expert tick control services in UAE. Safe and long-lasting solutions.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Fleas & Ticks Control Services UAE",
        description:
            "Care N Clean offers expert fleas and ticks control services across the UAE. Safe, professional solutions to eliminate these pests and prevent future infestations.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/PestControl/Fleas&Ticks",
        images: [
            {
                url: "http://192.168.18.13:3000/images/tick.jpg",
                width: 1200,
                height: 630,
                alt: "Fleas and Ticks Control UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fleas & Ticks Pest Control in UAE | Care N Clean",
        description:
            "Book trusted fleas & ticks control services in UAE with Care N Clean. Protect your home and pets with our expert pest treatments.",
        images: ["http://192.168.18.13:3000/images/tick.jpg"],
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
        title: "Ants & Insects Control",
        content:
            "Ants and other small insects can quickly take over kitchens, pantries, and floors. Our insect control service targets the nests and pathways, using safe treatments to remove current infestations and keep them from coming back.",
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
                        Best Fleas & Ticks Control Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Fleas & Ticks Control Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/fleas.png"
            />
            <AutoBreadcrumb />
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
                content="Fleas and ticks are ectoparasites. They live outside the body of a living being and suck the blood. They cause irritation to cats, dogs, and even humans. So, if you 
                have any pet in your home, it’s going to be very difficult for him to survive. They cause itchiness through their bites and rashes through their saliva. They can be the
                 reason for different skin problems in cats and dogs. Fleas and ticks also carry diseases like mosquitoes carry malaria and dengue. But you don’t have to stress about
                  that when you have Care n Clean around you!"
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
                description="Struggling with fleas or ticks in your home? Care N Clean delivers expert pest control treatments that eliminate infestations at the source. 
                Our tick control services are available all over UAE and we are ready to serve you at any time of the day. So, what are you waiting for? We are eagerly waiting to assist you!
                Book your service now!"
                defaultService="Fleas & Ticks Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Fleas & Ticks Control"
                content="With expert pest control, you can eliminate fleas and ticks effectively and prevent future outbreaks. Our treatments improve hygiene, reduce skin and allergy
                 problems, and safeguard your pets and loved ones. Trust Care N Clean to bring lasting relief and peace of mind. We are a team of efficient workers. We know how to 
                 control them from invading into your home. From there prevention to cure, our team has the remedy to everything. "
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
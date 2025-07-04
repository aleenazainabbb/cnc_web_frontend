export const metadata = {
    title: "Pigeons & Birds Control Services in UAE - Care N Clean",
    description: "Book professional bird control services in UAE with Care N Clean. We use bird spikes, netting, and humane bird deterrent products to get rid of pigeons birds in UAE. 100% Satisfaction Guaranteed.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Safe Pigeons & Birds Control UAE",
        description: "Prevent bird damage with Care N Clean’s professional pigeon and bird control. We offer long-lasting, humane solutions for homes and businesses across UAE.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/PestControl/Pigeons&Birds",
        images: [
            {
                url: "http://192.168.18.13:3000/images/birds.png",
                width: 1200,
                height: 630,
                alt: "Pigeons and Birds Control UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Expert Pigeons & Birds Control in UAE | Care N Clean",
        description: "Bird and pigeon infestation? Our UAE-based team uses spikes, barriers & deterrents to safely protect your property.",
        images: ["http://192.168.18.13:3000/images/birds.png"],
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
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/pigeons.png"
            />
            <AutoBreadcrumb />
            <BestDeepCleaning
                title="Best Pigeons & Birds Control Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Whether your problem is birds or pigeons,{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        control professionals will design an effective means of getting rid of them and create a deterrent that ensures the birds won’t come back. Our highly trained
                        bird removal and exclusion experts utilize a wide array of tools and techniques to accomplish this. Our bird control services UAE include bird control spikes
                        for as long as two years with an assurance, maintain security all through for winged animals with non-harmful spikes, remove feathered creature attack in
                        various zones of your premises and the polycarbonate spikes lessen repeating establishment costs.
                    </>
                }
                imageSrc="/images/birds.png"
                imageAlt="Pigeons and Birds Control"
            />

            <BenefitsOfDeepCleaning
                title="Common Pigeons & Birds Problems"
                content="Pigeons and birds can damage property with droppings, feathers, and nesting debris. If unwanted birds or pigeons are roosting in areas of your warehouse, 
                office, or your home, you already know how inconvenient it can be. Even if we keep the unwelcomed sound and distraction separate, still there are unsterilized feces, 
                feathers, and dirt. These droppings are often masses of diseases and can pose serious health risks."
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
                description="Our team of experts is at your service at any time of the day. Care N Clean is the best company where you can take help regarding all these pigeons and 
                birds’ control service related queries in UAE. Our proficient staff members are eagerly waiting to help you out, therefore, before wasting any further time we 
                encourage you to start with your booking in order to benefit yourself from this service!"
                defaultService="Pigeons & Birds Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Pigeons & Birds Control"
                content="Our birds control service helps prevent damage, reduce mess, and protect health without harming wildlife. With long-lasting deterrents, your building stays
                 cleaner and more peaceful. Trust Care N Clean for safe, discreet, and effective pigeon control that keeps your space bird-free. If your home or property has become
                  subject to a bird or pigeon infestation, don’t delay. Call Care n Clean professionals before it gets worse. We have different bird and pigeon control 
                  solution as per your structure requirement and will help rid your property of any pesky for your winged intruders."
                imageLeft={true}
                imageSrc="/images/birds2.png"
                imageAlt="Benefits of Pigeons and Birds Control"
                points={[
                    "Mess Reduction",
                    "Health Safety",

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
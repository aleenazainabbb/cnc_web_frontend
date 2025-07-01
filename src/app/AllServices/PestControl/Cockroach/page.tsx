export const metadata = {
  title: "Cockroach Control Services in UAE - Care N Clean",
  description:
    "Eliminate cockroaches from your home with Care N Clean’s expert cockroach control services in UAE. Safe, effective, and long-lasting solutions",
  authors: [{ name: "Softnio" }],
  openGraph: {
    title: "Care N Clean - Trusted Cockroach Control Experts in UAE",
    description:
      "Remove cockroach infestations with Care N Clean’s safe and reliable pest control solutions. Serving homes and commercial spaces across the UAE.",
    type: "website",
    url: "http://192.168.18.13:3000/AllServices/PestControl/Cockroach",
    images: [
      {
        url: "http://192.168.18.13:3000/images/cockroach.png",
        width: 1200,
        height: 630,
        alt: "Cockroach Control UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cockroach Control Services in UAE | Care N Clean",
    description:
      "Say goodbye to roaches. Care N Clean offers expert cockroach removal across the UAE for a clean, hygienic, and pest-free space.",
    images: ["http://192.168.18.13:3000/images/cockroach.png"],
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
        title: "Fleas & Ticks Control",
        content:
            "Fleas and ticks are harmful to both people and pets. Our control service treats carpets, furniture, and outdoor areas to eliminate these pests and reduce the chance of bites, itching, and disease transmission.",
    },
    {
        title: "Bed Bugs Control",
        content:
            "Bed bugs hide in mattresses, furniture, and walls, causing discomfort and sleepless nights. Our bed bug treatment finds and eliminates them at every stage of life using safe and effective heat or chemical methods to restore your peace of mind.",
    },
];

export default function PestPage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Cockroach Control Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Cockroach Control Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
                imageSrc="/images/banners/Cockroach.png"
            />
            <AutoBreadcrumb/>

            <BestDeepCleaning
                title="Best Cockroach Control Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Cockroaches are among the most common and stubborn pests found in homes and businesses.{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        offers specialized cockroach control services across the UAE. Cockroaches contribute to several diseases. They are extremely dirty insects that you don’t want to 
                          be around them. Their control is necessary and it can only be carried out with the assistance of professionals of Care N Clean. Our team workers are 
                          specialized in all kinds of pest control, including cockroach control services. Our highly trained professionals are completely trained to remove your roach 
                          issue and also help you feel safe and secure in your home.
                    </>
                }
                imageSrc="/images/cockroach.png"
                imageAlt="Cockroach Control Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Cockroach Problems"
                content="Cockroaches thrive in dark, damp spaces and spread rapidly, causing hygiene issues and health risks. They contaminate food, trigger allergies, and carry bacteria like salmonella. Common signs include unpleasant smells, droppings, and sightings at night. DIY sprays often fail to reach hidden nests, making professional treatment essential for complete eradication."
                imageLeft={true}
                imageSrc="/images/cockroach1.png"
                imageAlt="Cockroach Infestation"
                points={[
                    "Food Contamination",
                    "Allergy Triggers",
                    "Foul Odors",
                    "Rapid Breeding",
                    "Nocturnal Activity",
                    "Hidden Nests",
                    "Bacterial Spread"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Cockroach Control Service Today!"
                description=" Care n Clear is providing services are available all over UAE and we are ready to serve you at any time of the day. So, what are you waiting for? Book your service
                 and reclaim a clean, safe environment for your family or business. We are eagerly waiting to assist you with your problems!"
                defaultService="Cockroach Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Cockroach Control"
                content="Professional cockroach control removes infestations at the source, improves hygiene, and protects against health risks. Our safe and effective treatments ensure long-term results, so you can enjoy a pest-free space with confidence. Trust Care N Clean to restore comfort and cleanliness to your property."
                imageLeft={true}
                imageSrc="/images/cockroach2.png"
                imageAlt="Benefits of Cockroach Control"
                points={[
                    "Hygiene Improvement",
                    "Allergy Reduction",
                    "Disease Prevention",
                    "Long-Term Protection",
                    "Quick Results",
                    "Odor Elimination"
                ]}
                showViewServicesBtn={false}
            />

            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Pest Control Services" />
            <GetAQuoteSection text="Trusted Cockroach Control Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
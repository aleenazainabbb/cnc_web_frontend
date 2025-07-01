export const metadata = {
  title: "Rats & Rodents Pest Control Services in UAE - Care N Clean",
  description:
    "Eliminate Rats & Rodents with our expert pest control services in UAE. Care N Clean offers safe and effective rodent removal for homes and businesses.",
  authors: [{ name: "Softnio" }],
  openGraph: {
    title: "Care N Clean - Expert Rats & Rodents Control in UAE",
    description:
      "Protect your home or business from rodent damage and disease. Care N Clean provides professional rats and rodents control with safe, effective treatments across the UAE.",
    type: "website",
    url: "http://192.168.18.13:3000/AllServices/PestControl/Rats&Rodents",
    images: [
      {
        url: "http://192.168.18.13:3000/images/banners/RatsControl.png",
        width: 1200,
        height: 630,
        alt: "Rats and Rodents Control UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rats & Rodents Control in UAE | Care N Clean",
    description:
      "Get rid of rats and rodents with Care N Clean’s safe, effective pest control services. Serving homes & businesses across UAE.",
    images: ["http://192.168.18.13:3000/images/banners/RatsControl.png"],
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
            <AutoBreadcrumb/>
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
                        offers professional rats and rodents control services across the UAE. Our experts identify entry points, set up targeted traps and treatments, and implement 
                        long-term prevention strategies to ensure your space stays rodent-free. Whether residential or commercial, we bring safety, hygiene, and peace of mind back to
                         your property. Our team has professional people that will clean your house and provide you rodent pest control services to the best
                          of their abilities.
                    </>
                }
                imageSrc="/images/rats.png"
                imageAlt="Rats and Rodents Control"
            />

            <BenefitsOfDeepCleaning
                title="Common Rats & Rodents Problems"
                content="Rodents can gnaw through wires, pipes, and insulation, leading to fire risks and structural damage. They contaminate food, leave behind droppings, and carry
                 diseases. Ignoring infestations allows 
                 them to multiply rapidly, making professional control essential. These rats and rodents carry various diseases with them and also harm your property with their sharp 
                 teeth that would allow them to munch on the wood and other materials to gain entry into your house or office. They also carry parasites and other pests with
                  them that can become the reason for various health problems."
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
                description="Our team of experts is at your service at any time of the day. Care n Clean is the best company where you can take help regarding all these rats and 
                rodents control service-related queries in UAE. Our proficient staff members are eagerly waiting to help you out, therefore, before wasting any further time we 
                encourage you to start with your booking in order to benefit yourself from this service!"
                defaultService="Rats & Rodents Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Rats & Rodents Control"
                content="Our rodent control services eliminate existing infestations and prevent future intrusions. With expert sealing, trapping, and sanitation, you protect your 
                health, property, and peace of mind. Trust Care N Clean for thorough, discreet, and reliable rodent management. Regular monitoring and preventive measures help you 
                avoid future outbreaks, saving you from costly repairs and health risks."
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
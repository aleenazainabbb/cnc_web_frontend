export const metadata = {
    title: "Termites Control Services in UAE - Care N Clean",
    description:
        "Protect your property with our termite control services in UAE. Care n Clean provides safe and effective solutions to prevent and eliminate termites.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Reliable Termites Control in UAE",
        description:
            "Get expert termite control in UAE with Care N Clean. We offer inspections, pre- and post-treatment plans, and long-term termite protection for homes and businesses.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/PestControl/Termites",
        images: [
            {
                url: "http://192.168.18.13:3000/images/termites.png",
                width: 1200,
                height: 630,
                alt: "Termites Control Services UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Expert Termite Control in UAE | Care N Clean",
        description:
            "Protect your property from termite infestations with Care N Clean’s specialized treatment solutions. Pre-construction and post-infestation services available.",
        images: ["http://192.168.18.13:3000/images/termites.png"],
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
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/Termites.png"
            />
            <AutoBreadcrumb />
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
                        provides expert termite control services across the UAE, using advanced detection and treatment methods to eliminate colonies at the root. From pre-construction
                        soil treatments to post-infestation control, we ensure long-term protection for your property and peace of mind Our workers are well trained and experienced.
                        We give in-house training to keep our workers proficient.
                    </>
                }
                imageSrc="/images/termites.png"
                imageAlt="Termites Control Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Termites Problems"
                content="Termites often go unnoticed while they eat through wood, flooring, and walls, leading to expensive structural damage. Whenever you notice any blisters in wood 
                flooring, any damage that happened to your wood including the wood doors, cabinets, etc., or any wings of termites in your house, then all you need to do is to call 
                Care N Clean experts and rely on them. Without timely intervention, termite damage can become severe and irreversible. "
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
                description=" Our competent staff is available at your service at any time of the day. Care n Clean is the best company where you can take help regarding all these termites control 
                services related queries in UAE. Our proficient staff members are eagerly waiting to help you out, therefore, before wasting any further time we encourage you to
                 start with your booking in order to benefit yourself from this service!"
                defaultService="Termites Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Termites Control"
                content="Professional termite control stops damage early, protects your building’s integrity, and prevents future infestations. With specialized treatments and routine 
                monitoring, Care N Clean ensures lasting defense and peace of mind against these hidden threats. An experienced team of Care N Clean professionals can clean your house 
                and give you the pleasure of your life through their various techniques of termite control services in UAE."
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
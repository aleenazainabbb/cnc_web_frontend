export const metadata = {
    title: "Bed Bugs Control Services in UAE - Care N Clean",
    description:
        "Say goodbye to bed bugs with Care n Clean’s professional bed bug control services in UAE. Safe and effective treatments for homes and businesses.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Reliable Bed Bugs Control in UAE",
        description:
            "Get rid of bed bugs with Care N Clean’s professional pest control service. We inspect, treat, and prevent infestations in homes and businesses across the UAE.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/PestControl/BedBugs",
        images: [
            {
                url: "http://192.168.18.13:3000/images/bedbugs.png",
                width: 1200,
                height: 630,
                alt: "Bed Bugs Control UAE",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Bed Bugs Control Services in UAE | Care N Clean",
        description:
            "Care N Clean offers trusted bed bug removal in UAE. Restore your peace of mind with expert inspection, treatment & long-term protection.",
        images: ["http://192.168.18.13:3000/images/bedbugs.png"],
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
                        Best Bed Bugs Control Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Bed Bugs Control Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/bedBugs.png"
            />
            <AutoBreadcrumb />
            <BestDeepCleaning
                title="Best Bed Bugs Control Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Bed bugs can cause sleepless nights, skin irritation, and spread rapidly across beds, furniture, and clothing.{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        provides professional bed bugs control services throughout the UAE, using advanced techniques to eliminate infestations from the source. Our experienced team inspects,
                        treats, and monitors to ensure complete removal and lasting relief. Regain your comfort and protect your home or business from these persistent pests. we are
                        proficient enough to control the bugs production in your premises whether house or office. After analyzing the bugs condition in your area, we will make a
                        suitable strategy plan to prevent their production
                    </>
                }

                imageSrc="/images/bedbugs.png"
                imageAlt="Bed Bugs Control"
            />

            <BenefitsOfDeepCleaning
                title="Common Bed Bugs Problems"
                content="Bed bugs hide in mattresses, cracks, and furniture, making them hard to detect and eliminate. They feed on blood, cause allergic reactions, and multiply quickly if not
                 treated. Common issues include itchy bites, blood stains on sheets, musty odors, and anxiety from repeated infestations. Home-made sprays usually fail to reach hidden nests, 
                 allowing the problem to return. These bed bugs are difficult to eliminate without the supervision of a professional."
                imageLeft={true}
                imageSrc="/images/bedbugs1.jpg"
                imageAlt="Bed Bug Infestation"
                points={[
                    "Itchy Bites",
                    "Blood Stains",
                    "Musty Odors",
                    "Hidden Infestation",
                    "Furniture Contamination",
                    "Rapid Reproduction",
                    "Failed Home Remedies"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Bed Bugs Control Service Today!"
                description=" Bed bugs are a serious problem that should be dealt with rapidly! Therefore, all you have to do is to book your bed bugs control services at Care N Clean. 
                Our services are available all over UAE and we are ready to serve you at any time of the day. So, what are you waiting for? Book
                 your service. We are eagerly waiting to assist you with your problems!"
                defaultService="Bed Bugs Control"
            />

            <BenefitsOfDeepCleaning
                title="Benefits of Bed Bugs Control"
                content="Professional bed bugs control ensures complete removal of pests, prevents reinfestation, and restores hygiene and comfort. Our treatments target all stages of the bed bug life cycle for long-lasting protection. Enjoy a pest-free environment, better sleep, and improved health with expert care from Care N Clean."
                imageLeft={true}
                imageSrc="/images/bedbugs2.jpg"
                imageAlt="Benefits of Bed Bugs Control"
                points={[
                    "Complete Elimination",
                    "Better Sleep",
                    "Health Safety",
                    "Furniture Protection",
                    "Odor Removal",
                    "Lasting Relief"
                ]}
                showViewServicesBtn={false}
            />

             <div id="get-a-quote">
                <NeedHelp />
            </div>
            <OurBestDeepClean sections={sixSections} mainTitle="Other Pest Control Services" />
            <GetAQuoteSection text="Trusted Bed Bugs Control Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
export const metadata = {
    title: "Landscaping Services in Dubai - Care N Clean",
    description: "Professional landscaping services across UAE. From garden design to lawn care and outdoor maintenance — trusted by thousands.",
   authors: [{ name: "Softnio" }], 
    openGraph: {
        title: "Landscaping Services in Dubai - Care N Clean",
        description: "Enhance your outdoor space with expert landscaping services in Dubai. Care n Clean provides customized solutions for gardens, lawns, and patios.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/MaintenanceServices/Landscaping", // Local testing URL
        images: [
            {
                url: "http://192.168.18.13:3000/images/Maintenance/landscaping/1.jpg", // Local image path
                width: 1200,
                height: 630,
                alt: "Care N Clean Landscaping Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Care N Clean - Expert Landscaping Services in UAE",
        description: "Reliable and affordable landscaping services for homes and businesses in the UAE. Custom garden care, lawn maintenance, and more.",
        images: ["http://192.168.18.13:3000/images/Maintenance/landscaping/1.jpg"],
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
const sixSections = [

    {
        title: "Plumbing Services",
        content:
            "Plumbing problems at home or in a building need quick and careful attention. Our trained plumbers fix leaks, clear blocked drains, and replace broken pipes with care. Whether you need to upgrade your bathroom or fix a small issue, we handle everything with skill and clean work. From small repairs to full plumbing setups, we make sure your water systems run smoothly and safely.",
    },
    {
        title: "Carpentry Services",
        content:
            "Strong and well-made woodwork adds both beauty and function to your space. Our carpenters build custom furniture, fix broken wood parts, and install doors, shelves, and more. We work with care and attention to every detail, making sure the final result looks good and lasts long. Whether it's inside or outside work, we deliver clean and solid results.",
    },
    {
        title: "AC Maintenance Services",
        content:
            "To stay cool and breathe clean air, your AC system needs regular care. We clean filters, check gas levels, wash coils, and inspect the whole system to make sure it's working well. This helps your AC run smoothly, saves energy, and lasts longer. You stay comfortable while we handle the rest.",
    },
    {
        title: "Electrical Services",
        content:
            "Electric work must always be safe and correct. Our electricians install lights, fix switches, upgrade wires, and solve power problems quickly and safely. Whether it’s a small repair or a new setup, we do the job right and make sure your home or office stays safe and powered.",
    },
    {
        title: "Handyman Services",
        content:
            "Small jobs around the house can pile up fast. Our handymen can help with things like fixing doors, hanging shelves, setting up furniture, and general repairs. We work quickly, show up on time, and get the job done so you don’t have to worry about it. It’s the easy way to keep things in good shape.",
    },
    {
        title: "Painting Services",
        content:
            "A new paint job can make any room or building look fresh and bright. We clean and fix the walls, then apply smooth coats of high-quality paint in the colors you choose. Whether it’s one wall or the whole place, we work neatly and leave your space looking clean and colorful.",
    },
];

export default function ServicePage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Landscaping Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Landscaping Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
                imageSrc="/images/Maintenance/landscaping/landscaping.png"
            />
            <BestDeepCleaning
                title="Best Landscaping Services in UAE from Care N Clean"
                paragraph={
                    <>
                        {/* The UAE market values well-designed and maintained outdoor spaces.{" "} */}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        delivers expert landscaping solutions for both residential and commercial properties. In landscaping and cleaning services, Care n Clean primarily provides
                        landscape care and maintenance services, including planting trees, shrubs, flowers, lawns, or gardens.
                        Our proficient handyman may also design landscape plans or construct walkways, retaining walls, decks, fences, ponds, and similar structures.
                        With a devoted focus on you and your goals, we are changing the way landscape services are delivered. Our workers are well trained and experienced. We give
                        in-house training to keep our workers proficient.
                    </>
                }
                imageSrc="/images/Maintenance/landscaping/1.jpg"
                imageAlt="Landscaping Services"
            />
            <BenefitsOfDeepCleaning
                title="Common Landscaping Problems"
                content="Landscaping services go beyond just planting and trimming. Our team identifies and fixes outdoor issues that affect the beauty and health of your space.
                Customer’s satisfaction and trust on our organization is very important to us. We ensure the quality of work. As our logo says “your happiness, our pride”"
                imageLeft={true}
                imageSrc="/images/Maintenance/landscaping/4.jpg"
                imageAlt="Landscaping Image"
                points={[
                    "Patchy Lawns",
                    "Dying Plants",
                    "Soil Erosion",
                    "Weed Overgrowth",
                    "Poor Drainage",
                    "Damaged Pathways",
                    "Pest Infestation"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Landscaping Services Today!"
                description="Transform your outdoor space with Care N Clean’s expert landscaping services. Whether you need garden care, lawn maintenance, or custom landscape design,
                 our skilled team is ready to help. From organizing to development, alimentation, and improvement, our handyman’s years of experience make us a habitual partner for the
                  entire lifecycle of your premises. Book your service Today!"
                defaultService="Landscaping" />

            <BenefitsOfDeepCleaning
                title="Benefits of Landscaping"
                content="Regular landscaping not only improves the appearance of your outdoor space but also supports healthier plants, safer walkways, and better property value. 
                Our experts help maintain your garden, lawn, and hardscapes to prevent overgrowth, erosion, or damage. With consistent care, you enjoy a clean, organized, and vibrant 
                environment that’s perfect for relaxing or entertaining. Landscaping services also help manage water flow and reduce pest risks."
                imageLeft={true}
                imageSrc="/images/Maintenance/landscaping/3.jpg"
                imageAlt="Landscaping Image"
                points={[
                    "Curb Appeal",
                    "Healthy Plants",
                    "Weed Control",
                    "Erosion Prevention",
                    "Clean Pathways",
                    "Outdoor Safety",
                    "Increased Value"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections}
                mainTitle="Other Maintenance Services" />
            <GetAQuoteSection text="Trusted Landscaping Services Across the UAE – Fast, Reliable, and Affordable." />


        </div>

    )
}
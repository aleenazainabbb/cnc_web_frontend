"use Client"
import QuoteBannerSection from "@/components/request_page_component/QuoteBannerSection"
import BestDeepCleaning from "@/components/Cleaning_service_page/BestDeepCleanBanner"
import BenefitsOfDeepCleaning from "@/components/Cleaning_service_page/benefitsofDeepClean"
import GetAQuoteSection from "@/components/GetAQuoteSection"
import OurBestDeepClean from "@/components/Cleaning_service_page/OurDeepCleanServices"
import BookYourService from "@/components/Cleaning_service_page/bookYourService"
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
            // imageSrc="/images/Maintenance/header.avif"
            />
            <BestDeepCleaning
                title="Best Landscaping Services in UAE from Care N Clean"
                paragraph={
                    <>
                        The UAE market values well-designed and maintained outdoor spaces.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        delivers expert landscaping solutions for both residential and commercial properties. Our experienced team handles everything from planting trees, flowers, and lawns to building walkways, decks, and fences. We also offer regular landscape care to keep your surroundings clean, green, and inviting. With a strong focus on your goals and comfort, we bring creativity and structure to every outdoor area. Whether it’s garden maintenance or full landscape design, our services are built to enhance your environment and add long-term value to your space.
                    </>
                }
                imageSrc="/images/Maintenance/landscaping/1.jpg"
                imageAlt="Landscaping Services"
            />
            <BenefitsOfDeepCleaning
                title="Common Landscaping Problems"
                content="Landscaping services go beyond just planting and trimming. Our team identifies and fixes outdoor issues that affect the beauty and health of your space. Whether it's patchy lawns, poor drainage, dying plants, or broken walkways, we handle problems both small and large. We also take care of seasonal maintenance to protect your garden from extreme weather. With regular attention and expert care, your outdoor areas stay green, clean, and thriving all year round."
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
                description="Transform your outdoor space with Care N Clean’s expert landscaping services. Whether you need garden care, lawn maintenance, or custom landscape design, our skilled team is ready to help. We handle everything from planting and trimming to building walkways and maintaining healthy greenery. Book your service today and let us bring life, beauty, and structure to your outdoor areas."
                defaultService="Landscaping" />

            <BenefitsOfDeepCleaning
                title="Benefits of Landscaping"
                content="Regular landscaping not only improves the appearance of your outdoor space but also supports healthier plants, safer walkways, and better property value. Our experts help maintain your garden, lawn, and hardscapes to prevent overgrowth, erosion, or damage. With consistent care, you enjoy a clean, organized, and vibrant environment that’s perfect for relaxing or entertaining. Landscaping services also help manage water flow and reduce pest risks."
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

            <OurBestDeepClean sections={sixSections}
                mainTitle="Other Maintenance Services" />
            <GetAQuoteSection text="Trusted Landscaping Services Across the UAE – Fast, Reliable, and Affordable." />


        </div>

    )
}
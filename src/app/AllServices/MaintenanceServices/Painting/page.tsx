export const metadata = {
    title: "Best Painting Services in UAE - Care N Clean",
    description: "Transform your space with Care n Clean’s expert painting services in UAE. We offer high-quality interior and exterior painting solutions for all properties.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Best Painting Services in UAE - Care n Clean",
        description: "Book reliable painting services for homes and businesses. Quick, clean, and high-quality finishes by Care N Clean.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/MaintenanceServices/Painting",
        images: [
            {
                url: "http://192.168.18.13:3000/images/Maintenance/Painting/1.jpg",
                width: 1200,
                height: 630,
                alt: "Care N Clean Painting Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Care N Clean - Expert Painting Services in UAE",
        description: "Book reliable painting services for homes and businesses. Quick, clean, and high-quality finishes by Care N Clean.",
        images: ["http://192.168.18.13:3000/images/Maintenance/Painting/1.jpg"],
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
        title: "Plumbing Services",
        content:
            "Plumbing problems at home or in a building need quick and careful attention. Our trained plumbers fix leaks, clear blocked drains, and replace broken pipes with care. Whether you need to upgrade your bathroom or fix a small issue, we handle everything with skill and clean work. From small repairs to full plumbing setups, we make sure your water systems run smoothly and safely.",
    },
    {
        title: "Landscaping Services",
        content:
            "A neat and green outdoor space makes your home look better and feel more relaxing. Our landscaping team takes care of lawns, gardens, and trees with regular trimming, cleaning, and design. We help bring your outdoor ideas to life while keeping everything fresh and healthy. Your garden stays clean, green, and beautiful all year long.",
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
];

export default function ServicePage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Painting Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Painting Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Book Now"
                buttonLink="/BookAservicePage"
                imageSrc="/images/banners/Painting.png"
            />
            <AutoBreadcrumb />
            <BestDeepCleaning
                title="Best Painting Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Our team of painters in{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        Our team of painters in Care N Clean will show up on time and provide you with the quality you expect in an unexpected timeline. All you need to do is just sit
                        back and our experts will automatically do everything for you and it is our guaranty. And our team professionals are here to provide you with what you want in
                        every way possible!
                    </>
                }
                imageSrc="/images/Maintenance/Painting/1.jpg"
                imageAlt="Painting Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Painting Problems"
                content="Uneven coats, peeling paint, and visible brush strokes can make your walls look untidy and unfinished. Our professionals tackle all kinds of painting issues—whether it’s faded colors, patchy walls, or water-stained surfaces. We fix, prep, and paint with precision to ensure smooth, vibrant results every time. With quality materials and experienced hands, we turn your painting challenges into flawless finishes."
                imageLeft={true}
                imageSrc="/images/Maintenance/Painting/2.png"
                imageAlt="Painting Maintenance Image"
                points={[
                    "Peeling Paint",
                    "Patchy Walls",
                    "Water Stains",
                    "Faded Colors",
                    "Uneven Coats",
                    "Cracked Surfaces",
                    "Paint Smudges"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Painting Services Today!"
                description="Our workers are well trained and experienced. We give in-house training to keep our workers proficient. Book today and experience fast, professional 
                Customer’s satisfaction and trust on our organization is very important to us. We ensure the quality of work. As our logo says “your happiness, our pride”painting 
                done right."

                defaultService="Painting" />
            <BenefitsOfDeepCleaning
                title="Benefits of Painting Services"
                content="Hiring professional painters ensures a clean, smooth finish and saves you time and effort. Our trained staff offer expert advice, use high-quality paints,
                 and follow best techniques to deliver quick and long-lasting results. Whether it’s a fresh coat or a complete color makeover, painting services not only enhance the
                  look of your space but also protect walls from damage and wear over time. You get a lot of advantages when you hire professionals providing home painting services. 
                  As our painting professionals are constantly inspecting their work, we can guarantee that we'll leave you saying Awesome!"
                imageLeft={true}
                imageSrc="/images/Maintenance/Painting/3.png"
                imageAlt="Painting Benefits Image"
                points={[
                    "Expert Recommendations",
                    "Quick Servce Results",
                    "Smooth Finish",
                    "Color Refresh",
                    "Wall Protection",
                    "Detailed Work",
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Maintenance Services" />
            <GetAQuoteSection text="Trusted Painting Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
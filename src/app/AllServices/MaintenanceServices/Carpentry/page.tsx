export const metadata = {
    title: "Carpentry Services in UAE - Care N Clean",
    description: "Expert carpentry services across the UAE. From custom furniture to door repairs and moldings — we build with precision and care.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Carpentry Handyman Services in UAE - Care n Clean",
        description: "Get expert carpentry handyman services in UAE with Care n Clean. From furniture repair to custom woodwork, we ensure top-quality craftsmanship.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/MaintenanceServices/Carpentry", 
        images: [
            {
                url: "http://192.168.18.13:3000/images/Maintenance/carpentry/carpet1.png",
                width: 1200,
                height: 630,
                alt: "Care N Clean Carpentry Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Care N Clean - Expert Carpentry Services in UAE",
        description: "From crown molding to custom shelving, get reliable and skilled carpentry work done by professionals at Care N Clean.",
        images: ["http://192.168.18.13:3000/images/Maintenance/carpentry/carpet1.png"],
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
                        Best Carpentry Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Carpentry Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
                imageSrc="/images/banners/carpenter.png"
            />
            <AutoBreadcrumb/>
            <BestDeepCleaning
                title="Best Carpentry Services in UAE from Care N Clean"
                paragraph={
                    <>
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        would like to be able to have the opportunity to service your carpentry and remodeling needs. We are here to assist you with your renovation needs with our
                        world-class carpentry handyman services in UAE. We have hands-on experience in commercial, residential, industrial, new construction, installation, and
                        repairment of all wood doors, custom doors, decorative hardware, wood windows and frames, kitchen and bathroom remodeling, home improvement, and finished
                        carpentry service (Intricate woodworking, base molding, crown molding, and cabinetry).
                    </>
                }
                imageSrc="/images/Maintenance/carpentry/carpet1.png"
                imageAlt="Carpentry Services"
            />
            <BenefitsOfDeepCleaning
                title="Common Carpentry Problems"
                content="Carpentry issues can affect both the appearance and safety of your space. Whether it's squeaky doors, loose cabinets, cracked wooden frames, or worn-out moldings, these small problems can grow into costly repairs if ignored. Our team identifies and fixes issues with furniture, fittings, and structural woodwork to keep your property looking polished and working smoothly. Regular checks and timely repairs help extend the life of your woodwork and maintain the beauty of your interiors."
                imageLeft={true}
                imageSrc="/images/Maintenance/carpentry/2.jpg"
                imageAlt="Carpentry Image"
                points={[
                    "Loose Hinges",
                    "Squeaky Doors",
                    "Broken Cabinets",
                    "Cracked Frames",
                    "Worn Moldings",
                    "Damaged Panels",
                    "Warped Wood"
                ]}
                showViewServicesBtn={false}
            />
            <BookYourService
                title="Book Your Carpentry Services Today!"
                description="Don’t forget to trust an expert while trading! From fixing broken cabinets and doors to installing shelves, molding, and 
                 custom wood features, Care N Clean has a team of experts to help you with these tasks. We give in-house
                 training to keep our workers proficient. So, what are you waiting for? Start with your booking now!"
                defaultService="Carpentry" />
            <BenefitsOfDeepCleaning
                title="Benefits of Carpentry"
                content="Professional carpentry work adds strength, style, and value to your property. From sturdy furniture to detailed wood trims, quality carpentry enhances both 
                function and appearance. Customer’s satisfaction and trust on our organization is very important to us. We ensure the quality of work. As our logo says “your happiness,
                 our pride”"
                imageLeft={true}
                imageSrc="/images/Maintenance/carpentry/3.jpg"
                imageAlt="Carpentry Image"
                points={[
                    "Strong Fixtures",
                    "Custom Designs",
                    "Neat Finish",
                    "Space Optimization",
                    "Lasting Repairs",
                    "Improved Style",
                    "Increased Value"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Maintenance Services" />
            <GetAQuoteSection text="Trusted Carpentry Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
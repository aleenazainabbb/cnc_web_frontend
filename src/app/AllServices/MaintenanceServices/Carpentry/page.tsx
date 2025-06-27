"use Client"
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
            // imageSrc="/images/Maintenance/carpentry/herosection.png"
            />
            <BestDeepCleaning
                title="Best Carpentry Services in UAE from Care N Clean"
                paragraph={
                    <>
                        The UAE market demands high-quality craftsmanship for both home and commercial spaces.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers expert carpentry services tailored to renovation, repair, and installation needs. From custom woodwork and decorative moldings to full kitchen and bathroom remodeling, our experienced team delivers reliable and detailed results. Whether it’s fitting wood doors, windows, cabinetry, or handling intricate finish work, we bring precision and care to every project. With a commitment to quality and customer satisfaction, our carpentry services add value, beauty, and lasting strength to any space.
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
                description="Need expert help with woodwork or repairs? Care N Clean offers professional carpentry services for homes and offices. From fixing broken cabinets and doors to installing shelves, molding, and custom wood features, our skilled team handles it all with care and precision. Book your service today and bring durable, detailed craftsmanship to your space."
                defaultService="Carpentry" />
            <BenefitsOfDeepCleaning
                title="Benefits of Carpentry"
                content="Professional carpentry work adds strength, style, and value to your property. From sturdy furniture to detailed wood trims, quality carpentry enhances both function and appearance. Whether it’s a custom-built shelf or repairing worn-out doors, skilled carpenters ensure everything fits and works perfectly. Regular carpentry care also helps prevent long-term damage, saves costs, and keeps your home or office organized and visually appealing."
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
            <NeedHelp/>
            <OurBestDeepClean sections={sixSections} mainTitle="Other Maintenance Services" />
            <GetAQuoteSection text="Trusted Carpentry Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
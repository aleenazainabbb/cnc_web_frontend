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
                        Best Electrical Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Electrical Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/Maintenance/header.avif"
            />
            <BestDeepCleaning
                title="Best Electrical Services in UAE from Care N Clean"
                paragraph={
                    <>
                        The UAE market relies heavily on uninterrupted electricity for safety, comfort, and convenience. {" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{" "}
                        provides professional electrical services for both residential and commercial properties. Whether you need wiring installations, circuit repairs, or safety checks, our certified electricians ensure quality work with minimal disruption. From minor fixes to full rewiring jobs, we handle every task with precision using top-grade tools and safety-first practices. Depend on us for safe, efficient, and long-lasting electrical solutions.
                    </>
                }
                 imageSrc="/images/Maintenance/Electrical/1.png"
                imageAlt="Electrical Services"
            />

            <BenefitsOfDeepCleaning
                title="Common Electrical Problems"
                content="Electrical issues can cause serious safety risks and functional disruptions. From flickering lights and faulty outlets to tripped circuit breakers or exposed wiring, our skilled team quickly finds and fixes the problem. We also handle overloaded circuits, outdated wiring, and non-working switches. Routine inspections and timely repairs protect your property from hazards and ensure everything runs smoothly."
                imageLeft={true}
                imageSrc="/images/Maintenance/Electrical/2.png"
                imageAlt="Electrical Maintenance Image"
                points={[
                    "Flickering Lights",
                    "Faulty Outlets",
                    "Tripped Breakers",
                    "Loose Wiring",
                    "Power Surges",
                    "Overloaded Circuits",
                    "Non-working Switches"
                ]}
                showViewServicesBtn={false}
            />

            <BookYourService
                title="Book Your Electrical Services Today!"
                description="Need reliable electrical work done? Care N Clean offers certified electricians to handle wiring, installations, repairs, and more. Whether it’s replacing a switch or checking your entire system, our professionals are ready to help. Book your service today for safe, efficient, and expert electrical solutions."
                defaultService="Electrical" />

            <BenefitsOfDeepCleaning
                title="Benefits of Electrical Services"
                content="Regular electrical maintenance keeps your home or office safe from fire hazards and ensures consistent power supply. Well-maintained systems reduce energy waste and extend the lifespan of appliances. Whether it's improving lighting, upgrading panels, or fixing outdated wiring, our expert care improves reliability and comfort. Stay safe and powered up with trusted electrical services from Care N Clean."
                imageLeft={true}
                 imageSrc="/images/Maintenance/Electrical/3.png"
                imageAlt="Electrical Image"
                points={[
                    "Safety First",
                    "Energy Efficiency",
                    "Fewer Outages",
                    "Longer Appliance Life",
                    "System Upgrades",
                    "Quick Repairs",
                    "Peace of Mind"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp/>

            <OurBestDeepClean sections={sixSections} mainTitle="Other Maintenance Services" />
            <GetAQuoteSection text="Trusted Electrical Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
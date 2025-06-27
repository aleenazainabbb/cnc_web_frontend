"use Client"
import QuoteBannerSection from "@/components/request_page_component/QuoteBannerSection"
import BestDeepCleaning from "@/components/Cleaning_service_page/BestDeepCleanBanner"
import AchievementSection from "@/components/home_page_components/AchievementSection"
import BenefitsOfDeepCleaning from "@/components/Cleaning_service_page/benefitsofDeepClean"
import LifeMadeEasySection from "@/components/home_page_components/LifeMadeEasySection"
import ContactUsSection from "@/components/ContactUsSection"
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

export default function MaintenancePage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Maintenance Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Maintenance Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/Maintenance/header.avif"
            />
            <BestDeepCleaning
                title="Best Maintenance Services in UAE from Care N Clean"
                paragraph={
                    <>
                        The UAE market has a growing need for reliable maintenance services.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        provides expert maintenance solutions for both residential and commercial properties. Our professionals ensure every space remains fully functional, safe, and in excellent condition. With our skilled team, we deliver dependable results using advanced tools and environmentally responsible materials of the highest standards. Your comfort and peace of mind are enhanced through spaces that are properly maintained and cared for. Routine and specialized maintenance goes beyond simple repairs to prevent issues and promote a healthier, more efficient environment.
                    </>
                }
                imageSrc="/images/Maintenance/1.jpg"
                imageAlt="Maintenance Services"
            />
            <AchievementSection />
            <BenefitsOfDeepCleaning
                title="What are Maintenance Services?"
                content="Maintenance services need more care than just basic tasks. Our team works carefully to check and look after every part of your home or workplace. We don’t just focus on what’s easy to see—we also take care of things that are often missed. This helps keep everything in good shape and working well. Regular maintenance helps stop problems before they start and keeps your place safe, comfortable, and running smoothly for your family or team."
                imageLeft={true}
                imageSrc="/images/Maintenance/whatis.png"
                imageAlt="Maintenance Image"
                points={[
                    "Plumbing Services",
                    "Landscaping Services",
                    "Carpentry Services",
                    "AC Maintenance Services",
                    "Electrical Services",
                    "Handyman Services",
                    "Painting Services"
                ]} />
            <BookYourService
                title="Book Your Maintenance Services Today!"
                description="Experience the ease of booking your professional maintenance service with Care N Clean. Whether it’s for your home or office, our skilled team ensures everything stays in top condition—safe, functional, and well-maintained. Trust our experts to deliver high-quality service using the right tools, careful attention, and reliable techniques."
            />
            <LifeMadeEasySection
                title="How We Work"
                description="Our service for maintenance work offers a simple and stress-free booking process. You can contact us by phone or through our website to schedule an appointment at your convenience. After understanding your space and service needs, our team prepares a customized maintenance plan tailored to your property. On the scheduled day, our professionals arrive fully equipped with proper tools and materials to complete the job safely and efficiently. Each task is carried out with attention to detail, followed by a final check to ensure everything is in perfect order. We focus on delivering reliable service that meets customer expectations with lasting results."
                buttonText="Get an estimate"
                buttonLink="/booking"
                useSectionDescClass={false}
            />
            <BenefitsOfDeepCleaning
                title="Benefits of Maintenance"
                content="Regular maintenance work improves the safety, appearance, and functionality of your living or working space. Skilled repairs and routine checks help prevent breakdowns, reduce long-term costs, and extend the life of essential systems and surfaces. These services target hidden issues that often go unnoticed, ensuring everything from plumbing to electrical fittings operates smoothly. Consistent upkeep not only supports daily comfort but also creates a safer and more reliable environment for everyone."
                imageLeft={false}
                imageSrc="/images/Maintenance/benefits.png"
                imageAlt="Maintenance Image"
                points={[
                    "Prevention",
                    "Safety",
                    "Efficiency",
                    "Durability",
                    "Comfort",
                    "Cost Savings",
                    "Reliability",
                    "Performance"
                ]}
            />
            <ContactUsSection />
              <NeedHelp />
            <OurBestDeepClean sections={sixSections}
                mainTitle="Our Maintenance Services" />
              
            <GetAQuoteSection text="Trusted Maintenance Services Across the UAE – Fast, Reliable, and Affordable." />


        </div>

    )
}
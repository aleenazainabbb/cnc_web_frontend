export const metadata = {
    title: "Professional Handyman Services in Dubai - Care N Clean",
    description: "Hire professional handyman services in Dubai with Care n Clean. From minor repairs to complete maintenance, we handle it all with expertise.",
    authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Care N Clean - Expert Handyman Services in Dubai",
        description: "Book trusted handyman services for your home or office. We handle wall repairs, curtain installations, furniture assembly, and more with guaranteed quality.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/MaintenanceServices/Handyman", // Local development URL
        images: [
            {
                url: "http://192.168.18.13:3000/images/Maintenance/Handyman/1.png",
                width: 1200,
                height: 630,
                alt: "Care N Clean Handyman Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Care N Clean - Expert Handyman Services in UAE",
        description: "From small fixes to home improvements — book handyman help across the UAE with Care N Clean.",
        images: ["http://192.168.18.13:3000/images/Maintenance/Handyman/1.png"],
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
                        Best Handyman Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Handyman Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
                imageSrc="/images/banners/handyman.png"
            />
            <BestDeepCleaning
                title="Best Handyman Services in UAE from Care N Clean"
                paragraph={
                    <>
                        Nonetheless of the size of your home, maintaining it can be a struggle. While you may not have the time or the tools to accomplish everything on your to-do list,
                        what you do have is a{" "}
                        <a
                            href="/about"
                            style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
                        >
                            Care N Clean
                        </a>{"  "}
                        booking with a reliable team of experts who offer home handyman services with a done properly promise. We truly understand your work commitment and we don’t want
                        you to spend your time in the anxiety of fixing doorknobs or wallboard. It is our goal to keep your home in ship-shape so you can stay on schedule.
                    </>
                }
                imageSrc="/images/Maintenance/Handyman/2.png"
                imageAlt="Handyman Services"
            />
            <BenefitsOfDeepCleaning
                title="Common Handyman Problems"
                content="Even small household issues can turn into big headaches if ignored. Whether it's loose cabinet handles, squeaky doors, minor wall damage, or broken fixtures, 
                For that reason, we have a proper team that comes with all the essential tools and techniques required to undergo the desired work and reliable handyman service. We also assist with TV mounting, furniture assembly, curtain installation, and much more. These fixes
                 improve functionality, prevent further damage, and keep your space safe and comfortable."
                imageLeft={true}
                imageSrc="/images/Maintenance/Handyman/3.jpg"
                imageAlt="Handyman Maintenance Image"
                points={[
                    "Wall Repairs",
                    "Loose Fixtures",
                    "Furniture Assembly",
                    "TV Mounting",
                    "Door Adjustments",
                    "Shelf Installation",
                    "Curtain Rod Fixing"
                ]}
                showViewServicesBtn={false}
            />
            <BookYourService
                title="Book Your Handyman Services Today!"
                description="We give in-house training to keep our workers proficient. 
                Customer’s satisfaction and trust on our organization is very important to us. We ensure the quality of work. As our logo says “your happiness, our pride
                Book your service now and enjoy a well-maintained, worry-free home or office."
                defaultService="Handyman" />

            <BenefitsOfDeepCleaning
                title="Benefits of Handyman Services"
                content="Our handyman services offer a quick and reliable solution for all those lingering tasks around your home or workplace. Whether it’s saving time, avoiding costly DIY
                 mistakes, or getting things fixed properly the first time, our experts deliver dependable results. With all tools in hand and attention to detail, we make your everyday space
                  more organized, safe, and functional."
                imageLeft={true}
                imageSrc="/images/Maintenance/Handyman/1.png"
                imageAlt="Handyman Benefits Image"
                points={[
                    "Time Saver",
                    "Cost Efficient",
                    "Reliable Fixes",
                    "Safety First",
                    "All-in-One Help",
                    "Neat Finish",
                    "Peace of Mind"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Maintenance Services" />
            <GetAQuoteSection text="Trusted Handyman Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
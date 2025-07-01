export const metadata = {
    title: "Professional Plumbing Services in UAE - Care N Clean",
    description: "Need a plumber in UAE? Care N Clean offers reliable plumbing services, including leak repairs, installations, and maintenance for homes and businesses.",
   authors: [{ name: "Softnio" }],
    openGraph: {
        title: "Professional Plumbing Services in UAE - Care N Clean",
        description: "Book professional plumbing services across UAE with Care N Clean. Quick, affordable, and hassle-free.",
        type: "website",
        url: "http://192.168.18.13:3000/AllServices/MaintenanceServices/Plumbing", 
        images: [
            {
                url: "http://192.168.18.13:3000/images/Maintenance/plumbing/plumbing1.png", 
                width: 1200,
                height: 630,
                alt: "Care N Clean Plumbing Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Care N Clean - Reliable Plumbing Services",
        description: "Book professional plumbing services across UAE with Care N Clean. Quick, affordable, and hassle-free.",
        images: ["http://192.168.18.13:3000/images/Maintenance/plumbing/plumbing1.png"],
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

export default function ServicePage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Plumbing Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Plumbing Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            />
            <AutoBreadcrumb/>
            <BestDeepCleaning
                title="Best Plumbing Services in UAE from Care N Clean"
                paragraph={
                    <>
                        The UAE market has a growing demand for trusted plumbing services.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        delivers expert plumbing solutions for both residential and commercial properties. Frozen pipes, damaged water lines, drain clogs, cracked outside faucets,
                        water heater repair, or sump pump installations, our efficient team can fix anything. Having difficulty in a smooth flow of water? No problem. You can make use of our service to book
                        a plumber to resolve the issue of your taps, bowls, and other things by installing a water softener.  Customer’s satisfaction and trust on our organization is very important to us.
                        We ensure the quality of work. As our logo says “your happiness, our pride”.
                    </>
                }
                imageSrc="/images/Maintenance/plumbing/plumbing1.png"
                imageAlt="Plumbing Services"
            />
            <BenefitsOfDeepCleaning
                title="Common Plumbing Problems"
                content="Plumbing services need more than just quick fixes. Our team carefully checks and takes care of every part of your water system—both inside and outside your space.
                 We don’t just handle what’s visible; we also fix things that often go unnoticed, like frozen pipes, clogged drains, or cracked outdoor faucets. From water heater repairs to 
                 sump pump installations, we work to keep your plumbing in good shape and flowing smoothly. Don't let a small leak cost you bigger money! Even small leak drips, or occasionally
                  running toilets can lead to bigger problems. Ask us how to correct these plumbing problems and help save your money! So, what are you waiting for? Start with your booking now!"
                imageLeft={true}
                imageSrc="/images/Maintenance/plumbing/2.png"
                imageAlt="Plumbing Image"
                points={[
                    "Leaky Faucets",
                    "Clogged Drains",
                    "Low Water Pressure",
                    "Running Toilets",
                    "Burst Pipes",
                    "Sump Pump Failure"
                ]}
                showViewServicesBtn={false}
            />
            <BookYourService
                title="Book Your Plumbing Services Today!"
                description="Don’t be stuck with plumbing disasters! Just call 
                 Care n Clean for the best plumbers to remove all of your plumbing services, repairs, and replacement needs. Now is the time to spend carefree life and enjoy our 24 hrs
                  plumbing services!  Having difficulty in a smooth flow of water? No problem. You can make use of our service to book a plumber to resolve the issue of your taps,
                   bowls, and other things by installing a water softener."
                defaultService="Plumbing" />
            <BenefitsOfDeepCleaning
                title="Benefits of Plumbing"
                content="Regular plumbing care protects your home or workplace from unexpected issues like leaks, clogs, or water damage. Our workers are well trained and experienced. We give
                 in-house training to keep our workers proficient. Fixing small problems early like dripping taps or running toilets can save you from bigger, 
                 costly repairs later. With Care n Clean, you get peace of mind, better water quality, and a safer, more reliable plumbing system every day."
                imageLeft={true}
                imageSrc="/images/Maintenance/plumbing/3.png"
                imageAlt="Plumbing Image"
                points={[
                    "Leak Prevention",
                    "Flow Efficiency",
                    "Cost Savings",
                    "Damage Control",
                    "Water Quality",
                    "Pipe Longevity",
                    "Quick Repairs"
                ]}
                showViewServicesBtn={false}
            />
            <NeedHelp />
            <OurBestDeepClean sections={sixSections}
                mainTitle="Other Maintenance Services" />
            <GetAQuoteSection text="Trusted Plumbing Services Across the UAE – Fast, Reliable, and Affordable." />


        </div>

    )
}
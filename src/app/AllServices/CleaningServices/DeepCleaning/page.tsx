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
                        Best Deep Cleaning Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Deep Cleaning Services at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            // imageSrc="/images/Maintenance/header.avif"
            />
            <BestDeepCleaning
                title="Best Deep Cleaning Services in UAE from Care N Clean"
                paragraph={
                    <>
                        The UAE market requires deep cleaning services.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        provides expert deep cleaning services for both residential and commercial buildings. Our professionals create a spotless environment with fresh air free from germs. With our expert team, we deliver optimal results using high-quality equipment along with sustainable cleaning products of the best quality. Your well-being and comfort, together with your mental serenity, improve through an environment maintained in clean condition. Deep cleaning performed beyond regular cleaning eliminates the complete presence of hidden dirt along with allergens and germs.   </>
                }
                imageSrc="/images/Maintenance/1.jpg"
                imageAlt="Deep Cleaning Services"
            />
            <BenefitsOfDeepCleaning
                title="Common Deep Cleaning Problems"
                content="Dirt and germs often hide in places regular cleaning can’t reach—under furniture, behind appliances, or deep in carpets and vents. Without proper care, these areas collect dust, bacteria, and allergens that affect air quality and hygiene. Common issues include stained tiles, mold in bathrooms, greasy kitchen surfaces, and buildup in corners and fixtures. Our deep cleaning team tackles these hidden messes with advanced tools and techniques, ensuring your space is not just clean—but truly refreshed and sanitized."
                imageLeft={true}
                imageSrc="/images/carpentry/2.jpg"
                imageAlt="Deep Cleaning Image"
                points={[
                    "Tile Stains",
                    "Hidden Dust",
                    "Greasy Surfaces",
                    "Mold Growth",
                    "Odor Buildup",
                    "Allergen Traps",
                    "Neglected Corners"
                ]}
                showViewServicesBtn={false}
            />
            <BookYourService
                title="Book Your Deep Cleaning Services Today!"
                description="The deep cleaning service performed by Care N Clean delivers a superior quality solution in the UAE market. Our company provides cleaning services for homes and offices together with commercial spaces. Our skilled staff members provide top-quality cleaning services that match every specific requirement. Secure your deep cleaning service right now to get a healthier environment and a clean space."
                defaultService="Deep Cleaning" />
            <BenefitsOfDeepCleaning
                title="Benefits of Deep Cleaning"
                content="Proficient cleaning techniques eliminate allergens and bacteria alongside dust, producing cleaner air and minimizing infection risks. The complete cleaning routine reaches every location that regular maintenance fails to achieve, ensuring a contamination-free environment. The cleaning method enhances sanitation standards and comfort quality, which produces better home and workplace health conditions."
                imageLeft={true}
                imageSrc="/images/carpentry/3.jpg"
                imageAlt="Carpentry Image"
                points={[
                    "Cleaner Air",
                    "Germ Removal",
                    "Allergen Reduction",
                    "Hidden Dirt Cleanup",
                    "Better Hygiene",
                    "Odor Elimination",
                    "Healthier Spaces"
                ]}
                showViewServicesBtn={false}
            />
            <OurBestDeepClean sections={sixSections} mainTitle="Other Cleaning Services" />
            <GetAQuoteSection text="Trusted Cleaning Services Across the UAE – Fast, Reliable, and Affordable." />
        </div>

    )
}
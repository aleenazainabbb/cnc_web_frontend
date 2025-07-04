export const metadata = {
  title: "AC Maintenance and Service in UAE - Care N Clean",
  description: "Keep your AC running efficiently with Care N Clean’s expert AC maintenance and service in UAE. Reliable cooling solutions for your comfort.",
  authors: [{ name: "Softnio" }],
  openGraph: {
    title: "Care N Clean - Professional AC Maintenance Services in UAE",
    description: "Book reliable AC servicing, filter cleaning, and cooling system repairs. Fast, affordable, and efficient service from Care N Clean.",
    type: "website",
    url: "http://192.168.18.13:3000/AllServices/MaintenanceServices/ACmaintenance",
    images: [
      {
        url: "http://192.168.18.13:3000/images/Maintenance/AC/1.jpg",
        width: 1200,
        height: 630,
        alt: "Care N Clean AC Maintenance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Care N Clean - Professional AC Maintenance Services in UAE",
    description: "AC not cooling? Strange noises or leaks? Get expert maintenance services in the UAE with Care N Clean.",
    images: ["http://192.168.18.13:3000/images/Maintenance/AC/1.jpg"],
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
            Best AC Maintenance Services in <br />
            UAE from Care N Clean
          </>
        }
        subheading="Quality AC Maintenance Services at a fair price."
        subheadingFirst={true}
        showButton={true}
        buttonText="Book Now"
        buttonLink="/BookAservicePage"
        imageSrc="/images/banners/AC.png"
      />
      <AutoBreadcrumb/>
      <BestDeepCleaning
        title="Best AC Maintenance Services in UAE from Care N Clean"
        paragraph={
          <>
            <a
              href="/about"
              style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
            >
              Care N Clean
            </a>{" "}
            offers expert AC maintenance services designed to keep your environment cool and comfortable. Whether you’re facing weak airflow, strange noises, or an unresponsive system,
            our trained technicians are ready to help. Do you want a professional for repairing, improving, or restoring your air conditioning system? Look no further! Our team of
            experts in Care N Clean will help you, no matter what AC problem you are running into. We have one of the top-rated AC maintenance and service in UAE.
          </>
        }
        imageSrc="/images/Maintenance/AC/1.jpg"
        imageAlt="AC Maintenance Services"
      />

      <BenefitsOfDeepCleaning
        title="Common AC Maintenance Problems"
        content="Air conditioning problems can disrupt comfort and lead to higher energy bills if not addressed. Whether it's weak airflow, water leakage, strange noises, or thermostat
         issues, our team handles it all. We also deal with dirty filters, blocked ducts, and worn-out parts that affect performance. It’s time to have a sound sleep in AC and not in 
         blowing cool air. So, what are you waiting for? Start with your booking now at the official website of Care n Clean! Customer’s satisfaction and trust on our organization is very important
          to us. We ensure the quality of work. As our logo says “your happiness, our pride”"
        imageLeft={true}
        imageSrc="/images/Maintenance/AC/1.png"
        imageAlt="AC Maintenance Image"
        points={[
          "Weak Airflow",
          "Water Leakage",
          "Strange Noises",
          "Thermostat Issues",
          "Dirty Filters",
          "Blocked Ducts",
          "Worn-out Parts"
        ]}
        showViewServicesBtn={false}
      />

      <BookYourService
        title="Book Your AC Maintenance Services Today!"
        description="Our workers are well trained and experienced. We give in-house training to keep our workers proficient. You can book and schedule your AC upkeep services from 
        any place simply utilizing your cell phone and fix any AC related issues to keep your premises cool. Begin booking with Care n Clean from today!"
        defaultService="AC Maintenance" />

      <BenefitsOfDeepCleaning
        title="Benefits of AC Maintenance"
        content="Regular AC maintenance ensures a cool and healthy indoor climate while lowering energy use and preventing costly breakdowns. The deadly summer month, apologies to people 
        who love this season make it necessary for a household to have an AC, and when it doesn’t work you feel like you are in a desert. But not to worry when Care n Clean is here. The
         various services we provide include home heating system, AC maintenance, central air conditioning, AC installation, air duct cleaning, emergency air conditioning service, and
          indoor air quality. It’s time to have a sound sleep in AC and not in blowing cool air."
        imageLeft={true}
        imageSrc="/images/Maintenance/AC/3.png"
        imageAlt="AC Maintenance Image"
        points={[
          "Better Cooling",
          "Energy Savings",
          "Clean Air",
          "Fewer Repairs",
          "Quiet Operation"
        ]}
        showViewServicesBtn={false}
      />
      <NeedHelp />

      <OurBestDeepClean sections={sixSections} mainTitle="Other Maintenance Services" />
      <GetAQuoteSection text="Trusted Carpentry Services Across the UAE – Fast, Reliable, and Affordable." />
    </div>

  )
}
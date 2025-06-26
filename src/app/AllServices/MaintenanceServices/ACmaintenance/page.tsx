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
        buttonText="Contact Us"
        buttonLink="/contact"
      // imageSrc="/images/Maintenance/header.avif"
      />
      <BestDeepCleaning
        title="Best AC Maintenance Services in UAE from Care N Clean"
        paragraph={
          <>
            The UAE climate makes reliable air conditioning a must for homes and offices. {" "}
            <a
              href="/about"
              style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}
            >
              Care N Clean
            </a>{" "}
            offers expert AC maintenance services designed to keep your environment cool and comfortable. Whether you’re facing weak airflow, strange noises, or an unresponsive system, our trained technicians are ready to help. From installation to emergency repairs, duct cleaning to full system checks, we use high-quality tools and techniques to deliver fast, effective solutions. Stay worry-free during the hot season with trusted AC care tailored to your needs.
          </>
        }
        imageSrc="/images/Maintenance/AC/1.jpg"
        imageAlt="AC Maintenance Services"
      />

      <BenefitsOfDeepCleaning
        title="Common AC Maintenance Problems"
        content="Air conditioning problems can disrupt comfort and lead to higher energy bills if not addressed. Whether it's weak airflow, water leakage, strange noises, or thermostat issues, our team handles it all. We also deal with dirty filters, blocked ducts, and worn-out parts that affect performance. Regular AC checks and timely maintenance ensure smooth, efficient operation and extend the life of your unit."
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
        description="Need help with your air conditioning system? Care N Clean offers professional AC maintenance and repair services. Whether it’s fixing leaks, cleaning filters, or installing a new unit, our experts ensure cool, clean air flows through your space. Book today and enjoy dependable comfort all year long."
        defaultService="AC Maintenance" />

      <BenefitsOfDeepCleaning
        title="Benefits of AC Maintenance"
        content="Regular AC maintenance ensures a cool and healthy indoor climate while lowering energy use and preventing costly breakdowns. Clean filters improve air quality, while tune-ups extend the life of your system. With our reliable service, you stay comfortable even during the UAE's hottest months. Keep your AC running efficiently and your space fresh with scheduled care from Care N Clean."
        imageLeft={true}
        imageSrc="/images/Maintenance/AC/3.png"
        imageAlt="AC Maintenance Image"
        points={[
          "Better Cooling",
          "Energy Savings",
          "Clean Air",
          "Longer Lifespan",
          "Fewer Repairs",
          "Quiet Operation",
          "Peace of Mind"
        ]}
        showViewServicesBtn={false}
      />

      <OurBestDeepClean sections={sixSections} mainTitle="Other Maintenance Services" />
      <GetAQuoteSection text="Trusted Carpentry Services Across the UAE – Fast, Reliable, and Affordable." />
    </div>

  )
}
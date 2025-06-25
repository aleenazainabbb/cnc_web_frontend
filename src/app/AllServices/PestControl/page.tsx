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
const sixSections = [
   {
  title: "Pigeons & Birds Control",
  content:
    "Bird droppings and nesting can damage buildings and create unsanitary conditions. Our pigeon and bird control service safely removes birds and prevents them from returning, using humane and effective methods like spikes, nets, and repellents to keep your property clean and protected.",
},
{
  title: "Rats & Rodents Control",
  content:
    "Rodents can cause serious health risks and property damage by chewing wires and spreading disease. Our rat and rodent control service identifies entry points, sets traps, and applies treatments to remove and block rodent activity—ensuring your space stays safe and rodent-free.",
},
{
  title: "Termites Control",
  content:
    "Termites silently damage wooden structures, often going unnoticed until it’s too late. Our termite control service uses deep inspection and targeted treatments to remove colonies and protect your home or business from costly structural damage.",
},
{
  title: "Bees & Wasps Control",
  content:
    "Bee and wasp nests near homes or buildings can be dangerous. Our team safely removes active hives and applies deterrents to prevent new nests. We ensure the area is secure while handling the pests with care and proper safety measures.",
},
{
  title: "Ants & Insects Control",
  content:
    "Ants and other small insects can quickly take over kitchens, pantries, and floors. Our insect control service targets the nests and pathways, using safe treatments to remove current infestations and keep them from coming back.",
},
{
  title: "Fleas & Ticks Control",
  content:
    "Fleas and ticks are harmful to both people and pets. Our control service treats carpets, furniture, and outdoor areas to eliminate these pests and reduce the chance of bites, itching, and disease transmission.",
},
{
  title: "Bed Bugs Control",
  content:
    "Bed bugs hide in mattresses, furniture, and walls, causing discomfort and sleepless nights. Our bed bug treatment finds and eliminates them at every stage of life using safe and effective heat or chemical methods to restore your peace of mind.",
},
{
  title: "Cockroach Control",
  content:
    "Cockroaches carry germs and multiply quickly in kitchens and bathrooms. Our cockroach control service uses advanced treatments to target hiding spots and breeding areas, ensuring complete removal and lasting protection.",
}

];

export default function ServicePage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Pest Control in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Pest Control at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
            />
            <BestDeepCleaning
                title="Best Pest Control Services in UAE from Care N Clean"
                paragraph={
                    <>
                        The UAE market requires trusted and effective pest control solutions.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        provides professional pest control services for both residential and commercial properties. Our trained experts use safe and targeted methods to eliminate pests such as cockroaches, ants, termites, bed bugs, and rodents. We focus on long-lasting protection using eco-friendly products that are safe for both people and pets. Whether it’s a one-time treatment or regular service, our goal is to keep your environment clean, healthy, and pest-free. We handle each situation with care, ensuring complete satisfaction and peace of mind.
                    </>

                }
                imageSrc="/images/Pest Control/3.jpg"
                imageAlt="Moving Services"
            />
            <AchievementSection />
            <BenefitsOfDeepCleaning
                title="What are Pest Control Services?"
                content="Pest control services go beyond simply spraying chemicals. At Care N Clean, our trained team offers targeted solutions to eliminate unwanted pests and protect your home or workplace. We inspect the area, identify the type of infestation, and apply safe, effective treatments that suit your space. From cockroach and termite control to bird, rodent, and bed bug removal, we cover a wide range of pest issues using eco-friendly products and expert methods. Whether it’s a one-time visit or regular maintenance, our goal is to keep your environment clean, safe, and pest-free for the long term." imageLeft={true}
                imageSrc="/images/Pest Control/1.jpg"
                imageAlt="Moving Image"
                points={[
                    "Pigeons & Birds Control",
                    "Rats & Rodents Control",
                    "Termites Control",
                    "Bees & Wasps Control",
                    "Ants & Insects Control",
                    "Fleas & Ticks Control",
                    "Bed Bugs Control",
                    "Cockroach Control",
                ]}
            />
            {/* <OurBestDeepClean sections={sixSections}
                mainTitle="Our Maintenance Services"/> */}
            <BookYourService
                title="Book Your Pest Control Service Today!"
                description="Protect your home or workplace from unwanted pests with Care N Clean. Our expert team provides safe and effective pest control solutions tailored to your needs. From cockroaches and bed bugs to rodents and termites, we use eco-friendly treatments and professional techniques to ensure long-lasting results. Book your service today and enjoy a cleaner, healthier, and pest-free environment."
            />
            <LifeMadeEasySection
                title="How We Work"
                description="Our pest control service is designed to be simple, safe, and effective from start to finish. You can easily book your service by phone or through our website at a time that suits you. Once we understand your pest concerns, our team prepares a customized treatment plan for your home or workplace. On the scheduled day, our trained professionals arrive with the proper tools and eco-friendly products. We inspect the area, treat the problem thoroughly, and provide guidance to help prevent future infestations. A final check ensures your space is clean, pest-free, and secure. Your safety and comfort are always our top priority."
                buttonText="Get an estimate"
                buttonLink="/booking"
                useSectionDescClass={false}
            />
            <BenefitsOfDeepCleaning
                title="Benefits of Pest Control Services"
                content="Pest control services help maintain a clean, safe, and healthy environment in your home or workplace. Regular treatments prevent infestations before they start and stop pests from spreading diseases or damaging property. With professional help, you avoid the stress of recurring problems and reduce the need for harsh chemicals over time. Whether it’s insects, rodents, or birds, expert pest control ensures your space stays comfortable, hygienic, and protected for everyone inside."
                imageLeft={false}
                imageSrc="/images/Pest Control/2.jpg"
                imageAlt="Moving Image"
                     points={[
                    "Pigeons & Birds Control",
                    "Rats & Rodents Control",
                    "Termites Control",
                    "Bees & Wasps Control",
                    "Ants & Insects Control",
                    "Fleas & Ticks Control",
                    "Bed Bugs Control",
                    "Cockroach Control",
                ]}
            />
            <ContactUsSection />
            <OurBestDeepClean sections={sixSections}
                mainTitle="Our Pest Control Services" />
            <GetAQuoteSection text="Expert Pest Control Solutions in the UAE – Safe, Effective, and Long-Lasting Protection."/>

        </div>

    )
}
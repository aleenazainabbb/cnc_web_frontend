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
        title: "Local Moving",
        content:
            "Local moves still require careful planning and safe handling. Our team helps you move your home or office within the city with ease. We pack your items, load them safely, and deliver everything to your new place on time. With our support, even short-distance moves feel smooth, fast, and stress-free.",
    },
    {
        title: "Storage Services",
        content:
            "Sometimes you need a safe space to store your things during or after a move. Our secure storage service gives you peace of mind, whether it's for a few days or a few months. We handle your belongings with care and keep them in clean, climate-controlled spaces until you're ready to use them again.",
    },
    {
        title: "International Moving",
        content:
            "Moving to a new country takes more than just packing boxes. Our international moving service covers everything from paperwork and customs to careful packing and long-distance transport. We guide you through the entire process, making sure your items arrive safely—no matter how far you're going.",
    }

];

export default function ServicePage() {

    return (
        <div>
            <QuoteBannerSection
                heading={
                    <>
                        Best Moving Services in <br />
                        UAE from Care N Clean
                    </>
                }
                subheading="Quality Moving at a fair price."
                subheadingFirst={true}
                showButton={true}
                buttonText="Contact Us"
                buttonLink="/contact"
                //   imageSrc="/images/Moving/1.jpg"
            />
            <BestDeepCleaning
                title="Best Moving Services in UAE from Care N Clean"
                paragraph={
                    <>
                        The UAE market demands reliable and efficient moving services.{" "}
                        <a href="/about" style={{ color: "#36B864", fontWeight: "800", textDecoration: "underline" }}>
                            Care N Clean
                        </a>{" "}
                        offers professional moving solutions for both residential and commercial spaces. Our trained team ensures a smooth and secure relocation experience with careful packing, safe transportation, and timely delivery. With top-quality materials and trusted handling methods, we protect your belongings throughout the move. Our focus is on making your transition stress-free while ensuring everything arrives in perfect condition. Whether it's a home or office, our expert service helps you settle in with ease and peace of mind.
                    </>
                }
                imageSrc="/images/Moving/1.jpg"
                imageAlt="Moving Services"
            />
            <AchievementSection />
            <BenefitsOfDeepCleaning
                title="What are Moving Services?"
                content="Moving services are more than just carrying boxes from one place to another. Our team handles every part of your move with care—packing, lifting, transporting, and unpacking. We make sure your items are safe and your move is smooth from start to finish. Whether you're moving locally or internationally, we focus on your comfort, timing, and peace of mind. Our staff is trained to handle delicate items, heavy furniture, and important belongings with extra care. We also offer temporary storage options if your new space is not ready yet. With organized planning and reliable service, your new beginning starts without stress and ends with satisfaction."
                imageLeft={true}
                imageSrc="/images/Moving/x.png"
                imageAlt="Moving Image"
                points={[
                    "Local Moving",
                    "Storage Services",
                    "International Moving",
                ]} />
            {/* <OurBestDeepClean sections={sixSections}
                mainTitle="Our Maintenance Services"/> */}
            <BookYourService
                title="Book Your Moving Service Today!"
                description="Enjoy a stress-free moving experience with Care N Clean. Whether you're relocating your home or office, our expert team handles everything from packing to unloading with care and efficiency. We ensure your belongings are transported safely and on time, using secure methods and professional equipment. Trust us to make your move smooth, organized, and worry-free."
            />
            <LifeMadeEasySection
                title="How We Work"
                description="Our moving service is designed to be smooth and stress-free from start to finish. You can book your move easily by phone or through our website at a time that suits you. Once we understand your moving needs, our team creates a clear and personalized plan—whether it’s for a home or office move. On moving day, our trained staff arrives on time with all the right packing materials and equipment. We handle your items with care, load and transport them safely, and help set them up at your new location. A final check ensures everything is complete and in place. We aim to make your move simple, safe, and worry-free."
                buttonText="Get an estimate"
                buttonLink="/booking"
                useSectionDescClass={false}
            />
            <BenefitsOfDeepCleaning
                title="Benefits of Moving"
                content="Moving to a new place offers a fresh start and a chance to organize your space the way you want. A well-managed move reduces stress, protects your belongings, and saves time and energy. With professional moving help, you avoid the risks of damage or delays. Whether it's a local or long-distance move, having experts handle the process ensures safety, speed, and peace of mind. Moving also gives you the opportunity to declutter and improve your overall living or working environment."
                imageLeft={false}
                imageSrc="/images/Moving/y.jpg"
                imageAlt="Moving Image"
                points={[
                    "Local Moving",
                    "Storage Services",
                    "International Moving",
                ]}
            />
            <ContactUsSection />
            <OurBestDeepClean sections={sixSections}
                mainTitle="Our Moving Services" />
            <GetAQuoteSection text="Trusted Moving Services Across the UAE – Fast, Reliable, and Hassle-Free." />

        </div>

    )
}
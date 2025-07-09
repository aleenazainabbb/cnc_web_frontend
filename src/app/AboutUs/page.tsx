"use client";
import ContactUsSection from "@/components/ContactUsSection";
import AllServicesBanner from "@/components/services_page_content/AllServicesBanner";
import AchievementSection from "@/components/home_page_components/AchievementSection";
import BestDeepCleaning from "@/components/Cleaning_service_page/BestDeepCleanBanner";
import OurBestDeepClean from "@/components/Cleaning_service_page/OurDeepCleanServices";
import Team from "@/components/Team";

export default function ServicesPage() {
    return (
        <div>
            <div style={{ marginBottom: "42px" }}>
                <AllServicesBanner
                    title="Who We Are"
                    description={
                        <p
                        >
                            We take pride in being acknowledged for our dedication to innovation, quality, and service. Our <br />
                            certifications and awards showcase the trust and recognition we’ve earned globally.
                        </p>
                    }
                    imageUrl="/images/banners/aboutUs.png"
                    reverseContentOrder={true}
                />

            </div>
            <AchievementSection />
            <BestDeepCleaning
                title="Our Vision"
                paragraph={
                    <>
                        To become the UAE’s most trusted multi‑service provider, setting the benchmark for professionalism, reliability, and eco‑friendly practices—so every home and business we serve feels safe, fresh, and worry‑free.
                    </>
                }
                imageSrc="/images/Vision.png"
                imageAlt="Vision"
            />

            <BestDeepCleaning
                title="Our Mission"
                paragraph={
                    <>
                        To deliver affordable, high‑quality residential and commercial cleaning, maintenance, moving, pest control, and disinfection services in the UAE—ensuring every customer experiences exceptional care, convenience, and total satisfaction.
                    </>
                }
                imageSrc="/images/mission.png"
                imageAlt="mission"
                reverseContentOrder
            />
            <OurBestDeepClean
                mainTitle="Our Story"
                sections={[
                    {

                        title: "",
                        content: (
                            <>
                                Care n Clean was born in 2019 out of a deep understanding of how modern lifestyles demand convenience, reliability, and high standards, especially when it comes to the upkeep of our homes and workplaces. What started as a small team offering residential cleaning services in Dubai quickly grew into a full-spectrum home and facility care company, built on trust, quality, and word-of-mouth recommendations.
                                <br />
                                From day one, our goal has been simple: to take the burden of cleaning, maintenance, and moving off your shoulders, so you can focus on what truly matters. Whether it's disinfecting an office space, tackling a last-minute plumbing issue, or helping a family settle into a new home, we approach every job with the same care and attention as if it were our own space.
                                <br />
                                Over the years, we've expanded our services to include commercial cleaning, pest control, deep sanitization, handyman solutions, AC maintenance, and professional moving support offering our clients a truly one-stop solution for all their facility needs. Our team is available 24/7, fully trained, and equipped with the latest tools and eco-friendly products to ensure safe, effective, and long-lasting results.
                                <br />
                                Over the years, we've expanded our services to include commercial cleaning, pest control, deep sanitization, handyman solutions, AC maintenance, and professional moving support offering our clients a truly one-stop solution for all their facility needs. Our team is available 24/7, fully trained, and equipped with the latest tools and eco-friendly products to ensure safe, effective, and long-lasting results.
                                <br />
                                At the heart of everything we do is our belief that “Your happiness is our pride.” This isn’t just a tagline, it’s a promise we deliver on every single day.",
                                <br />
                                Today, Care n Clean proudly serves thousands of homes and businesses across the UAE, building long-term relationships based on professionalism, transparency, and exceptional service. And this is just the beginning. We’re constantly evolving, innovating, and growing to make your life easier.",

                            </>
                        ),
                    },

                ]}
            />
            <ContactUsSection
                title="Service Information"
                formHeading="Schedule your Service"
                infoItems={[
                    {
                        iconClass: "fa-solid fa-envelope",
                        label: "Email",
                        value: "support@example.com",
                    },
                    {
                        iconClass: "fa-solid fa-phone",
                        label: "24/7 Emergency Service",
                        value: "(+971) 52 528 0307",
                    },
                ]}
            />
            <Team></Team>
        </div>
    );
}

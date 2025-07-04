"use client";
import ContactUsSection from "@/components/ContactUsSection";
import AllServicesBanner from "@/components/services_page_content/AllServicesBanner";
import OurBestDeepClean from "@/components/Cleaning_service_page/OurDeepCleanServices";
export default function ServicesPage() {
    return (
        <div>
            <div style={{ marginBottom: "42px" }}>

                <AllServicesBanner
                    title="Privacy Policy"
                    imageUrl="/images/banners/aboutUs.png"
                />
            </div>

            <OurBestDeepClean
               
                sections={[
                    {
                        title: "PRIVACY POLICY",
                        content: "This privacy policy sets out how Care n Clean uses and protects any information that you give Care n Clean when you use this website. Care n Clean is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. Care n Clean may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from March 20, 2020.",
                    },
                    {
                        title: "",
                        content: "From day one, our goal has been simple: to take the burden of cleaning, maintenance, and moving off your shoulders—so you can focus on what truly matters. Whether it's disinfecting an office space, tackling a last-minute plumbing issue, or helping a family settle into a new home, we approach every job with the same care and attention as if it were our own space.",
                    },
                    {
                        title: "",
                        content: "Over the years, we've expanded our services to include commercial cleaning, pest control, deep sanitization, handyman solutions, AC maintenance, and professional moving support—offering our clients a truly one-stop solution for all their facility needs. Our team is available 24/7, fully trained, and equipped with the latest tools and eco-friendly products to ensure safe, effective, and long-lasting results.",
                    },
                    {
                        title: "",
                        content: "At the heart of everything we do is our belief that “Your happiness is our pride.” This isn’t just a tagline—it’s a promise we deliver on every single day.",
                    },
                    {
                        title: "",
                        content: "Today, Care n Clean proudly serves thousands of homes and businesses across the UAE, building long-term relationships based on professionalism, transparency, and exceptional service. And this is just the beginning—we’re constantly evolving, innovating, and growing to make your life easier.",
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

        </div>
    );
}
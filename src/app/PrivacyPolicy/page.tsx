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
                    imageUrl="/images/banners/privacyPolicy.png"
                />
            </div>

            <OurBestDeepClean

                sections={[
                    {
                        title: "",
                        content: (
                            <>
                                <strong style={{ color: "black", fontWeight: "400" }}>PRIVACY POLICY:</strong>
                                <br />
                                This privacy policy sets out how Care n Clean uses and protects any information that you give Care n Clean when you use this website.
                                Care n Clean is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be
                                identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. Care n Clean
                                may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with
                                any changes. This policy is effective from March 20, 2020.
                                <br />
                                <strong style={{ color: "black", fontWeight: "400" }}>What we collect</strong>
                                <br />
                                We may collect the following information:
                                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem"}}>
                                    <li>Name and job title</li>
                                    <li>Contact information including email address</li>
                                    <li>Demographic information such as postcode, preferences and interests</li>
                                    <li>Other information relevant to responding to your inquiries. Information we collect includes any information that you enter in the forms on our
                                        website or that you send to us by other means. We may also receive information about you from other sources.</li>
                                </ul>
                                What we do with the information we gather
                                <br />
                                The information we collect about you is used only for responding to your inquiries, providing you with promotional and other information regarding our opportunities and services, improving our site, collecting and analyzing site use data for statistical purposes, and administering the site and other company systems. We do not make any commercial use of the information other than for purposes of potential business directly with you. Unless you give your consent, we do not sell your information to third parties for their use.
                                <br />
                                The information we collect about you is used only for responding to your inquiries, providing you with promotional and other information regarding our opportunities and services, improving our site, collecting and analyzing site use data for statistical purposes, and administering the site and other company systems. We do not make any commercial use of the information other than for purposes of potential business directly with you. Unless you give your consent, we do not sell your information to third parties for their use.
                                <br />
                                <strong style={{ color: "black", fontWeight: "400" }}>Security</strong>
                                <br />
                                We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
                                <br />
                                 <strong style={{ color: "black", fontWeight: "400" }}>How we use cookies</strong>
                                 <br />
                                A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences. We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                                <br />
                                <strong style={{ color: "black", fontWeight: "400" }}> Links to other websites</strong>
                                <br />
                                Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
                                <br />
                                 <strong style={{ color: "black", fontWeight: "400" }}>Controlling your personal information</strong>
                                <br />
                                We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen. We will forward information you supply online or otherwise to Care n Clean UAE area operators who are located in the geographic area in which you indicate an interest in services or franchise opportunities. You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you, please contact us. If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
                               <br />
                                <strong style={{ color: "black", fontWeight: "400" }}> Contact Details: 
                                <br />
                                Mobile Phone: +971 52 5280307
                                <br />
                                Email: info@carencleanss.com</strong>
                                 </>
                                                        ),
                                               },

                ]}
                hideMainTitle 
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

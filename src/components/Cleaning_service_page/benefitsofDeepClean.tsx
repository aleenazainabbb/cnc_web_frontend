// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const WhyChooseUsSection: React.FC = () => {
//   return (
//     <div className="container">
//       <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
//         <div className="col-12 col-lg-6 col-md-6 mb-3 mb-lg-0 mb-md-0">
//           <div className="service_details_content">
//             <h2 className="be-vietnam-pro-semibold mt-2 mb-4">Why Choose Us</h2>
//             <strong className="be-vietnam-pro-bold">
//               We Will Make Absolutely Any Place Clean, Neat & Tidy.
//             </strong>
//             <p className="be-vietnam-pro-regular text-justify mt-4 mb-2 text-muted why_choose_dec">
//               We, at Care n Clean, offer multiple options to use our platform
//               and schedule the needed services on the go. Primarily, you can use
//               the search bar, enter few keywords related to your desired
//               services and fill out the form to schedule it.
//             </p>
//             <strong className="be-vietnam-pro-bold">
//               Our Best Handyman Services Dubai
//             </strong>
//             <div className="row mt-3">
//               <div className="col-md-6">
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> Vetted
//                   professionals
//                 </div>
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> Same Day
//                   Availability
//                 </div>
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> Standard cleaning
//                   tasks
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> Affordable Prices
//                 </div>
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> Best Quality
//                 </div>
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> 24/7 Live Support
//                 </div>
//               </div>
//             </div>
//             <Link
//               href="/book"
//               className="bg_green text-white about_btn mt-3 me-3"
//             >
//               Book Now
//             </Link>
//             <Link
//               href="/services"

//               className=" mt-3 Lato slider_btn font-medium text-[20px]">

//               View Our Services
//             </Link>
//           </div>
//         </div>
//         <div className="col-12 col-lg-6 col-md-6">
//           <div className="d-inline-block position-relative">
//             <Image
//               src="/images/WhyChooseUs/WhyChooseUs-1.png"
//               alt="Main Image"
//               className="main-image shadow-left"
//               width={365.63} // Adjust based on your image size
//               height={394}
//               //radioGroup="20px"

//               style={{ borderRadius: "10px", borderTop: "10px", borderRight: "10px" , left:"745px", top:"88px"}} // Adjust position as needed
//             />
//             <Image
//               src="/images/WhyChooseUs/WhyChooseUs-2.png"
//               alt="Overlay Image"
//               className="overlay-image overly-right"
//               width={200} // Adjust based on your image size
//               height={150}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUsSection;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Be_Vietnam_Pro } from "next/font/google";

// interface WhyChooseUsProps {
//   heading?: string;
//   paragraph?: string;
//   showTopBoldText?: boolean;
//   showBottomBoldText?: boolean;
//   showSecondImage?: boolean;
// }

// const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({
//   heading = "Why Choose Us",
//   paragraph = `We, at Care n Clean, offer multiple options to use our platform and schedule the needed services on the go. Primarily, you can use the search bar, enter few keywords related to your desired services and fill out the form to schedule it.`,
//   showTopBoldText = true,
//   showBottomBoldText = true,
//   showSecondImage = true,
// }) => {
//   return (
//     <div className="container">
//       <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
//         <div className="col-12 col-lg-6 col-md-6 mb-3 mb-lg-0 mb-md-0">
//           <div className="">
//             <h2
//               className="mt-2 mb-4"
//               style={{
//                 fontSize: "44px",
//                 fontFamily: "'Be Vietnam Pro', sans-serif",
//                 fontWeight: "500", // 700 is bold
//               }}
//             >
//               {heading}
//             </h2>

//             {showTopBoldText && (
//               <strong className="mt-2 mb-4"
//               style={{
//                 fontSize: "16px",
//                 fontFamily: "'Be Vietnam Pro', sans-serif",
//                 fontWeight: "700", // 700 is bold
//               }}>
//                 We Will Make Absolutely Any Place Clean, Neat & Tidy.
//               </strong>
//             )}

//             <p className=" text-justify mt-4 mb-2 text-muted why_choose_dec" style={{ fontSize: "16px",
//                 fontFamily: "'Be Vietnam Pro', sans-serif",
//                 fontWeight: "400", }}>
//               {paragraph}
//             </p>

//             {showBottomBoldText && (
//               <strong className="mt-2 mb-4"
//               style={{
//                 fontSize: "16px",
//                 fontFamily: "'Be Vietnam Pro', sans-serif",
//                 fontWeight: "700", // 700 is bold
//               }}>
//                 Our Best Handyman Services Dubai
//               </strong>
//             )}

//             <div className="row mt-3">
//               <div className="col-md-6">
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> Handymen
//                 </div>
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> Electricians
//                 </div>
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> AC Technicians
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> Plumbers
//                 </div>
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> Painters
//                 </div>
//                 <div className="feature-box be-vietnam-pro-semibold">
//                   <i className="fa-solid fa-circle-check"></i> Carpenters
//                 </div>
//               </div>
//             </div>

//             <Link href="/book" className="bg_green text-white about_btn mt-3 me-3">
//               Book Now
//             </Link>
//             <Link
//               href="/services"
//               className="mt-3 Lato slider_btn font-medium text-[20px]"
//             >
//               View Our Services
//             </Link>
//           </div>
//         </div>
//         <div className="col-12 col-lg-6 col-md-6">
//           <div className="d-inline-block position-relative">
//             <Image
//               src="/images/WhyChooseUs/WhyChooseUs-1.png"
//               alt="Main Image"
//               className="main-image shadow-left"
//               width={468.63}
//               height={505}
//               style={{
//                 borderRadius: "20px",
//                 borderTop: "10px",
//                 borderRight: "10px",
//                 left: "837px",
//                 top: "3642px",
//               }}
//             />
//             {showSecondImage && (
//               <Image
//                 src="/images/WhyChooseUs/WhyChooseUs-2.png"
//                 alt="Overlay Image"
//                 className="overlay-image overly-right"
//                 width={200}
//                 height={150}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUsSection;


import React from "react";
import Image from "next/image";
import Link from "next/link";

const BenefitsOfDeepCleaning: React.FC = () => {
  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
        <div className="col-12 col-lg-6 col-md-6 mb-3 mb-lg-0 mb-md-0">
          <div>
            <h2
              className="mt-2 mb-4"
              style={{
                fontSize: "44px",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: 500,
              }}
            >
              Benefits of Deep Cleaning
            </h2>

            <p
              className="text-justify mt-4 mb-2 text-muted why_choose_dec"
              style={{
                fontSize: "16px",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: 400,
              }}
            >
              Proficient cleaning techniques eliminate allergens and bacteria
              alongside dust, producing cleaner air and minimizing infection
              risks. The complete cleaning routine reaches every location that
              regular maintenance fails to achieve, ensuring a
              contamination-free environment. The cleaning method enhances
              sanitation standards and comfort quality, which produces better
              home and workplace health conditions.
            </p>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Handymen
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Electricians
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> AC Technicians
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Plumbers
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Painters
                </div>
                <div className="feature-box be-vietnam-pro-semibold">
                  <i className="fa-solid fa-circle-check"></i> Carpenters
                </div>
              </div>
            </div>

            <Link href="/book" className="bg_green text-white about_btn mt-3 me-3">
              Book Now
            </Link>
            <Link
              href="/services"
              className="mt-3 Lato slider_btn font-medium text-[20px]"
            >
              View Our Services
            </Link>
          </div>
        </div>
        
        <div className="col-12 col-lg-6 col-md-6">
          <div className="d-inline-block position-relative">
            <Image
              src="/images/WhyChooseUs/WhyChooseUs-1.png"
              alt="Main Image"
              className=""
              width={468.63}
              height={505}
              style={{
                borderRadius: "20px",
                borderTop: "10px",
                borderRight: "10px",
                left: "837px",
                top: "3642px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfDeepCleaning;




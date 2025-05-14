// import React from "react";
// import Link from "next/link";

// const LifeMadeEasySection: React.FC = () => {
//   return (
//     <div className="bg_green py-5">
//       <div className="container">
//         <div className="row">
//           <div className="black_layer text-center p-4">
//             <h2 className="be-vietnam-pro-bold text-white">LIFE MADE EASY</h2>
//             <p className="be-vietnam-pro-medium text-white section_desc">
//               Book your house cleaning service Now. Our experienced
//               professionals will take care of the rest.
//             </p>
            
//             <Link
//               href="/estimate"
//              className="bg-white be-vietnam-pro-semibold text-black text-[14px] about_btn tracking-[0%] mt-3 me-3">
//               GET AN ESTIMATE
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LifeMadeEasySection;

import React from "react";
import Link from "next/link";

interface LifeMadeEasySectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  useSectionDescClass?: boolean; // ✅ NEW OPTIONAL FLAG
}

const LifeMadeEasySection: React.FC<LifeMadeEasySectionProps> = ({
  title = "LIFE MADE EASY",
  description = "Book your house cleaning service Now. Our experienced professionals will take care of the rest.",
  buttonText = "GET AN ESTIMATE",
  buttonLink = "/estimate",
  useSectionDescClass = true, // ✅ default: true for backward compatibility
}) => {
  const descriptionClasses = [

    "be-vietnam-pro-medium",
    "text-white",
    useSectionDescClass ? "section_desc" : "",
   
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="bg_green py-5">
      <div className="container">
        <div className="row">
          <div className="black_layer text-center p-4">
            <h2 className="be-vietnam-pro-bold text-white">{title}</h2>
            <p className={descriptionClasses}>{description}</p>

            <Link
              href={buttonLink}
              className="bg-white be-vietnam-pro-semibold text-black text-[14px] about_btn tracking-[0%] mt-3 me-3"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeMadeEasySection;

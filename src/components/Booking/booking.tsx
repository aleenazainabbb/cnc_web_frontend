// "use client";
// import React, { useState } from "react";
// import { Search, X } from "lucide-react";

// const cleanTypes = [
//   "Standard",
//   "Deep Clean",
//   "Moving In/Out",
//   "Post Construction",
//   "Extra Detailed Cleaning", // Extra type to test responsiveness
// ];

// const BookingHeader: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedType, setSelectedType] = useState<string>("");
//   const [selectedStaff, setSelectedStaff] = useState<number | null>(null);
//   const [selectedHours, setSelectedHours] = useState<number | null>(null);

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//           width: "100%",
//           maxWidth: "100vw",
//           boxSizing: "border-box",
//           padding: "0 16px",
//         }}
//       >
//         {/* Header */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             flexWrap: "wrap",
//             gap: "12px",
//             paddingTop: "16px",
//           }}
//         >
//           <h1
//             style={{
//               margin: 0,
//               fontSize: "38px",
//               fontWeight: "bold",
//               fontFamily: "Poppins, sans-serif",
//               color: "#12153A",
//               whiteSpace: "nowrap",
//             }}
//           >
//             Booking
//           </h1>

//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "white",
//               border: "1px solid #d1d5db",
//               borderRadius: "9999px",
//               padding: "6px 12px",
//               boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//               flexGrow: 1,
//               maxWidth: "400px",
//               color: "#D3D8DD",
//             }}
//           >
//             <Search
//               style={{
//                 width: 19,
//                 height: 19,
//                 color: "#555555",
//                 marginRight: 8,
//               }}
//             />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search Service"
//               style={{
//                 fontFamily: "Poppins",
//                 fontWeight: 400,
//                 fontSize: "16px",
//                 border: "none",
//                 outline: "none",
//                 flexGrow: 1,
//                 color: "#555555",
//               }}
//             />
//             {searchTerm && (
//               <button
//                 onClick={() => setSearchTerm("")}
//                 style={{
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                   padding: 0,
//                   marginLeft: 8,
//                   color: "#9ca3af",
//                 }}
//                 aria-label="Clear search"
//               >
//                 <X size={16} />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Clean Type */}
//         <div style={{ padding: "0" }}>
//           <label
//             htmlFor="clean-type"
//             style={{
//               display: "block",
//               marginBottom: "12px",
//               fontWeight: 600,
//               fontFamily: "Poppins",
//               color: "#9FA7B0",
//               fontSize: "14px",
//             }}
//           >
//             Clean Type
//           </label>

//           <div
//             id="clean-type"
//             style={{
//               display: "flex",
//               overflowX: "auto",
//               gap: "12px",
//               paddingBottom: "8px",
//               scrollbarWidth: "none",
//               WebkitOverflowScrolling: "touch",
//             }}
//             className="hide-scrollbar"
//           >
//             {cleanTypes.map((type) => (
//               <button
//                 key={type}
//                 onClick={() => setSelectedType(type)}
//                 style={{
//                   flex: "0 0 auto",
//                   padding: "10px 18px",
//                   borderRadius: "8px",
//                   border:
//                     selectedType === type ? "2px solid #2563eb" : "1px solid #ccc",
//                   backgroundColor: selectedType === type ? "#dbeafe" : "#fff",
//                   cursor: "pointer",
//                   fontWeight: 500,
//                   color: selectedType === type ? "#2563eb" : "#444",
//                   whiteSpace: "nowrap",
//                   boxShadow: selectedType === type ? "0 0 6px #93c5fd" : "none",
//                   transition: "all 0.2s ease-in-out",
//                   fontSize: "14px",
//                 }}
//                 type="button"
//               >
//                 {type}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* No. of Staff */}
//         <div style={{ padding: "0 16px", marginTop: "24px" }}>
//           <label
//             htmlFor="no-of-staff"
//             style={{
//               display: "block",
//               marginBottom: "12px",
//               fontWeight: 600,
//               fontFamily: "Poppins",
//               color: "#9FA7B0",
//               fontSize: "14px",
//             }}
//           >
//             No. of Staff
//           </label>
//           <div
//             id="no-of-staff"
//             style={{
//               display: "flex",
//               overflowX: "auto",
//               gap: "12px",
//               paddingBottom: "8px",
//               scrollbarWidth: "none",
//               WebkitOverflowScrolling: "touch",
//             }}
//             className="hide-scrollbar"
//           >
//             {[1, 2, 3, 4, 5, 6].map((num) => (
//               <button
//                 key={num}
//                 onClick={() => setSelectedStaff(num)}
//                 style={{
//                   flex: "0 0 auto",
//                   padding: "10px 18px",
//                   borderRadius: "8px",
//                   border:
//                     selectedStaff === num ? "2px solid #2563eb" : "1px solid #ccc",
//                   backgroundColor: selectedStaff === num ? "#dbeafe" : "#fff",
//                   cursor: "pointer",
//                   fontWeight: 500,
//                   color: selectedStaff === num ? "#2563eb" : "#444",
//                   whiteSpace: "nowrap",
//                   boxShadow: selectedStaff === num ? "0 0 6px #93c5fd" : "none",
//                   transition: "all 0.2s ease-in-out",
//                   fontSize: "14px",
//                 }}
//                 type="button"
//               >
//                 {num}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* No. of Hours */}
//         <div style={{ padding: "0 16px", marginTop: "24px" }}>
//           <label
//             htmlFor="no-of-hours"
//             style={{
//               display: "block",
//               marginBottom: "12px",
//               fontWeight: 600,
//               fontFamily: "Poppins",
//               color: "#9FA7B0",
//               fontSize: "14px",
//             }}
//           >
//             No. of Hours
//           </label>
//           <div
//             id="no-of-hours"
//             style={{
//               display: "flex",
//               overflowX: "auto",
//               gap: "12px",
//               paddingBottom: "8px",
//               scrollbarWidth: "none",
//               WebkitOverflowScrolling: "touch",
//             }}
//             className="hide-scrollbar"
//           >
//             {[1, 2, 3, 4, 5].map((num) => (
//               <button
//                 key={num}
//                 onClick={() => setSelectedHours(num)}
//                 style={{
//                   flex: "0 0 auto",
//                   padding: "10px 18px",
//                   borderRadius: "8px",
//                   border:
//                     selectedHours === num ? "2px solid #2563eb" : "1px solid #ccc",
//                   backgroundColor: selectedHours === num ? "#dbeafe" : "#fff",
//                   cursor: "pointer",
//                   fontWeight: 500,
//                   color: selectedHours === num ? "#2563eb" : "#444",
//                   whiteSpace: "nowrap",
//                   boxShadow: selectedHours === num ? "0 0 6px #93c5fd" : "none",
//                   transition: "all 0.2s ease-in-out",
//                   fontSize: "14px",
//                 }}
//                 type="button"
//               >
//                 {num}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Hide scrollbar on WebKit */}
//       <style>
//         {`
//           .hide-scrollbar::-webkit-scrollbar {
//             display: none;
//           }
//           .hide-scrollbar {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }

//           @media (max-width: 768px) {
//             h1 {
//               font-size: 28px !important;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default BookingHeader;



"use client";
import React, { useState } from "react";
import { Search, X } from "lucide-react";
import booking from './styles/BookingHeader.module.css';

const cleanTypes = [
  "Standard",
  "Deep Clean",
  "Moving In/Out",
  "Post Construction",
  // "Extra Detailed Cleaning",
  
];

const Bookings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);
  const [selectedHours, setSelectedHours] = useState<number | null>(null);
  const [selectedFreq, setSelectedFreq] = useState<string>("");

  return (
    <div className={booking.container}>
      {/* Header */}
      <div className={booking.sectionSpacing}>
      <div className={booking.header}>
        <h1 className={booking.title}>Booking</h1>

        <div className={booking.searchBox}>
          <Search
            style={{
              width: 19,
              height: 19,
              color: "#555555",
              marginRight: 8,
            }}
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Service"
            className={booking.searchInput}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className={booking.clearButton}
              aria-label="Clear search"
              type="button"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
      

      {/* Clean Type */}
     <div className={booking.formGroup}>
        <label htmlFor="clean-type" className={booking.label}>
          CLEAN TYPE
        </label>
        <div
          id="clean-type"
          className={`${booking.scrollContainer} ${booking.hideScrollbar}`}
        >
          {cleanTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`${booking.optionButton} ${
                selectedType === type ? booking.selected : ""
              }`}
              type="button"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* No. of Staff */}
     <div className={booking.formGroup}>
        <label htmlFor="no-of-staff" className={booking.label}>
          NO OF STAFF
        </label>

        <div
          id="no-of-staff"
          className={`${booking.scrollContainer} ${booking.hideScrollbar}`}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedStaff(num)}
              className={`${booking.optionButton} ${
                selectedStaff === num ? booking.selected : ""
              }`}
              type="button"
            >
              {num}
            </button>
          ))}
        </div>

      </div>

      {/* No. of Hours */}
<div className={booking.formGroup}>
  <label htmlFor="no-of-hours" className={booking.label}>
    NO OF HOUR
  </label>

  <div
    id="no-of-hours"
    className={`${booking.scrollContainer} ${booking.hideScrollbar}`}
  >
    {[
      { hour: 1, price: 39 },
      { hour: 2, price: 35 },
      { hour: 3, price: 33 },
      { hour: 4, price: 40 },
      { hour: 5, price: 30 },
    ].map(({ hour, price }) => (
      <div key={hour} className={booking.optionWrapper}>
        <button
          onClick={() => setSelectedHours(hour)}
          className={`${booking.optionButton} ${
            selectedHours === hour ? booking.selected : ""
          }`}
          type="button"
        >
          {hour}
        </button>
        <span className={booking.optionLabel}>AED {price}/hr</span>
      </div>
    ))}
  </div>
</div>

<div className={booking.formGroup}>
  <label className={booking.label}>How often do you need cleaning?</label>
  <div className={`${booking.scrollContainer} ${booking.hideScrollbar}`} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    {["Once", "Weekly", "Multiple times a week"].map((freq) => (
      <button
        key={freq}
        type="button"
        onClick={() => setSelectedFreq(freq)}
        className={`${booking.optionButton} ${selectedFreq === freq ? booking.selected : ""}`}
        style={{ fontSize: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <div>{freq}</div>
        {freq === "Once" && (
          <div className={booking.bulletLine} style={{ fontSize: '14px' }}>
            • Book a one time cleaning session
          </div>
        )}
        {(freq === "Weekly" || freq === "Multiple times a week") && (
          <div className={booking.bulletLine} style={{ fontSize: '16px' }}>
            • Get the same cleaner each time<br />
            • Re-schedule easily through the app
          </div>
        )}
      </button>
    ))}
  </div>
</div>





</div>
    
    </div>
  );
};

export default Bookings;






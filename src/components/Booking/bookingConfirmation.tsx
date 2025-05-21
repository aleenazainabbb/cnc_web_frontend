// 'use client';

// import React from 'react';

// const BookingConfirmation: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen  " style={{background:"white", }}>
//       <div className="relative bg-white rounded-t-[30px] shadow-xl w-[380px] p-6 text-center">
//         {/* Top check icon */}
//         <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 rounded-full p-2 shadow-lg">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>

//         {/* Go to Home */}
//         <div className="text-right text-sm text-green-600 font-semibold cursor-pointer mb-2">
//           Go to Home
//         </div>

//         {/* Header */}
//         <h2 className="text-xl font-semibold text-gray-800">Order Booked</h2>
//         <p className="text-sm text-gray-500">Your payment has been successfully done.</p>

//         {/* Ref number */}
//         <p className="text-sm font-semibold text-gray-800 mt-2">
//           Ref No : <span className="text-gray-400">125664656654411200</span>
//         </p>

//         <hr className="my-4 border-t" />

//         {/* Schedule Info */}
//         <div className="flex justify-between text-left text-sm text-gray-700 mb-1">
//           <span className="font-semibold">Every 2 weeks</span>
//           <span className="text-green-600 font-medium">
//             Tuesday, July17, 2018 at 2.30pm
//           </span>
//         </div>

//         {/* Address */}
//         <div className="text-sm text-gray-700 mb-4 text-left">
//           114 Broadway Newyork, NY 10005
//         </div>

//         <hr className="my-4 border-t" />

//         {/* Payment Details */}
//         <div className="text-xs text-gray-400 uppercase mb-1">Total Payment</div>
//         <div className="text-2xl font-bold text-gray-800 mb-4">AED 610</div>

//         <div className="text-sm flex justify-between mb-2">
//           <span className="text-gray-700">
//             Appointment Value - <span className="text-green-600 cursor-pointer">Details</span>
//           </span>
//           <span className="text-gray-800 font-semibold">125.99</span>
//         </div>

//         <div className="text-sm flex justify-between mb-2">
//           <span className="text-gray-700">
//             Discounts - <span className="text-green-600 cursor-pointer">Details</span>
//           </span>
//           <span className="text-gray-800 font-semibold">15.89</span>
//         </div>

//         <div className="text-sm flex justify-between mb-2">
//           <span className="text-gray-500">Subtotal</span>
//           <span className="text-gray-700">110.01</span>
//         </div>

//         <div className="text-sm flex justify-between mb-4">
//           <span className="text-gray-500">Tax</span>
//           <span className="text-gray-700">5.20</span>
//         </div>

//         <div className="text-sm flex justify-between font-bold text-gray-900 border-t pt-3">
//           <span>Total</span>
//           <span>610.00</span>
//         </div>

//         {/* PDF Button */}
//         {/* PDF Button */}
//         <button
//           className="mt-6 bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
//           style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//           </svg>
//           Get PDF Receipt
//         </button>

//       </div>
//     </div>
//   );
// }

// export default BookingConfirmation;

"use client";

import React from "react";

const bookingConfirmation: React.FC = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-[#f7fafd]">
    <div
      style={{
        // position: "fixed",
        // top: "0",
        // right: 0,
        // height: "100vh", 
        // height: "auto",
        // width:"auto",
        // height: "922px",
        // width: "500px",
        backgroundColor: "#f7fafd",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        padding: "46px",
        // overflowY: "auto",
        zIndex: 1000,
        background: "#F4F7F9",
      }}
    >
      {/* Heading */}
      <h2
        className="bill text-[#0e144a] font-bold leading-[32px] mb-6"
        style={{ fontFamily: "Poppins", font: "25px" }}
      >
        Order Booked
      </h2>
      <p style={{font:"14px", fontWeight:"400"}}>Your payment has been successfully done</p>

      {/* Appointment Info Card */}
      <div className="bg-white p-4 rounded-lg mb-6 shadow-sm flex flex-col g-2" style={{borderRadius:"10px", marginTop:"28px"}}>
      {/* <div className="bg-white p-4 rounded-md shadow-sm mb-6"> */}
        <p
          className="text-[#0e144a] mb-1"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "23px",
            letterSpacing: "0.003em",
            // gap:""
          }}
        >
          Every 2 weeks
        </p>
        <p
          className="mb-1 cursor-pointer"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "23px",
            letterSpacing: "0.003em",
            color: "#1a73e8",
          }}
        >
          Tuesday, July17, 2018 at 2.30pm
        </p>
        <div style={{ borderTop: "1px solid #e0e0e0", margin: "8px 0" }}></div>
        <p
          className="text-[#0e144a]"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "23px",
            letterSpacing: "0.003em",
          }}
        >
          114 Broadway Newyork, NY 10005
        </p>
        <div style={{ borderTop: "1px solid #e0e0e0", margin: "8px 0" }}></div>
      </div>

     
<div
  className="bg-white p-4 rounded-md shadow-sm mb-6"
  style={{
    marginTop: "40px",
    borderRadius: "10px",
    outline: "none",
    border: "none",
    fontFamily:"Poppins",
    fontWeight:"600",
    fontSize:"16px",
  }}
>
  <div
    className="flex justify-between mb-2"
  >
    <span>
      Appointment Value{" "}
      <span className="cursor-pointer" style={{ color: "#1A78F2" }}>
        - Details
      </span>
    </span>
    <span style={{ minWidth: "80px", textAlign: "right" }}>$ 125.99</span>
  </div>

  <div
    className="flex justify-between mb-2"
  >
    <span>
      Discounts{" "}
      <span className="cursor-pointer" style={{ color: "#1A78F2" }}>
        - Details
      </span>
    </span>
    <span className="text-red-500" style={{  marginLeft: "53px" }}>
      - $ 15.89
    </span>
  </div>

  <div style={{ borderTop: "1px solid #e0e0e0", margin: "8px 0" }}></div>

  <div
    className="flex justify-between mb-2"
    style={{  color: "#88939D" }}
  >
    <span>Subtotal</span>
    <span style={{ marginLeft: "152px" }}>$ 110.01</span>
  </div>

  <div
    className="flex justify-between mb-4 text-[14px]"
   style={{color: "#88939D" }}
  >
    <span>Tax</span>
    <span className="text-green-500" style={{ marginLeft: "182px" }}>
      + $ 5.20
    </span>
  </div>

  <div style={{ borderTop: "1px solid #e0e0e0", margin: "8px 0" }}></div>

  <div
    className="flex justify-between  border-t pt-3"
    
  >
    <span>Total</span>
    <span style={{ marginLeft: "180px" }}>$610.00</span>
  </div>
</div>


      {/* Next Button */}
      <div className="text-center" style={{marginTop:"40px"}}>
        <button
          className="rounded-md text-white px-10 py-2"
          style={{
            width: "180px",
            height: "60px",
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "29px",
            letterSpacing: "0.003em",
            backgroundColor: "#36B864",
            borderRadius: "12px",
            outline: "none",
            border: "none"
          }}
        >
          Get PDF Receipt
        </button>
      </div>
    </div>
    // </div>
  );
};

export default bookingConfirmation;

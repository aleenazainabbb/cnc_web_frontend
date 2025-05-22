"use client";

import React, { useState } from "react";

const BillingSummary: React.FC = () => {
   
  return (
    
    <div
      style={{
        
        top: "0",
        right: 0,
       
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
        style={{ fontFamily: "Averta", font: "32px" }}
      >
        Billing
      </h2>


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

      {/* Discount Input + Apply Button */}
      <div className="flex gap-4 mb-6 p-6 " style={{marginTop:"40px"}}>
        <input
          type="text"
          placeholder="Discount"
          className="flex-1 border border-[#D1D5DB] rounded-md px-4 py-2 text-[14px] outline-none"
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "14px",
            borderRadius: "10px",
            outline: "none",
            border: "none",
            color:"#D3D8DD",
            height:"50px",
            width:"295px",
            

          }}
        />
        <button
          className="rounded-md text-white px-6 py-2 text-center"
          style={{
            width: "94px",
            height: "50px",
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "29px",
            letterSpacing: "0.003em",
            color:"#88939D",
            backgroundColor: "#36B864",
            borderRadius: "10px",
            outline: "none",
            border: "none",
            marginLeft: "18px",
          }}
        >
          Apply
        </button>
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
          Next
        </button>
      </div>
      
    </div>
    // </div>
  );
};

export default BillingSummary;



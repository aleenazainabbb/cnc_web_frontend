"use client";

import React from "react";

const BillingSummary: React.FC = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-[#f7fafd]">
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh", // full viewport height
        width: "500px",
        backgroundColor: "#f7fafd",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        padding: "24px",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      <div
        className="bg-[#f7fafd] rounded-md shadow-sm p-6"
        style={{ width: "500px", height: "922px" }}
      >
        {/* Heading */}
        <h2
          className="text-[#0e144a] font-bold text-[24px] leading-[32px] mb-6"
          style={{ fontFamily: "Poppins" }}
        >
          Billing
        </h2>

        {/* Appointment Info Card */}
        <div className="bg-white p-4 rounded-md mb-6 shadow-sm">
          <p
            className="text-[#0e144a] mb-1"
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "23px",
              letterSpacing: "0.003em",
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
        </div>

        {/* Discount Input + Apply Button */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Discount"
            className="flex-1 border border-[#D1D5DB] rounded-md px-4 py-2 text-[14px] outline-none"
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "14px",
            }}
          />
          <button
            className="rounded-md text-white px-6 py-2 text-center"
            style={{
               width:"114px",
              height:"50px",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "29px",
              letterSpacing: "0.003em",
              backgroundColor: "#36B864",
            }}
          >
            Apply
          </button>
        </div>

        {/* Pricing Breakdown */}
        <div className="bg-white p-4 rounded-md shadow-sm mb-6">
          <div
            className="flex justify-between mb-2 text-[14px]"
            style={{ fontFamily: "Poppins" }}
          >
            <span>
              Appointment Value -         <span className="text-[#1a73e8] cursor-pointer">Details</span>
            </span>
            <span>$ 125.99</span>
          </div>
          <div
            className="flex justify-between mb-2 text-[14px]"
            style={{ fontFamily: "Poppins" }}
          >
            <span>
              Discounts - <span className="text-[#1a73e8] cursor-pointer">Details</span>
            </span>
            <span className="text-red-500">- $ 15.89</span>
          </div>
          <div
            className="flex justify-between mb-2 text-[14px]"
            style={{ fontFamily: "Poppins" }}
          >
            <span>Subtotal</span>
            <span>$ 110.01</span>
          </div>
          <div
            className="flex justify-between mb-4 text-[14px]"
            style={{ fontFamily: "Poppins" }}
          >
            <span>Tax</span>
            <span className="text-green-500">+ $ 5.20</span>
          </div>
          <div
            className="flex justify-between text-[16px] border-t pt-3"
            style={{ fontFamily: "Poppins", fontWeight: 600 }}
          >
            <span>Total</span>
            <span>$610.00</span>
          </div>
        </div>

        {/* Next Button */}
        <div className="text-center">
          <button
            className="rounded-md text-white px-10 py-2"
            style={{
              width:"180px",
              height:"60px",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "29px",
              letterSpacing: "0.003em",
              backgroundColor: "#36B864",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingSummary;

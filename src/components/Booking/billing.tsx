"use client";

import React from "react";

type BillingSummaryProps = {
  appointmentFrequency: string;
  appointmentTime: string;
  appointmentLocation: string;
  discountCode?: string;
  appointmentValue: number;
  discountAmount: number;
  taxAmount: number;
  totalAmount: number;
  onApplyDiscount?: (code: string) => void;
  onNext?: () => void;
};

const BillingSummary: React.FC<BillingSummaryProps> = ({
  appointmentFrequency,
  appointmentTime,
  appointmentLocation,
  discountCode = "",
  appointmentValue,
  discountAmount,
  taxAmount,
  totalAmount,
  onApplyDiscount,
  onNext,
}) => {
  const [discountInput, setDiscountInput] = React.useState(discountCode);

  const subtotal = appointmentValue - discountAmount;

  return (
    <div
      style={{
        top: 0,
        right: 0,
        backgroundColor: "#F4F7F9",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        padding: "46px",
        zIndex: 1000,
      }}
    >
      {/* Heading */}
      <h2
        style={{
          color: "#0e144a",
          fontFamily: "Averta",
          fontWeight: "bold",
          fontSize: "32px",
          lineHeight: "32px",
          marginBottom: "24px",
        }}
      >
        Billing
      </h2>

      {/* Appointment Info Card */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "16px",
          borderRadius: "10px",
          marginBottom: "24px",
          marginTop: "28px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "23px",
            letterSpacing: "0.003em",
            color: "#0e144a",
            marginBottom: "4px",
          }}
        >
          {appointmentFrequency}
        </p>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "23px",
            letterSpacing: "0.003em",
            color: "#1a73e8",
            marginBottom: "4px",
            cursor: "pointer",
          }}
        >
          {appointmentTime}
        </p>
        <div style={{ borderTop: "1px solid #e0e0e0", margin: "8px 0" }}></div>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "23px",
            letterSpacing: "0.003em",
            color: "#0e144a",
          }}
        >
          {appointmentLocation}
        </p>
        <div style={{ borderTop: "1px solid #e0e0e0", margin: "8px 0" }}></div>
      </div>

      {/* Discount Input + Apply Button */}
      <div
        style={{
          display: "flex",
          gap: "18px",
          marginBottom: "24px",
          marginTop: "40px",
        }}
      >
        <input
          type="text"
          value={discountInput}
          onChange={(e) => setDiscountInput(e.target.value)}
          placeholder="Discount"
          style={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 400,
            borderRadius: "10px",
            color: "#D3D8DD",
            height: "50px",
            width: "295px",
            padding: "0 16px",
            border: "1px solid #D1D5DB",
            outline: "none",
          }}
        />
        <button
          onClick={() => onApplyDiscount?.(discountInput)}
          style={{
            width: "94px",
            height: "50px",
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "29px",
            color: "#fff",
            backgroundColor: "#36B864",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        >
          Apply
        </button>
      </div>

      {/* Pricing Breakdown */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "16px",
          borderRadius: "10px",
          marginTop: "40px",
          marginBottom: "24px",
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "16px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}
        >
          <span>
            Appointment Value{" "}
            <span style={{ color: "#1A78F2", cursor: "pointer" }}>- Details</span>
          </span>
          <span>${appointmentValue.toFixed(2)}</span>
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}
        >
          <span>
            Discounts{" "}
            <span style={{ color: "#1A78F2", cursor: "pointer" }}>- Details</span>
          </span>
          <span style={{ color: "red" }}>- ${discountAmount.toFixed(2)}</span>
        </div>

        <div style={{ borderTop: "1px solid #e0e0e0", margin: "8px 0" }}></div>

        <div
          style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "#88939D" }}
        >
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "#88939D" }}
        >
          <span>Tax</span>
          <span style={{ color: "#36B864" }}>+ ${taxAmount.toFixed(2)}</span>
        </div>

        <div style={{ borderTop: "1px solid #e0e0e0", margin: "8px 0" }}></div>

        <div
          style={{ display: "flex", justifyContent: "space-between", paddingTop: "12px" }}
        >
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Next Button */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={onNext}
          style={{
            width: "180px",
            height: "60px",
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "18px",
            backgroundColor: "#36B864",
            color: "#fff",
            borderRadius: "12px",
            border: "none",
            outline: "none",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BillingSummary;
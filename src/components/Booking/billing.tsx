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
        width:"500px",
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
          lineHeight: "100%",
          marginBottom: "24px",

        }}
      >
        Billing
      </h2>

      {/* Appointment Info Card */}
      <div
        style={{
          backgroundColor: "#fff",
          paddingLeft: "23px",
          paddingTop: "40px",
          borderRadius: "10px",
          marginBottom: "24px",
          marginTop: "40px",
          width: "440px",
          height: "180px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      > <div style={{ display: "flex" }}>
          <p
            style={{
              height: "20px",
              width: "108px",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "23px",
              letterSpacing: "0.003em",
              color: "#2B3641",
              marginBottom: "4px",
            }}
          >
            {appointmentFrequency}
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: " 600",
              fontSize: "16px",
              lineHeight: "23px",
              letterSpacing: "0.003em",
              color: "#1A78F2",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            {appointmentTime}

          </p>
        </div>
        <div style={{ borderTop: "1px solid #BCC2C8", marginTop: " 15px", opacity: "50%", width: "400px" }}></div>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "23px",
            letterSpacing: "0.003em",
            color: "#2B3641",
            marginTop: "10px",
          }}
        >
          {appointmentLocation}
        </p>
        <div style={{ borderTop: "1px solid #BCC2C8", marginTop: "10px", opacity: "50%", width: "400px" }}></div>
      </div>

      {/* Discount Input + Apply Button */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          marginBottom: "24px",
          marginTop: "60px",
        }}
      >

        <input
          type="text"
          value={discountInput}
          onChange={(e) => setDiscountInput(e.target.value)}
          placeholder="Discount"
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "10px",
            color: "#88939D",
            height: "50px",
            width: "318px",
            padding: "0 16px",
            border: "2px solid #D3D8DD",
            outline: "none",
            backgroundColor: "white",
          }}
        />
        <button
          onClick={() => onApplyDiscount?.(discountInput)}
          style={{
            width: "114px",
            height: "50px",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "29px",
            color: "#fff",
            backgroundColor: "#36B864",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            // marginLeft:"0px",
          }}
        >
          Apply
        </button>

      </div>
      {/* Pricing Breakdown */}
      <div
        style={{
          width: "440px",
          height: "262px",
          
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "40px",
          marginBottom: "24px",
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "16px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", marginTop: "8px" }}
        >
          <span >
            Appointment Value{" "}
            <span style={{ color: "#1A78F2", cursor: "pointer" }}>- Details</span>
          </span>
          <span style={{ color: "black" }}>${appointmentValue.toFixed(2)}</span>
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}
        >
          <span>
            Discounts{" "}
            <span style={{ color: "#1A78F2", cursor: "pointer" }}>- Details</span>
          </span>
          <span style={{ color: "black" }}>- ${discountAmount.toFixed(2)}</span>
        </div>

        {/* <div style={{ borderTop: "1px solid #BCC2C8", marginTop: "10px " }}></div> */}
        <div style={{ borderTop: "1px solid #BCC2C8", marginTop: "10px", opacity: "50%" }}></div> 
      

        <div
          style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "#88939D", marginTop: "17px" }}
        >
          <span>Subtotal</span>
          <span style={{ color: "black" }}>${subtotal.toFixed(2)}</span>
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "#88939D", marginTop: "17px" }}
        >
          <span>Tax</span>
          <span style={{ color: "black" }}>+ ${taxAmount.toFixed(2)}</span>
        </div>

        {/* {/* <div style={{  margin: "8px 0", border:"1px solid #BCC2C8"}}></div> */}
        <div style={{ borderTop: "1px solid #BCC2C8", opacity: "50%", marginTop: "17px" }}></div> 

        <div
          style={{ display: "flex", justifyContent: "space-between", paddingTop: "12px"}}
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
            fontWeight: "600",
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
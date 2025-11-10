"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./styles/BookingConfirmation.module.css";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaTimes } from "react-icons/fa";
import { textAlign } from "html2canvas/dist/types/css/property-descriptors/text-align";
import type { BookingData } from "@/context/BookingContext";

interface BookingConfirmationProps {
  onClose: () => void;
  id?: string;
}

interface BookingContextType {
  BookingData: BookingData;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  onClose,
  id,
}) => {
  const router = useRouter();
  const pdfRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { bookingData, billingData } = useBooking();
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const value = {
    bookingData,
    billingData,
  };


  const {
    appointmentFrequency,
    appointmentTime,
    appointmentLocation,
    appointmentValue = 0,
    discountAmount = 0,
    taxAmount = 0,
    totalAmount = 0,
  } = billingData;

  const refNumber = "1256646566544111200";
  const subtotal = Math.max(0, appointmentValue - discountAmount);

  // Prevent closing on outside click (currently no action, kept for future use)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        // Intentionally left blank to disable outside click close
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


 const downloadPDF = async () => {
  try {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // --- HEADER BACKGROUND ---
    pdf.setFillColor(250, 250, 250); // #F5F8FF
    pdf.rect(0, 0, pageWidth, 35, "F");

    // --- CNC LOGO ---
    const logoUrl = "/images/cnc-logo.png"; // must be inside /public/images/
    try {
      const response = await fetch(logoUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      await new Promise((resolve) => {
        reader.onloadend = resolve;
        reader.readAsDataURL(blob);
      });
      const base64 = reader.result as string;
      pdf.addImage(base64, "PNG", 15, 10, 35, 15);
    } catch {
      console.warn("Logo failed to load.");
    }

    // --- SEPARATOR LINE ---
    pdf.setDrawColor(180);
    pdf.line(15, 32, pageWidth - 15, 32);

    // --- MAIN HEADING ---
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.setTextColor(30, 30, 30);
    pdf.text("Booking Details", pageWidth / 2, 45, { align: "center" });

    // --- BOOKING DETAILS CARD ---
    const startY = 55;
    const cardHeight = 60;
    pdf.setFillColor(250, 250, 250); // Match header/logo background
    pdf.setDrawColor(220);
    pdf.roundedRect(15, startY, pageWidth - 30, cardHeight, 3, 3, "FD");

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor(0);
    pdf.text("Booking Details", 20, startY + 10);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(60);

    let y = startY + 22;
    const gap = 8;
    pdf.text(`Reference No:`, 25, y);
    pdf.text(refNumber || "-", 70, y);
    y += gap;
    pdf.text(`Frequency:`, 25, y);
    pdf.text(appointmentFrequency || "-", 70, y);
    y += gap;
    pdf.text(`Time:`, 25, y);
    pdf.text(appointmentTime || "-", 70, y);
    y += gap;
    pdf.text(`Location:`, 25, y);
    pdf.text(appointmentLocation || "-", 70, y);

    // --- PAYMENT SUMMARY CARD ---
    const payY = y + 15;
    const payCardHeight = 65;
    pdf.setFillColor(250, 250, 250); // Match header/logo background
    pdf.setDrawColor(220);
    pdf.roundedRect(15, payY, pageWidth - 30, payCardHeight, 3, 3, "FD");

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor(0);
    pdf.text("Payment Summary", 20, payY + 10);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(60);

    let payLine = payY + 22;
    const payGap = 8;

    pdf.text(`Appointment Value:`, 25, payLine);
    pdf.text(`AED ${appointmentValue.toFixed(2)}`, pageWidth - 25, payLine, { align: "right" });

    pdf.text(`Discounts:`, 25, payLine + payGap);
    pdf.text(`-AED ${discountAmount.toFixed(2)}`, pageWidth - 25, payLine + payGap, { align: "right" });

    pdf.text(`Subtotal:`, 25, payLine + payGap * 2);
    pdf.text(`AED ${subtotal.toFixed(2)}`, pageWidth - 25, payLine + payGap * 2, { align: "right" });

    pdf.text(`Tax:`, 25, payLine + payGap * 3);
    pdf.text(`+AED ${taxAmount.toFixed(2)}`, pageWidth - 25, payLine + payGap * 3, { align: "right" });

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(0);
    pdf.text(`Total Amount:`, 25, payLine + payGap * 5);
    pdf.text(
      `AED ${totalAmount.toFixed(2)}`,
      pageWidth - 25,
      payLine + payGap * 5,
      { align: "right" }
    );

    // --- FOOTER LINE ---
    pdf.setDrawColor(200);
    pdf.line(15, pageHeight - 30, pageWidth - 15, pageHeight - 30);

    // --- FOOTER DETAILS ---
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(70);
    pdf.text(
      "CNC Services | Cleaning & Maintenance Experts",
      pageWidth / 2,
      pageHeight - 23,
      { align: "center" }
    );
    pdf.text(
      "Email: info@cncservices.com | Phone: +971 123 4567 | www.cncservices.com",
      pageWidth / 2,
      pageHeight - 18,
      { align: "center" }
    );

    // --- SAVE FILE ---
    pdf.save(`Booking_Confirmation_${Date.now()}.pdf`);

    // Optional redirect for cash payments
    if (bookingData.payment === "cash") {
      router.push("/Bookings/Dashboard");
      onClose();
    }
  } catch (err) {
    console.error("Error generating PDF:", err);
    alert("Failed to generate PDF. Please try again.");
  }
};

  return (
    <div className={styles.overlay}>
      <div className={styles.container} ref={modalRef}>
        <div className={styles.logo}>
          <i className="fa-solid fa-check"></i>
        </div>
        <div className={styles.main} ref={pdfRef}>
          {/* Close button now calls both onClose and router.push */}
          <div
            className={`${styles.home} no-print`}
            onClick={() => {
              onClose();
              router.push("/Bookings/Dashboard");
            }}
          >
            <FaTimes size={22} className="text-red-600 " />
          </div>

          <h2 className={styles.titletext}>Order Booked</h2>

          <p className={styles.paragraph}>
            Your booking has been successfully placed.
          </p>
          <p className={styles.content}>
            Ref No: <span className={styles.refNumber}>{refNumber}</span>
          </p>

          <hr className={styles.lineShort} />

          <div className={styles.content}>
            {/* <div className={styles.freqTimeRow}> */}
            <div className={styles.freqBox}>
              <p>{appointmentFrequency}</p>
            </div>
            <div className={`${styles.greenText} ${styles.largeText}`}>
              {appointmentTime}
            </div>

            {/* </div> */}
            <div className={styles.directions}>
              <p>{appointmentLocation}</p>
            </div>
            <hr className={styles.lineFull} />
          </div>

          {totalAmount > 0 ? (
            <>
              <div className={styles.center}>
                <p className={styles.paragraph}>Total Payment</p>
                <h2 className={styles.titletext}>
                  AED {totalAmount.toFixed(2)}
                </h2>
              </div>

              <div className={styles.content}>
                <div className={styles.paymentInfo}>
                  <div className={styles.row}>
                    <p>
                      Appointment Value{" "}
                      <span className={styles.greenText}>- Details</span>
                    </p>
                    <p>AED {appointmentValue.toFixed(2)}</p>
                  </div>

                  <div className={styles.row}>
                    <p className={styles.noMargin}>
                      Discounts{" "}
                      <span className={styles.greenText}>- Details</span>
                    </p>
                    <p>- AED {discountAmount.toFixed(2)}</p>
                  </div>
                </div>

                <hr className={styles.lineAuto} />

                <div className={styles.row}>
                  <p className={styles.grayText}>Subtotal</p>
                  <p className={styles.blackText}>AED {subtotal.toFixed(2)}</p>
                </div>

                <div className={styles.row}>
                  <p className={styles.grayText}>Tax</p>
                  <p className={styles.blackText}>
                    + AED {taxAmount.toFixed(2)}
                  </p>
                </div>

                <hr className={styles.lineAuto} />

                <div className={styles.row}>
                  <p>Total</p>
                  <p className={styles.boldText}>
                    AED {totalAmount.toFixed(2)}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.customContent}>
              Thank you for choosing CNC Services. Our team will be reaching out
              to you shortly to confirm your booking and discuss the service
              details.
            </div>
          )}
          {/* )} */}
          {billingData.totalAmount > 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                gap: "10px",
              }}
            >
              {/* PDF button always visible when totalAmount > 0 */}
              <button
                className={`${styles.button} no-print`}
                onClick={downloadPDF}
              >
                <i className="fa-solid fa-download"></i>
                Get PDF Receipt
              </button>

              {/* Pay Now button only visible when payment type is "card" */}

              {bookingData.payment === "card" && (
                <button
                  className={`${styles.button} no-print`}
                  onClick={() => {
                    const id = bookingData.id;
                    // router.push(`/Payment?id=${id}`);
                    router.push(`/Payment?id=${id}&autoCheckout=true`);
                  }}
                >
                  <i className="fa-solid fa-credit-card"></i>
                  Pay Now
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;

"use client";

import React, { useRef, useEffect } from "react";
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
}
interface BookingContextType {
  BookingData: BookingData;
  // billingData: BillingData;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  onClose,
}) => {
  const router = useRouter();
  const pdfRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { bookingData, billingData } = useBooking();


  const value = {
    bookingData,
    billingData,
    // ...
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

  //  const downloadPDF = async () => {
  //   const input = pdfRef.current;
  //   if (!input) {
  //     console.error("No PDF source element found.");
  //     return;
  //   }

  //   // Clone the node to avoid capturing hidden/modally styled version
  //   const clone = input.cloneNode(true) as HTMLElement;

  //   // Create a temporary container in body
  //   const tempContainer = document.createElement("div");
  //   tempContainer.style.position = "fixed";
  //   tempContainer.style.left = "0";
  //   tempContainer.style.top = "0";
  //   tempContainer.style.width = "100%";
  //   tempContainer.style.background = "#fff";
  //   tempContainer.style.zIndex = "9999";
  //   tempContainer.style.padding = "20px";
  //   tempContainer.style.visibility = "visible";
  //   tempContainer.appendChild(clone);

  //   document.body.appendChild(tempContainer);

  //   try {
  //     // Force reflow and delay to ensure dimensions are computed
  //     await new Promise((resolve) => setTimeout(resolve, 300));

  //     const rect = clone.getBoundingClientRect();
  //     if (rect.width === 0 || rect.height === 0) {
  //       console.error("Cloned element still has no size — aborting PDF generation.");
  //       document.body.removeChild(tempContainer);
  //       return;
  //     }

  //     const canvas = await html2canvas(clone, {
  //       scale: 2,
  //       useCORS: true,
  //       backgroundColor: "#ffffff",
  //       scrollY: -window.scrollY,
  //     });

  //     if (canvas.width === 0 || canvas.height === 0) {
  //       console.error("Canvas is zero-sized, aborting PDF generation.");
  //       document.body.removeChild(tempContainer);
  //       return;
  //     }

  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4");

  //     const pageWidth = pdf.internal.pageSize.getWidth();
  //     const pageHeight = pdf.internal.pageSize.getHeight();
  //     const imgWidth = pageWidth;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;

  //     let heightLeft = imgHeight;
  //     let position = 0;

  //     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;

  //     while (heightLeft > 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }

  //     pdf.save(`Booking_Confirmation_${Date.now()}.pdf`);

  //     router.push("/Bookings/Dashboard");
  //     onClose();
  //   } catch (err) {
  //     console.error("Error generating PDF:", err);
  //     alert("Failed to generate PDF. Please try again.");
  //   } finally {
  //     // Always remove temp container
  //     if (tempContainer.parentNode) {
  //       document.body.removeChild(tempContainer);
  //     }
  //   }
  // };
  const downloadPDF = async () => {
    const input = pdfRef.current;
    if (!input) return;

    try {
      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
      pdf.save(`Booking_Confirmation_${Date.now()}.pdf`);

      // ✅ Conditional navigation logic
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


          {/* {totalAmount > 0 && (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
      gap: "10px",
    }}
  >
  
    <button
      className={`${styles.button} no-print`}
      onClick={downloadPDF}
    >
      <i className="fa-solid fa-download"></i>
      Get PDF Receipt
    </button>

  
    {BookingData.payment === "card" && (
      <button
        className={`${styles.button} no-print`}
        onClick={() => router.push("/Bookings/COPYandPAYPayment")}
      >
        <i className="fa-solid fa-credit-card"></i>
        Pay Now
      </button>
    )}
  </div> */}
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
                    router.push(`/Bookings/COPYandPAYPayment?id=${id}`);
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

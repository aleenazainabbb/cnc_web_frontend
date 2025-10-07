"use client";

import React, { useRef, useEffect } from "react";
import styles from "./styles/BookingConfirmation.module.css";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaTimes } from "react-icons/fa";
import { textAlign } from "html2canvas/dist/types/css/property-descriptors/text-align";

interface BookingConfirmationProps {
  onClose: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  onClose,
}) => {
  const router = useRouter();
  const { billingData } = useBooking();
  const pdfRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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
    const input = pdfRef.current;
    if (!input) return;

    // hide elements marked with no-print while generating pdf
    const elementsToHide = input.querySelectorAll(".no-print");
    elementsToHide.forEach((el) => {
      (el as HTMLElement).style.visibility = "hidden";
    });

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    // restore elements visibility
    elementsToHide.forEach((el) => {
      (el as HTMLElement).style.display = "";
    });

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;

    const usableWidth = pageWidth - margin * 2;
    const usableHeight = pageHeight - margin * 2;

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = usableWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
    const finalImgHeight = imgHeight > usableHeight ? usableHeight : imgHeight;

    pdf.addImage(imgData, "PNG", margin, margin, imgWidth, finalImgHeight);
    pdf.save(`Booking_Confirmation_${refNumber}.pdf`);

    router.push("/Bookings/Dashboard");
    onClose();
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

          {totalAmount >= 0 && (
            <button
              className={`${styles.button} no-print`}
              onClick={downloadPDF}
            >
              <i className="fa-solid fa-download"></i>
              Get PDF Receipt
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;

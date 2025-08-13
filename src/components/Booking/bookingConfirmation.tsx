'use client';

import React, { useRef } from 'react';
import styles from './styles/BookingConfirmation.module.css';
import { useRouter } from 'next/navigation';
import { useBooking } from '@/context/BookingContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface BookingConfirmationProps {
  onClose: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ onClose }) => {
  const router = useRouter();
  const { billingData } = useBooking();
  const pdfRef = useRef<HTMLDivElement>(null);

  const {
    appointmentFrequency,
    appointmentTime,
    appointmentLocation,
    appointmentValue,
    discountAmount,
    taxAmount,
    totalAmount,
  } = billingData;

  const refNumber = '1256646566544111200';
  const subtotal = Math.max(0, appointmentValue - discountAmount);

  const goToHome = () => {
    router.push('/');
  };

  const downloadPDF = async () => {
    const input = pdfRef.current;
    if (!input) return;

    const elementsToHide = input.querySelectorAll('.no-print');
    elementsToHide.forEach((el) => {
      (el as HTMLElement).style.visibility = 'hidden';
    });

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');

    elementsToHide.forEach((el) => {
      (el as HTMLElement).style.display = '';
    });

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;

    const usableWidth = pageWidth - margin * 2;
    const usableHeight = pageHeight - margin * 2;

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = usableWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
    const finalImgHeight = imgHeight > usableHeight ? usableHeight : imgHeight;

    pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, finalImgHeight);
    pdf.save(`Booking_Confirmation_${refNumber}.pdf`);

    onClose();
  };

  return (
    <div className={styles.container}>
      <div className={styles.main} ref={pdfRef}>
        <div className={`${styles.home} no-print`} onClick={goToHome}>
          Go to Home
        </div>

        <h2 className={styles.titletext}>Order Booked</h2>
        <p className={styles.paragraph}>Your payment has been successfully done.</p>
        <p className={styles.content}>
          Ref No: <span className={styles.refNumber}>{refNumber}</span>
        </p>

        <hr className={styles.lineShort} />

        <div>
          <div className={styles.content}>
            <div className={styles.freqTimeRow}>
              <div className={styles.freqBox}>
                <p>{appointmentFrequency}</p>
              </div>
              <p className={styles.greenText}>{appointmentTime}</p>
            </div>
            <p>{appointmentLocation}</p>
            <hr className={styles.lineFull} />
          </div>

          <div className={styles.center}>
            <p className={styles.paragraph}>Total Payment</p>
            <h2 className={styles.titletext}>AED {totalAmount.toFixed(2)}</h2>
          </div>

          <div className={styles.content}>
            <div className={styles.paymentInfo}>
              <div className={styles.row}>
                <p>
                  Appointment Value <span className={styles.greenText}>- Details</span>
                </p>
                <p>AED {appointmentValue.toFixed(2)}</p>
              </div>

              <div className={styles.row}>
                <p className={styles.noMargin}>
                  Discounts <span className={styles.greenText}>- Details</span>
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
              <p className={styles.blackText}>+ AED {taxAmount.toFixed(2)}</p>
            </div>

            <hr className={styles.lineAuto} />

            <div className={styles.row}>
              <p>Total</p>
              <p className={styles.boldText}>AED {totalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <button className={`${styles.button} no-print`} onClick={downloadPDF}>
          <i className="fa-solid fa-download"></i>
          Get PDF Receipt
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;

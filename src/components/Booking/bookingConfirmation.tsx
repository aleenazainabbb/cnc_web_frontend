'use client';

import React, { useRef } from 'react';
import confirm from './styles/BookingConfirmation.module.css';
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

  // Hide elements before screenshot
  const elementsToHide = input.querySelectorAll('.no-print');
  elementsToHide.forEach((el) => {
    (el as HTMLElement).style.display = 'none';
  });

  // Capture screenshot
  const canvas = await html2canvas(input);
  const imgData = canvas.toDataURL('image/png');

  // Show elements again after capture
  elementsToHide.forEach((el) => {
    (el as HTMLElement).style.display = '';
  });

  // Create PDF with margin
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 10; // mm

  const usableWidth = pageWidth - margin * 2;
  const usableHeight = pageHeight - margin * 2;

  const imgProps = pdf.getImageProperties(imgData);
  const imgWidth = usableWidth;
  const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

  // If height exceeds page height, scale it down further (optional)
  const finalImgHeight = imgHeight > usableHeight ? usableHeight : imgHeight;

  pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, finalImgHeight);
  pdf.save(`Booking_Confirmation_${refNumber}.pdf`);

  onClose(); // Close popup after download
};

  return (
    <div className={confirm.container}>
      <div className={confirm.main} ref={pdfRef}>
        <div className={`${confirm.home} no-print`} onClick={goToHome}>
          Go to Home
        </div>

        <h2 className={confirm.titletext}>Order Booked</h2>
        <p className={confirm.paragraph}>Your payment has been successfully done.</p>
        <p className={confirm.content} style={{ marginTop: '15px' }}>
          Ref No: <span style={{ color: '#36B864' }}>{refNumber}</span>
        </p>

        <hr className={confirm.line} style={{ width: '65%' }} />

        <div>
          <div className={confirm.content}>
            <div style={{ display: 'flex', gap: '0px' }}>
              <div style={{ width: '108px' }}>
                <p>{appointmentFrequency}</p>
              </div>
              <p style={{ color: '#36B864' }}>{appointmentTime}</p>
            </div>
            <p>{appointmentLocation}</p>
            <hr className={confirm.line} style={{ width: '100%' }} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <p className={confirm.paragraph}>Total Payment</p>
            <h2 className={confirm.titletext} style={{ marginTop: '5px' }}>
              AED {totalAmount.toFixed(2)}
            </h2>
          </div>

          <div className={confirm.content}>
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>
                  Appointment Value <span style={{ color: '#36B864' }}>- Details</span>
                </p>
                <p>AED {appointmentValue.toFixed(2)}</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <p style={{ margin: 0 }}>
                  Discounts <span style={{ color: '#36B864' }}>- Details</span>
                </p>
                <p>- AED {discountAmount.toFixed(2)}</p>
              </div>
            </div>

            <hr className={confirm.line} style={{ width: 'auto' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ color: '#88939D' }}>Subtotal</p>
              <p style={{ color: 'black' }}>AED {subtotal.toFixed(2)}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <p style={{ color: '#88939D' }}>Tax</p>
              <p style={{ color: 'black' }}>+ AED {taxAmount.toFixed(2)}</p>
            </div>

            <hr className={confirm.line} style={{ width: 'auto' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Total</p>
              <p style={{ fontWeight: 700 }}>AED {totalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <button className={`${confirm.button} no-print`} onClick={downloadPDF}>
          <i className="fa-solid fa-download" style={{ width: '39.7px', height: '39.7px' }}></i>
          Get PDF Receipt
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;

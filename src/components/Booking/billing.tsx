"use client";

import React from "react";
import styles from './styles/AddBooking/billing.module.css';
import { useBooking } from "@/context/BookingContext";

type BillingSummaryProps = {
  onApplyDiscount?: (code: string) => void;
  onNext?: () => void;
  serviceError?: boolean;
};

const BillingSummary: React.FC<BillingSummaryProps> = ({ onApplyDiscount, onNext }) => {
  const { billingData } = useBooking(); 
  const {
    appointmentFrequency = "Every 2 weeks",
    appointmentTime,
    appointmentLocation = "Not specified",
    discountCode = "",
    appointmentValue = 0,
    discountAmount = 0,
    taxAmount = 0,
    totalAmount = 0,
  } = billingData;

  const [discountInput, setDiscountInput] = React.useState(discountCode);
  const formattedNow = React.useMemo(() => {
    return new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }, []);

  const displayAppointmentTime = appointmentTime?.trim() || formattedNow;
  const subtotal = Math.max(0, appointmentValue - discountAmount);

  return (
    <div className={styles.billingcontainer}>
      <h2 className={styles.billingheading}>Billing</h2>

      <div className={styles.appointmentcard}>
        <div className={styles.appointmentrow}>
          <p className={styles.appointmentfrequency}>{appointmentFrequency}</p>
          <p className={styles.appointmenttime}>{displayAppointmentTime}</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.locationRow}>
          <p className={styles.locationtext}>{appointmentLocation}</p>
          <p className={styles.changelocation}>Change Location</p>
        </div>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.pricingbox}>
        <div className={styles.pricingrow}>
          <span>Appointment Value <span className={styles.detailslink}>- Details</span></span>
          <span className={styles.totalvalue}>AED {appointmentValue.toFixed(2)}</span>
        </div>
        <div className={styles.pricingrow}>
          <span>Discounts <span className={styles.detailslink}>- Details</span></span>
          <span className={styles.totalvalue}>- AED {discountAmount.toFixed(2)}</span>
        </div>
        <div className={styles.divider} style={{ marginTop: "10px" }}></div>
        <div className={styles.subtotalrow}>
          <span>Subtotal</span>
          <span className={styles.totalvalue}>AED {subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.taxrow}>
          <span>Tax</span>
          <span className={styles.totalvalue}>+ AED {taxAmount.toFixed(2)}</span>
        </div>
        <div className={styles.divider} style={{ marginTop: "17px" }}></div>
        <div className={styles.totalrow}>
          <span>Total</span>
          <span>AED {totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className={styles.buttoncontainer}>
        <button onClick={onNext} className={styles.nextbutton}>Next</button>
      </div>
    </div>
  );
};

export default BillingSummary;

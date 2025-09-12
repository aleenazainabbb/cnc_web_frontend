"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./Booking/styles/AddBooking/billing.module.css";
import { useBooking } from "@/context/BookingContext";

const BillingPricesBox: React.FC = () => {
  const { billingData } = useBooking();
  const pathname = usePathname();

  const {
    appointmentValue = 0,
    discountAmount = 0,
    taxAmount = 0,
    totalAmount = 0,
  } = billingData;

  const subtotal = Math.max(0, appointmentValue - discountAmount);

  // Route-specific visibility rules
  if (pathname === "/BookAservicePage") {
    // Always show billing here
  } else if (pathname === "/BookAservicePage/Location") {
    if (totalAmount <= 0) return null;
  } else if (pathname === "/BookAservicePage/BookDate&Time") {
    if (totalAmount <= 0) return null;
  } else {
    // For other routes: hide if everything is 0
    if (
      appointmentValue <= 0 &&
      discountAmount <= 0 &&
      taxAmount <= 0 &&
      totalAmount <= 0
    ) {
      return null;
    }
  }

  return (
    <div className={styles.pricingbox}>
      <div className={styles.pricingrow}>
        <span>
          Appointment Value{" "}
          <span className={styles.detailslink}>- Details</span>
        </span>
        <span className={styles.totalvalue}>
          AED {appointmentValue.toFixed(2)}
        </span>
      </div>

      <div className={styles.pricingrow}>
        <span>
          Discounts <span className={styles.detailslink}>- Details</span>
        </span>
        <span className={styles.totalvalue}>
          - AED {discountAmount.toFixed(2)}
        </span>
      </div>

      <div className={styles.divider} style={{ marginTop: "10px" }}></div>

      <div className={styles.subtotalrow}>
        <span>Subtotal</span>
        <span className={styles.totalvalue}>AED {subtotal.toFixed(2)}</span>
      </div>

      <div className={styles.taxrow}>
        <span>Tax</span>
        <span className={styles.totalvalue}>
          + AED {taxAmount.toFixed(2)}
        </span>
      </div>

      <div className={styles.divider} style={{ marginTop: "17px" }}></div>

      <div className={styles.totalrow}>
        <span>Total</span>
        <span>AED {totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default BillingPricesBox;

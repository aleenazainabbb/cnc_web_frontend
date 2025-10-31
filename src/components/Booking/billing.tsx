"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import styles from "./styles/AddBooking/billing.module.css";
import { useBooking } from "@/context/BookingContext";
import BillingPricesBox from "../BillingPricesBox";

type BillingSummaryProps = {
  onApplyDiscount?: (code: string) => void;
  onNext?: () => void;
  serviceError?: boolean;
  setServiceError?: (val: boolean) => void;
  selectedService?: string;
  buttonLabel?: string;
  bookingId?: string;
  resetTrigger?: boolean;
};

const BillingSummary: React.FC<BillingSummaryProps> = ({
  onApplyDiscount,
  onNext,
  setServiceError,
  buttonLabel = "Next",
  resetTrigger = false,
}) => {
  const {
    billingData,
    updateBookingData,
    submitBookingQuote,
    updateBookingOrder,
    formErrors,
  } = useBooking();
  const locationListRef = useRef<HTMLDivElement>(null);
  const {
    appointmentFrequency = "Once",
    appointmentTime,
    appointmentLocation = "Not specified",
    appointmentValue = 0,
    discountAmount = 0,
    taxAmount = 0,
    totalAmount = 0,
  } = billingData;

  const [discountInput, setDiscountInput] = useState(discountAmount);
  const [showLocationList, setShowLocationList] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  const handleNextClick = async () => {
    try {
      if (buttonLabel === "Pay Now") {
        // console.log("Booking quote submitted successfully");
      }
      onNext?.();
    } catch (err: any) {
      console.error("Booking submission failed:", err.message);
    }
  };

  // Update current date time when component mounts or resetTrigger changes
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // If appointmentTime exists from DateTime component, use it directly
      if (appointmentTime) {
        setCurrentDateTime(appointmentTime);
      } else {
        // Otherwise format as regular date time
        const formatted = now.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setCurrentDateTime(formatted);
      }
    };

    updateDateTime();
  }, [resetTrigger, appointmentTime]); // Re-run when appointmentTime changes

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationListRef.current &&
        !locationListRef.current.contains(event.target as Node)
      ) {
        setShowLocationList(false);
      }
    };

    if (showLocationList) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLocationList]);

  useEffect(() => {
    setDiscountInput(billingData.discountAmount);
  }, [billingData.discountCode]);

  useEffect(() => {
    if (
      billingData.discountAmount > 0 ||
      billingData.taxAmount > 0 ||
      billingData.totalAmount > 0
    ) {
      updateBookingData({
        discountAmount: billingData.discountAmount,
        taxAmount: billingData.taxAmount,
        totalAmount: billingData.totalAmount,
        appointedPrice: billingData.appointmentValue,
        ...(billingData.discountCode
          ? { promoCode: billingData.discountCode }
          : {}),
      });

      console.log("Booking data updated at runtime:", {
        discountAmount: billingData.discountAmount,
        taxAmount: billingData.taxAmount,
        totalAmount: billingData.totalAmount,
        promoCode: billingData.discountCode,
      });
    }
  }, [
    billingData.discountAmount,
    billingData.taxAmount,
    billingData.totalAmount,
    billingData.appointmentValue,
    billingData.discountCode,
  ]);

  // Use appointmentTime directly if it exists, otherwise use currentDateTime
  const displayAppointmentTime = appointmentTime || currentDateTime;

  const subtotal = Math.max(0, appointmentValue - discountAmount);

  return (
    <div className={styles.billingcontainer}>
      <h2 className={styles.billingheading}>Billing</h2>

      <div className={styles.appointmentcard}>
        <div className={styles.appointmentrow}>
          <p className={styles.appointmentfrequency}>
            {appointmentFrequency}
            {appointmentFrequency === "Once" && displayAppointmentTime && (
              <span
                style={{
                  color: "#007bff",
                  fontWeight: "bold",
                  marginLeft: "8px",
                }}
              >
                • {displayAppointmentTime}
              </span>
            )}
          </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.locationRow}>
          <p className={styles.locationtext}>{appointmentLocation}</p>
        </div>

        <div className={styles.divider}></div>
      </div>

      <BillingPricesBox />
      <div className={styles.buttoncontainer}>
        <button onClick={handleNextClick} className={styles.nextbutton}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default BillingSummary;

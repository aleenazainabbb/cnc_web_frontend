'use client';

import React, { useEffect, useState, useMemo, useRef } from "react";
import styles from './styles/AddBooking/billing.module.css';
import { useBooking } from "@/context/BookingContext";
// import { useLocation } from "@/context/Location";

type BillingSummaryProps = {
  onApplyDiscount?: (code: string) => void;
  onNext?: () => void;
  serviceError?: boolean;
  setServiceError?: (val: boolean) => void;
  selectedService?: string;
};

const BillingSummary: React.FC<BillingSummaryProps> = ({
  onApplyDiscount,
  onNext,
  setServiceError,
  selectedService,
}) => {
  const { billingData, updateBookingData ,validateBooking, formErrors} = useBooking();
  const locationListRef = useRef<HTMLDivElement>(null);

  const {
    appointmentFrequency = "Every 2 weeks",
    appointmentTime,
    appointmentLocation = "Not specified",
    appointmentValue = 0,
    discountAmount = 0,
    taxAmount = 0,
    totalAmount = 0,
  } = billingData;

  const [discountInput, setDiscountInput] = useState(discountAmount);
  const [showLocationList, setShowLocationList] = useState(false);

const handleNextClick = () => {
  if (!validateBooking()) {
    setServiceError?.(true);
    return;
  }
  setServiceError?.(false);
  onNext?.();
};

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
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
        ...(billingData.discountCode ? { promoCode: billingData.discountCode } : {}),
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

  const formattedNow = useMemo(() => {
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
          <p className={styles.locationtext} >{appointmentLocation}</p>
          {/* <p className={styles.changelocation} onClick={handleLocationClick}>
            Change Location
          </p> */}
        </div>
        {/* {showLocationList && (
          <div className={styles.locationList} ref={locationListRef}>
            {savedLocations.length === 0 ? (
              <p>No saved locations found.</p>
            ) : (
              savedLocations.map((loc) => (
                <div
                  key={loc.id}
                  className={styles.locationItem}
                  onClick={() => handleSelectLocation(loc)}
                >
                  <strong>{loc.label}</strong> — {loc.formattedAddress}
                </div>
              ))
            )}
          </div>
        )} */}
        <div className={styles.divider}></div>
      </div>

      <div className={styles.pricingbox}>
        <div className={styles.pricingrow}>
          <span>
            Appointment Value <span className={styles.detailslink}>- Details</span>
          </span>
          <span className={styles.totalvalue}>AED {appointmentValue.toFixed(2)}</span>
        </div>
        <div className={styles.pricingrow}>
          <span>
            Discounts <span className={styles.detailslink}>- Details</span>
          </span>
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
        <button onClick={handleNextClick} className={styles.nextbutton}>Next</button>
      </div>
    </div>
  );
};

export default BillingSummary;

"use client";

import React, { useState } from "react";
import styles from "./styles/pending.module.css";
import Pagination from "@/components/Booking/pagination";
import { Range } from "react-date-range";
import { getStatusColor } from "@/utils/statusColors";
import wallet from "./styles/mywallet.module.css";
import PaymentDetails from "@/components/Booking/PaymentDetails";
import BillingSummary from "@/components/Booking/billing";
import { useBooking } from "@/context/BookingContext";
import BookingConfirmation from "@/components/Booking/bookingConfirmation";

interface PendingProps {
  range: Range[];
  data: string[][];
}

export type UploadedMediaItem = {
  name: string;
  url: string;
  type: string;
};

const Pending: React.FC<PendingProps> = ({ range, data }) => {
  const headers = [
    "ORDER ID",
    "SERVICE",
    "DETAILS",
    "PRICE",
    "TIME",
    "DATE",
    "STATUS",
    "PAY NOW",
  ];
  const allRows = data;
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const isRangeSelected =
    !!range[0].startDate &&
    !!range[0].endDate &&
    (range[0].startDate.toDateString() !== new Date().toDateString() ||
      range[0].endDate.toDateString() !== new Date().toDateString());

  const filteredRows = isRangeSelected
    ? allRows.filter((row) => {
        const date = new Date(row[5]);
        const start = range[0].startDate!;
        const end = range[0].endDate!;
        return date >= start && date <= end;
      })
    : allRows;

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const rows = filteredRows.slice(start, end);
  const {
    updateBookingData,
    updateBillingData,
    allOrdersObject,
    submitBookingQuote,
    addSelection,
    updateLatestLocation,
  } = useBooking();
  const [selectedRow, setSelectedRow] = useState<string[] | null>(null); // track which booking is clicked
  const handlePaginationChange = (page: number, limit: number) => {
    setCurrentPage(page);
    setPerPage(limit);
  };
  const handlePayNow = (row: string[]) => {
    const [orderId, service, subService, price, time, date] = row;

    // find the complete backend record for this booking
    const fullOrder = allOrdersObject.find((o: any) => o.bookingId === orderId);

    // parse the displayed price string to a number"
    const parsedPrice = Number(String(price).replace(/[^0-9.-]+/g, "")) || 0;
    updateBookingData({
      service,
      subService,
      totalAmount: parsedPrice,
      make: fullOrder?.make || "",
      model: fullOrder?.model || "",
      variant: fullOrder?.variant || "",
      cleaningCategory: fullOrder?.cleaningCategory || "",
      cleaningType: fullOrder?.cleaningType || "",
      numberOfWindows: fullOrder?.numberOfWindows || "",
      squareFootage: fullOrder?.squareFeet || "",
      numberOfItems: fullOrder?.numberOfItems || "",
      // uploadedMedia: fullOrder?.uploadedMedia as UploadedMediaItem[] || [],
    });
    addSelection({
      time: fullOrder?.time || "",
      date: fullOrder?.date || "",
    });
    updateLatestLocation({
      type: "Home", // or whatever default makes sense
      street: "",
      apt: "",
      city: "",
      country: "",
      fullAddress: fullOrder?.location || "",
      access: "",
      pets: "",
      petDetails: "",
      additionalNotes: "",
    });

    updateBillingData({
      appointmentFrequency: fullOrder?.cleaningFrequency || "Weekly",
      appointmentTime: `${date} ${time}`,
      appointmentLocation: fullOrder?.location || "",
      appointmentValue: Number(fullOrder?.cncChargesExclVat) || parsedPrice,
      discountCode: fullOrder?.promoCode || "",
      discountAmount: Number(fullOrder?.discountPrice) || 0,
      subTotal: Number(fullOrder?.cncChargesExclVat) || parsedPrice,
      taxAmount: Number(fullOrder?.vatCharges) || 0,
      totalAmount: Number(fullOrder?.cncChargesInclVat) || parsedPrice,
    });
    setShowModal(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={`${styles.gridContainer} ${styles.rowHeader}`}>
          {headers.map((h, i) => (
            <div key={i}>{h}</div>
          ))}
        </div>

        <div className={styles.scrollContainer}>
          {rows.map((row, ri) => {
            const status = row[6];
            const paymentStatus = row[7];
            const color = getStatusColor(status);
            return (
              <div key={ri} className={`${styles.gridContainer} ${styles.row}`}>
                {row.map((cell, ci) =>
                  ci === 4 ? (
                    <div key={ci}>
                      <i
                        className="fa-regular fa-clock"
                        style={{ marginRight: 6 }}
                      />
                      {cell}
                    </div>
                  ) : ci === 6 ? (
                    <button
                      key={ci}
                      className={styles.statusButton}
                      style={{ borderColor: color, color }}
                    >
                      {cell}
                    </button>
                  ) : ci === 7 ? null : ( // hide raw bookingPaymentStatus
                    <div key={ci}>{cell}</div>
                  )
                )}
                {paymentStatus === "added" ? (
                  <button
                    className={styles.payNowButton}
                    onClick={() => handlePayNow(row)}
                  >
                    Pay Now
                  </button>
                ) : paymentStatus === "none" ? (
                  <button className={styles.payNowButton} disabled>
                    Pay Now
                  </button>
                ) : (
                  <button className={styles.payNowButton} disabled>
                    Paid
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <Pagination
          totalItems={filteredRows.length}
          defaultPerPage={perPage}
          onChange={handlePaginationChange}
        />
      </div>
      {/* Payment Modal */}
      {showModal && (
        <div className={wallet.modalOverlay}>
          <div className={wallet.modal}>
            <button
              className={wallet.close}
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <div className={styles.componentRow}>
              <PaymentDetails />
              <div className={styles.billingCenter}>
                <BillingSummary
                  buttonLabel="Pay Now"
                  onNext={async () => {
                    try {
                      // call the same API that handleNextClick uses
                      const result = await submitBookingQuote();
                      setShowModal(false);
                      setShowConfirm(true);
                    } catch (err) {
                      console.error("Pay Now failed:", err);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {showConfirm && (
        <div className={wallet.modalOverlay}>
          <div className={wallet.modal}>
            <BookingConfirmation onClose={() => setShowConfirm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pending;

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
import RangeFilter from "@/components/Booking/daterange";

interface PendingProps {
  range: Range[];
  data: string[][];
}

export type UploadedMediaItem = {
  name: string;
  url: string;
  type: string;
};

// Utility: Capitalize every word in a string
const capitalizeWords = (text: any) => {
  if (text === null || text === undefined) return "";
  return String(text)
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Pending: React.FC<PendingProps> = ({ range: initialRange, data }) => {
  const [range, setRange] = useState<Range[]>(initialRange);
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
  const [selectedRow, setSelectedRow] = useState<string[] | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  const {
    updateBookingData,
    updateBillingData,
    allOrdersObject,
    addSelection,
    updateLatestLocation,
    updateBookingOrder,
  } = useBooking();

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
  const handlePaginationChange = (page: number, limit: number) => {
    setCurrentPage(page);
    setPerPage(limit);
  };

  const handlePayNow = (row: string[]) => {
    const [orderId, service, subService, price, time, date] = row;

    const fullOrder = allOrdersObject.find((o: any) => o.bookingId === orderId);
    if (!fullOrder) return;

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
    });

    addSelection({
      time: fullOrder?.time || "",
      date: fullOrder?.date || "",
    });

    updateLatestLocation({
      type: "Home",
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

    setSelectedRow(row);
    setSelectedOrder(fullOrder);
    setShowModal(true);
  };

  return (
    <div className={styles.main}>
      <RangeFilter range={range} setRange={setRange} />
      <div className={styles.container}>
        <div className={styles.tableScroll}>
          <div className={`${styles.gridContainer} ${styles.rowHeader}`}>
            
            {headers.map((h, i) => (
              <div key={i}>{h}</div>
            ))}
          </div>

          {/* Data Rows */}

          <div className={styles.verticalScroll}>
            {rows.map((row, ri) => {
              const status = row[6];
              const paymentStatus = row[7];
              const color = getStatusColor(status);

              return (
                <div
                  key={ri}
                  className={`${styles.gridContainer} ${styles.row}`}
                >
                  {row.map((cell, ci) =>
                    ci === 4 ? (
                      <div key={ci}>
                        <i
                          className="fa-regular fa-clock"
                          style={{ marginRight: 6 }}
                        />
                        {capitalizeWords(cell)}
                      </div>
                    ) : ci === 6 ? (
                      <button
                        key={ci}
                        className={styles.statusButton}
                        style={{ borderColor: color, color }}
                      >
                        {capitalizeWords(cell)}
                      </button>
                    ) : ci === 7 ? null : (
                      <div key={ci}>{capitalizeWords(cell)}</div>
                    )
                  )}

                  {/* Pay Now Button - This should be the 8th column */}
                  {paymentStatus === "added" ? (
                    <button
                      className={styles.payNowButton}
                      onClick={() => handlePayNow(row)}
                    >
                      Pay Now
                    </button>
                  ) : (
                    <button className={styles.payNowButton} disabled>
                      {paymentStatus === "none" ? "Pay Now" : "Paid"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
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
                      // ORDER ID is at index 0
                      const id = selectedOrder?.id || selectedOrder?.bookingId;
                      if (!id) throw new Error("No booking selected");
                      await updateBookingOrder(id);
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

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className={wallet.modalOverlay}>
          <div className={wallet.paynowmodal}>
            <BookingConfirmation onClose={() => setShowConfirm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pending;

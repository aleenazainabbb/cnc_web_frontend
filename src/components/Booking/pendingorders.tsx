'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './styles/pending.module.css';
import Pagination from '@/components/Booking/pagination';
import { Range } from 'react-date-range';
import { getStatusColor } from '@/utils/statusColors';

interface PendingProps {
  range: Range[];
  data: string[][];
}

// const isValidPrice = (price: string): boolean => {
//   if (!price) return false;
//   if (price === "Prices will be listed soon") return false;

//   const numericPart = price.replace(/[^\d.]/g, '');
//   return !isNaN(Number(numericPart)) && numericPart.length > 0;
// };

const Pending: React.FC<PendingProps> = ({ range, data }) => {
  const headers = ['ORDER ID', 'SERVICE', 'DETAILS', 'PRICE', 'TIME', 'DATE', 'STATUS', 'PAY NOW'];
  const allRows = data;

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const isRangeSelected =
    !!range[0].startDate &&
    !!range[0].endDate &&
    (range[0].startDate.toDateString() !== new Date().toDateString() ||
      range[0].endDate.toDateString() !== new Date().toDateString());

  const filteredRows = isRangeSelected
    ? allRows.filter((row) => {
      const date = new Date(row[5]); // DATE is at index 5 (check your data)
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
            const status = row[6]; // STATUS column
            const paymentStatus = row[7]; // bookingPaymentStatus column
            const color = getStatusColor(status);

            return (
              <div key={ri} className={`${styles.gridContainer} ${styles.row}`}>
                {row.map((cell, ci) =>
                  ci === 4 ? (
                    <div key={ci}>
                      <i className="fa-regular fa-clock" style={{ marginRight: 6 }} />
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
                  <button className={styles.payNowButton}>Pay Now</button>
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
    </div>
  );
};

export default Pending;

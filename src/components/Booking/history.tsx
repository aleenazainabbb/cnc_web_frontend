"use client";

import React from "react";
import styles from "./styles/pending.module.css";
import Pagination from "@/components/Booking/pagination";
import { Range } from "react-date-range";
import LinkWithLoader from "@/components/Loader/Link";
import { getStatusColor } from "@/utils/statusColors";

interface HistoryProps {
  range: Range[]; // expected to be passed from parent
  data: string[][];
}

const History: React.FC<HistoryProps> = ({ range, data }) => {
  const headers = [
    "ORDER ID",
    "SERVICE",
    "DETAILS",
    "PRICE",
    "TIME",
    "DATE",
    "STATUS",
    "RESCHEDULE",
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(5);

  // ✅ filter rows by date
  const filteredRows = React.useMemo(() => {
    const startDate = range?.[0]?.startDate;
    const endDate = range?.[0]?.endDate;

    if (!startDate || !endDate || startDate.getTime() === endDate.getTime()) {
      return data;
    }

    return data.filter((row) => {
      const rowDate = new Date(row[5]);
      return rowDate >= startDate && rowDate <= endDate;
    });
  }, [range, data]);

  // ✅ pagination
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
        {/* ✅ Header row */}
        <div className={`${styles.gridContainerHistory} ${styles.rowHeader}`}>
          {headers.map((h, i) => (
            <div key={i}>{h}</div>
          ))}
        </div>

        {/* ✅ Scrollable rows */}
        <div className={styles.scrollContainer}>
          {rows.map((row, ri) => (
            <div
              key={ri}
              className={`${styles.gridContainerHistory} ${styles.row}`}
            >
              {row.map((cell, ci) => {
                if (ci === 7) return null; // Skip the last column here (bookingPaymentStatus)
                if (ci === 6) {
                  // STATUS button
                  const status = cell.trim().toLowerCase();
                  return (
                    <div key={ci}>
                      <button
                        className={styles.statusButton}
                        style={{
                          borderColor: getStatusColor(status),
                          color: getStatusColor(status),
                        }}
                      >
                        {cell}
                      </button>
                    </div>
                  );
                } else {
                  return <div key={ci}>{cell}</div>;
                }
              })}

              {/* Last column: Reschedule button */}
              <div>
                <LinkWithLoader
                  className={styles.rescheduleButton}
                  href="/BookAservicePage"
                >
                  Reschedule
                </LinkWithLoader>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Pagination */}
        <Pagination
          totalItems={filteredRows.length}
          defaultPerPage={perPage}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default History;

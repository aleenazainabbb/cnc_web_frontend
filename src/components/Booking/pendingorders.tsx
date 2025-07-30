'use client';

import React from 'react';
import styles from './styles/pending.module.css';
import Pagination from '@/components/Booking/pagination';
import { Range } from 'react-date-range';

type Status = 'Pending' | 'Confirmed' | 'Accepted' | 'Assigned';

const statusColors: Record<Status, string> = {
  Pending: '#FF8800',
  Confirmed: '#0F9918',
  Accepted: '#F16BC9',
  Assigned: '#3C88EE',
};

const getStatusStyle = (status: string) => {
  const statusKey = status as Status;
  return { color: statusColors[statusKey] ?? '#000' };
};

interface PendingProps {
  range: Range[];
  data: string[][];
}

const Pending: React.FC<PendingProps> = ({ range, data }) => {
  const headers = ['ORDER ID', 'SERVICE', 'DETAIL', 'TIME', 'DATE', 'STATUS'];
  const allRows = data;

  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(5);

  const isRangeSelected =
    !!range[0].startDate &&
    !!range[0].endDate &&
    (range[0].startDate.toDateString() !== new Date().toDateString() ||
      range[0].endDate.toDateString() !== new Date().toDateString());

  const filteredRows = isRangeSelected
    ? allRows.filter((row) => {
        const date = new Date(row[4]);
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
            const status = row[5];
            const { color } = getStatusStyle(status);
            return (
              <div key={ri} className={`${styles.gridContainer} ${styles.row}`}>
                {row.map((cell, ci) =>
                  ci === 3 ? (
                    <div key={ci}>
                      <i className="fa-regular fa-clock" style={{ marginRight: 6, color: '#8B909A' }} />
                      {cell}
                    </div>
                  ) : ci === 5 ? (
                    <button
                      key={ci}
                      className={styles.statusButton}
                      style={{ borderColor: color, color }}
                    >
                      {cell}
                    </button>
                  ) : (
                    <div key={ci}>{cell}</div>
                  )
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

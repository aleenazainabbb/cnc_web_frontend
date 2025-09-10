'use client';

import React from 'react';
import styles from './styles/pending.module.css';
import Pagination from '@/components/Booking/pagination';
import { Range } from 'react-date-range';
import LinkWithLoader from '@/components/Loader/Link';
import { getStatusColor } from '@/utils/statusColors';


interface HistoryProps {
    range: Range[]; // expected to be passed from parent
    data: string[][];
}

const History: React.FC<HistoryProps> = ({ range, data }) => {
    const headers = ['ORDER ID', 'SERVICE', 'DETAILS', 'PRICE', 'TIME', 'DATE', 'STATUS', ''];
    const allRows = data;
    const [currentPage, setCurrentPage] = React.useState(1);
    const [perPage, setPerPage] = React.useState(5);

    const filteredRows = React.useMemo(() => {
        const startDate = range?.[0]?.startDate;
        const endDate = range?.[0]?.endDate;

        if (!startDate || !endDate || startDate.getTime() === endDate.getTime()) {
            return allRows;
        }

        return allRows.filter((row) => {
            const rowDate = new Date(row[5]);
            return rowDate >= startDate && rowDate <= endDate;
        });
    }, [range]);

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
                <div className={`${styles.gridContainerHistory} ${styles.rowHeader}`}>
                    {headers.map((h, i) => (
                        <div key={i}>{h}</div>
                    ))}
                </div>

                {/* Scrollable Order Rows */}
                <div className={styles.scrollContainer}>
                    {rows.map((row, ri) => (
                        <div key={ri} className={`${styles.gridContainerHistory} ${styles.row}`}>
                            {row.map((cell, ci) => {
                                if (ci === 4) {
                                    return (
                                        <div key={ci}>
                                            <i className="fa-regular fa-clock" style={{ marginRight: 6, color: '#8B909A' }} />
                                            {cell}
                                        </div>
                                    );
                                } else if (ci === 6) {
                                    const status = cell.trim().toLowerCase();
                                    
                                    return (
                                        <div key={ci}>
                                            <button
                                                className={styles.statusButton}
                                                 style={{
                                                    borderColor: getStatusColor(status) ,
                                                    color: getStatusColor(status) ,
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

                            <LinkWithLoader
                                className={styles.rescheduleButton}
                                href="/BookAservicePage"
                            >
                                Reschedule</LinkWithLoader>
                        </div>
                    ))}
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

export default History;

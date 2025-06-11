'use client';

import React from 'react';
import styles from './styles/pending.module.css';
// import history from './styles/history.module.css';
import Pagination from '@/components/Booking/pagination';
import { Range } from 'react-date-range';

interface HistoryProps {
    range: Range[]; // expected to be passed from parent
}

const History: React.FC<HistoryProps> = ({ range }) => {
    const headers = ['ORDER ID', 'SERVICE', 'DETAIL', 'TIME', 'DATE', 'STATUS', ''];

    const allRows = [
        ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025'],
        ['#234567889', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '06/22/2025'],
        ['#234567890', 'Deep Cleaning', 'Home Cleaning needed.', '2 hrs ago', '07/22/2025'],
        ['#234567891', 'Sofa Cleaning', 'Home Cleaning needed.', '2 hrs ago', '08/22/2025'],
        ['#234567892', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '08/22/2025'],
        ['#234567893', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '04/22/2025'],
        ['#234567894', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '04/22/2025'],
    ];

    const [currentPage, setCurrentPage] = React.useState(1);
    const [perPage, setPerPage] = React.useState(5);

    const filteredRows = React.useMemo(() => {
        const startDate = range?.[0]?.startDate;
        const endDate = range?.[0]?.endDate;

        // ⚠️ Only filter if BOTH dates exist and they are not equal (user selected real range)
        if (!startDate || !endDate || startDate.getTime() === endDate.getTime()) {
            return allRows;
        }

        return allRows.filter((row) => {
            const rowDate = new Date(row[4]);
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

                {rows.map((row, ri) => (
                    <div key={ri} className={`${styles.gridContainerHistory} ${styles.row}`}>
                        {row.map((cell, ci) =>
                            ci === 3 ? (
                                <div key={ci}>
                                    <i className="fa-regular fa-clock" style={{ marginRight: 6, color: '#8B909A' }} />
                                    {cell}
                                </div>
                            ) : (
                                <div key={ci}>{cell} </div>
                            )
                        )}
                        <button className={styles.completedButton}> Completed </button>
                        <button className={styles.rescheduleButton}>Reschedule</button>
                    </div>
                ))}

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

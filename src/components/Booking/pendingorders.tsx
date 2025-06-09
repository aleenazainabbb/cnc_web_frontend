'use client';
import React from 'react';
import styles from './styles/pending.module.css';
// import Pagination from '@/components/Booking/Pagination';

type Service = 'Home Cleaning' | 'Deep Cleaning' | 'Sofa Cleaning';
type Status = 'Pending' | 'Confirmed' | 'Accepted' | 'Assigned';

const config: Record<Service, Partial<Record<Status, { color: string }>>> = {
    'Home Cleaning': {
        Pending: { color: '#FF8800' },
        Confirmed: { color: '#0F9918' },
        Accepted: { color: '#F16BC9' },
    },
    'Deep Cleaning': {
        Pending: { color: '#7A5AF8' },
        Confirmed: { color: '#0F9918' },
    },
    'Sofa Cleaning': {
        Assigned: { color: '#3C88EE' },
        Pending: { color: '#FF8800' },
    },
};

const getStatusStyle = (service: string, status: string) => {
    const serviceKey = service as Service;
    const statusKey = status as Status;
    const svc = config[serviceKey];
    return svc?.[statusKey] ?? { color: '#000' };
};

const Pending: React.FC = () => {
    const headers = ['ORDER ID', 'SERVICE', 'DETAIL', 'TIME', 'DATE', 'STATUS'];
    const rows = [
        ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025', 'Pending'],
        ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '06/22/2025', 'Confirmed'],
        ['#234567888', 'Deep Cleaning', 'Home Cleaning needed.', '2 hrs ago', '07/22/2025', 'Pending'],
        ['#234567888', 'Sofa Cleaning', 'Home Cleaning needed.', '2 hrs ago', '08/22/2025', 'Assigned'],
        ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '08/22/2025', 'Accepted'],
        ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '04/22/2025', 'Pending'],
        ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '04/22/2025', 'Confirmed'],
    ];

    return (
        <div className={styles.main}>
            
            {/* Date-Range Filter placeholder without calendar */}
            <div className={styles.filterContainer}>
                {/* <div className={styles.dateRangeBox}>
                    <input
                        type="text"
                        className={styles.dateRangeInput}
                        readOnly
                        placeholder="Filter by date range"
                        value=""
                    />
                    <i className="fa-solid fa-chevron-down" />
                </div> */}
            </div>

            <div className={styles.container}>
                {/* Header */}
                <div className={`${styles.gridContainer} ${styles.rowHeader}`}>
                    {headers.map((h, i) => (
                        <div key={i}>{h}</div>
                    ))}
                </div>

                {/* Rows */}
                {rows.map((row, ri) => {
                    const status = row[5],
                        service = row[1];
                    const { color } = getStatusStyle(service, status);
                    return (
                        <div key={ri} className={`${styles.gridContainer} ${styles.row}`}>
                            {row.map((cell, ci) =>
                                ci === 3 ? (
                                    <div key={ci}>
                                        <i
                                            className="fa-regular fa-clock"
                                            style={{ marginRight: 6, color: '#8B909A' }}
                                        />
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
        </div>
    );
};

export default Pending;

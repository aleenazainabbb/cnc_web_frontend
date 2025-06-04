'use client';
import React from 'react';
import styles from './styles/pending.module.css';

const Pending: React.FC = () => {
    const headers = ['ORDER ID', 'SERVICE', 'DETAIL', 'TIME', 'DATE', 'STATUS'];
    const rows = [
        ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025', 'Pending'],
        ['#234567888', 'Deep Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025', 'Confirmed'],
        ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025', 'Pending'],
        ['#234567888', 'Sofa Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025', 'Accepted'],
        ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025', 'Pending'],
        ['#234567888', 'Deep Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025', 'Assigned'],
        ['#234567888', 'Sofa Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025', 'Pending']
    ];

    return (
        <div className={styles.main}>
            <div className={styles.rowHeader}>
                {headers.map((h, i) => (
                    <div key={i} className={styles.cellHeader}>{h}</div>
                ))}
            </div>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className={styles.cell}>{cell}</div>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default Pending;

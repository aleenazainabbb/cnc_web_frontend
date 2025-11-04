'use client';

import { useState, ChangeEvent } from 'react';
import styles from './styles/pagination.module.css';

interface PaginationProps {
    totalItems: number;
    defaultPerPage?: number;
    onChange?: (page: number, perPage: number) => void;
}

function Pagination({ totalItems, defaultPerPage = 10, onChange }: PaginationProps) {
    const [perPage, setPerPage] = useState<number>(defaultPerPage);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(totalItems / perPage);

    // Calculate start and end page of the window
    // Show max 3 pages per block
    const maxVisiblePages = 3
    const currentBlock = Math.floor((currentPage - 1) / maxVisiblePages);
    const startPage = currentBlock * maxVisiblePages + 1;
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    // Create an array for pages in the current block
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const handlePerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value);
        setPerPage(value);
        setCurrentPage(1); // Reset to page 1
        onChange?.(1, value);
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
        onChange?.(page, perPage);
    };

    return (
        <div className={styles.paginationContainer}>
            <span className={styles.inlineText}>
                Showing
                <select className={styles.selectBox} value={perPage} onChange={handlePerPageChange}>
                    {[5,10,15,20,25,30,45,50].map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
                of {totalItems}
            </span>

            <div className={styles.paginationNav}>
                <button
                    className={styles.arrow}
                    onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &#8249;
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        className={`${styles.page} ${currentPage === page ? styles.active : ''}`}
                        onClick={() => handlePageClick(page)}
                    >
                        {page}
                    </button>
                ))}

                <button
                    className={styles.arrow}
                    onClick={() => currentPage < totalPages && handlePageClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
}

export default Pagination;

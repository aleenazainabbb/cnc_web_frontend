"use client";

import React, { useEffect, useState, useMemo } from "react";
import styles from "./styles/pending.module.css";
import profile from "./styles/profile.module.css";
import { useQuoteList } from "@/context/QuoteList";
import MyQuotes from "@/components/Booking/myQuote";
import Pagination from "@/components/Booking/pagination";

const QuoteList: React.FC = () => {
  const { quotes, fetchQuotes, loading, error } = useQuoteList();
  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  const server = process.env.NEXT_PUBLIC_API_IMAGE;

  const headers = ["Name", "Email", "Phone", "Service", "Image", "File"];

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  const visibleQuotes = useMemo(() => {
    return quotes.slice(start, end);
  }, [quotes, start, end]);

  const handlePaginationChange = (page: number, limit: number) => {
    setCurrentPage(page);
    setPerPage(limit);
  };

  return (
    <div className={profile.maincontainer}>
      <div className={styles.containers}>
        {/* Add Quote Button */}
        <div className={profile.quotesbuttonContainer}>
          <button className={profile.quote_button} onClick={handleOpen}>
            Add a Quote
          </button>
        </div>

        {/* Loading/Error */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        {/* Grid Header */}
        {!loading && !error && quotes.length > 0 && (
          <>
            {" "}
            <div className={styles.scrollContainerQuotes}>
              <div
                className={`${styles.gridContainerQuotes} ${styles.rowHeader}`}
              >
                {headers.map((h, i) => (
                  <div key={i}>{h}</div>
                ))}
              </div>

              {/* Scrollable Quote List */}

              {visibleQuotes.map((q, index) => (
                <div
                  key={q.id || index}
                  className={`${styles.gridContainerQuotes} ${styles.row}`}
                >
                  <div className="break-words whitespace-pre-wrap text-sm">
                    {q.name || q.customer}
                  </div>
                  {/* <div className="break-words whitespace-pre-wrap text-sm">{q.company || '-'}</div> */}
                  <div className="break-words whitespace-pre-wrap text-sm">
                    {q.email}
                  </div>
                  <div className="break-words whitespace-pre-wrap text-sm">
                    {q.phone}
                  </div>
                  <div className="break-words whitespace-pre-wrap text-sm">
                    {q.service || "-"}
                  </div>

                  <div className="break-words whitespace-pre-wrap text-sm">
                    {q.uploadImage ? (
                      <>
                        <div className="text-gray-500 truncate"></div>
                        <a
                          href={`${server}/${q.uploadImage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline text-xs"
                        >
                          View More
                        </a>
                      </>
                    ) : (
                      "-"
                    )}
                  </div>

                  {/* File View More */}
                  <div className="break-words whitespace-pre-wrap text-sm">
                    {q.leadUploadFile ? (
                      <>
                        <div className="text-gray-500 truncate"></div>
                        <a
                          href={`${server}/${q.leadUploadFile}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline text-xs"
                        >
                          View More
                        </a>
                      </>
                    ) : (
                      "-"
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <Pagination
              totalItems={quotes.length}
              defaultPerPage={perPage}
              onChange={handlePaginationChange}
            />
          </>
        )}

        {/* Quote Popup Form */}
        {showPopup && (
          <div className={profile.popupOverlay}>
            <div className={profile.popupContent}>
              <button className={profile.popupClose} onClick={handleClose}>
                ×
              </button>
              <MyQuotes />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteList;

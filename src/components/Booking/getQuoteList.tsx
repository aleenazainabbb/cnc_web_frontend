'use client';
import React, { useEffect, useState } from 'react';
import styles from './styles/profile.module.css';
import { useQuoteList } from '@/context/QuoteList';
import MyQuotes from '@/components/Booking/myQuote';

const QuoteList: React.FC = () => {
  const { quotes, fetchQuotes, loading, error } = useQuoteList();
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Fetch quotes on initial page render
  useEffect(() => {
    fetchQuotes();
  }, []); // ⬅ fetch only once when component mounts

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.quotesbuttonContainer}>
          <button className={styles.quote_button} onClick={handleOpen}>
            Add a Quote
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        {!loading && !error && quotes.length > 0 && (
          <table className="min-w-full table-auto border border-gray-300 p-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Company</th>
                <th className="border px-4 py-2 text-left">Email</th>
                <th className="border px-4 py-2 text-left">Phone</th>
                <th className="border px-4 py-2 text-left">Service</th>
                <th className="border px-4 py-2 text-left">Sub Service</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((q) => (
                <tr key={q.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{q.name}</td>
                  <td className="border px-4 py-2">{q.company || '-'}</td>
                  <td className="border px-4 py-2">{q.email}</td>
                  <td className="border px-4 py-2">{q.phone}</td>
                  <td className="border px-4 py-2">{q.service}</td>
                  <td className="border px-4 py-2">{q.subService || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* ✅ Modal popup */}
        {showPopup && (
          <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
              <button className={styles.popupClose} onClick={handleClose}>×</button>
              <MyQuotes />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteList;

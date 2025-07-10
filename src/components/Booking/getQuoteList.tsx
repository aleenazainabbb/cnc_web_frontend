// 'use client';
// import React, { useEffect, useState } from 'react';
// import styles from './styles/profile.module.css';
// import { useQuoteList } from '@/context/QuoteList';
// import MyQuotes from '@/components/Booking/myQuote';

// const QuoteList: React.FC = () => {
//   const { quotes, fetchQuotes, loading, error } = useQuoteList();
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     fetchQuotes();
//   }, []);

//   const handleOpen = () => setShowPopup(true);
//   const handleClose = () => setShowPopup(false);

//   return (
//     <div className={styles.main}>
//       <div className={styles.container}>
//         <div className={styles.quotesbuttonContainer}>
//           <button className={styles.quote_button} onClick={handleOpen}>
//             Add a Quote
//           </button>
//         </div>

//         {loading && <p>Loading...</p>}
//         {error && <p className="text-red-600">Error: {error}</p>}

//         {!loading && !error && quotes.length > 0 && (
//           <div className={styles.tableWrapper}>
//             <table className="min-w-full table-auto border border-gray-300 p-4">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="border px-4 py-2 text-left">Name</th>
//                   <th className="border px-4 py-2 text-left">Company</th>
//                   <th className="border px-4 py-2 text-left">Email</th>
//                   <th className="border px-4 py-2 text-left">Phone</th>
//                   <th className="border px-4 py-2 text-left">Service</th>
//                   <th className="border px-4 py-2 text-left">Sub Service</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {quotes.map((q) => (
//                   <tr key={q.id} className="hover:bg-gray-100">
//                     <td className="border px-4 py-2">{q.name || q.customer}</td>
//                     <td className="border px-4 py-2">{q.company || '-'}</td>
//                     <td className="border px-4 py-2">{q.email}</td>
//                     <td className="border px-4 py-2">{q.phone}</td>
//                     <td className="border px-4 py-2">{q.service || '-'}</td>
//                     <td className="border px-4 py-2">{q.subService || '-'}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {showPopup && (
//           <div className={styles.popupOverlay}>
//             <div className={styles.popupContent}>
//               <button className={styles.popupClose} onClick={handleClose}>×</button>
//               <MyQuotes />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QuoteList;

'use client';

import React, { useEffect, useState, useMemo } from 'react';
import styles from './styles/pending.module.css';
import profile from './styles/profile.module.css';
import { useQuoteList } from '@/context/QuoteList';
import MyQuotes from '@/components/Booking/myQuote';
import Pagination from '@/components/Booking/pagination';

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

  const headers = ['Name', 'Company', 'Email', 'Phone', 'Service', 'Sub Service'];

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
    <div className={profile.main}>
      <div className={styles.container}>
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
            <div className={`${styles.gridContainerQuotes} ${styles.rowHeader}`}>
              {headers.map((h, i) => (
                <div key={i}>{h}</div>
              ))}
            </div>

            {/* Scrollable Quote List */}
            <div className={styles.scrollContainerQuotes}>
              {visibleQuotes.map((q, index) => (
                <div
                  key={q.id || index}
                  className={`${styles.gridContainerQuotes} ${styles.row}`}
                >
                  <div className="break-words whitespace-pre-wrap text-sm">{q.name || q.customer}</div>
                  <div className="break-words whitespace-pre-wrap text-sm">{q.company || '-'}</div>
                  <div className="break-words whitespace-pre-wrap text-sm">{q.email}</div>
                  <div className="break-words whitespace-pre-wrap text-sm">{q.phone}</div>
                  <div className="break-words whitespace-pre-wrap text-sm">{q.service || '-'}</div>
                  <div className="break-words whitespace-pre-wrap text-sm">{q.subService || '-'}</div>
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

// 'use client';
// import React, { useState } from 'react';
// import tabs from './styles/bookingtabs.module.css';

// const BookingTabs: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'pending' | 'history'>('pending');

//   return (
//     <div className={tabs.main}>
//     <div className={tabs.tabWrapper}>
          
//       <div className={tabs.tabs}>
//         <button
//           onClick={() => setActiveTab('pending')}
//           className={`${tabs.tabbutton} ${activeTab === 'pending' ? tabs.active : ''}`}
//         >
//           Pending
//         </button>
//         <button
//           onClick={() => setActiveTab('history')}
//           className={`${tabs.tabbutton} ${activeTab === 'history' ? tabs.active : ''}`}
//         >
//           History
//         </button>
//       </div>
//       </div>
      
//     </div>
//   );
// };

// export default BookingTabs;
'use client';
import React, { useState } from 'react';
import tabs from './styles/bookingtabs.module.css';
import Pending from '@/components/Booking/pendingorders';
import History from '@/components/Booking/history';     // adjust path if needed
import { Range } from 'react-date-range'; // if you're passing a date range to History

const BookingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'history'>('pending');
  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div className={tabs.main}>
      <div className={tabs.tabWrapper}>
        <div className={tabs.tabs}>
          <button
            onClick={() => setActiveTab('pending')}
            className={`${tabs.tabbutton} ${activeTab === 'pending' ? tabs.active : ''}`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`${tabs.tabbutton} ${activeTab === 'history' ? tabs.active : ''}`}
          >
            History
          </button>
        </div>
      </div>

      <div>
        {activeTab === 'pending' && <Pending range={range} />}
        {activeTab === 'history' && <History range={range} />}
      </div>
    </div>
  );
};

export default BookingTabs;


'use client';
import React, { useState } from 'react';
import tabs from './styles/bookingtabs.module.css';
import Pending from '@/components/Booking/pendingorders';
import History from '@/components/Booking/history';
import NoOrders from '@/components/Booking/noOrders';
import { Range } from 'react-date-range';

interface BookingTabsProps {
  range: Range[];
  pendingOrders: string[][];
  historyOrders: string[][];
}

const BookingTabs: React.FC<BookingTabsProps> = ({ range, pendingOrders, historyOrders }) => {
  const [activeTab, setActiveTab] = useState<'pending' | 'history'>('pending');

  return (
    <div className={tabs.main}>
      {/* --- Tabs Header --- */}
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

      {/* --- Tab Content --- */}
      <div>
        {activeTab === 'pending' && (
          pendingOrders.length > 0 ? (
            <Pending range={range} data={pendingOrders} />
          ) : (
            <NoOrders
              title="No Pending Orders"
              subtitle="You have no pending bookings right now."
            />
          )
        )}

        {activeTab === 'history' && (
          historyOrders.length > 0 ? (
            <History range={range} data={historyOrders} />
          ) : (
            <NoOrders
              title="No Past Orders"
              subtitle="You have no past bookings yet."
            />
          )
        )}
      </div>
    </div>
  );
};

export default BookingTabs;



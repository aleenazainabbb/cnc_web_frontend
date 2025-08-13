'use client';
import React, { useState } from 'react';
import tabs from './styles/bookingtabs.module.css';
import Pending from '@/components/Booking/pendingorders';
import History from '@/components/Booking/history';
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
        {activeTab === 'pending' && <Pending range={range} data={pendingOrders} />}
        {activeTab === 'history' && <History range={range} data={historyOrders} />}
      </div>
    </div>
  );
};

export default BookingTabs;


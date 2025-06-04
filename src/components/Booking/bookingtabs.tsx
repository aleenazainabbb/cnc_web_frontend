'use client';
import React, { useState } from 'react';
import tabs from './styles/bookingtabs.module.css';

const BookingTabs: React.FC = () => {
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
      
    </div>
  );
};

export default BookingTabs;

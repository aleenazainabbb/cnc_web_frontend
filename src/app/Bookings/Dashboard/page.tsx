'use client';

import React, { useState } from 'react';
import HeaderBar from '@/components/navbar/HeaderBar';
import BookingTabs from '@/components/Booking/bookingtabs';
import RangeFilter from '@/components/Booking/daterange';
import { Range } from 'react-date-range';
import NoOrders from '@/components/Booking/noOrders'; 

export default function RequestPage() {
  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
const pendingOrders: string[][] = [
    ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025', 'Pending'],
    ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '06/22/2025', 'Confirmed'],
    ['#234567888', 'Deep Cleaning', 'Home Cleaning needed.', '2 hrs ago', '07/22/2025', 'Pending'],
    ['#234567888', 'Sofa Cleaning', 'Home Cleaning needed.', '2 hrs ago', '08/22/2025', 'Assigned'],
    ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '08/22/2025', 'Accepted'],
    ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '04/22/2025', 'Pending'],
    ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '04/22/2025', 'Confirmed'],
  ];

  const historyOrders: string[][] = [
    ['#234567888', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '05/22/2025'],
    ['#234567889', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '06/22/2025'],
    ['#234567890', 'Deep Cleaning', 'Home Cleaning needed.', '2 hrs ago', '07/22/2025'],
    ['#234567891', 'Sofa Cleaning', 'Home Cleaning needed.', '2 hrs ago', '08/22/2025'],
    ['#234567892', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '08/22/2025'],
    ['#234567893', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '04/22/2025'],
    ['#234567894', 'Home Cleaning', 'Home Cleaning needed.', '2 hrs ago', '04/22/2025'],
  ];
  // const pendingOrders: string[][] = [];
  // const historyOrders: string[][] = [];

  const noOrdersAvailable =
    pendingOrders.length === 0 && historyOrders.length === 0;

  return (
    <>
      <HeaderBar title="Booking" showAddButton />

      {noOrdersAvailable ? (
        <NoOrders />
      ) : (
        <>
          <BookingTabs
            range={range}
            pendingOrders={pendingOrders}
            historyOrders={historyOrders}
          />
          <RangeFilter range={range} setRange={setRange} />
        </>
      )}
    </>
  );
}

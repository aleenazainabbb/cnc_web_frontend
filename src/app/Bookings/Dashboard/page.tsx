'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import HeaderBar from '@/components/navbar/HeaderBar';
import BookingTabs from '@/components/Booking/bookingtabs';
import RangeFilter from '@/components/Booking/daterange';
import NoOrders from '@/components/Booking/noOrders';
import { Range } from 'react-date-range';
import { useBooking } from '@/context/BookingContext';

export default function RequestPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { allOrders, fetchAllOrders, ordersLoading } = useBooking();

  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [loading, user]);

  useEffect(() => {
    fetchAllOrders();
  }, []);

  if (loading || ordersLoading) return null;

  const pendingOrders = allOrders.filter(order => order[5]?.toLowerCase() === 'pending');
  const historyOrders = allOrders.filter(order => order[5]?.toLowerCase() !== 'pending');

  const noOrdersAvailable = pendingOrders.length === 0 && historyOrders.length === 0;

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

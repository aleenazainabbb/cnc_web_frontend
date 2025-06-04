'use client';

import HeaderBar from '@/components/navbar/HeaderBar';
import BookingTabs from '@/components/Booking/bookingtabs';
import Pending from '@/components/Booking/pendingorders';

export default function RequestPage() {
  return (
    <>
      <HeaderBar title="Booking" />
      <BookingTabs/>
      <Pending />
    </>
  );
}
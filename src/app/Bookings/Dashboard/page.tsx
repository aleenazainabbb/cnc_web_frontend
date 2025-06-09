'use client';

import HeaderBar from '@/components/navbar/HeaderBar';
import BookingTabs from '@/components/Booking/bookingtabs';
import Pending from '@/components/Booking/pendingorders';
import RangeFilter from '@/components/Booking/daterange';
import Pagination from '@/components/Booking/pagination';

export default function RequestPage() {
  return (
    <>
      <HeaderBar title="Booking" />
      <BookingTabs />
      <RangeFilter/>
      <Pending />
      <Pagination totalItems={50} />
      {/* <Pagination totalItems={orders.length} /> */}


      
    </>
  );
}
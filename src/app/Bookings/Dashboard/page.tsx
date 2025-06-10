// 'use client';

// import HeaderBar from '@/components/navbar/HeaderBar';
// import BookingTabs from '@/components/Booking/bookingtabs';
// import Pending from '@/components/Booking/pendingorders';
// // import RangeFilter from '@/components/Booking/daterange';

// export default function RequestPage() {
//   return (
//     <>
//       <HeaderBar title="Booking" />
//       <BookingTabs />
//       {/* <RangeFilter /> */}
//       <Pending  />

//     </>
//   );
// }
'use client';

import React, { useState } from 'react';
import HeaderBar from '@/components/navbar/HeaderBar';
import BookingTabs from '@/components/Booking/bookingtabs';
import Pending from '@/components/Booking/pendingorders';
import RangeFilter from '@/components/Booking/daterange';
import { Range } from 'react-date-range';

export default function RequestPage() {
  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <>
      <HeaderBar title="Booking" />
      <BookingTabs />

      {/* This will render OUTSIDE the white container */}
      <RangeFilter range={range} setRange={setRange} />

      <Pending range={range} />
    </>
  );
}

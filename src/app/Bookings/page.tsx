// 'use client';
// import Sidebar from "@/components/navbar/Sidebar";
// import HeaderBar from '@/components/navbar/HeaderBar';
// import NoOrders from '@/components/Booking/noOrders'; 
// export default function RequestPage() {
//   return (
//     <div>
//        <Sidebar />
// <NoOrders
//         header={
//           <HeaderBar
//             title="Booking"
//             onNotifyClick={() => alert('Notifications clicked')}
//             onAvatarClick={() => alert('Avatar clicked')}
//           />
//         }
//       />
//     </div>
//   );
// // }

// 'use client';

// import Sidebar from "@/components/navbar/Sidebar";
// import HeaderBar from '@/components/navbar/HeaderBar';
// import NoOrders from '@/components/Booking/noOrders';
// // import Profile from "@/components/Booking/profile";

// export default function RequestPage() {
//   return (
//     <div style={{ display: 'flex', height: '100vh', backgroundColor:'#fafafa' }}>
//       <Sidebar />
//       <NoOrders
//         header={
//           <HeaderBar
//             title="Booking"
//           />
//         }
//       />

//       {/* <Profile/> */}
//     </div>
//   );
// }



// app/request/page.jsx or pages/request.jsx
// app/Bookings/page.jsx
'use client';

import HeaderBar from '@/components/navbar/HeaderBar';
import NoOrders from '@/components/Booking/noOrders';

export default function RequestPage() {
  return (
    <>
      <HeaderBar title="Booking" />
      <NoOrders />
    </>
  );
}


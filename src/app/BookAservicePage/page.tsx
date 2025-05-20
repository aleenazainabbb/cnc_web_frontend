// "use client";
// import BillingSummary from "@/components/Booking/billing";
// import Bookings from "@/components/Booking/booking";   
// // import CleanTypeSelector from "@/components/Booking/test"  
// export default function BookAservicePage() {
//     return (
//         <div>
//             <BillingSummary />
//             <Bookings/>
//             {/* <CleanTypeSelector/> */}
//         </div>
//     );


// }
"use client";
import BillingSummary from "@/components/Booking/billing";
import Bookings from "@/components/Booking/booking";

export default function BookAservicePage() {
  return (
    <div className="flex justify-between">
      {/* Booking Component */}
      <div style={{ width: "878px", height: "1136px" }}>
        <Bookings />
      </div>

      {/* Fixed Billing Summary */}
      <div className="fixed top-4 right-4" style={{ width: "500px", height: "922px" }}>
        <BillingSummary />
      </div>
    </div>
  );
}


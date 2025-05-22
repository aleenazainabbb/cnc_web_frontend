
"use client";
// import BillingSummary from "@/components/Booking/billing";
// import Bookings from "@/components/Booking/booking";
import BookingConfirmation from "@/components/Booking/bookingConfirmation";

export default function BookAservicePage() {
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
      
      <div className="md:col-span-8 w-full">
        <Bookings />
      </div>

      
      <div className="md:col-span-4 w-full">
        <BillingSummary />
      </div>
       
    </div> */}
       {/* <Bookings /> */}
      {/* <BillingSummary />  */}
      <BookingConfirmation />
    </>
  );
}

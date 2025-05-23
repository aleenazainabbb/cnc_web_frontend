
"use client";

import PaymentDetails from "@/components/Booking/PaymentDetails";
import DateTime from "@/components/Booking/BookDate&Time";
// import BillingSummary from "@/components/Booking/billing";
import Bookings from "@/components/Booking/booking";
import BookingConfirmation from "@/components/Booking/bookingConfirmation";
import Location from "@/components/Booking/Location"

export default function BookAservicePage() {
  return (
    <>

       {/* <Bookings /> */}
      {/* <BillingSummary />  */}
      {/* <BookingConfirmation />  */}
      {/* <DateTime/> */}
      {/* <PaymentDetails/> */}
      <Location/>

    </>
  );
  // return (
  //   <div className="grid-container">
  //     <div className="left-column">
  //       <Bookings />
  //     </div>
  //     <div className="right-column">
  //       <BillingSummary
  //         appointmentFrequency="Every 2 weeks"
  //         appointmentTime="Tuesday, July 17, 2018 at 2.30pm"
  //         appointmentLocation="114 Broadway New York, NY 10005"
  //         discountCode=""
  //         appointmentValue={135.99}
  //         discountAmount={153.89}
  //         taxAmount={325.20}
  //         totalAmount={610.0}
  //         onApplyDiscount={(code) => console.log("Apply discount:", code)}
  //         onNext={() => console.log("Proceed to payment")}
  //       />

  //     </div>
  //   </div>
  // );
}



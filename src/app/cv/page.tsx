"use client";

import BillingSummary from "@/components/Booking/billing";

export default function BookingSummaryOnly() {
  const handleNext = () => {
    console.log("Next step clicked");
  };

  return (
    <BillingSummary
      appointmentFrequency="Every 3 weeks"
      appointmentTime="Tuesday, July 17, 2018 at 2.30pm"
      appointmentLocation="114 Broadway New York, NY 10005"
      discountCode=""
      appointmentValue={135.99}
      discountAmount={153.89}
      taxAmount={325.2}
      totalAmount={610.0}
      onApplyDiscount={(code) => console.log("Apply discount:", code)}
      onNext={handleNext}
    />
  );
}

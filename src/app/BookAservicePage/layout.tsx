"use client";

import { usePathname, useRouter } from "next/navigation";
import BillingSummary from "@/components/Booking/billing";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Define your booking flow steps
  const steps = ["/BookAservicePage/Location", "/BookAservicePage/BookDate&Time", "/BookAservicePage/PaymentDetails"];

  // Find current step index
  const currentIndex = steps.findIndex((step) => pathname.startsWith(step));

  // Get next step
  const nextStep = currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;

  const handleNext = () => {
    if (nextStep) {
      router.push(nextStep);
    } else {
      console.log("Already at final step or unknown step.");
    }
  };

  return (
    <div className="grid-container">
      <div className="left-column">{children}</div>
      <div className="right-column">
        <BillingSummary
          appointmentFrequency="Every 3 weeks"
          appointmentTime="Tuesday, July 17, 2018 at 2.30pm"
          appointmentLocation="114 Broadway New York, NY 10005"
          discountCode=""
          appointmentValue={135.99}
          discountAmount={153.89}
          taxAmount={325.20}
          totalAmount={610.0}
          onApplyDiscount={(code) => console.log("Apply discount:", code)}
          onNext={handleNext} // ✅ uses dynamic route logic
        />
      </div>
    </div>
  );
}
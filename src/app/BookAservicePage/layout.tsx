'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import BookingConfirmation from '@/components/Booking/bookingConfirmation';
import BillingSummary from '@/components/Booking/billing';
import { useBooking } from '@/context/BookingContext';

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const { billingData, submitBookingQuote } = useBooking(); // ✅ import function

  const steps = [
    '/BookAservicePage/Location',
    '/BookAservicePage/BookDate&Time',
    '/BookAservicePage/PaymentDetails',
  ];

  const currentIndex = steps.findIndex((step) => pathname.startsWith(step));
  const nextStep =
    currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;

  const handleNext = async () => {
    const subService = (billingData as any)?.selectedSubService?.toLowerCase() || "";
    const deepCleaningCategory = (billingData as any)?.deepCleaningCategory?.toLowerCase() || "";

    const isNoDetailService = (billingData as any)?.skipPaymentStep;

    if (pathname === '/BookAservicePage/BookDate&Time') {
      if (isNoDetailService) {
        try {
          await submitBookingQuote(); // ✅ API call when skipping payment
          setShowConfirmationPopup(true);
        } catch (error) {
          console.error('Failed to submit quote:', error);
          // Optional: show snackbar or fallback
        }
      } else {
        router.push('/BookAservicePage/PaymentDetails');
      }
    } else if (pathname === '/BookAservicePage/PaymentDetails') {
      try {
        await submitBookingQuote(); // ✅ API call here too
        setShowConfirmationPopup(true);
      } catch (error) {
        console.error('Failed to submit quote:', error);
      }
    } else if (nextStep) {
      router.push(nextStep);
    }
  };

  return (
    <div className="grid-container">
      <div className="left-column">{children}</div>

      <div className="right-column">
        <BillingSummary onNext={handleNext} />
      </div>

      {showConfirmationPopup && (
        <div
          className="confirmation-overlay"
          onClick={() => setShowConfirmationPopup(false)}
        >
          <div
            className="confirmation-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <BookingConfirmation onClose={() => setShowConfirmationPopup(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

'use client';
import React, { ReactElement, isValidElement,useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
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
  const { billingData, submitBookingQuote, bookingData } = useBooking();
  const [serviceError, setServiceError] = useState(false);

  const steps = [
    '/BookAservicePage/Location',
    '/BookAservicePage/BookDate&Time',
    '/BookAservicePage/PaymentDetails',
  ];

  const currentIndex = steps.findIndex((step) => pathname.startsWith(step));
  const nextStep =
    currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;

  const handleNext = async () => {
    // ✅ Validate service from context
    if (pathname === '/BookAservicePage' && !bookingData?.service) {
      setServiceError(true);
      console.log("⛔ Cannot continue — service not selected");
      return;
    } else {
      setServiceError(false);
       console.log("continue — service selected");
    }

    const isNoDetailService = (billingData as any)?.skipPaymentStep;

    if (pathname === '/BookAservicePage/BookDate&Time') {
      if (isNoDetailService) {
        try {
          await submitBookingQuote();
          setShowConfirmationPopup(true);
        } catch (error) {
          console.error('Failed to submit quote:', error);
        }
      } else {
        router.push('/BookAservicePage/PaymentDetails');
      }
    } else if (pathname === '/BookAservicePage/PaymentDetails') {
      try {
        await submitBookingQuote();
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
      <div className="left-column">
        {isValidElement(children)
          ? React.cloneElement(children as ReactElement<any>, { serviceError })
          : children}
      </div>

      <div className="right-column">
        <BillingSummary onNext={handleNext} serviceError={serviceError} />
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

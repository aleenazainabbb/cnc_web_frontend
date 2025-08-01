'use client';

import React, { ReactElement, isValidElement, useState } from 'react';
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
  const { submitBookingQuote, bookingData, createBookingOrder } = useBooking();
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
  if (pathname === '/BookAservicePage' && !bookingData?.service) {
    setServiceError(true);
    console.log("Cannot continue — service not selected");
    return;
  } else {
    setServiceError(false);
  }

  // const hasPricing = !!bookingData?.detail;
  const hasPricing = !!bookingData?.detail || (bookingData?.appointedPrice ?? 0) > 0;


if (pathname === '/BookAservicePage/BookDate&Time') {
  if (hasPricing) {
    router.push('/BookAservicePage/PaymentDetails');
  } else {
    try {
      await submitBookingQuote();
      setShowConfirmationPopup(true);
    } catch (error) {
      console.error('Quote submission failed:', error);
    }
  }
} else if (pathname === '/BookAservicePage/PaymentDetails') {
    try {

      await createBookingOrder();          
      setShowConfirmationPopup(true);
    } catch (error) {
      console.error(' Booking order failed:', error);
    }
  } else if (nextStep) {
    router.push(nextStep);
  }
};

  return (
    <div className="grid-container layoutWrapper">
      <div className="left-column">
        {isValidElement(children)
          ? React.cloneElement(children as ReactElement<any>, {
            serviceError,
            setServiceError, //  pass the setter function to children
          })
          : children}
      </div>

      <div className="right-column">
        <BillingSummary onNext={handleNext}
          serviceError={serviceError}
          setServiceError={setServiceError}
          selectedService={bookingData.service} />
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

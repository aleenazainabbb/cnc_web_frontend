'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import BillingSummary from '@/components/Booking/billing';
// import ProtectedRoute from '@/components/ProtectedRoute';
import { useBooking } from '@/context/BookingContext'; 

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const { billingData } = useBooking();

  const steps = [
    '/BookAservicePage/Location',
    '/BookAservicePage/BookDate&Time',
    '/BookAservicePage/PaymentDetails',
    '/BookAservicePage/bookingConfirmation',
  ];

  const currentIndex = steps.findIndex((step) => pathname.startsWith(step));
  const nextStep =
    currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;

  const handleNext = () => {
    if (pathname === '/BookAservicePage/bookingConfirmation') {
      setShowConfirmationPopup(true);
    } else if (nextStep) {
      router.push(nextStep);
    }
  };

  return (
    // <ProtectedRoute>
      <div className="grid-container">
        <div className="left-column">{children}</div>

        <div className="right-column">
          <BillingSummary
            appointmentFrequency={billingData.appointmentFrequency}
            appointmentTime={billingData.appointmentTime}
            appointmentLocation={billingData.appointmentLocation}
            discountCode={billingData.discountCode}
            appointmentValue={billingData.appointmentValue}
            discountAmount={billingData.discountAmount}
            taxAmount={billingData.taxAmount}
            totalAmount={billingData.totalAmount}
            onApplyDiscount={(code) => console.log('Apply discount:', code)}
            onNext={handleNext}
          />
        </div>

        {showConfirmationPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
              <h2 className="text-xl font-semibold mb-4">Booking Confirmed!</h2>
              <p>Your booking has been successfully completed.</p>
              <button
                onClick={() => setShowConfirmationPopup(false)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    // </ProtectedRoute>
  );
}


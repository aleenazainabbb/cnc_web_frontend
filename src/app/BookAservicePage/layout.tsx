'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BillingSummary from '@/components/Booking/billing';
import ProtectedRoute from '@/components/ProtectedRoute';
import SpinnerLoader from '@/components/Loader/spinner';

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [loading, setLoading] = useState(true); // NEW state for initial spinner

  // Show spinner only on initial direct access
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, []);
  

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
    <ProtectedRoute>
      {loading ? (
        <div >
          <SpinnerLoader />
        </div>
      ) : (
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
              taxAmount={325.2}
              totalAmount={610.0}
              onApplyDiscount={(code) => console.log('Apply discount:', code)}
              onNext={handleNext}
            />
          </div>

          {showConfirmationPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
                <h2 className="text-xl font-semibold mb-4">
                  Booking Confirmed!
                </h2>
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
      )}
    </ProtectedRoute>
  );
}

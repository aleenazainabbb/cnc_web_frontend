"use client";

import React, { ReactElement, isValidElement, useState } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import BookingConfirmation from "@/components/Booking/bookingConfirmation";
import BillingSummary from "@/components/Booking/billing";
import { useBooking } from "@/context/BookingContext";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const {
    submitBookingQuote,
    bookingData,
    createBookingOrder,
    updateBookingData,
    formErrors,
    setFormErrors,
    latestLocation,
  } = useBooking();
  const [serviceError, setServiceError] = useState(false);

  const steps = [
    "/BookAservicePage/Location",
    "/BookAservicePage/BookDate&Time",
    "/BookAservicePage/PaymentDetails",
  ];

  const currentIndex = steps.findIndex((step) => pathname.startsWith(step));
  const nextStep =
    currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;

  const handleNext = async () => {
    const newErrors: { [key: string]: string } = {};

    if (pathname === "/BookAservicePage" && !bookingData?.service) {
      newErrors.service = "Please select a service.";
    }

    if (pathname === "/BookAservicePage/Location" && !latestLocation?.fullAddress) {
      newErrors.fullAddress = "Please select a location.";
    }

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    setFormErrors({});

    const hasPricing =
      !!bookingData?.detail || (bookingData?.appointedPrice ?? 0) > 0;

    if (pathname === "/BookAservicePage/BookDate&Time") {
      if (hasPricing) {
        router.push("/BookAservicePage/PaymentDetails");
      } else {
        try {
          await submitBookingQuote();
          setShowConfirmationPopup(true);
        } catch (error) {
          console.error("Quote submission failed:", error);
        }
      }
    } else if (pathname === "/BookAservicePage/PaymentDetails") {
      try {
        const result = await createBookingOrder();

        //  Extract bookingId from API response
        const id =
          result?.data?.id || result?.id || result?._id;

        if (id) {
          //  Save bookingId in context so confirmation can access it
          updateBookingData({ id: id });
          console.log(" Booking ID saved in context:", id);
        } else {
          console.warn("No bookingId found in booking API response");
        }

        // Show confirmation popup only after saving bookingId
        setShowConfirmationPopup(true);
      } catch (error) {
        console.error("Booking order failed:", error);
      }
    } 
    
    else if (nextStep) {
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
        <BillingSummary
          onNext={handleNext}
          serviceError={serviceError}
          setServiceError={setServiceError}
          selectedService={bookingData.service}
        />
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
            <BookingConfirmation
              onClose={() => setShowConfirmationPopup(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

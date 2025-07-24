// app/services/plumbing/water-heater/page.tsx (or any page)
'use client';
import BookingConfirmation from "@/components/Booking/bookingConfirmation";
import { useState } from 'react';

export default function Page() {
const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    return (
        <div>
      <BookingConfirmation   onClose={() => setShowConfirmationPopup(false)}/>
     
    </div>
  );
};





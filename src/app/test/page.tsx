"use client";

import { useState } from "react";
import BookingConfirmation from "@/components/Booking/bookingConfirmation";

export default function RequestPage() {
  // Add state to control the confirmation modal
  const [showConfirm, setShowConfirm] = useState(true);

  return (
    <div>
      {showConfirm && (
        <BookingConfirmation onClose={() => setShowConfirm(true)} />
      )}
    </div>
  );
}

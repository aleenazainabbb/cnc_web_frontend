"use client";
import BookingConfirmation from "@/components/Booking/bookingConfirmation"
export default function BookAservicePage() {
    return (
        <div>
            <BookingConfirmation onClose={function (): void {
                throw new Error("Function not implemented.");
            } } />
        </div>
    );
}
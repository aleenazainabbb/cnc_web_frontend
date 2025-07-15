// context/BookingContext.tsx
'use client';
import React, { createContext, useContext, useState } from 'react';

type BillingData = {
  appointmentFrequency: string;
  appointmentTime: string;
  appointmentLocation: string;
  discountCode?: string;
  appointmentValue: number;
  discountAmount: number;
  taxAmount: number;
  totalAmount: number;
};

type BookingContextType = {
  billingData: BillingData;
  updateBillingData: (data: Partial<BillingData>) => void;
};

const BookingContext = createContext<BookingContextType | null>(null);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [billingData, setBillingData] = useState<BillingData>({
    appointmentFrequency: 'Every 3 weeks', // ✅ Default
    appointmentTime: 'Tuesday, July 17, 2018 at 2.30pm', // ✅ Default
    appointmentLocation: '114 Broadway New York, NY 10005', // ✅ Default
    discountCode: '',
    appointmentValue: 135.99,
    discountAmount: 153.89,
    taxAmount: 325.2,
    totalAmount: 610.0,
  });

  const updateBillingData = (data: Partial<BillingData>) => {
    setBillingData((prev) => ({ ...prev, ...data }));
  };

  return (
    <BookingContext.Provider value={{ billingData, updateBillingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
};

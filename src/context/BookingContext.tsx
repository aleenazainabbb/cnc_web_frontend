'use client';
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

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

type BookingData = {
  service?: string;
  subService?: string;
  type?: string;
  specific?: string;
  detail?: string;
  frequency?: string;
  staffCount?: number | null;
  hoursCount?: number | null;
  deepCleaningCategory?: string;
  squareFootage?: string;
  siteVisit?: string | null;
  residentialCleanType?: string;
  cleaningMaterials?: "yes" | "no" | null;
  specialInstructions?: string;
  specialInput?: string;
  upholsteryItemCount?: number;
  carpetAreas?: string[];
 uploadedMedia?: Array<{
  name: string;
  previewUrl: string;
}>;
  make?: string;
  model?: string;
  variant?: string;
};

export type LatestLocation = {
  type: "Home" | "Office" | "Other";
  street: string;
  apt: string;
  city: string;
  country: string;
  fullAddress: string;
  access: string;
  pets: string;
  petDetails: string;
  additionalNotes: string;
};

type BookingSelection = {
  preferredCleaner?: string;
  date?: string;
  time?: string;
};

type BookingContextType = {
  billingData: BillingData;
  updateBillingData: (data: Partial<BillingData>) => void;

  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;

  latestLocation: LatestLocation | null;
  updateLatestLocation: (locationData: LatestLocation) => void;

  runtimeBookingList: Array<BookingData & { location: LatestLocation }>;

  selectionList: BookingSelection[];
  addSelection: (data: BookingSelection) => void;
};

const BookingContext = createContext<BookingContextType | null>(null);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookingData, setBookingData] = useState<BookingData>({});
  const [billingData, setBillingData] = useState<BillingData>({
    appointmentFrequency: 'Every 3 weeks',
    appointmentTime: new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    appointmentLocation: '114 Broadway New York, NY 10005',
    discountCode: '',
    appointmentValue: 0,
    discountAmount: 0,
    taxAmount: 0,
    totalAmount: 0,
  });

  const [latestLocation, setLatestLocation] = useState<LatestLocation | null>(null);
  const [runtimeBookingList, setRuntimeBookingList] = useState<Array<BookingData & { location: LatestLocation }>>([]);
  const [selectionList, setSelectionList] = useState<BookingSelection[]>([]);

  const latestListRef = useRef(runtimeBookingList);
  useEffect(() => {
    latestListRef.current = runtimeBookingList;
  }, [runtimeBookingList]);

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const updateBillingData = (data: Partial<BillingData>) => {
    setBillingData((prev) => ({ ...prev, ...data }));
  };

  const updateLatestLocation = (locationData: LatestLocation) => {
    setLatestLocation(locationData);
  };

  const addSelection = (data: BookingSelection) => {
    setSelectionList((prev) => [...prev, data]);
  };

  // useEffect(() => {
  //   if (Object.keys(bookingData).length > 0 && latestLocation) {
  //     const mergedData = {
  //       ...bookingData,
  //       location: latestLocation,
  //     };
  //     const updatedList = [...latestListRef.current, mergedData];
  //     setRuntimeBookingList(updatedList);
  //     console.log("🔄 Runtime Booking List:", updatedList);
  //   }
  // }, [bookingData, latestLocation]);

  return (
    <BookingContext.Provider
      value={{
        bookingData,
        updateBookingData,
        billingData,
        updateBillingData,
        latestLocation,
        updateLatestLocation,
        runtimeBookingList,
        selectionList,
        addSelection,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
};

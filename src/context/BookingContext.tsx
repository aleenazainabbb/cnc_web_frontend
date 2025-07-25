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

type UploadedMediaItem = {
  name: string;
  previewUrl: string;
  file: File; // File object included
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
  numberOfWindows?: string;
  numberOfItems?: string;
  siteVisit?: string | null;
  residentialCleanType?: string;
  cleaningMaterials?: "yes" | "no" | null;
  specialInstructions?: string;
  specialInput?: string;
  upholsteryItemCount?: number;
  carpetAreas?: string[];
  uploadedMedia?: UploadedMediaItem[];
  make?: string;
  model?: string;
  variant?: string;
  cleaningCategory?: string;
  cleaningType?: string;
  cleaningArea?: string;
  // siteVisit?: boolean; 
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

  setBillingData: React.Dispatch<React.SetStateAction<BillingData>>;
  submitBookingQuote: () => Promise<any>;
};

const BookingContext = createContext<BookingContextType | null>(null);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// const apiUrl = 'http://192.168.18.18:3000';

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
  const [runtimeBookingList] = useState<Array<BookingData & { location: LatestLocation }>>([]);
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

  const submitBookingQuote = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found. Please log in.");

      const selected = selectionList[selectionList.length - 1];
      const formData = new FormData();

      formData.append("addressDetails", latestLocation?.fullAddress || "");
      formData.append("accessInstructions", latestLocation?.access || "");
      formData.append("anyPets", latestLocation?.pets === "yes" ? "true" : "false");
      formData.append("petsInfo", latestLocation?.petDetails || "");
      formData.append("petsAdditionalNotes", latestLocation?.additionalNotes || "");

      formData.append("preferredCleaner", selected?.preferredCleaner || "");
      formData.append("date", selected?.date || "");
      formData.append("time", selected?.time || "");

      formData.append("cleaningFrequency", bookingData.frequency || "");
      formData.append("cleaningMaterial", bookingData.cleaningMaterials === "yes" ? "true" : "false");
      formData.append("additionalNotes", bookingData.specialInstructions || "");

      formData.append("numberOfWindows", bookingData.numberOfWindows || "");
      formData.append("squareFeet", bookingData.squareFootage || "");
      formData.append("numberOfItems", bookingData.numberOfItems || "");

      formData.append("make", bookingData.make || "");
      formData.append("model", bookingData.model || "");
      formData.append("variant", bookingData.variant || "");

      formData.append("service", bookingData.service || "");
      formData.append("subService", bookingData.subService || "");

      formData.append("cleaningCategory", bookingData.cleaningCategory || "");
      formData.append("cleaningType", bookingData.cleaningType || "");
      formData.append("cleaningArea", bookingData.cleaningArea || "");

      // Optional: If couponCode exists
      // if (bookingData.couponCode) {
      //   formData.append("couponCode", bookingData.couponCode);
      // }

      // ✅ Append media files
      bookingData.uploadedMedia?.forEach((fileObj) => {
        if (fileObj.file instanceof File) {
          const isImage = fileObj.file.type.startsWith("image/");
          const isVideo = fileObj.file.type.startsWith("video/");
          if (isImage) formData.append("images", fileObj.file);
          if (isVideo) formData.append("videos", fileObj.file);
        }
      });

      const response = await fetch(`${apiUrl}/booking/quotes/submit`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Submission failed");

      console.log("✅ Booking submitted:", result);
      return result;
    } catch (error: any) {
      console.error("Booking submit error:", error.message);
      throw error;
    }
  };

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
        setBillingData,
        submitBookingQuote,
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

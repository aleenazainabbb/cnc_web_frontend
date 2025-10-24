"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

type BillingData = {
  appointmentFrequency: string;
  appointmentTime: string;
  appointmentLocation: string;
  discountCode?: string;
  appointmentValue: number;
  discountAmount: number;
  taxAmount: number;
  totalAmount: number;
  subTotal: number;
};

type UploadedMediaItem = {
  name: string;
  previewUrl: string;
  file: File; // File object included
};

export type BookingData = {
  id?: string;
  service?: string;
  subService?: string;
  type?: string;
  specific?: string;
  detail?: string;
  frequency?: string;
  staffCount?: number | null;
  hoursCount?: number | null;
  squareFootage?: string;
  numberOfWindows?: string;
  numberOfItems?: string;
  units?: number | null;
  selectedspecific?: string;
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
  appointedPrice?: number;
  discountAmount?: number;
  subTotal?: number;
  taxAmount?: number;
  totalAmount?: number;
  price?: number;
  status?: "pending" | "confirmed" | "cancelled";
  payment?: "card" | "cash";
  appointmentLocation?: string;
  selectedType?: string;
  bookingPaymentStatus?: "none";
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

type DeepCleaningItem = {
  id: number;
  category: string;
  type: string;
  specification: string | null;
  unit: string | null;
  price: number;
  vat: number;
  createdAt: string;
  updatedAt: string;
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

  applyPromoCode: (
    code: string
  ) => Promise<{ success: boolean; message: string }>;

  allOrders: string[][];
  fetchAllOrders: () => Promise<void>;
  ordersLoading: boolean;

  createBookingOrder: () => Promise<any>;
  updateBookingOrder: (id: string) => Promise<any>;

  formErrors: { [key: string]: string };
  setFormErrors: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }>
  >;

  // validateBooking: () => boolean;
  deepCleanings: (
    type?: string,
    category?: string,
    specification?: string
  ) => Promise<any>;
  getMaidPrices: () => Promise<any>;
  getUpholsteryPrices: (type?: string, specification?: string) => Promise<any>;
  getDeepCleaningPrices: (
    type?: string,
    specification?: string
  ) => Promise<any>;
  getDuctPrices: () => Promise<any>;
  allOrdersObject: any[];
  setAllOrdersObject: React.Dispatch<React.SetStateAction<any[]>>;
  deepCleaningData: DeepCleaningItem[] | null;
  deepCleaningLoading: boolean;
};
const BookingContext = createContext<BookingContextType | null>(null);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const BookingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookingData, setBookingData] = useState<BookingData>({});
  const [billingData, setBillingData] = useState<BillingData>({
    appointmentFrequency: "Once",
    appointmentTime: new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    appointmentLocation: "114 Broadway New York, NY 10005",
    discountCode: "",
    appointmentValue: 0, // base price before discounts/taxes: totalPrice
    discountAmount: 0,
    subTotal: 0,
    taxAmount: 0,
    totalAmount: 0, // final price after discounts/taxes: price
  });

  const [latestLocation, setLatestLocation] = useState<LatestLocation | null>(
    null
  );
  const [runtimeBookingList] = useState<
    Array<BookingData & { location: LatestLocation }>
  >([]);
  const [selectionList, setSelectionList] = useState<BookingSelection[]>([]);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [allOrders, setAllOrders] = useState<string[][]>([]);
  const [allOrdersObject, setAllOrdersObject] = useState<any[]>([]);
  const [ordersLoading, setOrdersLoading] = useState<boolean>(false);
  const [deepCleaningData, setDeepCleaningData] = useState<
    DeepCleaningItem[] | null
  >(null);
  const [deepCleaningLoading, setDeepCleaningLoading] =
    useState<boolean>(false);
  const [hasFetchedDeepCleaning, setHasFetchedDeepCleaning] =
    useState<boolean>(false);

  const latestListRef = useRef(runtimeBookingList);
  useEffect(() => {
    latestListRef.current = runtimeBookingList;
  }, [runtimeBookingList]);

  const updateBookingData = (newData: Partial<BookingData>) => {
    setBookingData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  // UI error handling for billing data
  const updateBillingData = (data: Partial<BillingData>) => {
    setBillingData((prev) => ({ ...prev, ...data }));
  };

  // const validateBooking = (): boolean => {
  //   const errors: { [key: string]: string } = {};
  //   const serviceName = bookingData.service?.trim().toLowerCase() || "";
  //   const subServiceName = bookingData.subService?.trim().toLowerCase() || "";
  //   if (!bookingData.service) {
  //   errors.service = "Please select a service";
  // }
  // if (!bookingData.subService) {
  //   errors.subServices = "Please select a sub service";
  // }
  // const isDeepCleaning =
  //   bookingData.service?.trim().toLowerCase() === "cleaning services" &&
  //   subServiceName === "deep cleaning";

  // // const isVehicleCleaning = subServiceName.includes("vehicle cleaning");
  // const isVehicleCleaning = subServiceName === "vehicle cleaning";

  // const isSpecialCleaning = [
  //   "windows cleaning",
  //   "swimming pool cleaning",
  //   "chandelier cleaning services",
  //   "grease trap cleaning services",
  //   "vehicle cleaning",
  // ].includes(subServiceName);

  // const isUpholsteryCleaning = serviceName === "cleaning services" && subServiceName === "upholstery cleaning";

  // // Deep Cleaning - Commercial
  // if (isDeepCleaning && bookingData.cleaningCategory === "Commercial") {
  //   if (!bookingData.cleaningCategory) {
  //     errors.cleaningCategory = "Please select a category";
  //   }
  // }

  // TYPE
  // if (
  //   (isDeepCleaning && bookingData.cleaningCategory === "Residential") ||
  //   (!isSpecialCleaning && !isDeepCleaning)
  // ) {
  //   if (!bookingData.type) {
  //     errors.type = "Please select a type";
  //   }
  // }

  // // Special Cleaning - Swimming Pool
  // if (isSpecialCleaning && subServiceName === "swimming pool cleaning") {
  //   if (!bookingData.squareFootage) {
  //     errors.squareFootage = "Please enter area in square feet";
  //   }
  // }
  // // Special Cleaning - Windows
  // if (isSpecialCleaning && subServiceName === "windows cleaning") {
  //   if (!bookingData.numberOfWindows) {
  //     errors.numberOfWindows = "Please enter number of windows";
  //   }
  // }
  // // Special Cleaning - Chandelier
  // if (
  //   isSpecialCleaning &&
  //   subServiceName === "chandelier cleaning services"
  // ) {
  //   if (!bookingData.numberOfItems) {
  //     errors.numberOfItems = "Please enter number of items";
  //   }
  // }

  // // vehicleCleaning
  // if (isVehicleCleaning) {
  //   if (!bookingData.make?.trim()) {
  //     errors.make = "Please enter the make";
  //   }
  //   if (!bookingData.model?.trim()) {
  //     errors.model = "Please enter the model";
  //   }
  //   if (!bookingData.variant?.trim()) {
  //     errors.variant = "Please enter the variant";
  //   }
  // }
  // Special Cleaning - Upload Media
  // if (
  //   isSpecialCleaning &&
  //   (!bookingData.uploadedMedia || bookingData.uploadedMedia.length === 0)
  // ) {
  //   errors.uploadedMedia = "Please upload at least one image or video";
  // }

  // if (
  //   bookingData.subService?.trim().toLowerCase() === "upholstery cleaning" &&
  //   !bookingData.specific?.trim()
  // ) {
  //   errors.specific = "Please select a specific";
  // }

  // if (
  //   bookingData.subService?.trim().toLowerCase() === "upholstery cleaning" &&
  //   bookingData.selectedType &&
  //   bookingData.selectedType !== "Carpet" &&
  //   bookingData.selectedType !== "Dining Chair / Sofa"
  // ) {
  //   if (
  //     !bookingData.upholsteryItemCount ||
  //     bookingData.upholsteryItemCount < 1
  //   ) {
  //     errors.upholsteryItemCount = "Please enter the number of items";
  //   }
  // }

  // ✅ Upholstery Cleaning -> Carpet: require carpet area fields
  // if (
  //   bookingData.subService?.trim().toLowerCase() === "upholstery cleaning" &&
  //   bookingData.selectedType === "Carpet"
  // ) {
  //   if (!bookingData.carpetAreas || bookingData.carpetAreas.length === 0) {
  //     errors.carpetAreas = "Please enter carpet area";
  //   } else {
  //     const hasEmptyArea = bookingData.carpetAreas.some(
  //       (area) => !area.trim()
  //     );
  //     if (hasEmptyArea) {
  //       errors.carpetAreas = "Please enter carpet area";
  //     }
  //   }
  // }
  // setFormErrors(errors);

  // Log errors for debugging
  // In validateBooking function
  //   if (Object.keys(errors).length > 0) {
  //     console.error("Validation errors:", errors);
  //   } else {
  //     console.log("No validation errors found"); // Optional: for debugging
  //   }
  //   return Object.keys(errors).length === 0;
  // };

  // Update latest location
  const updateLatestLocation = (data: LatestLocation) => {
    setLatestLocation(data);
    console.log("Context updated:", data);
  };
  // console.log("🧾 Selection List:", selectionList);
  const addSelection = (data: BookingSelection) => {
    setSelectionList((prev) => [...prev, data]);
  };

  // custom api integration
  const submitBookingQuote = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found. Please log in.");

      const selected = selectionList[selectionList.length - 1];
      const formData = new FormData();

      // formData.append("addressDetails", latestLocation?.fullAddress || "");
      formData.append("location", latestLocation?.fullAddress || "");
      formData.append("accessInstructions", latestLocation?.access || "");
      formData.append(
        "anyPets",
        latestLocation?.pets === "yes" ? "true" : "false"
      );
      formData.append("petsInfo", latestLocation?.petDetails || "");
      formData.append(
        "petsAdditionalNotes",
        latestLocation?.additionalNotes || ""
      );

      formData.append("preferredCleaner", selected?.preferredCleaner || "");
      formData.append("date", selected?.date || "");
      formData.append("time", selected?.time || "");

      formData.append("cleaningFrequency", bookingData.frequency || "");
      formData.append(
        "cleaningMaterial",
        bookingData.cleaningMaterials === "yes" ? "true" : "false"
      );
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
      formData.append("payment", bookingData.payment || "");

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

      console.log("Booking submitted:", result);
      return result;
    } catch (error: any) {
      console.error("Booking submit error:", error.message);
      throw error;
    }
  };

  // non custom api Integration
  const createBookingOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found. Please log in.");
      const selected = selectionList[selectionList.length - 1];
      const formData = new FormData();

      formData.append("date", selected?.date || "");
      formData.append("time", selected?.time || "");
      formData.append(
        "cleaningMaterial",
        bookingData.cleaningMaterials === "yes" ? "true" : "false"
      );
      const isMaidOrGeneral =
        bookingData.subService?.trim().toLowerCase() ===
        "maid services / general services";
      formData.append(
        "workers",
        isMaidOrGeneral ? String(bookingData.staffCount ?? 0) : "0"
      );
      formData.append(
        "noHours",
        isMaidOrGeneral ? String(bookingData.hoursCount ?? 0) : "0"
      );
      // formData.append("BookingStatus", bookingData.status || "");
      formData.append("units", (bookingData.units ?? 0).toString());
      formData.append("service", bookingData.service || "");
      formData.append("subSubService", bookingData.subService || "");
      formData.append("category", bookingData.cleaningCategory || "");
      formData.append("location", latestLocation?.fullAddress || "");
      // formData.append("accessInstructions", latestLocation?.access || "");
      formData.append(
        "additionalServices",
        bookingData.residentialCleanType || ""
      );
      formData.append(
        "specialInstructions",
        bookingData.specialInstructions || ""
      );
      formData.append("totalPrice", billingData.appointmentValue.toString());
      formData.append("discountPrice", billingData.discountAmount.toString());
      formData.append("cncChargesExclVat", billingData.subTotal.toString());
      formData.append("VAT", billingData.taxAmount.toString());
      formData.append("promoCode", billingData.discountCode || "");
      formData.append("cncChargesInclVat", billingData.totalAmount.toString());
      formData.append("payment", bookingData.payment || "");

      bookingData.uploadedMedia?.forEach((fileObj) => {
        if (fileObj.file instanceof File) {
          const isImage = fileObj.file.type.startsWith("image/");
          const isVideo = fileObj.file.type.startsWith("video/");
          if (isImage) formData.append("images", fileObj.file);
          if (isVideo) formData.append("videos", fileObj.file);
        }
      });

      const response = await fetch(`${apiUrl}/bookingOrder/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Order creation failed");
      console.log("Booking order created:", result);

      //  Only update tax from backend response
      if (result.billing) {
        updateBillingData({
          taxAmount: result.billing.taxAmount ?? 0,
        });
      }
      return result;
    } catch (error: any) {
      console.error("Booking order error:", error.message);
      throw error;
    }
  };
  //  promo code integration
  const applyPromoCode = async (
    code: string
  ): Promise<{ success: boolean; message: string }> => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Authorization token required");

      const response = await fetch(`${apiUrl}/promoCode/validatePromoCode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ promoCode: code }),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: result.message || "Invalid promo code",
        };
      }

      const { discountType, discountValue, message } = result;

      const price = billingData.appointmentValue;
      let discount = 0;

      if (discountType === "percentage") {
        discount = price * (discountValue / 100);
      } else if (discountType === "fixed") {
        discount = discountValue;
      }

      const subTotal = Math.max(price - discount, 0);
      // Only tax comes from backend
      const taxAmount = result.taxAmount ?? 0;
      const totalAmount = subTotal + taxAmount;

      updateBillingData({
        discountCode: code,
        discountAmount: discount,
        subTotal,
        taxAmount,
        totalAmount,
      });

      return {
        success: true,
        message: message || "Promo applied successfully",
      };
    } catch (err: any) {
      return {
        success: false,
        message: err.message || "Failed to validate promo code.",
      };
    }
  };
  // get all orders list in pending and history
  const fetchAllOrders = async (): Promise<void> => {
    try {
      setOrdersLoading(true);
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Authorization token required");

      const response = await fetch(`${apiUrl}/bookingOrder/getBookingOrder`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch orders.");
      }

      // Keep original data
      const orders = result.data || [];

      // Sort by date
      const sortedOrders = orders.sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      // Map for table/grid if needed
      const orderRows: string[][] = sortedOrders.map((order: any) => [
        order.bookingId || "-",
        order.service || "-",
        order.subSubService || order.subService || "-",
        order.cncChargesInclVat !== null && order.cncChargesInclVat !== ""
          ? `${Number(order.cncChargesInclVat).toFixed(2)} AED`
          : "Prices will be listed soon",
        order.time || "-",
        order.date || "-",
        order.BookingStatus || "Completed",
        order.bookingPaymentStatus || "none",
      ]);

      // Save both in state
      setAllOrders(orderRows); // for UI table
      setAllOrdersObject(sortedOrders); // original objects for detail view or API logic

    } catch (error: any) {
      console.error("Order fetch failed:", error.message);
    } finally {
      setOrdersLoading(false);
    }
  };

  // Update custom booking order as JSON
  const updateBookingOrder = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const body = {
        totalPrice: billingData.appointmentValue,
        discountPrice: billingData.discountAmount,
        cncChargesExclVat: billingData.subTotal,
        VAT: billingData.taxAmount,
        promoCode: billingData.discountCode || "",
        cncChargesInclVat: billingData.totalAmount,
        payment: bookingData.payment || "",
        bookingPaymentStatus: bookingData.bookingPaymentStatus || "complete",
      };

      const response = await fetch(`${apiUrl}/booking/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Update failed");
      return result;
    } catch (e) {
      console.error("Update booking error:", e);
      throw e;
    }
  };

  const deepCleanings = async (
    type?: string,
    category?: string,
    specification?: string
  ) => {
    if (hasFetchedDeepCleaning && deepCleaningData) {
      let filteredData = deepCleaningData;

      if (type) {
        filteredData = filteredData.filter((item) => item.type === type);
      }

      if (category) {
        filteredData = filteredData.filter(
          (item) => item.category === category
        );
      }

      if (specification) {
        filteredData = filteredData.filter(
          (item) => item.specification === specification
        );
      }

      return { success: true, data: filteredData };
    }

    try {
      setDeepCleaningLoading(true);
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Authorization token required");

      const response = await fetch(`${apiUrl}/deepCleaning/getBasePrices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ type, category, specification }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(
          result.message || "Failed to fetch deep cleaning services."
        );
      }

      console.log(`✅ Deep cleaning data fetched:`, result);

      // Store the complete data and mark as fetched
      setDeepCleaningData(result.data || []);
      setHasFetchedDeepCleaning(true);

      // Return filtered data based on parameters
      let filteredData = result.data || [];

      if (type) {
        filteredData = filteredData.filter((item: any) => item.type === type);
      }

      if (category) {
        filteredData = filteredData.filter(
          (item: any) => item.category === category
        );
      }

      if (specification) {
        filteredData = filteredData.filter(
          (item: any) => item.specification === specification
        );
      }

      return { success: true, data: filteredData };
    } catch (error: any) {
      console.error(" Deep cleaning services error:", error.message);
      return {
        success: false,
        message: error.message,
        data: [],
      };
    } finally {
      setDeepCleaningLoading(false);
    }
  };

  // Helper functions for specific categories
  const getMaidPrices = async () => {
    return await deepCleanings(undefined, "maid");
  };

  const getUpholsteryPrices = async (type?: string, specification?: string) => {
    return await deepCleanings(type, "upholstery", specification);
  };

  const getDeepCleaningPrices = async (
    type?: string,
    specification?: string
  ) => {
    return await deepCleanings(type, "deep", specification);
  };

  const getDuctPrices = async () => {
    return await deepCleanings(undefined, "duct");
  };

  return (
    <BookingContext.Provider
      value={{
        updateBookingOrder,
        bookingData,
        updateBookingData,
        billingData,
        deepCleanings,
        getMaidPrices,
        getUpholsteryPrices,
        getDeepCleaningPrices,
        getDuctPrices,
        updateBillingData,
        latestLocation,
        updateLatestLocation,
        runtimeBookingList,
        selectionList,
        addSelection,
        setBillingData,
        submitBookingQuote,
        applyPromoCode,
        allOrders,
        allOrdersObject,
        setAllOrdersObject,
        fetchAllOrders,
        ordersLoading,
        createBookingOrder,
        formErrors,
        setFormErrors,
        // validateBooking,
        deepCleaningData,
        deepCleaningLoading,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context)
    throw new Error("useBooking must be used within BookingProvider");
  return context;
};

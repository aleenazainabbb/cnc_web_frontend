"use client";
import React, { useState, useEffect, useRef } from "react";
import booking from "./styles/AddBooking/booking.module.css";
import { useService } from "@/context/allservices";
import { useBooking } from "@/context/BookingContext";
import Snackbar from "@/components/popups/Snackbar";
import { set } from "nprogress";

type BookingsProps = {
  serviceError?: boolean;
  setServiceError?: (val: boolean) => void;
};

interface UpholsteryRate {
  price: any;
  specification: any;
  category: string;
  type: string;
  unitPrice?: number;
  unit?: string;
  rates?: {
    [key: string]: number;
  };
}

const Bookings: React.FC<BookingsProps> = ({
  serviceError,
  setServiceError,
}) => {
  // Declare all state variables BEFORE any useEffect that uses them
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedSpecific, setSelectedSpecific] = useState<string>("");
  const [itemCount, setItemCount] = useState<number>(2); // Default to 2 as in the image
  const [upholsteryRates, setUpholsteryRates] = useState<UpholsteryRate[]>([]);

  useEffect(() => {
    if (selectedType && selectedSpecific && upholsteryRates.length > 0) {
      calculatePrice(
        selectedType,
        selectedSpecific,
        itemCount,
        upholsteryRates
      );
    }
  }, [selectedType, selectedSpecific, itemCount, upholsteryRates]);
  const calculatePrice = (
    type: string,
    specific: string,
    count: number,
    rates: UpholsteryRate[]
  ) => {
    if (!type || !specific || !rates.length) {
      setTotalPrice(0);
      return;
    }
    const selectedUpholstery = rates.find((item) => item.type === type);
    if (!selectedUpholstery) {
      setTotalPrice(0);
      return;
    }
    let price = 0;
    if (selectedUpholstery.unitPrice) {
      price = selectedUpholstery.unitPrice;
    } else if (
      selectedUpholstery.rates &&
      selectedUpholstery.rates[specific.toLowerCase()]
    ) {
      price = selectedUpholstery.rates[specific.toLowerCase()];
    }
    setTotalPrice(price * count);
  };
  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    const selectedUpholstery = upholsteryRates.find(
      (item) => item.type === type
    );
    let newSpecific = "";

    if (selectedUpholstery) {
      if (selectedUpholstery.unitPrice && selectedUpholstery.unit) {
        newSpecific = selectedUpholstery.unit;
      } else if (selectedUpholstery.rates) {
        const firstRateKey = Object.keys(selectedUpholstery.rates)[0];
        if (firstRateKey) {
          newSpecific = firstRateKey;
        }
      }
    }
    setSelectedSpecific(newSpecific);
  };
  // const getPriceForSpecific = (type: string, specific: string) => {
  //   const selectedUpholstery = upholsteryRates.find(
  //     (item) => item.type === type
  //   );
  //   if (!selectedUpholstery) return 0;

  //   if (selectedUpholstery.unitPrice) {
  //     return selectedUpholstery.unitPrice;
  //   } else if (
  //     selectedUpholstery.rates &&
  //     selectedUpholstery.rates[specific.toLowerCase()]
  //   ) {
  //     return selectedUpholstery.rates[specific.toLowerCase()];
  //   }

  //   return 0;
  // };
  const {
    updateBookingData,
    updateBillingData,
    bookingData,
    setBillingData,
    formErrors,
    setFormErrors,
    deepCleanings, // Make sure this is destructured from useBooking
  } = useBooking();

  const { applyPromoCode } = useBooking();
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    null
  );
  const [selectedSubService, setSelectedSubService] = useState<string>("");
  const [selectedDetail, setSelectedDetail] = useState<string>("");
  const [selectedFreq, setSelectedFreq] = useState("Once");
  const [selectedStaff, setSelectedStaff] = useState<number>(1);
  const [selectedHours, setSelectedHours] = useState<number>(1);
  const [selected, setSelected] = useState<"yes" | "no" | null>("no");
  const [specialInstructions, setSpecialInstructions] = useState<string>("");
  const [squareFootage, setSquareFootage] = useState<string>("");
  const [siteVisit, setSiteVisit] = useState<"yes" | "no" | null>("no");
  const [uploadedFiles, setUploadedFiles] = useState<FileList | null>(null);
  const [specialInput, setSpecialInput] = useState<string>("");
  const [numberOfWindows, setNumberOfWindows] = useState<string>("");
  const [numberOfItems, setNumberOfItems] = useState<string>("");
  const [carpetCount, setCarpetCount] = useState<number>(0);
  const [carpetAreas, setCarpetAreas] = useState<string[]>([]);
  const [upholsteryItemCount, setUpholsteryItemCount] = useState<number>(0);
  const [residentialCleanType, setResidentialCleanType] = useState<string>("");

  const [serviceOptions, setServiceOptions] = useState([]);
  const [withoutSuppliesPrice, setWithoutSuppliesPrice] = useState<
    number | null
  >(null);
  const [duct, setDuct] = useState<number | null>(null);
  const [sofaUnitPrice, setSofaUnitPrice] = useState<number>(0);
  const [carpetPricePerSqm, setCarpetPricePerSqm] = useState<number>(0);
  // Dropdown toggles
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isSubServiceOpen, setIsSubServiceOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isSpecificOpen, setIsSpecificOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isResidentialTypeOpen, setIsResidentialTypeOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // Dropdown refs
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const subServiceDropdownRef = useRef<HTMLDivElement>(null);
  const typeDropdownRef = useRef<HTMLDivElement>(null);
  const specificDropdownRef = useRef<HTMLDivElement>(null);
  const detailDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  // Derived checks
  const specialCleaningTypes = [
    "windows cleaning",
    "swimming pool cleaning",
    "chandelier cleaning services",
  ];
  const isSpecialCleaning = specialCleaningTypes.includes(
    selectedSubService.trim().toLowerCase()
  );
  const isMaidSelected =
    selectedSubService.trim().toLowerCase() ===
    "maid services / general services";
  const isDeepCleaning =
    selectedService.trim().toLowerCase() === "cleaning services" &&
    selectedSubService.trim().toLowerCase() === "deep cleaning";

  //Vehicle cleaning
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [variant, setVariant] = useState<string>("");
  const [cleaningCategory, setCleaningCategory] = useState<string>("");
  const [cleaningType, setCleaningType] = useState<string>("");
  const [discountInput, setDiscountInput] = useState("");

  const isGreaseTrapCleaning =
    selectedService?.toLowerCase() === "cleaning services" &&
    selectedSubService?.toLowerCase() === "grease trap cleaning services";

  const isVehicleCleaning =
    selectedService?.toLowerCase() === "cleaning services" &&
    selectedSubService?.toLowerCase() === "vehicle cleaning";
  const { services, subServices, fetchServices, fetchSubServices, loading } =
    useService();

  // State variables for all pricing categories
  const [pricingData, setPricingData] = useState<any[]>([]);
  const [maidWithSuppliesPrice, setMaidWithSuppliesPrice] = useState<number>(0);
  const [maidWithoutSuppliesPrice, setMaidWithoutSuppliesPrice] =
    useState<number>(0);
  const [ductPrice, setDuctPrice] = useState<number>(0);

  const [diningChairPrice, setDiningChairPrice] = useState<number>(0);

  const [mattressPrices, setMattressPrices] = useState<any[]>([]);
  const [rugsPrices, setRugsPrices] = useState<any[]>([]);
  const [deepCleaningPrices, setDeepCleaningPrices] = useState<any[]>([]);
  const [residentialPrices, setResidentialPrices] = useState<any[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const data = await deepCleanings();

        if (data?.success && data.data) {
          setPricingData(data.data); // Store the entire data array

          // Extract maid service prices
          const maidWithSupplies = data.data.find(
            (item: any) =>
              item.category === "maid" && item.type === "withSupplies"
          );
          const maidWithoutSupplies = data.data.find(
            (item: any) =>
              item.category === "maid" && item.type === "withoutSupplies"
          );

          if (maidWithSupplies) {
            setMaidWithSuppliesPrice(maidWithSupplies.price);
          }
          if (maidWithoutSupplies) {
            setMaidWithoutSuppliesPrice(maidWithoutSupplies.price);
          }

          // Extract duct cleaning price
          const ductCleaning = data.data.find(
            (item: any) => item.category === "duct"
          );
          if (ductCleaning) {
            setDuctPrice(ductCleaning.price);
          }

          // Extract upholstery prices
          const sofaPrices = data.data.filter(
            (item: any) =>
              item.category === "upholstery" && item.type === "sofa"
          );

          // Dining chair price
          const diningChair = data.data.find(
            (item: any) =>
              item.category === "upholstery" &&
              item.type === "dining chair / sofa"
          );
          if (diningChair) {
            setDiningChairPrice(diningChair.price);
          }

          // Carpet price
          const carpet = data.data.find(
            (item: any) =>
              item.category === "upholstery" && item.type === "carpet"
          );
          if (carpet) {
            setCarpetPricePerSqm(carpet.price);
          }

          // Mattress prices
          const mattressData = data.data.filter(
            (item: any) =>
              item.category === "upholstery" && item.type === "mattress"
          );
          setMattressPrices(mattressData);

          // Rugs prices
          const rugsData = data.data.filter(
            (item: any) =>
              item.category === "upholstery" && item.type === "rugs"
          );
          setRugsPrices(rugsData);

          // Set sofa unit price (average of all sofa types)
          if (sofaPrices.length > 0) {
            const averageSofaPrice =
              sofaPrices.reduce(
                (sum: number, item: any) => sum + item.price,
                0
              ) / sofaPrices.length;
            setSofaUnitPrice(averageSofaPrice);
          }

          // Extract deep cleaning prices
          const deepCleaningData = data.data.filter(
            (item: any) => item.category === "deep"
          );
          setDeepCleaningPrices(deepCleaningData);

          // Extract residential prices (Apartments, Townhouses, Villas)
          const residentialData = data.data.filter(
            (item: any) => item.category === "Residential"
          );
          setResidentialPrices(residentialData);

          // Log all extracted data for verification
          console.log("Maid with supplies:", maidWithSupplies?.price);
          console.log("Maid without supplies:", maidWithoutSupplies?.price);
          console.log("Duct cleaning:", ductCleaning?.price);
          console.log("Sofa prices:", sofaPrices);
          console.log("Dining chair:", diningChair?.price);
          console.log("Carpet:", carpet?.price);
          console.log("Mattress prices:", mattressData);
          console.log("Rugs prices:", rugsData);
          console.log("Deep cleaning:", deepCleaningData);
          console.log("Residential prices:", residentialData);
        }
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, [deepCleanings]);

  // 1️⃣ Fetch prices once
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const data = await deepCleanings(); // your API call
        if (data?.success && data.data) {
          setServiceOptions(data.data); // store all fetched data
        }
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };
    fetchPrices();
  }, []);

  const handleApply = async () => {
    try {
      const result = await applyPromoCode(discountInput);
      if (result.success) {
        setSnackbar({ type: "success", message: result.message });

        // Get current appointment value
        const currentAppointmentValue = bookingData.appointedPrice || 0;

        // Calculate discount based on your business logic
        // For example: 10% discount, or fixed amount, etc.
        const discountPercentage = 0.1; // 10% discount - adjust as needed
        const discountAmount = currentAppointmentValue * discountPercentage;

        // Recalculate with tax preservation
        const subTotal = Math.max(0, currentAppointmentValue - discountAmount);
        const taxAmount = subTotal * 0.05; // Always 5% tax
        const totalAmount = subTotal + taxAmount;

        // Update both billing and booking data
        updateBillingData({
          discountAmount,
          taxAmount,
          totalAmount,
        });

        updateBookingData({
          discountAmount,
          subTotal,
          taxAmount,
          totalAmount,
        });
      } else {
        setSnackbar({ type: "error", message: result.message });
      }
    } catch (err: any) {
      setSnackbar({ type: "error", message: err.message });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const uploaded = Array.from(files).map((file) => ({
      name: file.name,
      previewUrl: URL.createObjectURL(file),
      file: file,
    }));

    updateBookingData({
      uploadedMedia: [...(bookingData.uploadedMedia || []), ...uploaded],
    });
  };
  // mouse dropdown behaviour
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(target)
      ) {
        setIsServiceOpen(false);
      }
      if (
        subServiceDropdownRef.current &&
        !subServiceDropdownRef.current.contains(target)
      ) {
        setIsSubServiceOpen(false);
      }
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(target)
      ) {
        setIsTypeOpen(false);
      }
      if (
        specificDropdownRef.current &&
        !specificDropdownRef.current.contains(target)
      ) {
        setIsSpecificOpen(false);
      }

      if (
        detailDropdownRef.current &&
        !detailDropdownRef.current.contains(target)
      ) {
        setIsDetailOpen(false);
      }
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(target)
      ) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedServiceId !== null) {
      fetchSubServices(selectedServiceId);
      setSelectedSubService("");
    }
  }, [selectedServiceId]);

  // subservice changed behaviour
  useEffect(() => {
    // Reset UI state
    setSelectedType("");
    setSelectedHours(1);
    setSelectedStaff(1);
    setSelectedSpecific("");
    setSelectedDetail("");
    setSquareFootage("");
    setUpholsteryItemCount(0);
    setSpecialInput("");
    setNumberOfWindows("");
    setNumberOfItems("");
    setCleaningCategory("");
    setSiteVisit(null);
    setResidentialCleanType("");
    setIsResidentialTypeOpen(false);
    setMake("");
    setModel("");
    setVariant("");
    setUploadedFiles(null);

    setSpecialInstructions("");

    // ✅ Clear booking context (runtime data)
    updateBookingData({
      service: selectedService,
      subService: selectedSubService,
      type: "",
      specific: "",
      detail: "",
      cleaningMaterials: null,
      staffCount: null,
      hoursCount: null,
      squareFootage: "",
      siteVisit: null,
      residentialCleanType: "",
      specialInput: "",
      numberOfWindows: "",
      numberOfItems: "",
      upholsteryItemCount: 0,
      carpetAreas: [],
      appointedPrice: 0,
      discountAmount: 0,
      subTotal: 0,
      taxAmount: 0,
      totalAmount: 0,
      status: "pending",
      make: "",
      model: "",
      variant: "",
      cleaningCategory: "",
      cleaningType: "",
      uploadedMedia: [],
      specialInstructions: "",
      // selectedSpecific: "",
    });

    // ✅ Clear billing data too
    updateBillingData({
      appointmentValue: 0,
      taxAmount: 0,
      totalAmount: 0,
      discountAmount: 0,
      appointmentFrequency: "Once",
      appointmentTime: "",
    });
  }, [selectedSubService]);

  useEffect(() => {
    setCarpetCount(0);
    setCarpetAreas([]);
    setSelectedSpecific("");
    setUpholsteryItemCount(0);

    updateBookingData({
      specific: "",
      detail: "",
      appointedPrice: 0,
      discountAmount: 0,
      subTotal: 0,
      taxAmount: 0,
      totalAmount: 0,
      status: "pending",
      // numberOfItems:"0",
    });
  }, [selectedType]);

  useEffect(() => {
    updateBookingData({
      squareFootage: "",
      detail: "",
      appointedPrice: 0,
      discountAmount: 0,
      subTotal: 0,
      taxAmount: 0,
      totalAmount: 0,
      status: "pending",
      // numberOfItems:"",
    });
  }, [selectedSpecific]);

  useEffect(() => {
    updateBillingData({
      appointmentValue: 0,
      discountAmount: 0,
      taxAmount: 0,
      totalAmount: 0,
    });
  }, [cleaningCategory]);

  // useEffect(() => {
  //   const service = selectedService.trim().toLowerCase();
  //   const subservice = selectedSubService.trim().toLowerCase();
  //   const type = selectedType.trim().toLowerCase();
  //   const specific = selectedSpecific.trim().toLowerCase();

  //   let key = "";
  //   let price = "";

  //   // Cleaning Services → Duct Cleaning
  //   if (service === "cleaning services" && subservice === "duct cleaning") {
  //     const ductMap: Record<string, string> = {
  //       // "apartment|studio": "350 AED",
  //       // "apartment|1bhk": "450 AED",
  //       // "apartment|2bhk": "750 AED",
  //       // "apartment|3bhk": "1200 AED",
  //       // "townhouse|2bhk": "1200 AED",
  //       // "townhouse|3bhk": "1500 AED",
  //       // "townhouse|4bhk": "1800 AED",
  //     };
  //     key = `${type}|${specific.replace(" apartment", "")}`;
  //     price = ductMap[key] || "";
  //   }
  //   //  Pest Control
  //   else if (service === "pest control") {
  //     const pestMap: Record<string, string> = {
  //       // "apartment|studio apartment": "225 AED",
  //       // "apartment|1bhk apartment": "275 AED",
  //       // "apartment|2bhk apartment": "350 AED",
  //       // "townhouse|2bhk": "425 AED",
  //       // "townhouse|3bhk": "500 AED",
  //       // "townhouse|4bhk": "575 AED",
  //       // "villa|2bhk": "425 AED",
  //       // "villa|3bhk": "500 AED",
  //       // "villa|4bhk": "600 AED",
  //       // "villa|5bhk": "700 AED",
  //       // "villa|6bhk": "750 AED",
  //     };
  //     key = `${type}|${specific}`;
  //     price = pestMap[key] || "";
  //   }
  //   // Cleaning Services → Upholstery Cleaning
  //   else if (subservice === "upholstery cleaning") {
  //     const upholsteryMap: Record<string, string> = {
  //       // "dining chair / sofa|per chair / seater": "29 AED per chair / seater",
  //       // "mattress|single": "179 AED",
  //       // "mattress|double queen": "279 AED",
  //       // "mattress|double king": "319 AED",
  //       // "carpet|per sq m": "35 AED",
  //       // "rugs|small": "79 AED",
  //       // "rugs|medium": "119 AED",
  //       // "rugs|large": "199 AED",
  //     };
  //     const normalizedType = type.trim().toLowerCase();
  //     const normalizedSpecific = specific.trim().toLowerCase();
  //     const key = `${normalizedType}|${normalizedSpecific}`;
  //     price = upholsteryMap[key] || "";
  //   }
  //   // Set the selected detail if found
  //   setSelectedDetail(price);
  // }, [selectedService, selectedSubService, selectedType, selectedSpecific]);

  // useEffect(() => {
  //   updateBookingData({ frequency: "Once" });
  // }, []);

  // updateBookingData
  useEffect(() => {
    updateBookingData({
      service: selectedService,
      subService: selectedSubService,
      type: selectedType,
      specific: selectedSpecific,
      detail: selectedDetail,
      cleaningMaterials: selected,
      staffCount: selectedStaff,
      hoursCount: selectedHours,
      squareFootage,
      siteVisit,
      residentialCleanType,
      specialInput,
      numberOfWindows,
      numberOfItems,
      upholsteryItemCount,
      carpetAreas,
      specialInstructions: specialInstructions,
      make,
      model,
      variant,
      cleaningCategory,
      cleaningType,
    });
  }, [
    selectedService,
    selectedSubService,
    selectedType,
    selectedSpecific,
    selectedDetail,
    selectedStaff,
    selectedHours,
    squareFootage,
    numberOfWindows,
    numberOfItems,
    siteVisit,
    selected,
    residentialCleanType,
    specialInstructions,
    specialInput,
    upholsteryItemCount,
    carpetAreas,
    make,
    model,
    variant,
    uploadedFiles,
    cleaningCategory,
    cleaningType,
  ]);

  useEffect(() => {
    const isMaid =
      selectedService.trim().toLowerCase() === "cleaning services" &&
      selectedSubService.trim().toLowerCase() ===
        "maid services / general services";

    if (isMaid && selectedType) {
      let pricePerHour = 0;

      // Use the prices from state that were fetched from the API
      if (selectedType === "with-supplies") {
        pricePerHour = maidWithSuppliesPrice || 40; // Fallback to 40 if not loaded
      } else if (selectedType === "without-supplies") {
        pricePerHour = maidWithoutSuppliesPrice || 45; // Fallback to 45 if not loaded
      }

      // Only if staff and hours are also selected
      if (selectedStaff && selectedHours) {
        const appointmentValue = pricePerHour * selectedStaff * selectedHours;
        const taxAmount = appointmentValue * 0.05;
        const totalAmount = appointmentValue + taxAmount;

        updateBillingData({
          appointmentValue,
          taxAmount,
          totalAmount,
        });
      }
    }
  }, [
    selectedType,
    selectedStaff,
    selectedHours,
    selectedService,
    selectedSubService,
    selectedDetail,
    maidWithSuppliesPrice,
    maidWithoutSuppliesPrice,
  ]);

  useEffect(() => {
    if (!selectedDetail) return;

    const rawPrice = parseFloat(selectedDetail.replace(/[^\d.]/g, "")) || 0;
    const discountAmount = 0; // Replace later with coupon logic if needed
    const subTotal = rawPrice - discountAmount;
    const taxAmount = parseFloat((subTotal * 0.05).toFixed(2)); // 5% VAT
    const totalAmount = subTotal + taxAmount;

    // ✅ Update billing summary display
    updateBillingData({
      appointmentValue: rawPrice,
      discountAmount,
      taxAmount,
      totalAmount,
    });

    // ✅ Store runtime copy for API submission
    updateBookingData({
      appointedPrice: rawPrice,
      discountAmount,
      subTotal,
      taxAmount,
      totalAmount,
      status: "pending", // ⬅️ default on every change
    });
  }, [selectedDetail]);

  // frequency and time
  useEffect(() => {
    const frequency = selectedFreq?.trim() || "Every 2 weeks";
    const formattedTime = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    updateBillingData({
      appointmentFrequency: frequency,
      appointmentTime: formattedTime,
    });
  }, [selectedFreq]);

  useEffect(() => {
    const subService = selectedSubService?.toLowerCase() || "";
    const category = cleaningCategory?.toLowerCase() || "";
    const subservicesToSkipPayment = [
      "windows cleaning",
      "swimming pool cleaning",
      "chandelier cleaning services",
      "vehicle cleaning",
    ];
    const shouldSkip =
      subservicesToSkipPayment.includes(subService) ||
      (subService === "deep cleaning" && category === "commercial");

    setBillingData((prev: any) => ({
      ...prev,
      selectedSubService,
      cleaningCategory,
      skipPaymentStep: shouldSkip, // this is the flag BookingLayout will use
    }));
  }, [selectedSubService, cleaningCategory]);

  return (
    <div className={booking.container}>
      <div className={booking.sectionSpacing}>
        <div className={booking.header}>
          <h1 className={booking.title}>Booking</h1>
        </div>
        <div className={booking.group}>
          {/* Coupon */}

          <div className={booking.cont}>
            {/* SERVICE */}
            <div className={booking.fieldGroup}>
              <label className={booking.label}>SERVICE</label>
              <div
                className={booking.customselectwrapper}
                ref={serviceDropdownRef}
              >
                <div
                  className={`${booking.input} ${
                    selectedService ? booking.selectedDropdown : ""
                  }`}
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                >
                  {selectedService || "Select a service"}
                </div>
                {isServiceOpen && (
                  <div className={booking.customdropdown}>
                    {loading ? (
                      <div className={booking.dropdownitem}>Loading...</div>
                    ) : (
                      services.map((service) => (
                        <div
                          key={service.id}
                          className={booking.dropdownitem}
                          onClick={() => {
                            setSelectedService(service.name.trim());
                            setSelectedServiceId(service.id);
                            setIsServiceOpen(false);
                            setServiceError?.(false); //  hide error if service is selected
                            updateBookingData({ service: service.name.trim() });
                            setFormErrors((prev) => ({ ...prev, service: "" }));
                          }}
                        >
                          {service.name}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
              {formErrors.service && (
                <p className="errorText">{formErrors.service}</p>
              )}
            </div>

            {/* SUB SERVICE */}
            <div className={booking.fieldGroup}>
              <label className={booking.label}>SUB SERVICE</label>
              <div
                className={booking.customselectwrapper}
                ref={subServiceDropdownRef}
              >
                <div
                  className={`${booking.input} ${
                    selectedSubService ? booking.selectedDropdown : ""
                  }`}
                  onClick={() => setIsSubServiceOpen(!isSubServiceOpen)}
                >
                  {selectedSubService || "Select a sub service"}
                </div>
                {isSubServiceOpen && (
                  <div className={booking.customdropdown}>
                    {selectedServiceId === null ? (
                      <div className={booking.dropdownitem}>
                        Select a service first
                      </div>
                    ) : loading ? (
                      <div className={booking.dropdownitem}>Loading...</div>
                    ) : subServices.length === 0 ? (
                      <div className={booking.dropdownitem}>
                        No subservices available
                      </div>
                    ) : (
                      subServices.map((sub) => (
                        <div
                          key={sub.id}
                          className={booking.dropdownitem}
                          onClick={() => {
                            setSelectedSubService(sub.name.trim());
                            setIsSubServiceOpen(false);
                            setFormErrors((prev) => ({
                              ...prev,
                              subServices: "",
                            }));
                          }}
                        >
                          {sub.name}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
              {formErrors.subServices && (
                <p className="errorText">{formErrors.subServices}</p>
              )}
            </div>
          </div>

          {/* category */}
          {isDeepCleaning && (
            <>
              <label className={booking.label}>CATEGORY</label>
              <div
                className={booking.customselectwrapper}
                ref={categoryDropdownRef}
              >
                <div
                  className={`${booking.input} ${
                    cleaningCategory ? booking.selectedDropdown : ""
                  }`}
                  onClick={() => setIsCategoryOpen((prev) => !prev)}
                >
                  {cleaningCategory || "Select Category"}
                </div>
                {isCategoryOpen && (
                  <div className={booking.customdropdown}>
                    {["Residential", "Commercial"].map((category) => (
                      <div
                        key={category}
                        className={booking.dropdownitem}
                        onClick={() => {
                          setCleaningCategory(
                            category as "Residential" | "Commercial"
                          );
                          setIsCategoryOpen(false);
                          setSelectedType(""); // reset type
                          setFormErrors((prev) => ({
                            ...prev,
                            cleaningCategory: "",
                          }));
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {formErrors.cleaningCategory && (
                <p className="errorText">{formErrors.cleaningCategory}</p>
              )}
            </>
          )}

          {/* TYPE */}
          {!isSpecialCleaning &&
            !isGreaseTrapCleaning &&
            !isVehicleCleaning && (
              <>
                <label className={booking.label}>TYPE</label>
                <div
                  className={booking.customselectwrapper}
                  ref={typeDropdownRef}
                >
                  <div
                    className={`${booking.input} ${
                      selectedType ? booking.selectedDropdown : ""
                    }`}
                    onClick={() => setIsTypeOpen(!isTypeOpen)}
                  >
                    {selectedType || "Select the Type"}
                  </div>
                  {isTypeOpen && (
                    <div className={booking.customdropdown}>
                      {isMaidSelected ? (
                        <>
                          <div
                            className={booking.dropdownitem}
                            onClick={() => {
                              setSelectedType("with-supplies");
                              setIsTypeOpen(false);
                              setFormErrors((prev) => ({ ...prev, type: "" }));
                            }}
                          >
                            <p className={booking.price}>
                              With supplies AED {maidWithSuppliesPrice} per hour
                              per crew crew
                            </p>
                          </div>
                          <div
                            className={booking.dropdownitem}
                            onClick={() => {
                              setSelectedType("without-supplies");
                              setIsTypeOpen(false);
                              setFormErrors((prev) => ({ ...prev, type: "" }));
                            }}
                          >
                            <p className={booking.price}>
                              Without supplies AED {maidWithoutSuppliesPrice}{" "}
                              per hour per crew
                            </p>
                          </div>
                        </>
                      ) : isDeepCleaning &&
                        cleaningCategory === "Commercial" ? (
                        ["Office", "Restaurants", "Warehouse", "Others"].map(
                          (type) => (
                            <div
                              key={type}
                              className={booking.dropdownitem}
                              onClick={() => {
                                setSelectedType(type);
                                setCleaningType(type);
                                setIsTypeOpen(false);
                                setFormErrors((prev) => ({
                                  ...prev,
                                  type: "",
                                }));
                              }}
                            >
                              {type}
                            </div>
                          )
                        )
                      ) : selectedSubService.trim().toLowerCase() ===
                        "upholstery cleaning" ? (
                        [
                          "Dining Chair / Sofa",
                          "Mattress",
                          "Carpet",
                          "Rugs",
                        ].map((type) => (
                          <div
                            key={type}
                            className={booking.dropdownitem}
                            onClick={() => {
                              handleTypeChange(type);
                              updateBookingData({ selectedType: type });
                              setIsTypeOpen(false);
                              setFormErrors((prev) => ({ ...prev, type: "" }));
                            }}
                          >
                            {type}
                          </div>
                        ))
                      ) : isDeepCleaning &&
                        cleaningCategory === "Commercial" ? (
                        ["Office", "Restaurants", "Warehouse", "Others"].map(
                          (type) => (
                            <div
                              key={type}
                              className={booking.dropdownitem}
                              onClick={() => {
                                setCleaningType(type);
                                setIsTypeOpen(false);
                                setFormErrors((prev) => ({
                                  ...prev,
                                  type: "",
                                }));
                              }}
                            >
                              {type}
                            </div>
                          )
                        )
                      ) : (
                        ["Apartment", "Townhouse", "Villa"].map((type) => (
                          <div
                            key={type}
                            className={booking.dropdownitem}
                            onClick={() => {
                              setSelectedType(type);
                              setIsTypeOpen(false);
                              setFormErrors((prev) => ({ ...prev, type: "" }));
                            }}
                          >
                            {type}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                  {formErrors.type && (
                    <p className="errorText">{formErrors.type}</p>
                  )}
                </div>
              </>
            )}
          {isDeepCleaning && cleaningCategory === "Commercial" && (
            <>
              <label className={booking.label}>AREA</label>
              <input
                type="text"
                placeholder="Enter area in square feet"
                value={squareFootage}
                onChange={(e) => {
                  setSquareFootage(e.target.value);
                  setFormErrors((prev) => ({ ...prev, squareFootage: "" }));
                }}
                className={booking.input}
                style={{ backgroundImage: "none" }}
              />
              {formErrors.squareFootage && (
                <p className="errorText">{formErrors.squareFootage}</p>
              )}
            </>
          )}

          {/* yes/no radio buttons */}
          {isDeepCleaning && cleaningCategory === "Commercial" && (
            <>
              <label className={booking.label}>SITE VISIT</label>
              <div className={booking.buttonGroup}>
                <button
                  type="button"
                  className={`${booking.yesnobuttons} ${
                    siteVisit === "yes" ? booking.selected : ""
                  }`}
                  onClick={() => setSiteVisit("yes")}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`${booking.yesnobuttons} ${
                    siteVisit === "no" ? booking.selected : ""
                  }`}
                  onClick={() => setSiteVisit("no")}
                >
                  No
                </button>
              </div>

              {siteVisit === "no" && (
                <div className={booking.formGroup}>
                  <label className={booking.label}>UPLOAD IMAGE / VIDEO</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className={booking.input}
                  />
                </div>
              )}
            </>
          )}
          {/* windows , swimming pool , chandelier */}
          {isSpecialCleaning && (
            <>
              {selectedSubService.trim().toLowerCase() ===
                "windows cleaning" && (
                <>
                  {/* SERVICE */}
                  <div className={booking.fieldGroup}>
                    <label
                      className={booking.label}
                      style={{ marginBottom: "10px" }}
                    >
                      NO OF WINDOWS
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter number of windows"
                      value={numberOfWindows}
                      onChange={(e) => {
                        setNumberOfWindows(e.target.value);
                        setFormErrors((prev) => ({
                          ...prev,
                          numberOfWindows: "",
                        }));
                      }}
                      className={booking.input}
                      style={{ backgroundImage: "none" }}
                    />

                    {formErrors.numberOfWindows && (
                      <p className="errorText">{formErrors.numberOfWindows}</p>
                    )}
                  </div>
                </>
              )}
              {selectedSubService.trim().toLowerCase() ===
                "swimming pool cleaning" && (
                <>
                  <label className={booking.label}>AREA (SQ. FT.)</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter area in square feet"
                    value={squareFootage}
                    onChange={(e) => {
                      setSquareFootage(e.target.value);
                      setFormErrors((prev) => ({ ...prev, squareFootage: "" }));
                    }}
                    className={booking.input}
                    style={{ backgroundImage: "none" }}
                  />

                  {formErrors.squareFootage && (
                    <p className="errorText">{formErrors.squareFootage}</p>
                  )}
                </>
              )}
              {selectedSubService.trim().toLowerCase() ===
                "chandelier cleaning services" && (
                <>
                  <label
                    className={booking.label}
                    style={{ marginBottom: "10px" }}
                  >
                    NUMBER OF ITEMS
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter no of items"
                    value={numberOfItems}
                    onChange={(e) => {
                      setNumberOfItems(e.target.value);
                      setFormErrors((prev) => ({ ...prev, numberOfItems: "" }));
                    }}
                    className={booking.input}
                    style={{ backgroundImage: "none" }}
                  />
                  {formErrors.numberOfItems && (
                    <p className="errorText">{formErrors.numberOfItems}</p>
                  )}
                </>
              )}

              {/* Image/Video Upload Field */}
              <label className={booking.label}>Upload Images/Videos</label>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                className={booking.input}
                onChange={(e) => {
                  handleFileChange(e);
                  setFormErrors((prev) => ({ ...prev, uploadedMedia: "" }));
                }}
                style={{ backgroundImage: "none" }}
              />
              {formErrors.uploadedMedia && (
                <p className="errorText">{formErrors.uploadedMedia}</p>
              )}
            </>
          )}

          {isMaidSelected && (
            <>
              {/* NO OF STAFF */}
              <label className={booking.label}>NO OF STAFF</label>
              <div
                className={`${booking.scrollContainer} ${booking.hideScrollbar}`}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setSelectedStaff(num),
                        updateBookingData({ staffCount: num });
                    }}
                    className={`${booking.optionButton} ${
                      selectedStaff === num ? booking.selected : ""
                    } ${booking.fixedSizeBtn}`}
                    type="button"
                  >
                    {num}
                  </button>
                ))}
              </div>
              {/* NO OF HOUR */}
              <label className={booking.label}>NO OF HOUR</label>
              <div
                className={`${booking.scrollContainer} ${booking.hideScrollbar} ${booking.hoursGap}`}
              >
                {[
                  { hour: 1, price: 39 },
                  { hour: 2, price: 35 },
                  { hour: 3, price: 33 },
                  { hour: 4, price: 40 },
                  { hour: 5, price: 30 },
                ].map(({ hour, price }) => (
                  <div key={hour} className={booking.optionWrapper}>
                    <button
                      onClick={() => {
                        setSelectedHours(hour),
                          updateBookingData({ hoursCount: hour });
                      }}
                      className={`${booking.optionButton} ${
                        selectedHours === hour ? booking.selected : ""
                      }`}
                      type="button"
                    >
                      {hour}
                    </button>
                    <span className={booking.optionLabel}>AED {price}/HR</span>
                  </div>
                ))}
              </div>
            </>
          )}
          {!isMaidSelected &&
            !isGreaseTrapCleaning &&
            !isVehicleCleaning &&
            !(isDeepCleaning && cleaningCategory === "Commercial") && (
              <>
                {/* SPECIFICS or UNITS Input */}
                {selectedService.trim().toLowerCase() === "cleaning services" &&
                selectedSubService.trim().toLowerCase() === "duct cleaning" ? (
                  <>
                    <label className={booking.label}>UNITS</label>
                    <input
                      type="number"
                      placeholder="Enter number of units"
                      value={selectedSpecific}
                      onChange={(e) => setSelectedSpecific(e.target.value)}
                      className={booking.input}
                      style={{ backgroundImage: "none" }}
                    />
                  </>
                ) : (
                  <>
                    {!isSpecialCleaning && (
                      <>
                        <label className={booking.label}>SPECIFICS</label>
                        <div
                          className={booking.customselectwrapper}
                          ref={specificDropdownRef}
                        >
                          <div
                            className={`${booking.input} ${
                              selectedSpecific ? booking.selectedDropdown : ""
                            }`}
                            onClick={() => setIsSpecificOpen(!isSpecificOpen)}
                          >
                            <p className={booking.place}>
                              <span className={booking.placeholder}>
                                {selectedSpecific || "Select Specific"}
                              </span>
                            </p>
                          </div>

                          {isSpecificOpen && (
                            <div className={booking.customdropdown}>
                              {selectedSubService.trim().toLowerCase() ===
                                "upholstery cleaning" && (
                                <>
                                  {selectedType.trim().toLowerCase() ===
                                    "dining chair / sofa" &&
                                    Array.from(
                                      { length: 10 },
                                      (_, i) => i + 1
                                    ).map((count) => (
                                      <div
                                        key={count}
                                        className={booking.dropdownitem}
                                        onClick={() => {
                                          setSelectedSpecific(`${count}`);
                                          setFormErrors((prev) => ({
                                            ...prev,
                                            specific: "",
                                          }));
                                          setIsSpecificOpen(false);
                                        }}
                                      >
                                        {count}
                                      </div>
                                    ))}
                                  {selectedType === "Mattress" &&
                                    [
                                      "Single",
                                      "Double King",
                                      "Double Queen",
                                    ].map((price) => (
                                      <div
                                        key={price}
                                        className={booking.dropdownitem}
                                        onClick={() => {
                                          setSelectedSpecific(price);
                                          setFormErrors((prev) => ({
                                            ...prev,
                                            specific: "",
                                          }));
                                          setIsSpecificOpen(false);
                                        }}
                                      >
                                        {price}
                                      </div>
                                    ))}
                                  {selectedType.trim().toLowerCase() ===
                                    "rugs" &&
                                    ["Small", "medium", "large"].map((size) => {
                                      // Find the corresponding price from your upholstery data
                                      const rugItem = upholsteryRates.find(
                                        (item) =>
                                          item.category === "upholstery" &&
                                          item.type === "rugs" &&
                                          item.specification?.toLowerCase() ===
                                            size.toLowerCase()
                                      );

                                      return (
                                        <div
                                          key={size}
                                          className={booking.dropdownitem}
                                          onClick={() => {
                                            setSelectedSpecific(size);
                                            setFormErrors((prev) => ({
                                              ...prev,
                                              specific: "",
                                            }));
                                            setIsSpecificOpen(false);
                                            // Optionally, you can also set the price somewhere
                                            if (rugItem)
                                              setSelectedDetail(
                                                `${size} - ${rugItem.price} AED`
                                              );
                                          }}
                                        >
                                          {size}{" "}
                                          {rugItem
                                            ? `- ${rugItem.price} AED`
                                            : ""}
                                        </div>
                                      );
                                    })}

                                  {selectedType === "Carpet" &&
                                    Array.from(
                                      { length: 10 },
                                      (_, i) => i + 1
                                    ).map((count) => (
                                      <div
                                        key={count}
                                        className={booking.dropdownitem}
                                        onClick={() => {
                                          setSelectedSpecific(count.toString());
                                          setCarpetCount(count);
                                          setCarpetAreas(Array(count).fill(""));
                                          setFormErrors((prev) => ({
                                            ...prev,
                                            specific: "",
                                          }));
                                          setIsSpecificOpen(false);
                                        }}
                                      >
                                        {count}
                                      </div>
                                    ))}
                                  {formErrors.carpetAreas && (
                                    <p className="errorText">
                                      {formErrors.carpetAreas}
                                    </p>
                                  )}

                                  {selectedType === "Rugs" &&
                                    serviceOptions
                                      .filter(
                                        (item: any) =>
                                          item.type.toLowerCase() === "rugs" &&
                                          item.category.toLowerCase() === "deep"
                                      )
                                      .map((option: any) => (
                                        <div
                                          key={option.id}
                                          className={booking.dropdownitem}
                                          onClick={() => {
                                            setSelectedSpecific(
                                              option.specification
                                            ); // e.g., Small / Medium / Large
                                            setIsSpecificOpen(false);
                                            setFormErrors((prev) => ({
                                              ...prev,
                                              specific: "",
                                            }));

                                            // Dynamically calculate and set price
                                            calculatePrice(
                                              "Rugs",
                                              option.specification,
                                              itemCount, // number of rugs selected
                                              serviceOptions
                                            );

                                            // Also set the selected detail text
                                            setSelectedDetail(
                                              `${option.specification} - ${option.price} AED`
                                            );
                                          }}
                                        >
                                          {option.specification} – AED{" "}
                                          {option.price}
                                        </div>
                                      ))}
                                </>
                              )}
                              {/* ✅ Regular logic for Apartment, Townhouse, Villa */}
                              {selectedSubService.trim().toLowerCase() !==
                                "upholstery cleaning" && (
                                <>
                                  {selectedType === "Apartment" &&
                                    [
                                      "Studio",
                                      "1BHK Apartment",
                                      "2BHK Apartment",
                                      "3BHK Apartment",
                                    ].map((option) => (
                                      <div
                                        key={option}
                                        className={booking.dropdownitem}
                                        onClick={() => {
                                          setSelectedSpecific(option); // ✅ save the chosen option
                                          setIsSpecificOpen(false); // ✅ close dropdown
                                          setFormErrors((prev) => ({
                                            // ✅ clear error if any
                                            ...prev,
                                            specific: "",
                                          }));
                                        }}
                                      >
                                        {option}
                                      </div>
                                    ))}
                                  {selectedType === "Townhouse" &&
                                    ["2BHK", "3BHK", "4BHK"].map((option) => (
                                      <div
                                        key={option}
                                        className={booking.dropdownitem}
                                        onClick={() => {
                                          setSelectedSpecific(option);
                                          setIsSpecificOpen(false);
                                          // setFormErrors(prev => ({ ...prev, specific: "" }));
                                        }}
                                      >
                                        {option}
                                      </div>
                                    ))}
                                  {selectedType === "Villa" &&
                                    (selectedService.trim().toLowerCase() ===
                                    "cleaning services"
                                      ? [
                                          "2BHK",
                                          "3BHK",
                                          "4BHK",
                                          "5BHK",
                                          "6BHK",
                                          "7BHK",
                                        ]
                                      : ["2BHK", "3BHK", "4BHK", "5BHK", "6BHK"]
                                    ).map((option) => (
                                      <div
                                        key={option}
                                        className={booking.dropdownitem}
                                        onClick={() => {
                                          setSelectedSpecific(option);
                                          setIsSpecificOpen(false);
                                          // setFormErrors(prev => ({ ...prev, specific: "" }));
                                        }}
                                      >
                                        {option}
                                      </div>
                                    ))}
                                  {![
                                    "Apartment",
                                    "Townhouse",
                                    "Villa",
                                  ].includes(selectedType) && (
                                    <div className={booking.dropdownitem}>
                                      Please select a type first
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                        {/* cleaning services -> deep cleaning -> residential ->  Apartment*/}
                        {selectedService.toLowerCase() ===
                          "cleaning services" &&
                          selectedSubService.toLowerCase() ===
                            "deep cleaning" &&
                          cleaningCategory === "Residential" &&
                          selectedType === "Apartment" && (
                            <div className={booking.formGroup}>
                              <label className={booking.label}>
                                ADDITIONAL SERVICES
                              </label>
                              <div className={booking.customselectwrapper}>
                                <div
                                  className={`${booking.input} ${
                                    residentialCleanType
                                      ? booking.selectedDropdown
                                      : ""
                                  }`}
                                  onClick={() =>
                                    setIsResidentialTypeOpen(
                                      !isResidentialTypeOpen
                                    )
                                  }
                                >
                                  {residentialCleanType ||
                                    "Additional Services"}
                                </div>
                                {isResidentialTypeOpen && (
                                  <div className={booking.customdropdown}>
                                    {[
                                      "Move In",
                                      "Move Out",
                                      "Post Construction",
                                    ].map((option) => (
                                      <div
                                        key={option}
                                        className={booking.dropdownitem}
                                        onClick={() => {
                                          setResidentialCleanType(option);
                                          setIsResidentialTypeOpen(false);
                                          updateBookingData({
                                            residentialCleanType: option,
                                          });
                                          // setFormErrors(prev => ({ ...prev, residentialCleanType: "" }));
                                        }}
                                      >
                                        {option}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                      </>
                    )}
                    {formErrors.specific && (
                      <p className="errorText">{formErrors.specific}</p>
                    )}
                  </>
                )}
                {/* Carpet Sizes */}
                <div className={booking.cont}>
                  {selectedSubService.trim().toLowerCase() ===
                    "upholstery cleaning" &&
                    selectedType === "Carpet" &&
                    carpetCount > 0 && (
                      <div className={booking.carpetGroup}>
                        <label className={booking.label}>
                          Carpet Sizes (in sq ft)
                        </label>
                        <div
                          className={`${booking.carpetWrap} ${
                            carpetCount === 1 ? booking.singleCarpetWrap : ""
                          }`}
                        >
                          {Array.from({ length: carpetCount }).map((_, i) => (
                            <div
                              key={i}
                              className={`${booking.carpetInputCard} ${
                                carpetCount === 1 ? booking.fullWidth : ""
                              }`}
                            >
                              <label className={booking.carpetLabel}>
                                Carpet {i + 1}
                              </label>
                              <input
                                type="number"
                                min="1"
                                value={carpetAreas[i] || ""}
                                onChange={(e) => {
                                  const updated = [...carpetAreas];
                                  updated[i] = e.target.value;
                                  setCarpetAreas(updated);
                                  setFormErrors((prev) => ({
                                    ...prev,
                                    carpetAreas: "",
                                  }));
                                }}
                                placeholder="sq feets"
                                className={booking.input}
                                style={{ backgroundImage: "none" }}
                              />
                              {formErrors.carpetAreas && (
                                <p className="errorText">
                                  {formErrors.carpetAreas}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
                {/* no of items in upholstery types except carpet */}
                {selectedSubService.trim().toLowerCase() ===
                  "upholstery cleaning" &&
                  selectedType &&
                  selectedType !== "Carpet" &&
                  selectedType !== "Dining Chair / Sofa" && (
                    <div className={booking.formGroup}>
                      <label className={booking.label}>No of Items</label>

                      <input
                        type="number"
                        min="1"
                        placeholder="Enter number of items"
                        value={
                          upholsteryItemCount === 0 ? "" : upholsteryItemCount
                        } // show empty if 0
                        onChange={(e) => {
                          const rawValue = e.target.value;

                          if (rawValue === "") {
                            setUpholsteryItemCount(0);
                            return;
                          }

                          const value = Number(rawValue);
                          if (value >= 1) {
                            setUpholsteryItemCount(value);
                          }

                          setFormErrors((prev) => ({
                            ...prev,
                            upholsteryItemCount: "",
                          }));
                        }}
                        className={booking.input}
                        style={{ backgroundImage: "none" }}
                      />

                      {formErrors.upholsteryItemCount && (
                        <p className="errorText">
                          {formErrors.upholsteryItemCount}
                        </p>
                      )}
                    </div>
                  )}
                {/* DETAILS */}
                {!isSpecialCleaning &&
                  !isGreaseTrapCleaning &&
                  !isVehicleCleaning && (
                    <>
                      <label className={booking.label}>DETAILS</label>
                      <div
                        className={booking.customselectwrapper}
                        ref={detailDropdownRef}
                      >
                        <div
                          className={`${booking.input} ${
                            selectedDetail ? booking.selectedDropdown : ""
                          }`}
                          onClick={() => setIsDetailOpen(!isDetailOpen)}
                        >
                          {selectedDetail || "Select Detail"}
                        </div>
                        {isDetailOpen && (
                          <div className={booking.customdropdown}>
                            {selectedService.trim().toLowerCase() ===
                            "pest control" ? (
                              selectedDetail ? (
                                <div
                                  className={booking.dropdownitem}
                                  onClick={() => setIsDetailOpen(false)}
                                >
                                  {selectedDetail}
                                </div>
                              ) : (
                                <div className={booking.dropdownitem}>
                                  Please select Type and Specific
                                </div>
                              )
                            ) : selectedSubService.trim().toLowerCase() ===
                                "upholstery cleaning" && selectedSpecific ? (
                              selectedType === "Rugs" ? (
                                <div
                                  className={booking.dropdownitem}
                                  onClick={() => {
                                    // Find the rug price from API data
                                    const rugItem = rugsPrices.find(
                                      (item) =>
                                        item.specification?.toLowerCase() ===
                                        selectedSpecific?.toLowerCase()
                                    );
                                    const price = rugItem ? rugItem.price : 0;
                                    const totalPrice =
                                      price * (upholsteryItemCount || 1);

                                    setSelectedDetail(`${totalPrice} AED`);
                                    setIsDetailOpen(false);
                                  }}
                                >
                                  {(() => {
                                    const rugItem = rugsPrices.find(
                                      (item) =>
                                        item.specification?.toLowerCase() ===
                                        selectedSpecific?.toLowerCase()
                                    );
                                    return (
                                      (rugItem?.price || 0) *
                                      (upholsteryItemCount || 1)
                                    );
                                  })()}{" "}
                                  AED
                                </div>
                              ) : selectedType === "Mattress" ? (
                                <div
                                  className={booking.dropdownitem}
                                  onClick={() => {
                                    // Find the mattress price from API data
                                    const mattressItem = mattressPrices.find(
                                      (item) =>
                                        item.specification?.toLowerCase() ===
                                        selectedSpecific?.toLowerCase()
                                    );
                                    const price = mattressItem
                                      ? mattressItem.price
                                      : 0;
                                    const totalPrice =
                                      price * (upholsteryItemCount || 1);

                                    setSelectedDetail(
                                      `${selectedSpecific} – ${totalPrice} AED`
                                    );
                                    setIsDetailOpen(false);
                                  }}
                                >
                                  {/* Dropdown shows total price */}
                                  {selectedSpecific} –{" "}
                                  {(() => {
                                    const mattressItem = mattressPrices.find(
                                      (item) =>
                                        item.specification?.toLowerCase() ===
                                        selectedSpecific?.toLowerCase()
                                    );
                                    return (
                                      (mattressItem?.price || 0) *
                                      (upholsteryItemCount || 1)
                                    );
                                  })()}
                                  AED
                                </div>
                              ) : selectedType ? (
                                selectedType === "Dining Chair / Sofa" ? (
                                  <div
                                    className={booking.dropdownitem}
                                    onClick={() => {
                                      const count = selectedSpecific
                                        ? parseInt(selectedSpecific)
                                        : 1;
                                      const totalPrice =
                                        diningChairPrice * count; // Use diningChairPrice instead of sofaUnitPrice
                                      setSelectedDetail(`${totalPrice} AED`);
                                      setIsDetailOpen(false);
                                      // Reset selections
                                    }}
                                  >
                                    <p>
                                      {diningChairPrice * // Use diningChairPrice instead of sofaUnitPrice
                                        (selectedSpecific
                                          ? parseInt(selectedSpecific)
                                          : 1)}{" "}
                                      AED
                                    </p>
                                  </div>
                                ) : selectedType === "Carpet" ? (
                                  <div
                                    className={booking.dropdownitem}
                                    onClick={() => {
                                      // Sum all carpet areas
                                      const totalArea = carpetAreas.reduce(
                                        (sum, area) => {
                                          return sum + (parseFloat(area) || 0);
                                        },
                                        0
                                      );

                                      const totalPrice =
                                        carpetPricePerSqm * totalArea; // Calculate total price
                                      setSelectedDetail(`${totalPrice} AED`); // Show total price in details
                                      setIsDetailOpen(false);

                                      // setSelectedType("");
                                      // setSelectedSubService("");
                                      // setSelectedSpecific("");
                                    }}
                                  >
                                    <p>
                                      {carpetPricePerSqm *
                                        carpetAreas.reduce(
                                          (sum, area) =>
                                            sum + (parseFloat(area) || 0),
                                          0
                                        )}{" "}
                                      AED
                                    </p>
                                  </div>
                                ) : (
                                  <div
                                    className={booking.dropdownitem}
                                    onClick={() => {
                                      const count = selectedSpecific
                                        ? parseInt(selectedSpecific)
                                        : 1;
                                      const totalPrice = sofaUnitPrice * count;
                                      setSelectedDetail(`${totalPrice} AED`);
                                    }}
                                  >
                                    {sofaUnitPrice *
                                      (selectedSpecific
                                        ? parseInt(selectedSpecific)
                                        : 1)}{" "}
                                    AED
                                  </div>
                                )
                              ) : (
                                <div className={booking.dropdownitem}>
                                  <p>Please select type first</p>
                                </div>
                              )
                            ) : (
                              <>
                                {/* Apartment Details */}
                                {selectedType === "Apartment" &&
                                  selectedSpecific === "Studio" && (
                                    <>
                                      {residentialPrices
                                        .filter(
                                          (item) =>
                                            item.type === "Apartment" &&
                                            item.specification === "Studio"
                                        )
                                        .map((item, index) => (
                                          <div
                                            key={index}
                                            className={booking.dropdownitem}
                                            onClick={() => {
                                              setSelectedDetail(
                                                `${item.details} - ${item.price} AED`
                                              );
                                              setIsDetailOpen(false);
                                            }}
                                          >
                                            {item.details} - {item.price} AED
                                          </div>
                                        ))}
                                    </>
                                  )}
                                {selectedType === "Apartment" &&
                                  selectedSpecific === "1BHK Apartment" && (
                                    <>
                                      {residentialPrices
                                        .filter(
                                          (item) =>
                                            item.type === "Apartment" &&
                                            item.specification === "1BHK"
                                        )
                                        .map((item, index) => (
                                          <div
                                            key={index}
                                            className={booking.dropdownitem}
                                            onClick={() => {
                                              setSelectedDetail(
                                                `${item.details} - ${item.price} AED`
                                              );
                                              setIsDetailOpen(false);
                                            }}
                                          >
                                            {item.details} - {item.price} AED
                                          </div>
                                        ))}
                                    </>
                                  )}
                                {selectedType === "Apartment" &&
                                  selectedSpecific === "2BHK Apartment" && (
                                    <>
                                      {residentialPrices
                                        .filter(
                                          (item) =>
                                            item.type === "Apartment" &&
                                            item.specification === "2BHK"
                                        )
                                        .map((item, index) => (
                                          <div
                                            key={index}
                                            className={booking.dropdownitem}
                                            onClick={() => {
                                              setSelectedDetail(
                                                `${item.details} - ${item.price} AED`
                                              );
                                              setIsDetailOpen(false);
                                            }}
                                          >
                                            {item.details} - {item.price} AED
                                          </div>
                                        ))}
                                    </>
                                  )}
                                {selectedType === "Apartment" &&
                                  selectedSpecific === "3BHK Apartment" && (
                                    <>
                                      {residentialPrices
                                        .filter(
                                          (item) =>
                                            item.type === "Apartment" &&
                                            item.specification === "3BHK"
                                        )
                                        .map((item, index) => (
                                          <div
                                            key={index}
                                            className={booking.dropdownitem}
                                            onClick={() => {
                                              setSelectedDetail(
                                                `${item.details} - ${item.price} AED`
                                              );
                                              setIsDetailOpen(false);
                                            }}
                                          >
                                            {item.details} - {item.price} AED
                                          </div>
                                        ))}
                                    </>
                                  )}
                                {/* Townhouse Details */}
                                {selectedType === "Townhouse" &&
                                  selectedSpecific === "2BHK" && (
                                    <>
                                      {residentialPrices
                                        .filter(
                                          (item) =>
                                            item.type === "Townhouse" &&
                                            item.specification === "2BHK"
                                        )
                                        .map((item, index) => (
                                          <div
                                            key={index}
                                            className={booking.dropdownitem}
                                            onClick={() => {
                                              setSelectedDetail(
                                                `${item.details} - ${item.price} AED`
                                              );
                                              setIsDetailOpen(false);
                                            }}
                                          >
                                            {item.details} - {item.price} AED
                                          </div>
                                        ))}
                                    </>
                                  )}
                                {selectedType === "Townhouse" &&
                                  selectedSpecific === "3BHK" && (
                                    <>
                                      {residentialPrices
                                        .filter(
                                          (item) =>
                                            item.type === "Townhouse" &&
                                            item.specification === "3BHK"
                                        )
                                        .map((item, index) => (
                                          <div
                                            key={index}
                                            className={booking.dropdownitem}
                                            onClick={() => {
                                              setSelectedDetail(
                                                `${item.details} - ${item.price} AED`
                                              );
                                              setIsDetailOpen(false);
                                            }}
                                          >
                                            {item.details} - {item.price} AED
                                          </div>
                                        ))}
                                    </>
                                  )}
                                {selectedType === "Townhouse" &&
                                  selectedSpecific === "4BHK" && (
                                    <>
                                      {residentialPrices
                                        .filter(
                                          (item) =>
                                            item.type === "Townhouse" &&
                                            item.specification === "4BHK"
                                        )
                                        .map((item, index) => (
                                          <div
                                            key={index}
                                            className={booking.dropdownitem}
                                            onClick={() => {
                                              setSelectedDetail(
                                                `${item.details} - ${item.price} AED`
                                              );
                                              setIsDetailOpen(false);
                                            }}
                                          >
                                            {item.details} - {item.price} AED
                                          </div>
                                        ))}
                                    </>
                                  )}
                                {/* Villa Details */}
                                {[
                                  "2BHK",
                                  "3BHK",
                                  "4BHK",
                                  "5BHK",
                                  "6BHK",
                                  "7BHK",
                                ].includes(selectedSpecific) &&
                                  selectedType === "Villa" && (
                                    <>
                                      {residentialPrices
                                        .filter(
                                          (item) =>
                                            item.type === "Villa" &&
                                            item.specification ===
                                              selectedSpecific
                                        )
                                        .map((item, index) => (
                                          <div
                                            key={index}
                                            className={booking.dropdownitem}
                                            onClick={() => {
                                              setSelectedDetail(
                                                `${item.details} - ${item.price} AED`
                                              );
                                              setIsDetailOpen(false);
                                            }}
                                          >
                                            {item.details} - {item.price} AED
                                          </div>
                                        ))}
                                    </>
                                  )}
                              </>
                            )}
                            {/* Default fallback */}
                            {selectedSubService?.trim().toLowerCase() ===
                              "duct cleaning" && (
                              <div
                                className={booking.dropdownitem}
                                onClick={() => {
                                  const units = Number(selectedSpecific) || 0;
                                  const total = ductPrice * units;
                                  setSelectedDetail(`AED ${total}`);
                                  setIsDetailOpen(false);
                                }}
                              >
                                {selectedSpecific
                                  ? `Total: AED ${
                                      ductPrice *
                                      (Number(selectedSpecific) || 0)
                                    }`
                                  : `Please enter units`}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                  )}
              </>
            )}
        </div>

        {isGreaseTrapCleaning && (
          <div className={booking.formGroup}>
            {/* Image/Video Upload Field */}
            <label className={booking.label}>Upload Images/Videos</label>
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              className={booking.input}
              onChange={(e) => {
                handleFileChange(e);
                setFormErrors((prev) => ({ ...prev, uploadedMedia: "" }));
              }}
            />
            {formErrors.uploadedMedia && (
              <p className="errorText">{formErrors.uploadedMedia}</p>
            )}
          </div>
        )}
        {isVehicleCleaning && (
          <>
            <div className={booking.formGroup}>
              <label className={booking.label}>Make</label>
              <input
                type="text"
                value={make}
                onChange={(e) => {
                  setMake(e.target.value);
                  setFormErrors((prev) => ({ ...prev, make: "" }));
                }}
                className={booking.input}
                style={{ backgroundImage: "none" }}
              />
              {formErrors.make && (
                <p className="errorText">{formErrors.make}</p>
              )}
            </div>
            <div className={booking.formGroup}>
              <label className={booking.label}>Model</label>
              <input
                type="text"
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                  setFormErrors((prev) => ({ ...prev, model: "" }));
                }}
                className={booking.input}
                style={{ backgroundImage: "none" }}
              />
              {formErrors.model && (
                <p className="errorText">{formErrors.model}</p>
              )}
            </div>
            {/* </div> */}

            <div className={booking.formGroup}>
              <label className={booking.label}>Variant</label>
              <input
                type="text"
                value={variant}
                onChange={(e) => {
                  setVariant(e.target.value);
                  setFormErrors((prev) => ({ ...prev, variant: "" }));
                }}
                className={booking.input}
                style={{ backgroundImage: "none" }}
              />
              {formErrors.variant && (
                <p className="errorText">{formErrors.variant}</p>
              )}
            </div>

            <div className={booking.formGroup}>
              <label className={booking.label}>Upload Images/Videos</label>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                className={booking.input}
                style={{ backgroundImage: "none" }}
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    const fileWithPaths = Array.from(files).map((file) => ({
                      name: file.name,
                      previewUrl: URL.createObjectURL(file),
                      file: file,
                    }));

                    updateBookingData({
                      uploadedMedia: [
                        ...(bookingData.uploadedMedia || []),
                        ...fileWithPaths,
                      ],
                    });
                    setFormErrors((prev) => ({ ...prev, uploadedMedia: "" }));
                  }
                }}
              />
              {formErrors.uploadedMedia && (
                <p className="errorText">{formErrors.uploadedMedia}</p>
              )}
            </div>
          </>
        )}
        {/* COUPON SECTION */}
        {[
          "Maid Services / General Services",
          "Deep Cleaning",
          "Upholstery Cleaning",
          "Duct Cleaning",
          "Grease Trap Cleaning",
        ].includes(selectedSubService.trim()) &&
          !(
            selectedSubService.trim() === "Deep Cleaning" &&
            cleaningCategory === "Commercial"
          ) && (
            <>
              <div className={booking.formGroup}>
                <div className={booking.couponRow}>
                  <input
                    type="text"
                    placeholder="Enter coupon"
                    value={discountInput}
                    onChange={(e) => setDiscountInput(e.target.value)}
                    className={booking.couponinput}
                  />
                  <button
                    className={booking.applybtn}
                    type="button"
                    onClick={handleApply}
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* SNACKBAR FOR COUPON MESSAGES */}
              {snackbar && (
                <Snackbar
                  message={snackbar.message}
                  type={snackbar.type}
                  onClose={() => setSnackbar(null)}
                />
              )}
            </>
          )}
        {/* FREQUENCY */}
        <div className={booking.formGroup}>
          <label className={booking.label}>
            How often do you need cleaning?
          </label>
          {["Once", "Weekly", "Multiple times a week"].map((freq) => (
            <button
              key={freq}
              type="button"
              onClick={() => {
                setSelectedFreq(freq);
                updateBookingData({ frequency: freq });
              }}
              className={`${booking.daysoption} ${
                selectedFreq === freq ? booking.selected : ""
              }`}
            >
              {freq === "Weekly" ? (
                <div className={booking.labelRow}>
                  <span className={booking.freqText}>Weekly</span>
                  <div className={booking.badgeGroup}>
                    <span className={booking.badgePopular}>Popular</span>
                    <span className={booking.badgeDiscount}>
                      10% off per visit
                    </span>
                  </div>
                </div>
              ) : freq === "Multiple times a week" ? (
                <div className={booking.labelRow}>
                  <span className={booking.freqText}>
                    Multiple times a week
                  </span>
                  <span className={booking.badgeDiscount}>
                    15% off per visit
                  </span>
                </div>
              ) : (
                <span>{freq}</span>
              )}
              {(freq === "Weekly" || freq === "Multiple times a week") && (
                <div className={booking.bulletLine}>
                  • Get the same cleaner each time
                  <br />• Re-schedule easily through the app{" "}
                </div>
              )}
              {freq === "Once" && (
                <div className={booking.bulletLine}>
                  • Book a one time cleaning session
                </div>
              )}
            </button>
          ))}
        </div>
        {/* MATERIALS */}
        <div className={booking.row}>
          <label className={booking.endlabel}>
            Do you need cleaning materials?
          </label>
          <label className={booking.subLabel}>
            An additional charge of AED 10/hr applies for cleaning materials.
          </label>
        </div>
        <div className={booking.buttonGroup}>
          <button
            className={`${booking.yesnobuttons} ${
              selected === "no" ? booking.selected : ""
            }`}
            onClick={() => {
              setSelected("no");
              updateBookingData({ cleaningMaterials: "no" });
            }}
          >
            {" "}
            No{" "}
          </button>
          <button
            className={`${booking.yesnobuttons} ${
              selected === "yes" ? booking.selected : ""
            }`}
            onClick={() => {
              setSelected("yes"); // or "no"
              updateBookingData({ cleaningMaterials: "yes" });
            }}
          >
            {" "}
            Yes{" "}
          </button>
        </div>
        {/* SPECIAL INSTRUCTIONS */}
        <div className={booking.row}>
          <label className={booking.endlabel}>
            Do you have any special instructions?
          </label>
          <label className={booking.subLabel}>
            Example: Pet at home, carpet area, etc.
          </label>{" "}
        </div>
        <textarea
          placeholder="Please mention"
          className={booking.box}
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};
export default Bookings;

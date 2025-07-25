"use client";
import React, { useState, useEffect, useRef } from "react";
import booking from "./styles/AddBooking/booking.module.css";
import { useService } from "@/context/allservices";
import { useBooking } from "@/context/BookingContext";

type BookingsProps = {
  serviceError: boolean;
};
// const Bookings: React.FC<BookingsProps> = ({ serviceError }) => {
const Bookings: React.FC<{ serviceError?: boolean }> = ({ serviceError }) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { updateBookingData, updateBillingData, bookingData } = useBooking();
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedSpecific, setSelectedSpecific] = useState<string>("");
  const [selectedDetail, setSelectedDetail] = useState<string>("");
  const [selectedFreq, setSelectedFreq] = useState("Once"); // default selected

  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);  // No of staff
  const [selectedHours, setSelectedHours] = useState<number | null>(null);  // No of hours

  const [selected, setSelected] = useState<"yes" | "no" | null>("no"); // cleaning material yes/no
  const [specialInstructions, setSpecialInstructions] = useState<string>(""); // textarea input

  const [deepCleaningCategory, setDeepCleaningCategory] = useState<"Residential" | "Commercial" | "">("");
  const [squareFootage, setSquareFootage] = useState<string>("");  // For Commercial

  const [siteVisit, setSiteVisit] = useState<"yes" | "no" | null>("no"); // Site visit option
  const [uploadedFiles, setUploadedFiles] = useState<FileList | null>(null); // file uploads

  const [specialInput, setSpecialInput] = useState<string>("");
  const [numberOfWindows, setNumberOfWindows] = useState<string>("");
  // const [squareFeet, setSquareFeet] = useState<string>("");
  const [numberOfItems, setNumberOfItems] = useState<string>("");

  const [carpetCount, setCarpetCount] = useState<number>(0);
  const [carpetAreas, setCarpetAreas] = useState<string[]>([]);

  const [upholsteryItemCount, setUpholsteryItemCount] = useState<number>(0);
  const [residentialCleanType, setResidentialCleanType] = useState<string>(""); // for Move-in/out

  const { setBillingData } = useBooking();

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
  const specialCleaningTypes = ["windows cleaning", "swimming pool cleaning", "chandelier cleaning services"];
  const isSpecialCleaning = specialCleaningTypes.includes(selectedSubService.trim().toLowerCase());
  const isMaidSelected = selectedSubService.trim().toLowerCase() === "maid services / general services";
  const isDeepCleaning = selectedService.trim().toLowerCase() === "cleaning services" && selectedSubService.trim().toLowerCase() === "deep cleaning";

  //Vehicle cleaning
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [variant, setVariant] = useState<string>("");

  const [cleaningCategory, setCleaningCategory] = useState<string>("");
const [cleaningType, setCleaningType] = useState<string>("");
const [cleaningArea, setCleaningArea] = useState<string>("");

  const isGreaseTrapCleaning =
    selectedService?.toLowerCase() === "cleaning services" &&
    selectedSubService?.toLowerCase() === "grease trap cleaning services";

  const isVehicleCleaning =
    selectedService?.toLowerCase() === "cleaning services" &&
    selectedSubService?.toLowerCase() === "vehicle cleaning";
  // Service context
  const { services, subServices, fetchServices, fetchSubServices, loading } = useService();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const uploaded = Array.from(files).map((file) => ({
      name: file.name,
      previewUrl: URL.createObjectURL(file),
      file: file, // ✅ store the actual File
    }));

    updateBookingData({
      uploadedMedia: [...(bookingData.uploadedMedia || []), ...uploaded],
    });
  };
  // mouse dropdown behaviour
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(target)) {
        setIsServiceOpen(false);
      }
      if (subServiceDropdownRef.current && !subServiceDropdownRef.current.contains(target)) {
        setIsSubServiceOpen(false);
      }
      if (typeDropdownRef.current && !typeDropdownRef.current.contains(target)) {
        setIsTypeOpen(false);
      }
      if (specificDropdownRef.current && !specificDropdownRef.current.contains(target)) {
        setIsSpecificOpen(false);
      }

      if (detailDropdownRef.current && !detailDropdownRef.current.contains(target)) {
        setIsDetailOpen(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(target)) {
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
    setSelectedType("");
    setSelectedHours(null);
    setSelectedStaff(null);
    setSelectedSpecific("");
    setSelectedDetail("");
    setSquareFootage("");
    setUpholsteryItemCount(0);
    setSpecialInput("")
    setNumberOfWindows("");
    // setSquareFeet("");
    setNumberOfItems("");
    setDeepCleaningCategory("")
    setSiteVisit(null)
    setResidentialCleanType("");
    setIsResidentialTypeOpen(false);
  }, [selectedSubService]);

  useEffect(() => {
    setCarpetCount(0);
    setCarpetAreas([]);
    setSelectedSpecific("");
  }, [selectedType]);

  useEffect(() => {
    const service = selectedService.trim().toLowerCase();
    const subservice = selectedSubService.trim().toLowerCase();
    const type = selectedType.trim().toLowerCase();
    const specific = selectedSpecific.trim().toLowerCase();

    let key = '';
    let price = '';

    // Cleaning Services → Duct Cleaning
    if (service === 'cleaning services' && subservice === 'duct cleaning') {
      const ductMap: Record<string, string> = {
        "apartment|studio": "350 AED",
        "apartment|1bhk": "450 AED",
        "apartment|2bhk": "750 AED",
        "apartment|3bhk": "1200 AED",
        "townhouse|2bhk": "1200 AED",
        "townhouse|3bhk": "1500 AED",
        "townhouse|4bhk": "1800 AED",
      };
      key = `${type}|${specific.replace(" apartment", "")}`;
      price = ductMap[key] || "";
    }
    //  Pest Control
    else if (service === 'pest control') {
      const pestMap: Record<string, string> = {
        "apartment|studio apartment": "225 AED",
        "apartment|1bhk apartment": "275 AED",
        "apartment|2bhk apartment": "350 AED",
        "townhouse|2bhk": "425 AED",
        "townhouse|3bhk": "500 AED",
        "townhouse|4bhk": "575 AED",
        "villa|2bhk": "425 AED",
        "villa|3bhk": "500 AED",
        "villa|4bhk": "600 AED",
        "villa|5bhk": "700 AED",
        "villa|6bhk": "750 AED",
      };
      key = `${type}|${specific}`;
      price = pestMap[key] || "";
    }
    // Cleaning Services → Upholstery Cleaning
    else if (subservice === 'upholstery cleaning') {
      const upholsteryMap: Record<string, string> = {
        "dining chair / sofa|per chair / seater": "29 AED per chair / seater",
        "mattress|single": "179 AED",
        "mattress|double queen": "279 AED",
        "mattress|double king": "319 AED",
        "carpet|per sq m": "35 AED",
        "rugs|small": "79 AED",
        "rugs|medium": "119 AED",
        "rugs|large": "199 AED",
      };
      const normalizedType = type.trim().toLowerCase();
      const normalizedSpecific = specific.trim().toLowerCase();
      const key = `${normalizedType}|${normalizedSpecific}`;
      price = upholsteryMap[key] || "";
    }
    // Set the selected detail if found
    setSelectedDetail(price);
  }, [selectedService, selectedSubService, selectedType, selectedSpecific]);

  useEffect(() => {
    updateBookingData({ frequency: "Once" });
  }, []);

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
      deepCleaningCategory,
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
    cleaningArea,
    });
  }, [
    selectedService,
    selectedSubService,
    selectedType,
    selectedSpecific,
    selectedDetail,
    selectedStaff,
    selectedHours,
    deepCleaningCategory,
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
    make, model, variant, uploadedFiles,
    cleaningCategory, cleaningType, cleaningArea,
  ]);
  // updateBillingData
  useEffect(() => {
    if (!selectedDetail) return;
    const price = parseFloat(selectedDetail.replace(/[^\d.]/g, '')) || 0;
    const discountAmount = 0;
    const taxAmount = 0;
    const totalAmount = price + taxAmount;

    updateBillingData({
      appointmentValue: price,
      discountAmount,
      taxAmount,
      totalAmount,
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
    const category = deepCleaningCategory?.toLowerCase() || "";
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
      deepCleaningCategory,
      skipPaymentStep: shouldSkip, // this is the flag BookingLayout will use
    }));
  }, [selectedSubService, deepCleaningCategory]);

  return (
    <div className={booking.container}>
      <div className={booking.sectionSpacing}>
        <div className={booking.header}>
          <h1 className={booking.title}>Booking</h1>
        </div>
        <div className={booking.group}>
          {/* Coupon */}
          <div className={booking.formGroup}>
            <div className={booking.couponRow}>
              <input
                type="text"
                placeholder="Enter coupon"
                className={booking.couponinput}
              />
              <button className={booking.applybtn} type="button">Apply</button>
            </div>
          </div>

          <div className={booking.cont}>
            {/* SERVICE */}
            <div className={booking.fieldGroup}>
              <label className={booking.label}>SERVICE</label>
              <div className={booking.customselectwrapper} ref={serviceDropdownRef}>
                <div
                  className={`${booking.input} ${selectedService ? booking.selectedDropdown : ""}`}
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
                            updateBookingData({ service: service.name.trim() }); 
                          }}>
                          {service.name}
                        </div>
                      )))}
                  </div>)}
              </div>
              {serviceError && (
                <p style={{ color: 'red', marginTop: '5px', fontSize: '14px' }}>
                  Service is required.
                </p>
              )}

            </div>

            {/* SUB SERVICE */}
            <div className={booking.fieldGroup}>
              <label className={booking.label}>SUB SERVICE</label>
              <div className={booking.customselectwrapper} ref={subServiceDropdownRef}>
                <div
                  className={`${booking.input} ${selectedSubService ? booking.selectedDropdown : ""}`}
                  onClick={() => setIsSubServiceOpen(!isSubServiceOpen)} >
                  {selectedSubService || "Select a sub service"}
                </div>
                {isSubServiceOpen && (
                  <div className={booking.customdropdown}>
                    {selectedServiceId === null ? (
                      <div className={booking.dropdownitem}>Select a service first</div>
                    ) : loading ? (
                      <div className={booking.dropdownitem}>Loading...</div>
                    ) : subServices.length === 0 ? (
                      <div className={booking.dropdownitem}>No subservices available</div>
                    ) : (
                      subServices.map((sub) => (
                        <div
                          key={sub.id}
                          className={booking.dropdownitem}
                          onClick={() => {
                            setSelectedSubService(sub.name.trim());
                            setIsSubServiceOpen(false);
                          }} >
                          {sub.name}
                        </div>
                      ))
                    )}
                  </div>)}
              </div>
            </div>
          </div>

          {/* category */}
          {isDeepCleaning && (
            <>
              <label className={booking.label}>CATEGORY</label>
              <div className={booking.customselectwrapper} ref={categoryDropdownRef}>
                <div
                  className={`${booking.input} ${deepCleaningCategory ? booking.selectedDropdown : ""}`}
                  onClick={() => setIsCategoryOpen((prev) => !prev)} >
                  {deepCleaningCategory || "Select Category"}
                </div>
                {isCategoryOpen && (
                  <div className={booking.customdropdown}>
                    {["Residential", "Commercial"].map((category) => (
                      <div
                        key={category}
                        className={booking.dropdownitem}
                        onClick={() => {
                          setDeepCleaningCategory(category as "Residential" | "Commercial");
                          setIsCategoryOpen(false);
                          setSelectedType(""); // reset type
                        }} >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {/* TYPE */}
          {!isSpecialCleaning && !isGreaseTrapCleaning && !isVehicleCleaning && (
            <>
              <label className={booking.label}>TYPE</label>
              <div className={booking.customselectwrapper} ref={typeDropdownRef}>
                <div
                  className={`${booking.input} ${selectedType ? booking.selectedDropdown : ""}`}
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
                          }} >
                          With supplies (40 AED per hour per crew)
                        </div>
                        <div
                          className={booking.dropdownitem}
                          onClick={() => {
                            setSelectedType("without-supplies");
                            setIsTypeOpen(false);
                          }}
                        >
                          Without supplies (45 AED per hour per crew)
                        </div>
                      </>
                    ) : isDeepCleaning && deepCleaningCategory === "Commercial" ? (
                      ["Office", "Restaurants", "Warehouse", "Others"].map((type) => (
                        <div
                          key={type}
                          className={booking.dropdownitem}
                          onClick={() => {
                            setSelectedType(type);
                            setIsTypeOpen(false);
                          }} >
                          {type}
                        </div>
                      ))
                    ) : (
                      (
                        selectedSubService.trim().toLowerCase() === "upholstery cleaning"
                          ? ["Dining Chair / Sofa", "Mattress", "Carpet", "Rugs"].map((type) => (
                            <div
                              key={type}
                              className={booking.dropdownitem}
                              onClick={() => {
                                setSelectedType(type);
                                setIsTypeOpen(false);
                              }}>
                              {type}
                            </div>
                          ))
                          : isDeepCleaning && deepCleaningCategory === "Commercial"
                            ? ["Office", "Restaurants", "Warehouse", "Others"].map((type) => (
                              <div
                                key={type}
                                className={booking.dropdownitem}
                                onClick={() => {
                                  setSelectedType(type);
                                  setIsTypeOpen(false);
                                }}
                              >
                                {type}
                              </div>
                            ))
                            : ["Apartment", "Townhouse", "Villa"]
                              .map((type) => (
                                <div
                                  key={type}
                                  className={booking.dropdownitem}
                                  onClick={() => {
                                    setSelectedType(type);
                                    setIsTypeOpen(false);
                                  }}
                                >
                                  {type}
                                </div>
                              ))
                      )
                    )}
                  </div>)}
              </div>
            </>
          )}
          {isDeepCleaning && deepCleaningCategory === "Commercial" && (
            <>
              <label className={booking.label} >AREA</label>
              <input
                type="text"
                placeholder="Enter area in square feet"
                value={squareFootage}
                onChange={(e) => setSquareFootage(e.target.value)}
                className={booking.input}
                style={{ backgroundImage: "none" }}
              />
            </>
          )}

          {/* yes/no radio buttons */}
          {isDeepCleaning && deepCleaningCategory === "Commercial" && (
            <>
              <label className={booking.label}>SITE VISIT</label>
              <div className={booking.buttonGroup}>
                <button
                  type="button"
                  className={`${booking.yesnobuttons} ${siteVisit === "yes" ? booking.selected : ""}`}
                  onClick={() => setSiteVisit("yes")} >
                  Yes
                </button>
                <button
                  type="button"
                  className={`${booking.yesnobuttons} ${siteVisit === "no" ? booking.selected : ""}`}
                  onClick={() => setSiteVisit("no")} >
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
                    className={booking.input} />
                </div>
              )}
            </>
          )}
          {/* windows , swimming pool , chandelier */}
          {isSpecialCleaning && (
            <>
              {selectedSubService.trim().toLowerCase() === "windows cleaning" && (
                <>
                  {/* SERVICE */}
                  <div className={booking.fieldGroup}>
                    <label className={booking.label} style={{ marginBottom: "10px" }} >NO OF WINDOWS</label>
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter number of windows"
                      value={numberOfWindows}
                      onChange={(e) => setNumberOfWindows(e.target.value)}
                      className={booking.input}
                      style={{ backgroundImage: "none" }} />
                  </div>
                </>
              )}
              {selectedSubService.trim().toLowerCase() === "swimming pool cleaning" && (
                <>
                  <label className={booking.label} >AREA (SQ. FT.)</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter area in square feet"
                    value={squareFootage}
                    onChange={(e) => setSquareFootage(e.target.value)}
                    className={booking.input}
                    style={{ backgroundImage: "none" }} />
                </>
              )}
              {selectedSubService.trim().toLowerCase() === "chandelier cleaning services" && (
                <>
                  <label className={booking.label} style={{ marginBottom: "10px" }}>NUMBER OF ITEMS</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter no of items"
                    value={numberOfItems}
                    onChange={(e) => setNumberOfItems(e.target.value)}
                    className={booking.input}
                    style={{ backgroundImage: "none" }} />
                </>
              )}

              {/* Image/Video Upload Field */}
              <label className={booking.label}>Upload Images/Videos</label>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                className={booking.input}
                onChange={handleFileChange}
                style={{ backgroundImage: "none" }} />
            </>
          )}
          {/* CONDITIONAL UI */}
          {isMaidSelected && (
            <>
              {/* NO OF STAFF */}
              <label className={booking.label}>NO OF STAFF</label>
              <div className={`${booking.scrollContainer} ${booking.hideScrollbar}`}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSelectedStaff(num)}
                    className={`${booking.optionButton} ${selectedStaff === num ? booking.selected : ""} ${booking.fixedSizeBtn}`}
                    type="button"  >
                    {num}
                  </button>
                ))}
              </div>
              {/* NO OF HOUR */}
              <label className={booking.label}>NO OF HOUR</label>
              <div className={`${booking.scrollContainer} ${booking.hideScrollbar} ${booking.hoursGap}`}>
                {[{ hour: 1, price: 39 }, { hour: 2, price: 35 }, { hour: 3, price: 33 }, { hour: 4, price: 40 }, { hour: 5, price: 30 }].map(({ hour, price }) => (
                  <div key={hour} className={booking.optionWrapper}>
                    <button
                      onClick={() => setSelectedHours(hour)}
                      className={`${booking.optionButton} ${selectedHours === hour ? booking.selected : ""}`}
                      type="button" >
                      {hour}
                    </button>
                    <span className={booking.optionLabel}>AED {price}/HR</span>
                  </div>
                ))}
              </div>
            </>
          )}
          {!isMaidSelected && !isGreaseTrapCleaning && !isVehicleCleaning && !(isDeepCleaning && deepCleaningCategory === "Commercial") && (
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
                    style={{ backgroundImage: "none" }} />
                </>
              ) : (
                <>
                  {!isSpecialCleaning && (
                    <>
                      <label className={booking.label}>SPECIFICS</label>
                      <div className={booking.customselectwrapper} ref={specificDropdownRef}>
                        <div
                          className={`${booking.input} ${selectedSpecific ? booking.selectedDropdown : ""}`}
                          onClick={() => setIsSpecificOpen(!isSpecificOpen)}
                        >
                          {selectedSpecific || "Select Specific"}
                        </div>
                        {isSpecificOpen && (
                          <div className={booking.customdropdown}>
                            {/* ✅ Upholstery Cleaning logic */}
                            {selectedSubService.trim().toLowerCase() === "upholstery cleaning" && (
                              <>
                                {selectedType.trim().toLowerCase() === "dining chair / sofa" &&
                                  Array.from({ length: 10 }, (_, i) => i + 1).map((count) => (
                                    <div
                                      key={count}
                                      className={booking.dropdownitem}
                                      onClick={() => {
                                        setSelectedSpecific(`${count}`);
                                        setIsSpecificOpen(false);
                                      }} >
                                      {count}
                                    </div>
                                  ))}
                                {selectedType === "Mattress" &&
                                  ["Single", "Double Queen", "Double King"].map((option) => (
                                    <div
                                      key={option}
                                      className={booking.dropdownitem}
                                      onClick={() => {
                                        setSelectedSpecific(option);
                                        setIsSpecificOpen(false);
                                      }} >
                                      {option}
                                    </div>
                                  ))}
                                {selectedType === "Carpet" &&
                                  Array.from({ length: 10 }, (_, i) => i + 1).map((count) => (
                                    <div
                                      key={count}
                                      className={booking.dropdownitem}
                                      onClick={() => {
                                        setSelectedSpecific(count.toString());
                                        setCarpetCount(count);
                                        setCarpetAreas(Array(count).fill("")); // initialize N empty fields
                                        setIsSpecificOpen(false);
                                      }} >
                                      {count}
                                    </div>
                                  ))}
                                {selectedType === "Rugs" &&
                                  ["Small", "Medium", "Large"].map((option) => (
                                    <div
                                      key={option}
                                      className={booking.dropdownitem}
                                      onClick={() => {
                                        setSelectedSpecific(option);
                                        setIsSpecificOpen(false);
                                      }}>
                                      {option}
                                    </div>
                                  ))}
                              </>
                            )}
                            {/* ✅ Regular logic for Apartment, Townhouse, Villa */}
                            {selectedSubService.trim().toLowerCase() !== "upholstery cleaning" && (
                              <>
                                {selectedType === "Apartment" &&
                                  ["Studio", "1BHK Apartment", "2BHK Apartment", "3BHK Apartment"].map((option) => (
                                    <div key={option} className={booking.dropdownitem} onClick={() => {
                                      setSelectedSpecific(option);
                                      setIsSpecificOpen(false);
                                    }} >
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
                                      }} >
                                      {option}
                                    </div>
                                  ))}
                                {selectedType === "Villa" && (
                                  (selectedService.trim().toLowerCase() === "cleaning services"
                                    ? ["2BHK", "3BHK", "4BHK", "5BHK", "6BHK", "7BHK"]
                                    : ["2BHK", "3BHK", "4BHK", "5BHK", "6BHK"]
                                  ).map((option) => (
                                    <div
                                      key={option}
                                      className={booking.dropdownitem}
                                      onClick={() => {
                                        setSelectedSpecific(option);
                                        setIsSpecificOpen(false);
                                      }}>
                                      {option}
                                    </div>
                                  ))
                                )}
                                {!["Apartment", "Townhouse", "Villa"].includes(selectedType) && (
                                  <div className={booking.dropdownitem}>Please select a type first</div>
                                )}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                      {/* cleaning services -> deep cleaning -> residential ->  Apartment*/}
                      {selectedService.toLowerCase() === "cleaning services" &&
                        selectedSubService.toLowerCase() === "deep cleaning" &&
                        deepCleaningCategory === "Residential" &&
                        selectedType === "Apartment" && (
                          <div className={booking.formGroup}>
                            <label className={booking.label}>ADDITIONAL SERVICES</label>
                            <div className={booking.customselectwrapper}>
                              <div
                                className={`${booking.input} ${residentialCleanType ? booking.selectedDropdown : ""}`}
                                onClick={() => setIsResidentialTypeOpen(!isResidentialTypeOpen)} >
                                {residentialCleanType || "Additional Services"}
                              </div>
                              {isResidentialTypeOpen && (
                                <div className={booking.customdropdown}>
                                  {["Move In", "Move Out", "Post Construction"].map((option) => (
                                    <div
                                      key={option}
                                      className={booking.dropdownitem}
                                      onClick={() => {
                                        setResidentialCleanType(option);
                                        setIsResidentialTypeOpen(false);
                                      }} >
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
                </>
              )}
              {/* Carpet Sizes */}
              <div className={booking.cont}>
                {selectedSubService.trim().toLowerCase() === "upholstery cleaning" &&
                  selectedType === "Carpet" && carpetCount > 0 && (
                    <div className={booking.carpetGroup}>
                      <label className={booking.label}>Carpet Sizes (in sq ft)</label>
                      <div className={`${booking.carpetWrap} ${carpetCount === 1 ? booking.singleCarpetWrap : ""}`} >
                        {Array.from({ length: carpetCount }).map((_, i) => (
                          <div
                            key={i}
                            className={`${booking.carpetInputCard} ${carpetCount === 1 ? booking.fullWidth : ""
                              }`} >
                            <label className={booking.carpetLabel}>Carpet {i + 1}</label>
                            <input
                              type="number"
                              min="1"
                              value={carpetAreas[i] || ""}
                              onChange={(e) => {
                                const updated = [...carpetAreas];
                                updated[i] = e.target.value;
                                setCarpetAreas(updated);
                              }}
                              placeholder="sq feets"
                              className={booking.input}
                              style={{ backgroundImage: "none" }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
              {/* no of items in upholstery types except carpet */}
              {selectedSubService.trim().toLowerCase() === "upholstery cleaning" &&
                selectedType &&
                selectedType !== "Carpet" && selectedType !== "Dining Chair / Sofa" && (
                  <div className={booking.formGroup}>
                    <label className={booking.label}>No of Items</label>
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter number of items"
                      value={upholsteryItemCount}
                      onChange={(e) => setUpholsteryItemCount(Number(e.target.value))}
                      className={booking.input}
                      style={{ backgroundImage: "none" }}
                    />
                  </div>
                )}
              {/* DETAILS */}
              {!isSpecialCleaning && !isGreaseTrapCleaning && !isVehicleCleaning && (
                <>
                  <label className={booking.label}>DETAILS</label>
                  <div className={booking.customselectwrapper} ref={detailDropdownRef}>
                    <div
                      className={`${booking.input} ${selectedDetail ? booking.selectedDropdown : ""}`}
                      onClick={() => setIsDetailOpen(!isDetailOpen)}
                    >
                      {selectedDetail || "Select Detail"}
                    </div>
                    {isDetailOpen && (
                      <div className={booking.customdropdown}>
                        {/* ✅ Show only auto-selected detail for Pest Control */}
                        {selectedService.trim().toLowerCase() === "pest control" ? (
                          selectedDetail ? (
                            <div
                              className={booking.dropdownitem}
                              onClick={() => setIsDetailOpen(false)}
                            >
                              {selectedDetail}
                            </div>
                          ) : (
                            <div className={booking.dropdownitem}>Please select Type and Specific</div>
                          )
                        ) : selectedService.trim().toLowerCase() === "cleaning services" &&
                          selectedSubService.trim().toLowerCase() === "duct cleaning" ? (
                          selectedDetail ? (
                            <div
                              className={booking.dropdownitem}
                              onClick={() => setIsDetailOpen(false)}
                            >
                              {selectedDetail}
                            </div>
                          ) : (
                            <div className={booking.dropdownitem}>Please select Type and Specific</div>
                          )
                        ) : selectedSubService.trim().toLowerCase() === "upholstery cleaning" ? (
                          selectedDetail ? (
                            <div
                              className={booking.dropdownitem}
                              onClick={() => setIsDetailOpen(false)}
                            >
                              {selectedDetail}
                            </div>
                          ) : (
                            <div className={booking.dropdownitem}>Please select Type and Specific</div>
                          )
                        ) : (
                          <>
                            {/* Apartment Details */}
                            {selectedType === "Apartment" && selectedSpecific === "Studio" && (
                              <>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished - 350 AED"); setIsDetailOpen(false); }}>Furnished - 350 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Unfurnished - 300 AED"); setIsDetailOpen(false); }}>Unfurnished - 300 AED</div>
                              </>
                            )}
                            {selectedType === "Apartment" && selectedSpecific === "1BHK Apartment" && (
                              <>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished - 525 AED"); setIsDetailOpen(false); }}>Furnished - 525 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Unfurnished - 475 AED"); setIsDetailOpen(false); }}>Unfurnished - 475 AED</div>
                              </>
                            )}
                            {selectedType === "Apartment" && selectedSpecific === "2BHK Apartment" && (
                              <>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished - 650 AED"); setIsDetailOpen(false); }}>Furnished - 650 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Unfurnished - 570 AED"); setIsDetailOpen(false); }}>Unfurnished - 570 AED</div>
                              </>
                            )}
                            {selectedType === "Apartment" && selectedSpecific === "3BHK Apartment" && (
                              <>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished - 850 AED"); setIsDetailOpen(false); }}>Furnished - 850 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Unfurnished - 775 AED"); setIsDetailOpen(false); }}>Unfurnished - 775 AED</div>
                              </>
                            )}
                            {/* Townhouse Details */}
                            {selectedType === "Townhouse" && selectedSpecific === "2BHK" && (
                              <>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished - Internal Only: 800 AED"); setIsDetailOpen(false); }}>Furnished - Internal Only: 800 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished - Internal & External: 1250 AED"); setIsDetailOpen(false); }}>Furnished - Internal & External: 1250 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Unfurnished - Internal Only: 750 AED"); setIsDetailOpen(false); }}>Unfurnished - Internal Only: 750 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Unfurnished - Internal & External: 1200 AED"); setIsDetailOpen(false); }}>Unfurnished - Internal & External: 1200 AED</div>
                              </>
                            )}
                            {selectedType === "Townhouse" && selectedSpecific === "3BHK" && (
                              <>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished - Internal Only: 1000 AED"); setIsDetailOpen(false); }}>Furnished - Internal Only: 1000 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished - Internal & External: 1400 AED"); setIsDetailOpen(false); }}>Furnished - Internal & External: 1400 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Unfurnished - Internal Only: 900 AED"); setIsDetailOpen(false); }}>Unfurnished - Internal Only: 900 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Unfurnished - Internal & External: 1300 AED"); setIsDetailOpen(false); }}>Unfurnished - Internal & External: 1300 AED</div>
                              </>
                            )}
                            {selectedType === "Townhouse" && selectedSpecific === "4BHK" && (
                              <>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished - Internal Only: 1350 AED"); setIsDetailOpen(false); }}>Furnished - Internal Only: 1350 AED</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished - Internal & External: 1800 AED"); setIsDetailOpen(false); }}>Furnished - Internal & External: 1800 AED</div>
                              </>
                            )}
                            {/* Villa Details */}
                            {["2BHK", "3BHK", "4BHK", "5BHK", "6BHK", "7BHK"].includes(selectedSpecific) && selectedType === "Villa" && (
                              <>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Furnished"); setIsDetailOpen(false); }}>Furnished</div>
                                <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("Unfurnished"); setIsDetailOpen(false); }}>Unfurnished</div>
                              </>
                            )}
                          </>
                        )}
                        {/* Default fallback */}
                        {(!selectedType || !selectedSpecific) && (
                          <div className={booking.dropdownitem}>Please select both Type and Specific</div>
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
              onChange={handleFileChange}
            />
          </div>
        )}
        {isVehicleCleaning && (
          <>
            {/* <div className={booking.cont}> */}
            <div className={booking.formGroup}>
              <label className={booking.label}>Make</label>
              <input
                type="text"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className={booking.input}
                style={{ backgroundImage: "none" }}
              />
            </div>
            <div className={booking.formGroup}>
              <label className={booking.label}>Model</label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className={booking.input}
                style={{ backgroundImage: "none" }}
              />
            </div>
            {/* </div> */}

            <div className={booking.formGroup}>
              <label className={booking.label}>Variant</label>
              <input
                type="text"
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className={booking.input}
                style={{ backgroundImage: "none" }}
              />
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
                  }
                }}
              />
            </div>
          </>
        )}
        {/* FREQUENCY */}
        <div className={booking.formGroup}>
          <label className={booking.label}>How often do you need cleaning?</label>
          {["Once", "Weekly", "Multiple times a week"].map((freq) => (
            <button
              key={freq}
              type="button"
              onClick={() => {
                setSelectedFreq(freq);
                updateBookingData({ frequency: freq });
              }}
              className={`${booking.daysoption} ${selectedFreq === freq ? booking.selected : ""}`} >
              {freq === "Weekly" ? (
                <div className={booking.labelRow}>
                  <span className={booking.freqText}>Weekly</span>
                  <div className={booking.badgeGroup}>
                    <span className={booking.badgePopular}>Popular</span>
                    <span className={booking.badgeDiscount}>10% off per visit</span>
                  </div>
                </div>
              ) : freq === "Multiple times a week" ? (
                <div className={booking.labelRow}>
                  <span className={booking.freqText}>Multiple times a week</span>
                  <span className={booking.badgeDiscount}>15% off per visit</span>
                </div>
              ) : (
                <span>{freq}</span>
              )}
              {(freq === "Weekly" || freq === "Multiple times a week") && (
                <div className={booking.bulletLine}>
                  • Get the same cleaner each time<br />
                  • Re-schedule easily through the app </div>
              )}
              {freq === "Once" && (
                <div className={booking.bulletLine}>• Book a one time cleaning session</div>
              )}
            </button>
          ))}
        </div>
        {/* MATERIALS */}
        <div className={booking.row}>
          <label className={booking.endlabel}>Do you need cleaning materials?</label>
          <label className={booking.subLabel}>
            An additional charge of AED 10/hr applies for cleaning materials.
          </label>
        </div>
        <div className={booking.buttonGroup}>
          <button
            className={`${booking.yesnobuttons} ${selected === "no" ? booking.selected : ""}`}
            onClick={() => {
              setSelected("no");
              updateBookingData({ cleaningMaterials: "no" });
            }}
          > No </button>
          <button
            className={`${booking.yesnobuttons} ${selected === "yes" ? booking.selected : ""}`}
            onClick={() => {
              setSelected("yes"); // or "no"
              updateBookingData({ cleaningMaterials: "yes" });
            }}

          > Yes  </button>
        </div>
        {/* SPECIAL INSTRUCTIONS */}
        <div className={booking.row}>
          <label className={booking.endlabel}>Do you have any special instructions?</label>
          <label className={booking.subLabel}>Example: Pet at home, carpet area, etc.</label>  </div>
        <textarea
          placeholder="Example:..........."
          className={booking.box}
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}>
        </textarea>
      </div>
    </div>
  );
};
export default Bookings;

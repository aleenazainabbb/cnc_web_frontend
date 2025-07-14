"use client";
import React, { useState, useEffect, useRef } from "react";
import booking from "./styles/AddBooking/booking.module.css";
import { useService } from "@/context/allservices";

const Bookings: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);
  const [selectedHours, setSelectedHours] = useState<number | null>(null);
  const [selectedFreq, setSelectedFreq] = useState<string>("");
  const [selected, setSelected] = useState<"yes" | "no" | null>(null);
  const [selectedSpecific, setSelectedSpecific] = useState<string>("");
  const [selectedDetail, setSelectedDetail] = useState<string>("");
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isSubServiceOpen, setIsSubServiceOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isSpecificOpen, setIsSpecificOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const {
    services,
    subServices,
    fetchServices,
    fetchSubServices,
    loading,
  } = useService();

  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const subServiceDropdownRef = useRef<HTMLDivElement>(null);
  const typeDropdownRef = useRef<HTMLDivElement>(null);
  const specificDropdownRef = useRef<HTMLDivElement>(null);
  const detailDropdownRef = useRef<HTMLDivElement>(null);

  const isMaidSelected = selectedSubService.trim().toLowerCase() === "maid cleaning";

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

  useEffect(() => {
    setSelectedType("");
    setSelectedHours(null);
    setSelectedStaff(null);
    setSelectedSpecific("");
    setSelectedDetail("");
    setSelectedFreq("");
    setSelected(null);
    // optionally reset textarea (if using state for it)
  }, [selectedSubService]);

    useEffect(() => {
    const service = selectedService.trim().toLowerCase();
    const subservice = selectedSubService.trim().toLowerCase();
    const type = selectedType.trim().toLowerCase();
    const specific = selectedSpecific.trim().toLowerCase();

    if (service === "cleaning services" && subservice === "duct cleaning") {
      const priceMap: Record<string, string> = {
        "Apartment|studio": "350 AED",
        "Apartment|1bhk": "450 AED",
        "Apartment|2bhk": "750 AED",
        "Apartment|3bhk": "1200 AED",
        "Townhouse|2bhk": "1200 AED",
        "Townhouse|3bhk": "1500 AED",
        "Townhouse|4bhk": "1800 AED",
      };

      const key = `${type}|${specific.replace(" apartment", "")}`;
      if (priceMap[key]) {
        setSelectedDetail(priceMap[key]);
      } else {
        setSelectedDetail(""); // Clear if invalid
      }
    }
  }, [selectedService, selectedSubService, selectedType, selectedSpecific]);

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

          {/* SERVICE */}
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
                      }}
                    >
                      {service.name}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* SUB SERVICE */}
          <label className={booking.label}>SUB SERVICE</label>
          <div className={booking.customselectwrapper} ref={subServiceDropdownRef}>
            <div
              className={`${booking.input} ${selectedSubService ? booking.selectedDropdown : ""}`}
              onClick={() => setIsSubServiceOpen(!isSubServiceOpen)}
            >
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
                      }}
                    >
                      {sub.name}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* TYPE */}
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
                    <div className={booking.dropdownitem} onClick={() => {
                      setSelectedType("with-supplies");
                      setIsTypeOpen(false);
                    }}>
                      With supplies (40 AED per hour per crew)
                    </div>
                    <div className={booking.dropdownitem} onClick={() => {
                      setSelectedType("without-supplies");
                      setIsTypeOpen(false);
                    }}>
                      Without supplies (45 AED per hour per crew)
                    </div>
                  </>
                ) : (
                  ["Apartment", "Townhouse", "Villa"].map((type) => (
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
                )}
              </div>
            )}
          </div>

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
                    type="button"
                  >
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

          {!isMaidSelected && (
            <>
              {/* SPECIFICS */}
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
                    {selectedType === "Apartment" &&
                      ["Studio Apartment", "1BHK Apartment", "2BHK Apartment", "3BHK Apartment"].map((option) => (
                        <div
                          key={option}
                          className={booking.dropdownitem}
                          onClick={() => {
                            setSelectedSpecific(option);
                            setIsSpecificOpen(false);
                          }}
                        >
                          {option}
                        </div>
                      ))
                    }

                    {selectedType === "Townhouse" &&
                      ["2BHK", "3BHK", "4BHK"].map((option) => (
                        <div
                          key={option}
                          className={booking.dropdownitem}
                          onClick={() => {
                            setSelectedSpecific(option);
                            setIsSpecificOpen(false);
                          }}
                        >
                          {option}
                        </div>
                      ))
                    }
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
                          }}
                        >
                          {option}
                        </div>
                      ))
                    )}
                    {!["Apartment", "Townhouse", "Villa"].includes(selectedType) && (
                      <div className={booking.dropdownitem}>Please select a type first</div>
                    )}
                  </div>
                )}
              </div>

              {/* DETAILS */}
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
                    {/* Cleaning Services Logic */}
                    {selectedService.trim().toLowerCase() === "cleaning services" && (
                      <>
                        {/* Apartment Details */}
                        {selectedType === "Apartment" && selectedSpecific === "Studio Apartment" && (
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

                    {/* Pest Control Logic */}
                    {selectedService.trim().toLowerCase() === "pest control" && (
                      <>
                        {selectedType === "Apartment" && selectedSpecific === "Studio Apartment" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("225 AED"); setIsDetailOpen(false); }}>225 AED</div>
                        )}
                        {selectedType === "Apartment" && selectedSpecific === "1BHK Apartment" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("275 AED"); setIsDetailOpen(false); }}>275 AED</div>
                        )}
                        {selectedType === "Apartment" && selectedSpecific === "2BHK Apartment" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("350 AED"); setIsDetailOpen(false); }}>350 AED</div>
                        )}
                        {selectedType === "Townhouse" && selectedSpecific === "2BHK" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("425 AED"); setIsDetailOpen(false); }}>425 AED</div>
                        )}
                        {selectedType === "Townhouse" && selectedSpecific === "3BHK" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("500 AED"); setIsDetailOpen(false); }}>500 AED</div>
                        )}
                        {selectedType === "Townhouse" && selectedSpecific === "4BHK" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("575 AED"); setIsDetailOpen(false); }}>575 AED</div>
                        )}
                        {selectedType === "Villa" && selectedSpecific === "2BHK" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("425 AED"); setIsDetailOpen(false); }}>425 AED</div>
                        )}
                        {selectedType === "Villa" && selectedSpecific === "3BHK" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("500 AED"); setIsDetailOpen(false); }}>500 AED</div>
                        )}
                        {selectedType === "Villa" && selectedSpecific === "4BHK" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("600 AED"); setIsDetailOpen(false); }}>600 AED</div>
                        )}
                        {selectedType === "Villa" && selectedSpecific === "5BHK" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("700 AED"); setIsDetailOpen(false); }}>700 AED</div>
                        )}
                        {selectedType === "Villa" && selectedSpecific === "6BHK" && (
                          <div className={booking.dropdownitem} onClick={() => { setSelectedDetail("750 AED"); setIsDetailOpen(false); }}>750 AED</div>
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
        </div>

        {/* FREQUENCY */}
        <div className={booking.formGroup}>
          <label className={booking.label}>How often do you need cleaning?</label>
          {["Once", "Weekly", "Multiple times a week"].map((freq) => (
            <button
              key={freq}
              type="button"
              onClick={() => setSelectedFreq(freq)}
              className={`${booking.daysoption} ${selectedFreq === freq ? booking.selected : ""}`}
            >
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
                  • Re-schedule easily through the app
                </div>
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
            onClick={() => setSelected("no")}
          >
            No
          </button>
          <button
            className={`${booking.yesnobuttons} ${selected === "yes" ? booking.selected : ""}`}
            onClick={() => setSelected("yes")}
          >
            Yes
          </button>
        </div>

        {/* SPECIAL INSTRUCTIONS */}
        <div className={booking.row}>
          <label className={booking.endlabel}>Do you have any special instructions?</label>
          <label className={booking.subLabel}>Example: Pet at home, carpet area, etc.</label>
        </div>
        <textarea placeholder="Example:..........." className={booking.box}></textarea>
      </div>
    </div>
  );
};

export default Bookings;

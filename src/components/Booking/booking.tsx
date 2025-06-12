"use client";
import React, { useState } from "react";
import { Search, X } from "lucide-react";
import booking from "./styles/AddBooking/booking.module.css";

const Bookings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);
  const [selectedHours, setSelectedHours] = useState<number | null>(null);
  const [selectedFreq, setSelectedFreq] = useState<string>("");
  const [selected, setSelected] = useState<"yes" | "no" | null>(null);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  return (
    <div className={booking.container}>
      <div className={booking.sectionSpacing}>
        <div className={booking.header}>
          <h1 className={booking.title}>Booking</h1>
          <div className={booking.searchBox}>
            <Search className={booking.searchIcon} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Service"
              className={booking.searchInput}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className={booking.clearButton}
                aria-label="Clear search"
                type="button"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className={booking.group}>
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

          <label className={booking.label}>SERVICE</label>
          <div className={booking.customselectwrapper}>
            <div
              className={`${booking.input} ${selectedService ? booking.selectedDropdown : ""}`}
              onClick={() => setIsServiceOpen(!isServiceOpen)}
            >
              {selectedService || "Select a service"}
            </div>
            {isServiceOpen && (
              <div className={booking.customdropdown}>
                {["Maid services", "Deep Cleaning", "Sofa Cleaning"].map((option) => (
                  <div
                    key={option}
                    className={booking.dropdownitem}
                    onClick={() => {
                      setSelectedService(option);
                      setIsServiceOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className={booking.label}>TYPE</label>
          <div className={booking.customselectwrapper}>
            <div
              className={`${booking.input} ${selectedType ? booking.selectedDropdown : ""}`}
              onClick={() => setIsTypeOpen(!isTypeOpen)}
            >
              {selectedType === "with-supplies"
                ? "With supplies\u2003\u2003\u2003(40 AED per hour per crew)"
                : selectedType === "without-supplies"
                ? "Without supplies\u2003\u2003(45 AED per hour per crew)"
                : "Select the Type"}
            </div>
            {isTypeOpen && (
              <div className={booking.customdropdown}>
                <div
                  className={booking.dropdownitem}
                  onClick={() => {
                    setSelectedType("with-supplies");
                    setIsTypeOpen(false);
                  }}
                >
                  With supplies(40 AED per hour per crew)
                </div>
                <div
                  className={booking.dropdownitem}
                  onClick={() => {
                    setSelectedType("without-supplies");
                    setIsTypeOpen(false);
                  }}
                >
                  Without supplies(45 AED per hour per crew)
                </div>
              </div>
            )}
          </div>

          <label htmlFor="no-of-staff" className={booking.label}>NO OF STAFF</label>
          <div id="no-of-staff" className={`${booking.scrollContainer} ${booking.hideScrollbar}`}>
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

          <label htmlFor="no-of-hours" className={booking.label}>NO OF HOUR</label>
          <div id="no-of-hours" className={`${booking.scrollContainer} ${booking.hideScrollbar} ${booking.hoursGap}`}>
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
        </div>

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
              {freq === "Once" && (
                <div className={booking.bulletLine}>• Book a one time cleaning session</div>
              )}
              {(freq === "Weekly" || freq === "Multiple times a week") && (
                <div className={booking.bulletLine}>• Get the same cleaner each time<br />• Re-schedule easily through the app</div>
              )}
            </button>
          ))}
        </div>

        <div className={booking.row}>
          <label className={booking.endlabel}> Do you need cleaning materials?</label>
          <label className={booking.subLabel}>An additional charge of AED 10/hr applies for cleaning materials.</label>
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

        <div className={booking.row}>
          <label className={booking.endlabel}> Do you have any special instructions?</label>
          <label className={booking.subLabel}>An additional charge of AED 10/hr applies for cleaning materials.</label>
        </div>
      </div>

      <textarea
        placeholder="Example:..........."
        className={booking.box}
      ></textarea>
    </div>
  );
};

export default Bookings;

"use client";
import React, { useState } from "react";
import { Search, X } from "lucide-react";
import booking from './styles/BookingHeader.module.css';

const cleanTypes = [
  "Standard",
  "Deep Clean",
  "Moving In/Out",
  "Post Construction",
];

const Bookings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);
  const [selectedHours, setSelectedHours] = useState<number | null>(null);
  const [selectedFreq, setSelectedFreq] = useState<string>("");
  const [selected, setSelected] = useState<"yes" | "no" | null>(null);

  return (
    <div className={booking.container}>
      {/* Header */}
      <div className={booking.sectionSpacing}>
        <div className={booking.header}>
          <h1 className={booking.title}>Booking</h1>

          <div className={booking.searchBox}>
            <Search
              style={{
                width: 19,
                height: 19,
                color: "#555555",
                marginRight: 8,
                // backgroundColor:"white",
              }}
            />
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

        {/* Clean Type */}
        <div className={booking.formGroup}>
          <label htmlFor="clean-type" className={booking.label}>
            CLEAN TYPE
          </label>
          <div
            id="clean-type"
            className={`${booking.scrollContainer} ${booking.hideScrollbar}`}
          >
            {cleanTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`${booking.optionButton} ${selectedType === type ? booking.selected : ""
                  }`}
                type="button"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* No. of Staff */}
        <div className={booking.formGroup}>
          <label htmlFor="no-of-staff" className={booking.label}>
            NO OF STAFF
          </label>

          <div
            id="no-of-staff"
            className={`${booking.scrollContainer} ${booking.hideScrollbar}`}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setSelectedStaff(num)}
                className={`${booking.optionButton} ${selectedStaff === num ? booking.selected : ""
                  }`} style={{ height: "55px", width: "84px" }}
                type="button"
              >
                {num}
              </button>
            ))}
          </div>

        </div>

        {/* No. of Hours */}
        <div className={booking.formGroup}>
          <label htmlFor="no-of-hours" className={booking.label}>
            NO OF HOUR
          </label>

          <div
            id="no-of-hours"
            className={`${booking.scrollContainer} ${booking.hideScrollbar}`} style={{ gap: "30px" }}
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
                  onClick={() => setSelectedHours(hour)}
                  className={`${booking.optionButton} ${selectedHours === hour ? booking.selected : ""
                    }`} style={{ height: "55px", width: "84px" }}
                  type="button"
                >
                  {hour}
                </button>
                <span className={booking.optionLabel}>AED {price}/HR</span>
              </div>
            ))}
          </div>
        </div>
        {/* "Once", "Weekly", "Multiple times a week" */}
        <div className={booking.formGroup}>
          <label className={booking.label}>How often do you need cleaning?</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {["Once", "Weekly", "Multiple times a week"].map((freq) => (
              <button
                key={freq}
                type="button"
                onClick={() => setSelectedFreq(freq)}
                className={`${booking.optionButton} ${selectedFreq === freq ? booking.selected : ""}`}
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  color: "#4F6071",
                  width: "auto", height: "auto"
                }}
              >
                {freq === "Weekly" ? (
                  <span className={booking.label} style={{ color: "#4F6071", display: 'flex', alignItems: 'center', gap: '30px' }} >
                    <span>Weekly</span>
                    <span
                      style={{
                        display: "flex",
                        gap: "4px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span className={booking.badgePopular}>Popular</span>
                      <span className={booking.badgeDiscount}>10% off per visit</span>
                    </span>
                  </span>
                ) : freq === "Multiple times a week" ? (
                  <span className={booking.label} style={{ color: "#4F6071", display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <span>Multiple times a week</span>
                    <span className={booking.badgeDiscount}>15% off per visit</span>
                  </span>
                ) : (
                  <span>{freq}</span>
                )}

                {freq === "Once" && (
                  <div className={booking.bulletLine} style={{ fontSize: "14px" }}>
                    • Book a one time cleaning session
                  </div>
                )}

                {(freq === "Weekly" || freq === "Multiple times a week") && (
                  <div className={booking.bulletLine} style={{ fontSize: "12px" }}>• Get the same cleaner each time
                    <br />
                    • Re-schedule easily through the app
                  </div>
                )}
              </button>
            ))}

          </div>
        </div>
        <div className={booking.label} style={{ marginTop: "20px", color: "#000000" }}>
          <label> Do you need cleaning materials?</label>
          <label style={{ fontWeight: "400" }}>An additional charge of AED 10/hr applies for cleaning materials.</label>
        </div>

        {/* buttons */}
        <div style={{ display: "flex", gap: "18px", marginTop: "23px" }}>
          <button
            className={`${booking.button} ${selected === "no" ? booking.selected : ""}`}
            onClick={() => setSelected("no")}
          >
            No
          </button>
          <button
            className={`${booking.button} ${selected === "yes" ? booking.selected : ""}`}
            onClick={() => setSelected("yes")}
          >
            Yes
          </button>
        </div>

        <div className={booking.label} style={{ marginTop: "20px", color: "#000000" }}>
          <label> Do you have any special instructions?</label>
          <label style={{ fontWeight: "400" }}>An additional charge of AED 10/hr applies for cleaning materials.</label>
        </div>

        <textarea
          placeholder="Example:..........."
          className={booking.box} style={{ marginTop: "20px" }}>
        </textarea>

      </div>
    </div>
  );
};

export default Bookings;






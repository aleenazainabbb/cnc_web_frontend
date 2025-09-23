"use client";

import React, { useRef, useEffect, Dispatch, SetStateAction } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "./styles/daterange.module.css";

// Define props interface
interface RangeFilterProps {
  range: Range[];
  setRange: Dispatch<SetStateAction<Range[]>>;
}

const RangeFilter: React.FC<RangeFilterProps> = ({ range, setRange }) => {
  const [showCalendar, setShowCalendar] = React.useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleRangeChange = (ranges: RangeKeyDict) => {
    setRange([ranges.selection]);
  };

  const isRangeSelected =
    !!range[0].startDate &&
    !!range[0].endDate &&
    range[0].startDate.toDateString() !== new Date().toDateString();

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div
        className={`${styles.rangeBox} ${
          isRangeSelected ? styles.rangeBoxSelected : ""
        }`}
        onClick={() => setShowCalendar((prev) => !prev)}
      >
        <div className={styles.set}>
          <input
            type="text"
            value={
              isRangeSelected
                ? `${format(range[0].startDate!, "dd/MM/yyyy")} - ${format(
                    range[0].endDate!,
                    "dd/MM/yyyy"
                  )}`
                : ""
            }
            readOnly
            className={`${styles.input} ${
              isRangeSelected ? styles.inputSelected : ""
            }`}
            placeholder="Filter by date range"
          />
        </div>
        <svg
          className={styles.chevron}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="#8B909A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {showCalendar && (
        <div className={styles.calendarWrapper}>
          <DateRange
            ranges={range}
            onChange={handleRangeChange}
            moveRangeOnFirstSelection={false}
            rangeColors={["#8B909A"]}
          />
        </div>
      )}
    </div>
  );
};

export default RangeFilter;

"use client";
import React, { useRef, useState, useEffect } from "react";
import datetime from "./styles/AddBooking/date&time.module.css";
import bookings from "./styles/AddBooking/booking.module.css";
import { useBooking } from "@/context/BookingContext";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const workers = [
  {
    id: 1,
    name: "John Smith",
    rating: 4.8,
    img: "../images/Booking/booking1.png",
  },
  {
    id: 2,
    name: "Elizabeth",
    rating: 4.6,
    img: "../images/Booking/booking2.png",
  },
  {
    id: 3,
    name: "Victoria",
    rating: 4.9,
    img: "../images/Booking/booking3.png",
  },
  {
    id: 4,
    name: "Catherine",
    rating: 4.9,
    img: "../images/Booking/booking4.png",
  },
  {
    id: 5,
    name: "John Smith",
    rating: 4.8,
    img: "../images/Booking/booking1.png",
  },
  {
    id: 6,
    name: "Victoria",
    rating: 4.9,
    img: "../images/Booking/booking3.png",
  },
];

const DateTime: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selected, setSelected] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  );
  const [selectedCleanerId, setSelectedCleanerId] = useState<number | null>(
    null
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const monthRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});
  const { bookingData, latestLocation, updateBillingData, addSelection } =
    useBooking();
  const [preferredCleaner, setPreferredCleaner] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    if (preferredCleaner && selectedTime) {
      addSelection({
        preferredCleaner,
        date: format(selectedDate, "yyyy-MM-dd"),
        time: selectedTime,
      });
    }
  }, [preferredCleaner, selectedTime, selectedDate]);

  useEffect(() => {
    const el = monthRefs.current[selectedMonth];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedMonth]);

  useEffect(() => {
    // Set default preferred cleaner and time
    if (workers.length > 0) {
      setSelectedCleanerId(workers[0].id);
      setPreferredCleaner(workers[0].name);
    }
    handleTimeSelect("Flexible");
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const step = container.scrollWidth / workers.length;
      container.scrollLeft += step;
    }
  }, []);

  useEffect(() => {
    const mergedObject = {
      ...(bookingData || {}),
      ...(latestLocation || {}),
    };
    console.log("(Merged) Booking Data:", mergedObject);
  }, [bookingData, latestLocation]);

  const handleTimeSelect = (option: string) => {
    if (selected === option) return;
    setSelected(option);

    const timeMap: Record<string, string> = {
      Flexible: "Flexible (9am–4pm)",
      time1: "08:00am",
      time2: "09:00am",
      time3: "09:30am",
      time4: "10:00am",
    };

    const timeLabel = timeMap[option];
    const formattedDate = format(selectedDate, "EEEE, MMMM d, yyyy");
    const appointmentTime = `${formattedDate} at ${timeLabel}`;

    updateBillingData({ appointmentTime });
    setSelectedTime(timeLabel);
  };

  const handleMonthChange = (month: string) => {
    const monthIndex = months.indexOf(month);
    const newDate = new Date(new Date().getFullYear(), monthIndex, 1);
    setCurrentMonth(newDate);
    setSelectedMonth(month);
  };

  const renderDays = () => {
    const days = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    return (
      <div className={datetime.grid}>
        {days.map((day) => (
          <div key={day} className={datetime.dayHeader}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isInMonth = isSameMonth(day, monthStart);
        const isSelected = isSameDay(day, selectedDate);

        days.push(
          <div
            key={day.toString()}
            onClick={() => setSelectedDate(cloneDay)}
            className={`${datetime.dateCell} ${
              isInMonth ? datetime["in-month"] : ""
            } ${isSelected ? datetime.selected : ""}`}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
    }

    return <div className={datetime.grid}>{days}</div>;
  };

  return (
    <div className={datetime.main}>
      <h2 className={datetime.title}>Book Date and Time</h2>
      <p className={datetime.text}>Select your preferred cleaner</p>

      <div className={datetime.container}>
        <div className={datetime.cleanerboxes} ref={scrollRef}>
          {workers.map((worker, index) => (
            <div
              key={`${worker.id}-${index}`}
              className={`${datetime.box} ${
                selectedCleanerId === worker.id ? datetime.selectedCleaner : ""
              }`}
              onClick={() => {
                setSelectedCleanerId(worker.id);
                setPreferredCleaner(worker.name);
              }}
            >
              <img src={worker.img} alt="Worker" />
              <p className={datetime.workers}>{worker.name}</p>
              <div className={datetime.rating}>
                <i className="fa-solid fa-star" /> {worker.rating}
              </div>
            </div>
          ))}
        </div>

        <p className={datetime.text}>Select Month & Date</p>

        <div className={datetime.calendarui}>
          <div className={datetime.monthScroll}>
            {months.map((month) => (
              <span
                key={month}
                ref={(el) => {
                  monthRefs.current[month] = el;
                }}
                className={`${datetime.month} ${
                  selectedMonth === month ? datetime.active : ""
                }`}
                onClick={() => handleMonthChange(month)}
              >
                {month}
              </span>
            ))}
          </div>
        </div>
      </div>

      {renderDays()}
      {renderCells()}

      <p className={datetime.text}>
        Save even more by booking off-peak dates and times.
      </p>

      {["Flexible", "time1", "time2", "time3", "time4"].map((option) => (
        <div
          key={option}
          className={`${datetime.checkblock} ${
            selected === option ? datetime.selected : ""
          }`}
          onClick={() => handleTimeSelect(option)}
        >
          {option === "Flexible" ? (
            <div className={datetime.paragraphRow}>
              <div className={datetime.topRow}>
                <span className={datetime.label}>Flexible</span>
                <span className={bookings.badgeDiscount}>Save $8.10 off</span>
              </div>
              <p className={datetime.subtext}>
                Cleaner will arrive between 9am–4pm
              </p>
            </div>
          ) : (
            <span className={datetime.label}>
              {
                {
                  time1: "08:00am",
                  time2: "09:00am",
                  time3: "09:30am",
                  time4: "10:00am",
                }[option]
              }
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default DateTime;

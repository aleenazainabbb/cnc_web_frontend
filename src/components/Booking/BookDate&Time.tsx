"use client";
import React, { useRef, useState } from "react";
import datetime from './styles/AddBooking/date&time.module.css';
import bookings from './styles/AddBooking/booking.module.css';
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    isSameMonth,
    isSameDay
} from "date-fns";

const DateTime: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selected, setSelected] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("April");
    const scrollRef = useRef<HTMLDivElement>(null);

    const workers = [
        { id: 1, name: "Worker Name", rating: 4.8, img: "../images/Booking/booking1.png" },
        { id: 2, name: "Worker Name", rating: 4.6, img: "../images/Booking/booking2.png" },
        { id: 3, name: "Worker Name", rating: 4.9, img: "../images/Booking/booking3.png" },
        { id: 4, name: "Worker Name", rating: 4.9, img: "../images/Booking/booking4.png" },
    ];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handleMonthChange = (month: string) => {
        const monthIndex = months.indexOf(month);
        const newDate = new Date(new Date().getFullYear(), monthIndex, 1);
        setCurrentMonth(newDate);
        setSelectedMonth(month);
    };

    const renderDays = () => {
        const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        return (
            <div className={datetime.grid}>
                {days.map((day) => (
                    <div key={day} className={datetime.dayHeader}>{day}</div>
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
                        className={`${datetime.dateCell} ${isInMonth ? datetime["in-month"] : ""} ${isSelected ? datetime.selected : ""}`}
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
                <div className={datetime.cleanerboxes}>
                    {workers.map((worker) => (
                        <div key={worker.id} className={datetime.box}>
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
                    <div className={datetime.monthScroll} ref={scrollRef}>
                        {months.map((month) => (
                            <span
                                key={month}
                                className={`${datetime.month} ${selectedMonth === month ? datetime.active : ""}`}
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

            <p className={datetime.text}>Save even more by booking off-peak dates and times.</p>

            {["Flexible", "time1", "time2", "time3", "time4"].map((option) => (
                <div
                    key={option}
                    className={`${datetime.checkblock} ${selected === option ? datetime.selected : ""}`}
                    onClick={() => setSelected(option)}
                >
                    {option === "Flexible" ? (
                        <div className={datetime.paragraphRow}>
                            <div className={datetime.topRow}>
                                <span className={datetime.label}>Flexible</span>
                                <span className={bookings.badgeDiscount}>Save $8.10 off</span>                          </div>
                            <p className={datetime.subtext}>Cleaner will arrive between 9am–4pm</p>
                        </div>
                    ) : (
                        <span className={datetime.label}>
                            {({
                                time1: "08:00am",
                                time2: "09:00am",
                                time3: "09:30am",
                                time4: "10:00am"
                            } as any)[option]}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DateTime;



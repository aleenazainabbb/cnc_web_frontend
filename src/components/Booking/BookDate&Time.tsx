"use client";

import React, { useState } from "react";
// import payment from './styles/PaymentDetails.module.css';
import datetime from './styles/AddBooking/date&time.module.css'
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    addMonths,
    subMonths,
    isSameMonth,
    isSameDay,
} from "date-fns";

const DateTime: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selected, setSelected] = useState("");

    const workers = [
        { id: 1, name: "Worker Name", rating: 4.8, img: "images/Booking/booking1.png" },
        { id: 2, name: "Worker Name", rating: 4.6, img: "images/Booking/booking2.png" },
        { id: 3, name: "Worker Name", rating: 4.9, img: "images/Booking/booking3.png" },
        { id: 4, name: "Worker Name", rating: 4.9, img: "images/Booking/booking4.png" },
    ];

    // Render weekday headers
    const renderDays = () => {
        const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        return (
            <div className={datetime.dayNames}>
                {days.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>
        );
    };

    // Render calendar cells
    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const cloneDay = day;
                const isInMonth = isSameMonth(day, monthStart);
                const isSelected = isSameDay(day, selectedDate);

                days.push(
                    <div style={{ marginTop: "8px" }}

                        key={day.toString()}
                        onClick={() => setSelectedDate(cloneDay)} className={`${datetime.days} ${isInMonth ? datetime['in-month'] : ''} ${isSelected ? datetime.selected : ''}`}>
                        {format(day, "d")}
                    </div>
                );
                day = addDays(day, 1);
            }

            rows.push(
                <div key={day.toString()} className={datetime.daysboxes}>
                    {days}
                </div>
            );
            days = [];
        }


        return <div>{rows}</div>;
    };

    return (
        <div className={datetime.main}>
            <h2 className={datetime.title}>Book Date and Time</h2>
            <p className={datetime.text}>Select your preferred cleaner</p>

            {/* Cleaner Boxes */}
            <div className={datetime.cleanerboxes}>
                {workers.map((worker) => (
                    <div key={worker.id} className={datetime.box}>
                        <img src={worker.img} alt="Rounded Pic" />
                        <p className={datetime.workers}>{worker.name}</p>
                        <div className={datetime.rating}>
                            <i className="fa-solid fa-star"> </i>
                            {worker.rating}
                        </div>
                    </div>
                ))}
            </div>

            <p className={datetime.text}>Select Month & Date</p>

            {/* Calendar UI */}
            <div className={datetime.calendarui}>
                <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>&lt;</button>
                <span className={datetime.date}>{format(currentMonth, "MMMM yyyy")}</span>
                <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>&gt;</button>
            </div>
            {renderDays()}
            {renderCells()}

            <p className={datetime.text} >Save even more by booking off-peak dates and times.</p>

            <div
                className={`${datetime.checkblock} ${selected === "Flexible" ? datetime.selected : ""}`}
                onClick={() => setSelected("Flexible")}>
                <div className={datetime.paragraph} >
                    <span className={datetime.label}>
                        Flexible
                        <span style={{ fontSize: "12px", fontWeight: "600", lineHeight: "14px", marginLeft: "200px" }}>
                            Save $8.10 off
                        </span>
                    </span>

                    <p className={datetime.label}> Cleaner will arrive between 9am-4pm </p>
                </div>
            </div>
            <div
                className={`${datetime.checkblock} ${selected === "time1" ? datetime.selected : ""}`}

                onClick={() => setSelected("time1")}>
                <div className={datetime.paragraph} >
                    <span className={datetime.label}>
                        08:00am
                    </span>
                </div>
            </div>
            <div
                className={`${datetime.checkblock} ${selected === "time2" ? datetime.selected : ""}`}

                onClick={() => setSelected("time2")}>
                <div className={datetime.paragraph} >
                    <span className={datetime.label}>
                        09:00am
                    </span>
                </div>
            </div>
            <div
                className={`${datetime.checkblock} ${selected === "time3" ? datetime.selected : ""}`}

                onClick={() => setSelected("time3")}>
                <div className={datetime.paragraph} >
                    <span className={datetime.label}>
                        09:30am
                    </span>
                </div>
            </div>

            <div
                className={`${datetime.checkblock} ${selected === "time4" ? datetime.selected : ""}`}

                onClick={() => setSelected("time4")}>
                <div className={datetime.paragraph} >
                    <span className={datetime.label}>
                        10:00am
                    </span>
                </div>
            </div>

        </div>

    );
};

export default DateTime;

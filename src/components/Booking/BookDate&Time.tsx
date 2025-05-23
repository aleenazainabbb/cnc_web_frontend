"use client";

import React, { useState } from "react";
import payment from './styles/PaymentDetails.module.css';
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
            <div className={payment.dayNames}>
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
                        onClick={() => setSelectedDate(cloneDay)} className={`${payment.days} ${isInMonth ? payment['in-month'] : ''} ${isSelected ? payment.selected : ''}`}>
                        {format(day, "d")}
                    </div>
                );
                day = addDays(day, 1);
            }

            rows.push(
                <div key={day.toString()} style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
                    {days}
                </div>
            );
            days = [];
        }


        return <div>{rows}</div>;
    };

    return (
        <div className={payment.main}>
            <h2 className={payment.title} style={{ marginTop: "0px" }}>Book Date and Time</h2>
            <p className={payment.text}>Select your preferred cleaner</p>

            {/* Cleaner Boxes */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "22px" }}>
                {workers.map((worker) => (
                    <div key={worker.id} className={payment.box}>
                        <img src={worker.img} alt="Rounded Pic" />
                        <p className={payment.workers}>{worker.name}</p>
                        <div className={payment.rating}>
                            <i className="fa-solid fa-star"></i>
                            {worker.rating}
                        </div>
                    </div>
                ))}
            </div>

            <p className={payment.text} style={{ marginTop: "50px" }}>Select Month & Date</p>

            {/* Calendar UI */}

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px" }}>
                <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>&lt;</button>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>{format(currentMonth, "MMMM yyyy")}</span>
                <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>&gt;</button>
            </div>
            {renderDays()}
            {renderCells()}

            <p className={payment.text} style={{ marginTop: "50px" }}>Save even more by booking off-peak dates and times.</p>

            <div
                className={`${payment.checkblock} ${selected === "Flexible" ? "selected" : ""}`}
                style={{ marginTop: "40px" }}
                onClick={() => setSelected("Flexible")}>
                <div className={payment.paragraph} >
                    <span className={payment.label}>
                        Flexible
                        <span style={{ fontSize: "12px", fontWeight: "600", lineHeight: "14px", marginLeft: "200px" }}>
                            Save $8.10 off
                        </span>
                    </span>

                    <p className={payment.content}>
                        Cleaner will arrive between 9am-4pm
                    </p>
                </div>


            </div>

            <div
                className={`${payment.checkblock} ${selected === "time1" ? "selected" : ""}`}
                style={{ marginTop: "10px" }}
                onClick={() => setSelected("time1")}>
                <div className={payment.paragraph} >
                    <span className={payment.label}>
                        08:00am
                    </span>
                </div>
            </div>
            <div
                className={`${payment.checkblock} ${selected === "time2" ? "selected" : ""}`}
                style={{ marginTop: "10px" }}
                onClick={() => setSelected("time2")}>
                <div className={payment.paragraph} >
                    <span className={payment.label}>
                        09:00am
                    </span>
                </div>
            </div>
            <div
                className={`${payment.checkblock} ${selected === "time3" ? "selected" : ""}`}
                style={{ marginTop: "10px" }}
                onClick={() => setSelected("time3")}>
                <div className={payment.paragraph} >
                    <span className={payment.label}>
                        09:30am
                    </span>
                </div>
            </div>

            <div
                className={`${payment.checkblock} ${selected === "time4" ? "selected" : ""}`}
                style={{ marginTop: "10px" }}
                onClick={() => setSelected("time4")}>
                <div className={payment.paragraph} >
                    <span className={payment.label}>
                        10:00am
                    </span>
                </div>
            </div>

        </div>

    );
};

export default DateTime;

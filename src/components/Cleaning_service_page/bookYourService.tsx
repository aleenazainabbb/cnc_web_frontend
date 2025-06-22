"use client";

import React, { useState, FormEvent } from "react";

const BookYourService: React.FC = () => {
    const [formData, setFormData] = useState({
        cleaningType: "Service",
        noOfStaff: "1",
        time: "",
        date: "",
        noOfHours: "1",
        coupon: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="container">
            <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5 align-items-start">
                {/* Left Content */}
                <div className="col-12 col-lg-6 col-md-6 mb-4 mb-md-0">
                    <div className="service_details_content">
                        <h2
                            className="font-semibold leading-[120%] tracking-[0%] mt-2 mb-4 heading"
                            style={{ fontFamily: "Be Vietnam Pro", fontSize: "33px" }}
                        >
                            Book Your Cleaning Service with Care N Clean
                        </h2>
                        <p
                            className="text-justify leading-[30px] tracking-normal"
                            style={{
                                fontFamily: "Be Vietnam Pro",
                                fontSize: "20px",
                                color: "#666666",
                            }}
                        >
                            Experience the ease of booking your professional cleaning service with Care N Clean. Whether it’s your home or office, our team ensures a spotless and hygienic space tailored to your needs. Trust our experts to deliver high-quality service using eco-friendly products and advanced cleaning techniques.
                        </p>
                    </div>
                </div>

                {/* Right Form */}
                <div className="col-12 col-lg-6 col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="booking-form bg_green p-3 rounded mt-4 mt-lg-0 mt-md-0">
                             <div className="row custom_gutter poppins text-[14px]  ">
                        {/* <div className="booking-form bg_green p-3 rounded "> */}
                            {/* <div className="row gy-3"> */}
                                {/* Cleaning Type */}
                                {/* <div className="col-12 col-md-6">
                                 */}
                  <div className="col-md-6">

                                    <select
                                        name="cleaningType"
                                        className="form-select"
                                        value={formData.cleaningType}
                                        onChange={handleChange}
                                    >
                                        <option value="Service" disabled>
                                            Choose Service
                                        </option>
                                        <option value="Cleaning">Cleaning</option>
                                        <option value="Plumbing">Plumbing</option>
                                        <option value="Electrician">Electrician</option>
                                    </select>
                                </div>

                                {/* No of Staff */}
                                <div className="col-12 col-md-6">
                                    <select
                                        name="noOfStaff"
                                        className="form-select"
                                        value={formData.noOfStaff}
                                        onChange={handleChange}
                                    >
                                        <option value="1" disabled>No of value</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                        <option value="4">3</option>
                                        <option value="5">4</option>
                                        <option value="6">5</option>
                                    </select>
                                </div>

                                {/* Time Picker */}
                                <div className="col-12 col-md-6">
                                    <input
                                        type="text"
                                        name="time"
                                        className="form-control date-placeholder"
                                        placeholder="Choose Time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        onFocus={(e) => (e.target.type = "time")}
                                        onBlur={(e) => {
                                            if (!e.target.value) e.target.type = "text";
                                        }}
                                    />
                                </div>

                                {/* Date Picker */}
                                <div className="col-12 col-md-6">
                                    <input
                                        type="text"
                                        name="date"
                                        className="form-control date-placeholder"
                                        placeholder="Choose Date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => {
                                            if (!e.target.value) e.target.type = "text";
                                        }}
                                    />
                                </div>

                                {/* No of Hours */}
                                <div className="col-12 col-md-6">
                                    <select
                                        name="noOfHours"
                                        className="form-select"
                                        value={formData.noOfHours}
                                        onChange={handleChange}
                                    >
                                        <option value="1" disabled>No of Hour</option>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                                            <option key={hour} value={hour}>
                                                {hour}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Coupon */}
                                <div className="col-12 col-md-6">
                                    <input
                                        type="text"
                                        name="coupon"
                                        className="form-control"
                                        placeholder="Enter Coupon*"
                                        value={formData.coupon}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Submit */}
                                <div className="col-12">
                                    <input
                                        type="submit"
                                        value="Book A Service"
                                        className="be-vietnam-pro-semibold btn banner-booking-btn text-white w-100"
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default BookYourService;

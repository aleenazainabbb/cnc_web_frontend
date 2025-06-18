"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BannerSection: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    cleaningType: "",
    noOfStaff: "",
    time: "",
    date: "",
    noOfHours: "",
    coupon: "",
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    router.push("/Booking");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="banner_img d-flex align-items-center position-relative">
        <div className="container position-relative">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-12 col-lg-6">
              <div className="banner_content">
                <p className="be-vietnam-pro-regular text-white">
                  Quality cleaning at a fair price.
                </p>
                <h1 className="be-vietnam-pro-bold text-white my-3">
                  Book Your Cleaning Instantly!
                </h1>
                <p className="be-vietnam-pro-regular text-white">
                  Easily book your cleaning service by selecting your date, time,
                  and service type. Let our professionals handle the rest for a
                  spotless space!
                </p>
                <a
                  href="/services"
                  className="be-vietnam-pro-bold text-white service_banner_btn d-inline-block mt-3"
                >
                  View all Services
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-12 col-lg-6 col-md-6">
              <div className="booking-form bg_green rounded mt-4 mt-lg-0 mt-md-0">
                <div className="row custom_gutter poppins text-[14px]">
                  {/* Service Selection */}
                  <div className="col-md-6">
                    <select
                      name="cleaningType"
                      className="form-select"
                      value={formData.cleaningType}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Choose Service
                      </option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Electrician">Electrician</option>
                    </select>
                  </div>

                  {/* Staff Selection */}
                  <div className="col-md-6">
                    <select
                      name="noOfStaff"
                      className="form-select"
                      value={formData.noOfStaff}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        No of Staff
                      </option>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Time Picker */}
                  <div className="col-md-6">
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="form-control date-placeholder"
                      value={formData.time}
                      onChange={handleChange}
                    //   style={{
                    //     padding: "10px",
                    //     borderRadius: "5px",
                    //     border: "1px solid #ced4da",
                    //     fontSize: "14px",
                    //   }}
                     />
                  </div>

                  {/* Date Picker */}
                  <div className="col-md-6">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date: Date | null) => {
                        setSelectedDate(date);
                        setFormData((prev) => ({
                          ...prev,
                          date: date ? date.toISOString().split("T")[0] : "",
                        }));
                      }}
                      placeholderText="Choose Date"
                      dateFormat="dd MMMM yyyy"
                      className="form-control date-placeholder"
                      calendarClassName="custom-calendar"
                      popperPlacement="bottom"
                    />
                  </div>

                  {/* Hours Selection */}
                  <div className="col-md-6">
                    <select
                      name="noOfHours"
                      className="form-select"
                      value={formData.noOfHours}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        No of Hours
                      </option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Coupon Field */}
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="coupon"
                      className="form-control"
                      placeholder="Enter Coupon*"
                      value={formData.coupon}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="be-vietnam-pro-semibold btn banner-booking-btn text-white"
                    >
                      Book A Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Icon */}
        <div className="round-icon d-flex align-items-center justify-content-center text-white position-absolute bg_green">
          <i className="fa-regular fa-comment-dots"></i>
        </div>
      </div>
    </form>
  );
};

export default BannerSection;





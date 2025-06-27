"use client";

import React, { useState, FormEvent } from "react";
import LinkWithLoader from "@/components/Loader/Link";

interface BookYourServiceProps {
  title?: string;
  description?: string;
  defaultService?: string;
}

const BookYourService: React.FC<BookYourServiceProps> = ({
  title = "Book Your Deep Cleaning Service Today!",
  description = `The deep cleaning service performed by Care N Clean delivers a superior quality solution in the UAE market. Our company provides cleaning services for homes and offices together with commercial spaces. Our skilled staff members provide top-quality cleaning services that match every specific requirement. Secure your deep cleaning service right now to get a healthier environment and a clean space.
`,
  defaultService = "",
}) => {
  const [formData, setFormData] = useState({
    cleaningType: defaultService,
    noOfStaff: "",
    time: "",
    date: "",
    noOfHours: "",
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
        <div className="col-12 col-lg-6 col-md-6 mb-4 mb-md-0">
          <div className="service_details_content">
            <h2
              className="font-semibold leading-[120%] tracking-[0%] mt-2 mb-4 heading"
              style={{ fontFamily: "Be Vietnam Pro", fontSize: "33px" }}
            >
              {title}
            </h2>
            <p
              className="text-justify leading-[30px] tracking-normal"
              style={{
                fontFamily: "Be Vietnam Pro",
                fontSize: "20px",
                color: "#666666",
              }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="col-12 col-lg-6 col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="booking-form bg_green p-3 rounded mt-4 mt-lg-0 mt-md-0">
              <div className="row custom_gutter poppins text-[14px]">
                <div className="col-md-6">
                  <select
                    name="cleaningType"
                    className="form-select"
                    value={formData.cleaningType}
                    onChange={handleChange}
                  >
                    <option value="" disabled={!!defaultService}>
                      Choose Service
                    </option>
                    {/* Maintenance Services */}
                    <option value="Plumbing">Plumbing</option>
                    <option value="Landscaping">Landscaping</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="AC Maintenance">AC Maintenance</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Handyman">Handyman</option>
                    <option value="Painting">Painting</option>
                    {/* Cleaning Services */}
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Grease Trap">Grease Trap</option>
                    <option value="Chandelier Cleaning">Chandelier Cleaning</option>
                    <option value="Swimming Pool">Swimming Pool </option>
                    <option value="Vehicle Cleaning">Vehicle Cleaning</option>
                    <option value="Upholstery Cleaning">Upholstery Cleaning</option>
                    <option value="Duct Cleaning">Duct Cleaning</option>
                    <option value="Windows Cleaning">Windows Cleaning</option>
                    <option value="Maid Services">Maid Services</option>
                    {/* Moving Services */}
                    <option value="Local Moving">Local Moving</option>
                    <option value="Storage Services">Storage Services</option>
                    <option value="International Moving">International Moving</option>
                    {/* Pest Control Services */}
                    <option value="Pigeons & Birds Control">Pigeons & Birds Control</option>
                    <option value="Rats & Rodents Control">Rats & Rodents Control</option>
                    <option value="Termites Control">Termites Control</option>
                    <option value="Bees & Wasps Control">Bees & Wasps Control</option>
                    <option value="Ants & Insects Control">Ants & Insects Control</option>
                    <option value="Flees & Ticks Control">Flees & Ticks Control</option>
                    <option value="Bed Bugs Control">Bed Bugs Control</option>
                    <option value="Cockroach Control">Cockroach Control</option>
                  </select>
                </div>

                <div className="col-12 col-md-6">
                  <select
                    name="noOfStaff"
                    className="form-select"
                    value={formData.noOfStaff}
                    onChange={handleChange}
                  >
                    <option value="" disabled>No of staff</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4</option>
                    <option value="6">5</option>
                  </select>
                </div>

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

                <div className="col-12 col-md-6">
                  <select
                    name="noOfHours"
                    className="form-select"
                    value={formData.noOfHours}
                    onChange={handleChange}
                  >
                    <option value="" disabled>No of Hour</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                </div>

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

                <div className="col-12">
                  <LinkWithLoader href="/BookAservicePage">
                    <input
                      type="submit"
                      value="Book A Service"
                      className="be-vietnam-pro-semibold btn banner-booking-btn text-white w-100"
                    />
                  </LinkWithLoader>
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

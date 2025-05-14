"use client";

import React, { useState, FormEvent } from "react";

const GetAQuoteSection: React.FC = () => {
  const [bookingForm, setBookingForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const [requestForm, setRequestForm] = useState({
    services: [] as string[],
    bestTime: "",
    hearAboutUs: "",
    message: "",
  });

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequestChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      const service = value;
      setRequestForm((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, service]
          : prev.services.filter((s) => s !== service),
      }));
    } else {
      setRequestForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBookingSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Booking Form Submitted:", bookingForm);
    // Add API call
  };

  const handleRequestSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Request Form Submitted:", requestForm);
    // Add API call
  };

  return (
    <div className="container py-5 my-lg-5 my-md-5">
      <div className="row">
        <div className="col-12 col-lg-7 col-md-7">
          <form
            className="booking-form bg_green mt-4 mt-lg-0 mt-md-0"
            onSubmit={handleBookingSubmit}
          >
            <div className="row custom_gutter">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={bookingForm.name}
                  onChange={handleBookingChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  placeholder="Your Company"
                  value={bookingForm.company}
                  onChange={handleBookingChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={bookingForm.email}
                  onChange={handleBookingChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  value={bookingForm.phone}
                  onChange={handleBookingChange}
                />
              </div>
              <div className="col-12 mt-4">
                <button
                  type="submit"
                  className="be-vietnam-pro-semibold btn banner-booking-btn text-white"
                >
                  Book A Service
                </button>
              </div>
            </div>
          </form>
          <form
            className="request_service_form mt-5"
            onSubmit={handleRequestSubmit}
          >
            <p className="be-vietnam-pro-regular fs-24">
              Type Of Product You Interested
            </p>
            <ul>
              <li>
                <label className="custom-checkbox be-vietnam-pro-bold">
                  <input
                    type="checkbox"
                    value="Pest Control"
                    onChange={handleRequestChange}
                  />
                  <span className="checkmark"></span>
                  Pest Control
                </label>
              </li>
              <li>
                <label className="custom-checkbox be-vietnam-pro-bold">
                  <input
                    type="checkbox"
                    value="Moving Services"
                    onChange={handleRequestChange}
                  />
                  <span className="checkmark"></span>
                  Moving Services
                </label>
              </li>
              <li>
                <label className="custom-checkbox be-vietnam-pro-bold">
                  <input
                    type="checkbox"
                    value="Maintenance Services"
                    onChange={handleRequestChange}
                  />
                  <span className="checkmark"></span>
                  Maintenance Services
                </label>
              </li>
              <li>
                <label className="custom-checkbox be-vietnam-pro-bold">
                  <input
                    type="checkbox"
                    value="Cleaning Services"
                    onChange={handleRequestChange}
                  />
                  <span className="checkmark"></span>
                  Cleaning Services
                </label>
              </li>
              <li>
                <label className="custom-checkbox be-vietnam-pro-bold">
                  <input
                    type="checkbox"
                    value="Disinfection Service"
                    onChange={handleRequestChange}
                  />
                  <span className="checkmark"></span>
                  Disinfection Service
                </label>
              </li>
            </ul>
            <div className="row g-3 mt-4 quote_more_fields">
              <div className="col-md-6">
                <select
                  name="bestTime"
                  className="form-select"
                  value={requestForm.bestTime}
                  onChange={handleRequestChange}
                >
                  <option value="">Best Time to Reach</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
              <div className="col-md-6">
                <select
                  name="hearAboutUs"
                  className="form-select"
                  value={requestForm.hearAboutUs}
                  onChange={handleRequestChange}
                >
                  <option value="">Hear About Us</option>
                  <option value="google">Google</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend</option>
                </select>
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  className="form-control"
                  rows={4}
                  placeholder="Message / Comments"
                  value={requestForm.message}
                  onChange={handleRequestChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="be-vietnam-pro-semibold bg_green text-white about_btn btn mt-3"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-12 col-lg-5 col-md-5">
          <div className="col-12">
            <div className="info-box">
              <h5 className="be-vietnam-pro-semibold fs-24">
                Contact Information
              </h5>
              <p className="be-vietnam-pro-semibold mb-1 fs-20">
                DAMAC XL Tower
              </p>
              <p className="text-muted">
                DAMAC XL Tower - Business Bay - Dubai - United Arab Emirates
              </p>
              <h6 className="be-vietnam-pro-semibold mt-4 mb-2 fs-20">
                Contact Number
              </h6>
              <p>
                <strong>Phone:</strong> +971 4 246 0186
              </p>
              <p>
                <strong>Mobile:</strong> +971 52 528 0307
              </p>
              <p>
                <strong>Whatsapp:</strong> +971 52 528 0307
              </p>
              <h6 className="be-vietnam-pro-semibold mt-4 mb-2 fs-20">
                Office Hours
              </h6>
              <p>
                Monday-Sunday
                <br />
                24/7 Available
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="emergency-box text-center">
              <h5 className="be-vietnam-pro-semibold fs-24">
                24hr Emergency Service Available
              </h5>
              <p>
                A team of plumbing professionals who are there when you need
                them, just call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuoteSection;

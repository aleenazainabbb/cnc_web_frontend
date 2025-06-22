"use client"; 
import React, { useState, FormEvent } from "react";
const ContactUsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
  };

  return (
    <div className="contact-section" id="contact_us_main">
      <div className="contact-info position-relative ps-25">
        <h2 className="be-vietnam-pro-bold-custom">Contact</h2>
        <p className="be-vietnam-pro-regular-white contact_desc">
          Thank you for your interest. We look forward to hearing from you soon.
        </p>
        <div className="d-flex gap-3 contact_details mt-4">
          <i className="fa-solid fa-clock"></i>
          <p className="be-vietnam-pro-regular-custom">
            <strong>Hours Of Operation</strong>
            <br />
            Mon-Fri: 9AM - 5PM
          </p>
        </div>
        <div className="d-flex gap-3 contact_details mt-4">
          <i className="fa-solid fa-phone"></i>
          <p className="be-vietnam-pro-regular-custom">
            <strong>24/7 Emergency Service</strong>
            <br />
            (+971) 52 528 0307
          </p>
        </div>
        <div className="d-flex gap-3 contact_details mt-4">
          <i className="fa-solid fa-location-dot"></i>
          <p className="be-vietnam-pro-regular-custom">
            <strong>Service Area</strong>
            <br />
            Dubai and surrounding areas.
          </p>
        </div>
        <div className="appointment-label be-vietnam-pro-medium d-none d-lg-block d-md-block">
          <span>Schedule an Appointment</span>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="d-block d-lg-none d-md-none">
              <h2 className="be-vietnam-pro-bold mb-4">
                Schedule an Appointment
              </h2>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone no"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <input
                type="text"
                name="service"
                className="form-control"
                placeholder="Interest of Service"
                value={formData.service}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                className="form-control"
                placeholder="Message..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div style={{ paddingLeft: "10px" }}>
            <button type="submit" className="mt-3 text-white" >
              Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsSection;

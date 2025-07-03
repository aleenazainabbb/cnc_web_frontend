"use client";
import React, { useRef, useEffect, useState } from "react";
import LinkWithLoader from "../Loader/Link";
import { useQuoteForm } from '@/context/QuoteForm';
import Snackbar from '@/components/popups/Snackbar';

const QuoteForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const thankYouRef = useRef<HTMLDivElement>(null);
  const { submitQuote, loading } = useQuoteForm();
  const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error' } | null>(null);


  const [bookingForm, setBookingForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const [requestForm, setRequestForm] = useState({
    services: [""],
    bestTime: "",
    hearAboutUs: "",
    message: "",
    subService: "",
  });

  useEffect(() => {
    if (isSubmitted && thankYouRef.current) {
      thankYouRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isSubmitted]);

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequestChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRequestForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: bookingForm.name,
      company: bookingForm.company,
      email: bookingForm.email,
      phone: bookingForm.phone,
      service: requestForm.services[0],
      subService: requestForm.subService || '',
      message: requestForm.message,
    };

    try {
      const msg = await submitQuote(payload);
      setSnackbar({ message: msg, type: 'success' });
      setIsSubmitted(true);
    } catch (err: any) {
      setSnackbar({ message: err.message, type: 'error' });
    }
  };


  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (
      !bookingForm.name.trim() ||
      !bookingForm.email.trim() ||
      !bookingForm.phone.trim() ||
      !requestForm.message.trim()
    ) {
      e.preventDefault();
      alert("Please fill all required fields: Name, Email, Phone, and Message.");
    } else {
      handleSubmit(e);
      setIsSubmitted(true);
    }
  };

  const serviceSubOptions: Record<string, string[]> = {
    "Cleaning Services": [
      "Deep Cleaning",
      "Grease Trap",
      "Chandelier Cleaning",
      "Swimming Pool Cleaning",
      "Vehicle Cleaning",
      "Upholstery Cleaning",
      "Duct Cleaning",
      "Windows Cleaning",
      "Maid Services",
    ],
    "Moving Services": ["Local Moving", "Storage Services", "International Moving"],
    "Maintenance Services": [
      "Plumbing Services",
      "Landscaping Services",
      "Carpentry Services",
      "AC Maintenance Services",
      "Electrical Services",
      "Handyman Services",
      "Painting Services",
    ],
    "Pest Control": [
      "Pigeons & Birds Control",
      "Rats & Rodents Control",
      "Termites Control",
      "Bees & Wasps Control",
      "Ants & Insects Control",
      "Flees & Ticks Control",
      "Bed Bugs Control",
      "Cockroach Control",
    ],
  };

  const selectedService = requestForm.services[0];
  const subservices = selectedService ? serviceSubOptions[selectedService] || [] : [];

  return isSubmitted ? (
    <div
      ref={thankYouRef}
      className="booking-form getAquote-form bg_green p-4 rounded text-white text-center"
    >
      <h3 className="be-vietnam-pro-semibold mb-3">Thank you for your Quote!</h3>
      <p className="fs-18">We’ve received your request. Please check your email for services.</p>
      {/* <p className="fs-18">
        Please{" "}
        <LinkWithLoader
          href="/Login"
          className="text-white text-decoration-underline fw-bold"
        >
          Login
        </LinkWithLoader>{" "}
        here for your booking.
      </p> */}
    </div>
  ) : (
    <form
      className="booking-form getAquote-form bg_green mt-4 mt-lg-0 mt-md-0"
      onSubmit={validateForm}
    >
      <div className="row custom_gutter">
        <div className="col-md-6 mb-1">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name *"
            value={bookingForm.name}
            onChange={handleBookingChange}
            required
          />
        </div>
        <div className="col-md-6 mb-1">
          <input
            type="text"
            name="company"
            className="form-control"
            placeholder="Your Company"
            value={bookingForm.company}
            onChange={handleBookingChange}
          />
        </div>
        <div className="col-md-6 mb-1">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address *"
            value={bookingForm.email}
            onChange={handleBookingChange}
            required
          />
        </div>
        <div className="col-md-6 mb-1">
          <input
            type="number"
            name="phone"
            className="form-control"
            placeholder="Phone Number *"
            value={bookingForm.phone}
            onChange={handleBookingChange}
            required
          />
        </div>

        <div className="col-6 mb-1">
          <select
            name="productInterest"
            className="form-select"
            value={selectedService || ""}
            onChange={(e) =>
              setRequestForm((prev) => ({
                ...prev,
                services: [e.target.value],
              }))
            }
          >
            <option value="" disabled>
              Select Product
            </option>
            {Object.keys(serviceSubOptions).map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="col-6 mb-1">
          <select
            name="subService"
            className="form-select"
            disabled={!subservices.length}
            value={requestForm.subService}
            onChange={handleRequestChange}
          >
            <option value="" disabled>
              Select Subservice
            </option>
            {subservices.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>

        </div>

        <div className="col-md-6 mb-1">
          <select
            name="bestTime"
            className="form-select"
            value={requestForm.bestTime}
            onChange={handleRequestChange}
          >
            <option value="" disabled>
              Best Time to Reach
            </option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div className="col-md-6 mb-1">
          <select
            name="hearAboutUs"
            className="form-select"
            value={requestForm.hearAboutUs}
            onChange={handleRequestChange}
          >
            <option value="" disabled>
              Hear About Us
            </option>
            <option value="google">Google</option>
            <option value="social">Social Media</option>
            <option value="friend">Friend</option>
          </select>
        </div>

        <div className="col-12 mb-1">
          <textarea
            name="message"
            className="form-control"
            rows={4}
            placeholder="Message / Comments *"
            value={requestForm.message}
            onChange={handleRequestChange}
            required
          />
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="be-vietnam-pro-semibold btn banner-booking-btn text-white"
          >
            Get A Quote
          </button>
        </div>
      </div>
      {snackbar && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar(null)}
        />
      )}

    </form>

  );
};

export default QuoteForm;

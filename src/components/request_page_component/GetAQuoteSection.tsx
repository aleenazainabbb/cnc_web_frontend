"use client";

import React, { useState, FormEvent } from "react";
import QuoteForm from "./QuoteForm"; // adjust the path if needed

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Booking Form:", bookingForm);
    console.log("Request Form:", requestForm);
    // Submit to API here
  };

  return (
    <div className="container py-5 my-lg-5 my-md-5">
      <div className="row">
        <div className="col-12 col-lg-7 col-md-7">
          <QuoteForm
          />
        </div>

        {/* Right Info Section */}
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

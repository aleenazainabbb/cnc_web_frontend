"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles/profile.module.css";
import style from "./styles/pending.module.css";
import { useLead } from "@/context/MyQuote";
import { useQuoteList } from "@/context/QuoteList";

const MyQuotes: React.FC = () => {
  const [formData, setFormData] = useState({
    customer: "",
    email: "",
    phone: "",
    address: "",
    area: "",
    leadType: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createLead, loading, error, success, clearMessages } = useLead();
  const { fetchQuotes } = useQuoteList();

  useEffect(() => {
    // Clear all form data on page refresh
    setFormData({
      customer: "",
      email: "",
      phone: "",
      address: "",
      area: "",
      leadType: "",
      description: "",
    });
    localStorage.removeItem("leadData");
    clearMessages();
  }, []);

  // Reset form after successful save
  useEffect(() => {
    if (success) {
      // Reset form data
      setFormData({
        customer: "",
        email: "",
        phone: "",
        address: "",
        area: "",
        leadType: "",
        description: "",
      });

      // Clear localStorage
      localStorage.removeItem("leadData");

      // Clear errors
      setFormErrors({});

      // Hide success message after 2 seconds
      const timer = setTimeout(() => {
        clearMessages();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, clearMessages]);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setFormData((prev) => ({
        ...prev,
        email: user.email || "",
      }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    setIsSubmitting(true);
    try {
      await createLead(formData);
      await fetchQuotes();
    } catch (err) {
      console.error("Failed to create lead:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      customer: "",
      email: "",
      phone: "",
      address: "",
      area: "",
      leadType: "",
      description: "",
    });
    setFormErrors({});
    clearMessages();
  };

  return (
    <div className={style.main}>
      <div className={style.profile_container}>
        <div className={styles.profileFormRow}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name *</label>
            <input
              type="text"
              className={`${styles.input} ${formErrors.customer ? styles.errorInput : ""
                }`}
              name="customer"
              value={formData.customer}
              onChange={handleChange}
            />
            {formErrors.customer && (
              <span className={styles.errorText}>{formErrors.customer}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address </label>
            <input
              type="email"
              className={`${styles.input} ${styles.readonlyInput}`}
              name="email"
              value={formData.email}
              readOnly
            />
          </div>
        </div>

        <div className={styles.profileFormRow}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Phone </label>
            <input
              type="text"
              className={`${styles.input} ${formErrors.phone ? styles.errorInput : ""
                }`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && (
              <span className={styles.errorText}>{formErrors.phone}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Address </label>
            <input
              type="text"
              className={`${styles.input} ${formErrors.address ? styles.errorInput : ""
                }`}
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {/* {formErrors.address && (
              <span className={styles.errorText}>{formErrors.address}</span>
            )} */}
          </div>
        </div>

        <div className={styles.profileFormRow}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Area </label>
            <select
              className={`${styles.input} ${formErrors.area ? styles.errorInput : ""
                }`}
              name="area"
              value={formData.area}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select area
              </option>
              <option value="Dubai">Dubai</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Ajman">Ajman</option>
              <option value="Fujairah">Fujairah</option>
              <option value="Ras Al Khaimah">Ras Al Khaimah</option>
              <option value="Sharjah">Sharjah</option>
              <option value="Umm Al Quwain">Umm Al Quwain</option>
            </select>
            {/* {formErrors.area && (
              <span className={styles.errorText}>{formErrors.area}</span>
            )} */}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Lead Sources </label>
            <select
              className={`${styles.input} ${formErrors.leadType ? styles.errorInput : ""
                }`}
              name="leadType"
              value={formData.leadType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select lead Sources
              </option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Email">Email</option>
              <option value="Website">Website</option>
              <option value="Called">Called</option>
            </select>
            {/* {formErrors.leadType && (
              <span className={styles.errorText}>{formErrors.leadType}</span>
            )} */}
          </div>
        </div>

        <div className={styles.fullWidthInputGroup}>
          <label className={styles.label}>Instructions </label>
          <textarea
            className={`${styles.input} ${formErrors.description ? styles.errorInput : ""
              }`}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {/* {formErrors.description && (
            <span className={styles.errorText}>{formErrors.description}</span>
          )} */}
        </div>

        {/* Feedback Messages */}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Quote saved successfully!
          </p>
        )}

        <div className={styles.quotesbuttonContainer}>
          <button
            className={styles.quote_button}
            onClick={handleCancel}
            type="button"
          >
            Clear
          </button>
          <button
            className={styles.quote_button}
            onClick={handleSubmit}
            disabled={loading || isSubmitting}
          >
            {loading || isSubmitting ? (
              <>
                <span className={styles.loader}></span>
                Saving...
              </>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyQuotes;

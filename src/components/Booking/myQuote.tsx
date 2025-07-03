'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/profile.module.css';
import { useLead } from '@/context/MyQuote';
import { useQuoteList } from '@/context/QuoteList';

const MyQuotes: React.FC = () => {
  const [formData, setFormData] = useState({
    customer: '',
    email: '',
    phone: '',
    address: '',
    area: '',
    leadType: '',
    description: '',
  });

  const { createLead, loading, error, success, clearMessages } = useLead();
  const { fetchQuotes } = useQuoteList();
  useEffect(() => {
    const saved = localStorage.getItem('leadData');

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData({
          customer: parsed.customer || '',
          email: parsed.email || '',
          phone: parsed.phone || '',
          address: parsed.address || '',
          area: parsed.area || '',
          leadType: parsed.leadType || '',
          description: parsed.description || '',
        });
      } catch (e) {
        console.error('Error parsing saved lead data:', e);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    await createLead(formData);
    localStorage.setItem('leadData', JSON.stringify(formData));
    await fetchQuotes(formData.email);
  };

  const handleCancel = () => {
    setFormData({
      customer: '',
      email: '',
      phone: '',
      address: '',
      area: '',
      leadType: '',
      description: '',
    });
    clearMessages();
  };

  return (
    <div className={styles.main}>
      <div className={styles.profile_container}>
        {/* Fields */}
        <div className={styles.profileFormRow}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              className={styles.input}
              name="customer"
              value={formData.customer}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              className={styles.input}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.profileFormRow}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Phone</label>
            <input
              type="text"
              className={styles.input}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Address</label>
            <input
              type="text"
              className={styles.input}
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.profileFormRow}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Area</label>
            <select
              className={styles.input}
              name="area"
              value={formData.area}
              onChange={handleChange}
            >
              <option value="" disabled>Select area</option>
              <option value="Dubai">Dubai</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Ajman">Ajman</option>
              <option value="Fujairah">Fujairah</option>
              <option value="Ras Al Khaimah">Ras Al Khaimah</option>
              <option value="Sharjah">Sharjah</option>
              <option value="Umm Al Quwain">Umm Al Quwain</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Lead Sources</label>
            <select
              className={styles.input}
              name="leadType"
              value={formData.leadType}
              onChange={handleChange}
            >
              <option value="" disabled>Select lead Sources</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Email">Email</option>
              <option value="Website">Website</option>
              <option value="Called">Called</option>
            </select>
          </div>
        </div>

        <div className={styles.fullWidthInputGroup}>
          <label className={styles.label}>Instructions</label>
          <textarea
            className={styles.input}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* ✅ Show exact server message */}
        {error && (
          <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
        )}
        {success && (
          <p style={{ color: 'green', marginTop: '10px' }}>{success}</p>
        )}

        <div className={styles.quotesbuttonContainer}>
          <button className={styles.quote_button} onClick={handleCancel}>Clear</button>
          <button className={styles.quote_button} onClick={handleSubmit} disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyQuotes;

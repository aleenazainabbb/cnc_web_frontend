'use client';

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaCreditCard, FaLock, FaCheckCircle, FaTimesCircle, FaSpinner, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './PaymentPage.module.css';

const PaymentPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scriptRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkoutData, setCheckoutData] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [isRefreshed, setIsRefreshed] = useState(false);

  const id = searchParams.get('id');
  console.log("📦 Booking ID received in PaymentPage:", id);

  const [paymentForm, setPaymentForm] = useState({
    id: id || '',
    billingDetails: {
      street: '',
      city: '',
      state: '',
      country: 'AE',
      postcode: ''
    }
  });

  const prepareCheckout = async (data) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
      const response = await axios.post(
        'https://whatsapp.marifahsol.com/hyperpay/prepare-checkout',
        data,
        config
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || new Error('Checkout preparation failed');
    }
  };

  // Parse booking param and populate bookingDetails + prefill form (keeps behavior from working component)
  useEffect(() => {
    const bookingParam = searchParams.get('booking');
    const paramId = searchParams.get('id');

    if (bookingParam) {
      try {
        const booking = JSON.parse(bookingParam);
        setBookingDetails(booking);
        setPaymentForm(prev => ({
          ...prev,
          id: (booking.id || paramId || '').toString().trim(),
          billingDetails: {
            street: booking.address || booking.street || '',
            city: booking.area || booking.city || '',
            state: booking.area || booking.state || 'Abu Dhabi',
            country: 'AE',
            postcode: booking.postcode || '00000'
          }
        }));
        console.log('Booking details loaded from "booking" param:', booking);
      } catch (err) {
        console.error('Error parsing booking data:', err);
      }
    } else if (paramId) {
      setPaymentForm(prev => ({
        ...prev,
        id: paramId.toString().trim()
      }));
    }
  }, [searchParams]);

  // Detect manual page reload without id -> reset and disable widget button (existing behavior preserved)
  useEffect(() => {
    try {
      const navEntry = performance.getEntriesByType('navigation')[0];
      const navType = navEntry?.type;
      const urlId = searchParams.get('id');

      if (navType === 'reload' && !urlId) {
        console.log('🔄 Manual refresh detected — resetting form and disabling button');
        setPaymentForm({
          id: '',
          billingDetails: {
            street: '',
            city: '',
            state: '',
            country: 'AE',
            postcode: ''
          }
        });
        setCheckoutData(null);
        setScriptLoaded(false);
        setError(null);
        setIsRefreshed(true); // disable Proceed/Widget actions
      } else {
        console.log('✅ Normal navigation or refresh with ID — keeping booking ID');
        setIsRefreshed(false);
      }
    } catch (err) {
      // If performance API not available for some browsers, just leave as not refreshed
      setIsRefreshed(false);
    }
    // only run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add payment result listener (missing functionality)
  useEffect(() => {
    const handleMessage = (event) => {
      // Only process messages with checkoutId (HyperPay postMessage format)
      if (event?.data?.checkoutId) {
        console.log('Payment result received via postMessage:', event.data);

        if (event.data.status === 'success') {
          const successUrl = `/payment-success?paymentData=${encodeURIComponent(JSON.stringify(event.data))}&bookingDetails=${encodeURIComponent(JSON.stringify(bookingDetails || {}))}`;
          router.push(successUrl);
        } else if (event.data.status === 'pending') {
          const pendingUrl = `/payment-pending?paymentData=${encodeURIComponent(JSON.stringify(event.data))}&bookingDetails=${encodeURIComponent(JSON.stringify(bookingDetails || {}))}`;
          router.push(pendingUrl);
        } else {
          setError(event.data.description || 'Payment failed');
          setCheckoutData(null);
          setScriptLoaded(false);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [router, bookingDetails]);

  // Cleanup script when unmounting (missing functionality)
  useEffect(() => {
    return () => {
      if (scriptRef.current) {
        try {
          document.body.removeChild(scriptRef.current);
        } catch (err) {
          // ignore
        }
        scriptRef.current = null;
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('billing.')) {
      const billingField = name.replace('billing.', '');
      setPaymentForm(prev => ({
        ...prev,
        billingDetails: { ...prev.billingDetails, [billingField]: value }
      }));
    } else {
      setPaymentForm(prev => ({ ...prev, [name]: value }));
    }
    if (error) setError(null);
  };

  const validateForm = () => {
    if (!paymentForm.id || paymentForm.id.toString().trim() === '') {
      setError('Booking ID is required');
      return false;
    }

    const billing = paymentForm.billingDetails || {};
    const required = ['street', 'city', 'country', 'postcode'];
    const missing = required.filter(f => !String(billing[f] || '').trim());
    if (missing.length) {
      setError(`Missing billing details: ${missing.join(', ')}`);
      return false;
    }

    if ((billing.country || '').length !== 2) {
      setError('Country code must be 2 characters (e.g., AE for UAE)');
      return false;
    }

    return true;
  };

  // When preparing checkout, send the expected payload (bookingId + billingDetails) — same as working code
  const handlePrepareCheckout = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setError(null);

    try {
      const requestData = {
        bookingId: paymentForm.id,
        billingDetails: {
          street: paymentForm.billingDetails.street,
          city: paymentForm.billingDetails.city,
          state: paymentForm.billingDetails.state,
          country: paymentForm.billingDetails.country,
          postcode: paymentForm.billingDetails.postcode
        }
      };

      console.log('Sending checkout request:', requestData);

      const response = await prepareCheckout(requestData);

      console.log('Checkout response:', response);

      if (response.success) {
        setCheckoutData(response.data);
        // load widget
        loadPaymentWidget(response.data.checkoutId);
      } else {
        setError(response.message || 'Failed to prepare checkout');
      }
    } catch (err) {
      console.error('Checkout error details:', err);
      setError(err.message || 'Failed to prepare checkout');
    } finally {
      setLoading(false);
    }
  };

  const loadPaymentWidget = (checkoutId) => {
    if (scriptRef.current) {
      try {
        document.body.removeChild(scriptRef.current);
      } catch (err) {
        // ignore removal errors
      }
      scriptRef.current = null;
    }
    const script = document.createElement('script');
    script.src = `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
      console.log('Payment widget script loaded successfully');
    };
    script.onerror = () => {
      setError('Failed to load payment widget.');
      setScriptLoaded(false);
    };
    document.body.appendChild(script);
    scriptRef.current = script;
  };

  const handleReset = () => {
    setCheckoutData(null);
    setScriptLoaded(false);
    setError(null);
    if (scriptRef.current) {
      try {
        document.body.removeChild(scriptRef.current);
      } catch (err) {
        // ignore
      }
      scriptRef.current = null;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.lockIcon}>
            <FaLock />
          </div>
          <h1>Secure Payment</h1>
          <p>Complete your booking payment securely with HyperPay</p>
        </div>

        {error && (
          <div className={styles.errorBox}>
            <FaTimesCircle className={styles.errorIcon} />
            <div>
              <p className={styles.errorTitle}>Error</p>
              <p className={styles.errorMessage}>{error}</p>
            </div>
          </div>
        )}

        <div className={styles.card}>
          {/* Booking summary (added) */}
          {bookingDetails && (
            <div className={styles.bookingSummary}>
              <h2 className={styles.bookingTitle}>Booking Summary</h2>
              <div className={styles.bookingDetails}>
                <div className={styles.bookingRow}>
                  <span className={styles.bookingLabel}>Booking ID:</span>
                  <span className={styles.bookingValue}>
                    {bookingDetails.bookingId || `B-${String(bookingDetails.id).padStart(3, '0')}`}
                  </span>
                </div>
                <div className={styles.bookingRow}>
                  <span className={styles.bookingLabel}>Service:</span>
                  <span className={styles.bookingValue}>
                    {bookingDetails.serviceName || 'Cleaning Service'}
                  </span>
                </div>
                <div className={styles.bookingRow}>
                  <span className={styles.bookingLabel}>Amount:</span>
                  <span className={styles.bookingValue}>
                    AED {parseFloat(bookingDetails.cncChargesInclVat || bookingDetails.totalPrice || 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Hidden Booking ID Field (still functional) */}
          <div style={{ display: 'none' }}>
            <input
              type="text"
              name="id"
              value={paymentForm.id}
              onChange={handleInputChange}
              readOnly
            />
          </div>

          <div className={styles.formContainer}>
            {!checkoutData ? (
              <form onSubmit={handlePrepareCheckout}>
                {/* <div className={styles.section}>
                  <h4><FaMapMarkerAlt /> Billing Address</h4>
                  <div className={styles.grid}>
                    <div className={styles.full}>
                      <label>Street Address *</label>
                      <input name="billing.street" value={paymentForm.billingDetails.street} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <label>City *</label>
                      <input name="billing.city" value={paymentForm.billingDetails.city} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <label>State</label>
                      <input name="billing.state" value={paymentForm.billingDetails.state} onChange={handleInputChange} />
                    </div>
                    <div>
                      <label>Country Code *</label>
                      <input name="billing.country" value={paymentForm.billingDetails.country} onChange={handleInputChange} maxLength="2" className={styles.uppercase} required />
                    </div>
                    <div>
                      <label>Postcode *</label>
                      <input name="billing.postcode" value={paymentForm.billingDetails.postcode} onChange={handleInputChange} required />
                    </div>
                  </div>
                </div> */}
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.iconCircle}>
                      <FaMapMarkerAlt className={styles.sectionIcon} />
                    </div>
                    <h4>Billing Address</h4>
                  </div>

                  <div className={styles.grid}>
                    <div className={styles.full}>
                      <label className={styles.label}>Street Address *</label>
                      <input
                        className={styles.input}
                        name="billing.street"
                        value={paymentForm.billingDetails.street}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Al Nahda Street, Building 5"
                      />
                    </div>

                    <div>
                      <label className={styles.label}>City *</label>
                      <input
                        className={styles.input}
                        name="billing.city"
                        value={paymentForm.billingDetails.city}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Dubai"
                      />
                    </div>

                    <div>
                      <label className={styles.label}>State</label>
                      <input
                        className={styles.input}
                        name="billing.state"
                        value={paymentForm.billingDetails.state}
                        onChange={handleInputChange}
                        placeholder="e.g., Deira"
                      />
                    </div>

                    <div>
                      <label className={styles.label}>Country Code *</label>
                      <input
                        className={`${styles.input} ${styles.uppercase}`}
                        name="billing.country"
                        value={paymentForm.billingDetails.country}
                        onChange={handleInputChange}
                        maxLength="2"
                        required
                        placeholder="AE"
                      />
                    </div>

                    <div>
                      <label className={styles.label}>Postcode *</label>
                      <input
                        className={styles.input}
                        name="billing.postcode"
                        value={paymentForm.billingDetails.postcode}
                        onChange={handleInputChange}
                        required
                        placeholder="00000"
                      />
                    </div>
                  </div>
                </div>


                <button type="submit" disabled={loading || !paymentForm.id || isRefreshed} className={styles.submitBtn}>
                  {loading ? <><FaSpinner className={styles.spin} /> Processing...</> : <><FaCreditCard /> Proceed to Payment</>}
                </button>
              </form>
            ) : (
              <div className={styles.widgetSection}>
                <div className={styles.widgetHeader}>
                  <h3>Enter Payment Details</h3>

                  {/* Change Billing Info button */}
                  <button
                    onClick={handleReset}
                    className={styles.resetBtn}
                    type="button"
                    disabled={loading}
                  >
                    ← Change Billing Info
                  </button>
                </div>

                {/* <div className={styles.widgetBox}> */}
                {!scriptLoaded && (
                  <div className={styles.loadingBox}>
                    <FaSpinner className={styles.spinLarge} />
                    <p>Loading secure payment form...</p>
                  </div>
                )}
                {/* HyperPay widget form (will be injected by Oppwa script) */}
                <form
                  action={`${window.location.origin}/HyperPay/payment/result`}
                  className="paymentWidgets"
                  data-brands="VISA MASTER MADA"
                ></form>
                {/* </div> */}

                {/* Transaction Details (added) */}
                {/* {checkoutData && (
                  <div className={styles.transactionDetails}>
                    <h4 className={styles.transactionTitle}>
                      <FaCheckCircle className={styles.transactionIcon} />
                      Transaction Details
                    </h4>
                    <div className={styles.transactionInfo}>
                      <div className={styles.transactionRow}>
                        <span>Checkout ID:</span>
                        <span className={styles.transactionValue}>{checkoutData.checkoutId}</span>
                      </div>
                      <div className={styles.transactionRow}>
                        <span>Transaction ID:</span>
                        <span className={styles.transactionValue}>{checkoutData.merchantTransactionId}</span>
                      </div>
                      <div className={styles.transactionRow}>
                        <span>Amount:</span>
                        <span className={styles.transactionAmount}>{checkoutData.currency} {checkoutData.amount}</span>
                      </div>
                      {checkoutData.bookingId && (
                        <div className={styles.transactionRow}>
                          <span>Booking ID:</span>
                          <span className={styles.transactionBooking}>{checkoutData.bookingId}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )} */}

                {/* Security Info */}
                {/* <div className={styles.securityInfo}>
                  <FaLock className={styles.securityIcon} />
                  <span>Your payment is secured with 256-bit SSL encryption</span>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

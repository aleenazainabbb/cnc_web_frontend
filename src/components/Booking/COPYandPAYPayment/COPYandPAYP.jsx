'use client'; // Add this at the top for App Router

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaCreditCard, FaLock, FaCheckCircle, FaTimesCircle, FaSpinner, FaMapMarkerAlt } from 'react-icons/fa';

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scriptRef = useRef(null);

  // State management
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkoutData, setCheckoutData] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  // Get bookingId from search parameters
  const bookingId = searchParams.get('bookingId');

  // Form state
  const [paymentForm, setPaymentForm] = useState({
    bookingId: bookingId || '',
    billingDetails: {
      street: '',
      city: '',
      state: '',
      country: 'AE',
      postcode: ''
    }
  });

  // Direct API call function
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

  // Get booking details from search parameters
  useEffect(() => {
    const bookingParam = searchParams.get('booking');
    if (bookingParam) {
      try {
        const booking = JSON.parse(bookingParam);
        setBookingDetails(booking);
        
        console.log('Booking details:', booking);
        
        // Pre-fill form with booking data
        setPaymentForm(prev => ({
          ...prev,
          bookingId: booking.id || bookingId || '',
          billingDetails: {
            street: booking.address || booking.street || '',
            city: booking.area || booking.city || '',
            state: booking.area || booking.state || 'Dubai',
            country: 'AE',
            postcode: booking.postcode || '00000'
          }
        }));
      } catch (err) {
        console.error('Error parsing booking data:', err);
      }
    }
  }, [searchParams, bookingId]);

  // Update bookingId when search params change
  useEffect(() => {
    if (bookingId) {
      setPaymentForm(prev => ({
        ...prev,
        bookingId: bookingId
      }));
    }
  }, [bookingId]);

  // Handle form input changes for billing details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('billing.')) {
      const billingField = name.replace('billing.', '');
      setPaymentForm(prev => ({
        ...prev,
        billingDetails: {
          ...prev.billingDetails,
          [billingField]: value
        }
      }));
    } else {
      setPaymentForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    if (error) setError(null);
  };

  // Validate form according to backend requirements
  const validateForm = () => {
    console.log('Validating form:', paymentForm);

    if (!paymentForm.bookingId || paymentForm.bookingId.toString().trim() === '') {
      setError('Booking ID is required');
      return false;
    }

    const billing = paymentForm.billingDetails;
    const requiredBillingFields = ['street', 'city', 'country', 'postcode'];
    const missingBillingFields = requiredBillingFields.filter(field => !billing[field] || billing[field].toString().trim() === '');

    if (missingBillingFields.length > 0) {
      setError(`Missing billing details: ${missingBillingFields.join(', ')}`);
      return false;
    }

    if (billing.country.length !== 2) {
      setError('Country code must be 2 characters (e.g., AE for UAE)');
      return false;
    }

    return true;
  };

  // Step 1: Prepare checkout
  const handlePrepareCheckout = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError(null);

    try {
      const requestData = {
        bookingId: paymentForm.bookingId,
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
        // Load HyperPay payment widget
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

  // Step 2: Load payment widget
  const loadPaymentWidget = (checkoutId) => {
    // Remove existing scripts
    if (scriptRef.current) {
      document.body.removeChild(scriptRef.current);
      scriptRef.current = null;
    }

    // Add HyperPay payment widget script
    const script = document.createElement('script');
    script.src = `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    script.async = true;
    
    script.onload = () => {
      setScriptLoaded(true);
      console.log('Payment widget loaded successfully');
    };

    script.onerror = () => {
      setError('Failed to load payment widget. Please try again.');
      setScriptLoaded(false);
    };

    document.body.appendChild(script);
    scriptRef.current = script;
  };

  // Cleanup script on unmount
  useEffect(() => {
    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  // Handle payment result from redirect
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.checkoutId) {
        console.log('Payment result received:', event.data);
        
        if (event.data.status === 'success') {
          // Navigate to success page with data
          const successUrl = `/payment-success?paymentData=${encodeURIComponent(JSON.stringify(event.data))}&bookingDetails=${encodeURIComponent(JSON.stringify(bookingDetails))}`;
          router.push(successUrl);
        } else if (event.data.status === 'pending') {
          // Navigate to pending page with data
          const pendingUrl = `/payment-pending?paymentData=${encodeURIComponent(JSON.stringify(event.data))}&bookingDetails=${encodeURIComponent(JSON.stringify(bookingDetails))}`;
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

  const handleReset = () => {
    setCheckoutData(null);
    setScriptLoaded(false);
    setError(null);
    
    if (scriptRef.current) {
      document.body.removeChild(scriptRef.current);
      scriptRef.current = null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
            <FaLock className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Secure Payment
          </h1>
          <p className="text-gray-600">
            Complete your booking payment securely with HyperPay
          </p>
        </div>

        {/* Alert Messages */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
            <div className="flex items-center">
              <FaTimesCircle className="text-red-500 mr-3" />
              <div>
                <p className="text-red-700 font-medium">Error</p>
                <p className="text-red-600 text-sm mt-1">{error}</p>
                <p className="text-red-500 text-xs mt-2">
                  Please check all fields and try again
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Booking Summary */}
          {bookingDetails && (
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
              <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-90">Booking ID:</span>
                  <span className="font-semibold">{bookingDetails.bookingId || `B-${String(bookingDetails.id).padStart(3, '0')}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">Service:</span>
                  <span className="font-semibold">{bookingDetails.serviceName || 'Cleaning Service'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">Amount:</span>
                  <span className="font-semibold">AED {parseFloat(bookingDetails.cncChargesInclVat || bookingDetails.totalPrice || 0).toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="p-6 md:p-8">
            {!checkoutData ? (
              // Payment Form
              <form onSubmit={handlePrepareCheckout} className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Payment Information
                </h3>

                {/* Booking ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Booking ID *
                  </label>
                  <input
                    type="text"
                    name="bookingId"
                    value={paymentForm.bookingId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="Enter Booking ID"
                    required
                  />
                </div>

                {/* Billing Address */}
                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-indigo-600" />
                    Billing Address
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="billing.street"
                        value={paymentForm.billingDetails.street}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                        placeholder="123 Sheikh Zayed Road"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="billing.city"
                        value={paymentForm.billingDetails.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                        placeholder="Dubai"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        name="billing.state"
                        value={paymentForm.billingDetails.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                        placeholder="Dubai"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country Code *
                      </label>
                      <input
                        type="text"
                        name="billing.country"
                        value={paymentForm.billingDetails.country}
                        onChange={handleInputChange}
                        maxLength="2"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition uppercase"
                        placeholder="AE"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">2-letter ISO code (e.g., AE for UAE)</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        name="billing.postcode"
                        value={paymentForm.billingDetails.postcode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                        placeholder="12345"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaCreditCard className="mr-2" />
                      Proceed to Payment
                    </>
                  )}
                </button>
              </form>
            ) : (
              // Payment Widget Section
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Enter Payment Details
                  </h3>
                  <button
                    onClick={handleReset}
                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center"
                  >
                    ← Change Billing Info
                  </button>
                </div>

                {/* Payment Form Container */}
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-200">
                  {!scriptLoaded && (
                    <div className="text-center py-8">
                      <FaSpinner className="animate-spin text-indigo-600 text-4xl mx-auto mb-4" />
                      <p className="text-gray-600">Loading secure payment form...</p>
                    </div>
                  )}
                  
                  {/* HyperPay Widget will inject here */}
                  <form
                    action={`${window.location.origin}/HyperPay/payment/result`}
                    className="paymentWidgets"
                    data-brands="VISA MASTER MADA"
                  ></form>
                </div>

                {/* Transaction Details */}
                {checkoutData && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <FaCheckCircle className="mr-2" />
                      Transaction Details
                    </h4>
                    <div className="text-sm text-blue-800 space-y-2">
                      <div className="flex justify-between">
                        <span>Checkout ID:</span>
                        <span className="font-mono text-xs">{checkoutData.checkoutId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transaction ID:</span>
                        <span className="font-mono text-xs">{checkoutData.merchantTransactionId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-semibold">{checkoutData.currency} {checkoutData.amount}</span>
                      </div>
                      {checkoutData.bookingId && (
                        <div className="flex justify-between">
                          <span>Booking ID:</span>
                          <span className="font-semibold">{checkoutData.bookingId}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Security Info */}
                <div className="flex items-center justify-center text-sm text-gray-600 pt-4">
                  <FaLock className="mr-2 text-green-600" />
                  <span>Your payment is secured with 256-bit SSL encryption</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
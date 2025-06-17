'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import verify from '../styles/verification.module.css';
import { useForgotPassword } from '@/context/ForgotPassword';
import Snackbar from '../../popups/Snackbar';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const { sendResetCode, loading } = useForgotPassword();
  const router = useRouter(); // ✅ Initialize router

  const handleSendCode = async () => {
    if (!email.trim()) {
      setSnackbar({ message: 'Please enter your email.', type: 'error' });
      return;
    }

    try {
      const message = await sendResetCode(email);
      setSnackbar({ message, type: 'success' });

      // ✅ Navigate to verification page after a short delay (to allow snackbar to appear)
      setTimeout(() => {
        router.push(`/ForgetPassword/verifyForgotPass?email=${encodeURIComponent(email)}`);
      }, 500);
    } catch (err: any) {
      setSnackbar({ message: err.message, type: 'error' });
    }
  };

  return (
    <div className={verify.main}>
      <div className={verify.container}>
        <h2 className={verify.heading}>Forgot Password</h2>
        <p className={verify.description}>Please enter your email to receive a reset code.</p>

        <input
          type="email"
          className={verify.input}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSendCode}
          className={verify.button}
          disabled={!email.trim() || loading}
        >
          {loading ? 'Sending...' : 'Send Code'}
        </button>
      </div>

      {snackbar && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar(null)}
        />
      )}
    </div>
  );
};

export default ForgetPassword;

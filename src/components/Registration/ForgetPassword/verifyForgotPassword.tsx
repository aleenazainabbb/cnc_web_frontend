'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import verify from '../styles/verification.module.css';
import { useVerifyForgotPassword } from '@/context/VerifyForgotPassword';
import { useForgotPassword } from '@/context/ForgotPassword';
import Snackbar from '../../popups/Snackbar';
import { useRouter } from 'next/navigation';


const VerifyForgetPassword = () => {
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get('email') || '';
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [countdown, setCountdown] = useState(60);
  const [timerExpired, setTimerExpired] = useState(false);
  const { verifyResetCode, loading } = useVerifyForgotPassword();
  const { sendResetCode } = useForgotPassword();
  const router = useRouter();

  useEffect(() => {
    setEmail(emailFromQuery);
  }, [emailFromQuery]);

  // Countdown logic
  useEffect(() => {
    if (countdown === 0) {
      setTimerExpired(true);
      return;
    }
    const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleVerify = async () => {
  if (!email || !code.trim()) {
    setSnackbar({ message: 'Email and code are required.', type: 'error' });
    return;
  }

  try {
    const resetToken = await verifyResetCode(email, code); // ✅ get real token from server
    setSnackbar({ message: 'Code verified successfully!', type: 'success' });

    // ✅ Pass resetToken (not code) to next page
    setTimeout(() => {
      router.push(`/ForgetPassword/ResetPassword?resetToken=${encodeURIComponent(resetToken)}`);
    }, 500);
  } catch (err: any) {
    setSnackbar({ message: err.message, type: 'error' });
  }
};


  const handleResendCode = async () => {
    if (!email) return;
    try {
      const msg = await sendResetCode(email);
      setSnackbar({ message: msg, type: 'success' });
      setCountdown(60);
      setTimerExpired(false);
    } catch (err: any) {
      setSnackbar({ message: err.message, type: 'error' });
    }
  };


  const isButtonDisabled = (!code.trim() && !timerExpired) || loading;

  return (
    <div className={verify.main}>
      <div className={verify.container}>
        <h2 className={verify.heading}>Verify Code</h2>
        <p className={verify.description}>
          A verification code has been sent to  <strong>{email}</strong> via Email.
        </p>

        <input
          type="text"
          className={verify.input}
          placeholder="Enter verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          onClick={handleVerify}
          className={verify.button}
          disabled={isButtonDisabled}
        >
          {loading ? 'Verifying...' : 'Verify'}
        </button>

        <p className={verify.label}>
          {countdown > 0 ? (
            `Resend code in ${countdown}s`
          ) : (
            <span onClick={handleResendCode} className={verify.resend}>
              Resend Code
            </span>

          )}
        </p>

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

export default VerifyForgetPassword;

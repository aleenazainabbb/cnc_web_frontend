'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Snackbar from '@/components/popups/Snackbar';
import styles from './styles/verification.module.css';

import { useVerification } from '@/context/verification'; // for verifyCode
import { useResendCode } from '@/context/signupVerify';     // for resendCode

const Verification = () => {
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get('email') || '';
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [countdown, setCountdown] = useState(60);
  const [timerExpired, setTimerExpired] = useState(false);

  const { verifyCode, loading: verifying } = useVerification();
  const { resendCode, loading: resending } = useResendCode();
  const router = useRouter();

  useEffect(() => {
    setEmail(emailFromQuery);
  }, [emailFromQuery]);

  useEffect(() => {
    if (countdown === 0) {
      setTimerExpired(true);
      return;
    }
    const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleVerify = async () => {
    if (!email || !code.trim()) {
      setSnackbar({ message: 'Verification Code is required.', type: 'error' });
      return;
    }
    try {
      await verifyCode(email, code);
      setSnackbar({ message: 'Code verified successfully!', type: 'success' });
      setTimeout(() => router.push('/Bookings/Dashboard'), 800);
    } catch (err: any) {
      setSnackbar({ message: err.message, type: 'error' });
    }
  };

 const handleResend = async () => {
  const { success, message } = await resendCode(email);
  setSnackbar({ message, type: success ? 'success' : 'error' });

  if (success) {
    setCountdown(60);
    setTimerExpired(false);
  }
};


  const isDisabled = (!code.trim() && !timerExpired) || verifying;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Verification</h2>
        <p className={styles.description}>
          A verification code was sent to <strong>{email}</strong>.
        </p>

        <input
          type="text"
          className={styles.input}
          placeholder="Enter verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button className={styles.button} onClick={handleVerify} disabled={isDisabled}>
          {verifying ? 'Verifying...' : 'Verify'}
        </button>

        <p className={styles.label}>
          {countdown > 0 ? (
            `Resend code in ${countdown}s`
          ) : (
            <span onClick={handleResend} className={styles.resend}>
              {resending ? 'Resending...' : 'Resend Code'}
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

export default Verification;

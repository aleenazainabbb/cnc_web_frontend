'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import verify from '../styles/verification.module.css';
import Snackbar from '../../popups/Snackbar';
import { useResetPassword } from '@/context/ResetPassword'; // Adjust path if needed

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetToken = searchParams.get('resetToken');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const { resetPassword, loading } = useResetPassword();

  const handleReset = async () => {
    if (!password.trim() || !confirmPassword.trim()) {
      setSnackbar({ message: 'Please fill in both fields.', type: 'error' });
      return;
    }

    if (password !== confirmPassword) {
      setSnackbar({ message: 'Passwords do not match.', type: 'error' });
      return;
    }

    if (!resetToken) {
      setSnackbar({ message: 'Missing reset token.', type: 'error' });
      return;
    }

    try {
      const message = await resetPassword(resetToken, password);
      setSnackbar({ message, type: 'success' });

      setTimeout(() => {
        router.push('/Login');
      }, 1000);
    } catch (err: any) {
      setSnackbar({ message: err.message, type: 'error' });
    }
  };

  return (
    <div className={verify.main}>
      <div className={verify.container}>
        <h2 className={verify.heading}>Enter New Password</h2>

        <input
          type="password"
          className={verify.input}
          placeholder="Enter New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className={verify.input}
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={handleReset}
          className={verify.button}
          disabled={!password || !confirmPassword || loading}
        >
          {loading ? 'Saving...' : 'Reset Password'}
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

export default ResetPassword;

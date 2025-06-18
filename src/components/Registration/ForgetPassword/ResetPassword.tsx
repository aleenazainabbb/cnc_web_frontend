'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import verify from '../styles/verification.module.css';
import Snackbar from '../../popups/Snackbar';
import { useResetPassword } from '@/context/ResetPassword';
import { isValidEmail, isValidPassword } from '../../../../utils/validators';
import wallet from '../../Booking/styles/mywallet.module.css';


const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetToken = searchParams.get('resetToken');
  const [showModal, setShowModal] = useState(false);

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
    if (!isValidPassword(password)) {
      setSnackbar({ message: 'Password must meet all required criteria.', type: 'error' });
      return;
    }

    if (!resetToken) {
      setSnackbar({ message: 'Missing reset token.', type: 'error' });
      return;
    }

    try {
      const message = await resetPassword(resetToken, password);
      setSnackbar({ message, type: 'success' });

    setShowModal(true);
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

        <p className={verify.charlabels}>
          Please make sure your password includes the following:<br />
          - Is no less than 8 characters<br />
          - Includes at least one special character<br />
          - Includes at least one number<br />
          - Includes at least one capital letter<br />
          - Includes at least one lowercase letter<br />
        </p>
         <button
          onClick={handleReset}
          className={verify.button}
          disabled={!password || !confirmPassword || loading}
        >
          {loading ? 'Saving...' : 'Reset Password'}
        </button>
        {showModal && (
          <div className={wallet.modalOverlay}>
            <div className={wallet.modal}>
              <button className={wallet.close} onClick={() => setShowModal(false)}>×</button>
              <p className={wallet.modalTitle}>Password Change Successful </p>
              <button
                className={wallet.redeemBtn}
                onClick={() => router.push('/Login')}
              >
                OKAY
              </button>

            </div>
          </div>
        )}
        {snackbar && (
          <Snackbar
            message={snackbar.message}
            type={snackbar.type}
            onClose={() => setSnackbar(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ResetPassword;

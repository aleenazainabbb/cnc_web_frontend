'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import verify from './styles/verification.module.css';
import { useVerification } from '../../context/verification'; 

export default function Verification() {
  const [email, setEmail] = useState('');
  const [pinCode, setCode] = useState('');
  const router = useRouter();
  const { verifyCode } = useVerification();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const emailParam = query.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, []);

  const handleVerify = async () => {
    if (pinCode.trim().length === 0) {
      alert('Please enter the verification code.');
      return;
    }

    try {
      await verifyCode(email, pinCode);
      router.push('/Bookings/Dashboard');
    } catch (err: any) {
      alert(err.message || 'Verification failed.');
    }
  };

  return (
    <div className={verify.main}>
      <div className={verify.container}>
        <h2 className={verify.heading}>Verification</h2>
        <p className={verify.description}>
          Please check your email <strong>{email}</strong> for the verification code.
        </p>

        <input
          type="text"
          className={verify.input}
          placeholder="Enter the verification code"
          value={pinCode}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          onClick={handleVerify}
          className={verify.button}
          disabled={pinCode.trim().length === 0}
        >
          Verify
        </button>
      </div>
    </div>
  );
}

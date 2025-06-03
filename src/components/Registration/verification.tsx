"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import verify from './styles/verification.module.css';
import { useRouter } from 'next/navigation';

export default function Verification() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const router = useRouter();

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleVerify = () => {
    // You can add your actual code verification logic here before redirecting
    if (code.trim().length === 0) {
      alert('Please enter the verification code.');
      return;
    }

    // After successful verification
    router.push('/Bookings');
  };

  return (
    <div className={verify.main}>
      <div className={verify.container}>
        <h2 className={verify.heading}>Verification</h2>
        <p className={verify.description}>
          Please check your email <strong>{email}</strong> for the verification code.
       
        </p>

        <label className={verify.label}>Verification Code</label>
        <input
          type="text"
          className={verify.input}
          placeholder="Enter the verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button onClick={handleVerify} className={verify.button}>Verify</button>
      </div>
    </div>
  );
}

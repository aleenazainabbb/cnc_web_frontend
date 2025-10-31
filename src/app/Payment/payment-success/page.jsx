'use client';

import React from 'react';
// import { FaCheckCircle ,} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import styles from './payment-success.module.css';
import { FaCheckCircle, FaLock } from 'react-icons/fa'; // ✅ Added FaLock here

const PaymentSuccess = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/Bookings/Dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <FaCheckCircle className={styles.icon} />
        <h2 className={styles.title}>Payment Successful!</h2>
        <p className={styles.message}>
          Your payment has been received successfully. Thank you for your purchase.
        </p>
        {/* <p className={styles.note}>
          Your card details are not saved anywhere. All transactions are processed securely.
        </p> */}

         {/* ✅ Added soft block for reassurance note */}
        <div className={styles.noteBlock}>
          <FaLock className={styles.lockIcon} />
          <p className={styles.note}>
            Your card details are <strong>not saved anywhere</strong>.  
            All transactions are securely processed with advanced encryption for your safety.
          </p>
        </div>

        <button onClick={handleGoHome} className={styles.button}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

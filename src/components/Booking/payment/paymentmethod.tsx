'use client';
import React from 'react';
import payment from '../styles/paymethod.module.css';
import PaymentUpdate from '@/components/Booking/payment/paymentupdate';


const PaymentMethod: React.FC = () => {
    return (
        <div className={payment.main}>
            <div className={payment.container}>
                <label className={payment.label}>Saved Card</label>
                <input
                    type="text"
                    placeholder="Enter location name eg home, office etc"
                    className={payment.input}
                />
                <div className={payment.line}></div>
                <PaymentUpdate />

            </div>
         </div>

    );
};
export default PaymentMethod;

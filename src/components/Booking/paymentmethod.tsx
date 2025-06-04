'use client';
import React from 'react';
import payment from './styles/paymethod.module.css';

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

                <div className={payment.profileFormRow}>
                    <div className={payment.inputGroup}>
                        <label className={payment.label}>Credit/Debit Card No</label>
                        <input
                            type="text"
                            placeholder="Enter location name eg home, office etc"
                            className={payment.input}
                        />
                        <label className={payment.label}>Expiry Date</label>
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className={payment.input}
                        />
                        <label className={payment.label} style={{ fontWeight: "400" }}> AED 1 will be reserved then released to confirm your card.</label>

                    </div>
                    <div className={payment.inputGroup}>
                        <label className={payment.label}>Name on Card</label>
                        <input
                            type="text"
                            placeholder="Enter your name as it appears on the card"
                            className={payment.input}
                        />

                        <label className={payment.label}>CCV Code</label>
                        <input
                            type="text"
                            placeholder="123"
                            className={payment.input}
                        />
                        <div className={payment.wrap}>
                            <div className={payment.cardLogos1}>
                                <img src="/images/paymentcards/master.png" alt="MasterCard" />
                            </div>
                            <div className={payment.cardLogos2}>
                                <img src="/images/paymentcards/visa.png" alt="Visa" />
                            </div>
                        </div>
                        <div className={payment.buttonContainer}>
                            <button className={payment.button}>Add Card</button>

                        </div>
                    </div>
                </div>



            </div>
        </div>

    );
};
export default PaymentMethod;

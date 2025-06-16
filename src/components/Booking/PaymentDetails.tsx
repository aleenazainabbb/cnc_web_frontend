"use client";

import React, { useState } from "react";
import payment from './styles/PaymentDetails.module.css';

const PaymentDetails: React.FC = () => {
    const [selected, setSelected] = useState(""); // "credit" or "cash"

    return (
        <div className={payment.main}>
            <div className={payment.paragraph}>
                <p>How would you like to pay for your service?</p>
                <p className={payment.desription}>You pay only after the service is completed.</p>
            </div>

            {/* Payment Options */}
            <div>
                <div
                    className={`${payment.customblock} ${selected === "credit" ? payment.selected : ""}`}
                    onClick={() => setSelected("credit")}
                >
                    <input
                        type="radio"
                        name="payment"
                        className={payment.customRadio}
                        checked={selected === "credit"}
                        onChange={() => setSelected("credit")}
                    />
                    <div className={`${payment.paragraph} ${payment.optionText}`}>
                        <div className={payment.labelRow}>
                            <span className={payment.label}>Credit Card</span>
                            <span className={payment.discount}>Save $8.10 off</span>
                        </div>
                        <p className={payment.content}>
                            We will only charge your card after the service is delivered
                        </p>
                    </div>

                </div>

                <div
                    className={`${payment.customblock} ${selected === "cash" ? payment.selected : ""} ${payment.marginTop}`}
                    onClick={() => setSelected("cash")}
                >
                    <input
                        type="radio"
                        name="payment"
                        className={payment.customRadio}
                        checked={selected === "cash"}
                        onChange={() => setSelected("cash")}
                    />
                    <div className={`${payment.paragraph} ${payment.optionText}`}>
                        <span className={payment.label}>Cash on Delivery</span>
                        <p className={payment.content}>
                            Cash handling charges of 5 will apply.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className={payment.title}>Payment Details</h2>
            <p className={payment.paymentSubtext}>Add in your payment details through our secure gateway</p>

            <form className={payment.form}>
                <div>
                    <label className={payment.formlabel}>
                        CREDIT CARD
                        <input className={payment.forminput} type="text" placeholder="Enter a Location" />
                    </label>
                    <label className={payment.formlabel}>
                        FULL NAME
                        <input className={payment.forminput} type="text" placeholder="Enter Full name" />
                    </label>
                    <label className={payment.formlabel}>
                        PHONE NUMBER
                        <input className={payment.forminput} type="text" placeholder="Enter a Phone number" />
                    </label>
                </div>

                <div className={payment.formRight}>
                    <div className={payment.formRow}>
                        <label className={payment.formlabel}>
                            EXP. DATE
                            <input className={`${payment.forminput} ${payment.smallInput}`} type="text" placeholder="mm/yyyy" />
                        </label>
                        <label className={payment.formlabel}>
                            CVV
                            <input className={`${payment.forminput} ${payment.smallInput}`} type="tel" />
                        </label>
                    </div>
                    <label className={payment.formlabel}>
                        EMAIL ADDRESS
                        <input className={payment.forminput} type="email" placeholder="Enter an address" />
                    </label>
                    <label className={payment.formlabel}>
                        HOW DO WE CONTACT YOU
                        <div className={payment.contactOptions}>
                            <input className={payment.contactInput} type="text" placeholder="TEXT" />
                            <input className={payment.contactInput} type="text" placeholder="CALL" />
                            <input className={payment.contactInput} type="email" placeholder="EMAIL" />
                        </div>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default PaymentDetails;

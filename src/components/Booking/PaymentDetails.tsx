"use client";

import React, { useState } from "react";
import payment from './styles/PaymentDetails.module.css';
const PaymentDetails: React.FC = () => {
    const [selected, setSelected] = useState(""); // Possible values: "credit" or "cash"

    return (

        <div className={payment.main}>
            <div className={payment.paragraph}>
                <p> How would you like to pay for your service?</p>
                <p style={{ fontWeight: "400" }}>You pay only after the service is completed.</p>
            </div>

            {/* Credit Card radio button */}
            <div>
                <div
                    className={`${payment.customblock} ${selected === "credit" ? "selected" : ""}`} style={{ marginTop: "20px" }}
                    onClick={() => setSelected("credit")}
                >
                    <input type="radio" name="payment" className={payment.customRadio} checked={selected == "credit"}
                        onChange={() => setSelected("credit")} />

                    <div className={payment.paragraph} style={{ marginLeft: "15px" }}>

                        <span className={payment.label}>Credit Card
                            <span style={{ fontSize: "12px", fontWeight: "600", lineHeight: "14px", marginLeft: "230px" }}>Save $8.10 off</span></span>

                        <p className={payment.content}>
                            We will only charge your card after the service is delivered
                        </p>
                    </div>

                </div>

                {/* Cash on Delivery radio button*/}
                <div className={`${payment.customblock} ${selected === "cash" ? "selected" : ""}`} style={{ marginTop: "20px" }} onClick={() => setSelected("cash")}>
                    <input type="radio" name="payment" className={payment.customRadio} checked={selected == "cash"}
                        onChange={() => setSelected("cash")} />

                    <div className={payment.paragraph} style={{ marginLeft: "15px" }}>

                        <span className={payment.label}>Cash on Delivery</span>
                        <p className={payment.content}>
                            Cash handling charges of 5 will apply.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className={payment.title} style={{ marginTop: "16px" }}>Payment Details</h2>
            <p className={payment.content} style={{ fontSize: "20px", lineHeight: "25px" }}>Add in your payment details through our secure gateway</p>
            <div>

                <form className={payment.form} >

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

                    <div style={{ marginLeft: "10px" }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <label className={payment.formlabel}>
                                EXP. DATE
                                <input className={payment.forminput} style={{ width: "166px", height: "50px" }} type="text" placeholder="mm/yyyy" />
                            </label>
                            <label className={payment.formlabel}>
                                CVV
                                <input className={payment.forminput} style={{ width: "166px", height: "50px" }} type="tel" />
                            </label>
                        </div>

                        <label className={payment.formlabel}>
                            EMAIL ADDRESS

                            <input className={payment.forminput} type="email" placeholder="Enter a address" />
                        </label>


                        <label className={payment.formlabel}>
                            HOW DO WE CONTACT YOU
                            <div style={{ display: "flex", gap: "10px" }}>
                                <input className={payment.forminput} style={{ width: "109px", height: "50px", fontSize: "20px" }} type="text" placeholder="TEXT" />
                                <input className={payment.forminput} style={{ width: "109px", height: "50px", fontSize: "20px" }} type="Call" placeholder="CALL" />
                                <input className={payment.forminput} style={{ width: "109px", height: "50px", fontSize: "20px" }} type="email" placeholder="EMAIL" />

                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default PaymentDetails;
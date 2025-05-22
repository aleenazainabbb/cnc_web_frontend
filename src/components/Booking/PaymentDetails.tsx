"use client";

import React from "react";
import payment from './styles/PaymentDetails.module.css';
const PaymentDetails: React.FC = () => {

    return (

        <div className={payment.main}>
            <div className={payment.paragraph}>
                <p> How would you like to pay for your service?</p>
                <p style={{ fontWeight: "400" }}>You pay only after the service is completed.</p>
            </div>

            {/* Credit Card radio button */}
            <div>
                <div className={payment.customblock} style={{ marginTop: "20px" }} >
                    <input type="radio" name="payment" className={payment.customRadio} />

                    <div className={payment.paragraph} style={{ marginLeft: "15px" }}>

                        <span style={{ fontSize: "16px", color: "#88939D", lineHeight: "23px" }}>Credit Card</span>
                        <p style={{ fontWeight: "400", color: "#88939D", lineHeight: "19px" }}>
                            We will only charge your card after the service is delivered
                        </p>
                    </div>
                </div>

                {/* Cash on Delivery radio button*/}
                < div className={payment.customblock} style={{ marginTop: "20px" }} >
                    <input type="radio" name="payment" className={payment.customRadio} />

                    <div className={payment.paragraph} style={{ marginLeft: "15px" }}>

                        <span style={{ fontSize: "16px", color: "#88939D", lineHeight: "23px" }}>Cash on Delivery</span>
                        <p style={{ fontWeight: "400", color: "#88939D", lineHeight: "19px" }}>
                            Cash handling charges of 5 will apply.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className={payment.title} style={{marginTop:"16px"}}>Payment Details</h2>
            <p className={payment.paragraph}>Add in your payment details through our secure gateway</p>
        </div>


    ); 
};
export default PaymentDetails;
"use client";

import React, { useState } from "react";
// import countries from "i18n-iso-countries";
// import enLocale from "i18n-iso-countries/langs/en.json";
import payment from './styles/PaymentDetails.module.css';
// countries.registerLocale(enLocale); // register English names


const Location: React.FC = () => {
    const [selected, setSelected] = useState("");
    const options = ["Home", "Office", "Other"];

    
    return (
        <div className={payment.main} style={{ height: "1136px" }}>
            <h2 className={payment.title} >Location</h2>

            <div className={payment.subheading}>
                <p>WHERE DO YOU NEED THE SERVICE?</p>
                <p>HELP OUR TEAMS GET TO YOUR PLACE ON TIME BY LOCATING IT ON THE MAP BELOW.</p>
            </div>
            <div className={payment.subheading} style={{ color: "#9FA7B0", marginTop: "60px" }}>
                <p>SAVE YOUR ADDRESS DETAILS</p>
            </div>

            {/* buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
                {options.map((label) => (
                    <button style={{ marginTop: "30px" }}
                        key={label}
                        className={`${payment.buttons} ${selected === label ? payment.active : ""}`}
                        onClick={() => setSelected(label)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div>

                {/* <input className={payment.forminput} style={{ width: "109px", height: "50px", fontSize: "20px" }} type="text" placeholder="TEXT" /> */}


            </div>


        </div>

    );
};
export default Location;

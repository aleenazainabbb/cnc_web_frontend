"use client";

import React, { useState, useEffect } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import payment from './styles/PaymentDetails.module.css';

countries.registerLocale(enLocale); // Register English country names

const Location: React.FC = () => {
    const [selected, setSelected] = useState("");
    const options = ["Home", "Office", "Other"];
    const [answer, setAnswer] = useState("");
    const [accessOption, setAccessOption] = useState("");
    const [countryList, setCountryList] = useState<{ [key: string]: string }>({});
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        const countriesObj = countries.getNames("en", { select: "official" });
        setCountryList(countriesObj);
    }, []);

    return (
        <div className={payment.main} style={{ height: "1136px" , paddingTop:"10px"}}>
            <h2 className={payment.title}>Location</h2>

            <div className={payment.subheading}>
                <p>WHERE DO YOU NEED THE SERVICE?</p>
                <p>HELP OUR TEAMS GET TO YOUR PLACE ON TIME BY LOCATING IT ON THE MAP BELOW.</p>
            </div>

            <div className={payment.subheading} style={{ color: "#9FA7B0", marginTop: "60px" }}>
                <p>SAVE YOUR ADDRESS DETAILS</p>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
                {options.map((label) => (
                    <button
                        key={label}
                        style={{ marginTop: "30px" }}
                        className={`${payment.buttons} ${selected === label ? payment.active : ""}`}
                        onClick={() => setSelected(label)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Country Dropdown */}
            
            <div style={{ marginTop: "30px" }}>
                <select
                    id="country"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className={payment.forminput}
                    
                    style={{ width: "341px", height: "50px", padding: "10px", marginTop: "10px", fontSize: "14px" }}
                >
                
                    <option value="" disabled hidden>
                        -- Choose a country --
                    </option>
                    {Object.entries(countryList).map(([code, name]) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
            
            <input
                type="text"
                placeholder="City"
                className={payment.forminput}
                style={{ marginTop: "19px", marginBottom:"19px"}}
            />
            <div style={{display:"flex", gap:"7px"}}>
            <input
                type="text"
                placeholder="Building or street no"
                    className={payment.forminput}
                    style={{ width: "167px", height: "50px" }}
                />
            <input
                type="text"
                placeholder="Apt no"
                    className={payment.forminput}
                    style={{ width: "167px", height: "50px" }}
            />
                </div>
            

            {/* HOW DO WE GET IN? */}
            <div className={payment.subheading} style={{ color: "#9FA7B0", marginTop: "40px" }}>
                <p>HOW DO WE GET IN?</p>
            </div>
            <div style={{ marginTop: "19px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {["Someone is Home", "Doorman"].map((label) => (
                    <button
                        key={label}
                        style={{ width: "240px" }}
                        className={`${payment.locbuttons} ${accessOption === label ? payment.active : ""}`}
                        onClick={() => setAccessOption(label)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* ANY PETS */}
            <div className={payment.subheading} style={{ color: "#9FA7B0", marginTop: "38px" }}>
                <p>ANY PETS?</p>
            </div>
            <div style={{ display: "flex", gap: "8px", marginTop: "19px" }}>
                {["Yes", "No"].map((label) => (
                    <button
                        key={label}
                        className={`${payment.locbuttons} ${answer === label ? payment.active : ""}`}
                        onClick={() => setAnswer(label)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <textarea
                className={payment.forminput}
                style={{ width: "551px", height: "55px", paddingTop: "15px", paddingLeft: "20px", marginTop: "35px" }}
                placeholder="What types of pets?  Some of our cleaners have pet allergies."
            />

            {/* ADDITIONAL NOTES */}
            <div className={payment.subheading} style={{ color: "#9FA7B0", marginTop: "20px" }}>
                <p>ADDITIONAL NOTES</p>
            </div>
            <textarea
                className={payment.forminput}
                style={{ width: "551px", height: "116px", paddingTop: "15px", paddingLeft: "20px", marginTop: "10px" }}
                placeholder="I would like Sophie to be my cleaner. Please change my sheets (fresh bedding is on the bed) and empty the dishwasher."
            />
        </div>
    );
};

export default Location;




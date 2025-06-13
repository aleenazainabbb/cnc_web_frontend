"use client";

import React, { useState, useEffect } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import location from './styles/AddBooking/location.module.css';

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

        <div className={location.main}>

            <h2 className={location.title}>Location</h2>

           <div className={location.description}>
                <p>WHERE DO YOU NEED THE SERVICE?</p>
                <p>HELP OUR TEAMS GET TO YOUR PLACE ON TIME BY LOCATING IT ON THE MAP BELOW.</p>
            </div>

            <div className={location.subheading}>
                <p>SAVE YOUR ADDRESS DETAILS</p>
            </div>

            {/* Buttons */}
            <div className={location.buttoncontainer}>
                {options.map((label) => (
                    <button
                        key={label}
                        className={`${location.button} ${selected === label ? location.active : ""}`}
                        onClick={() => setSelected(label)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Country Dropdown */}
            <select
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className={location.forminput}>

                <option value="" disabled hidden>
                    -- Choose a country --
                </option>
                {Object.entries(countryList).map(([code, name]) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>

            <input
                type="text"
                placeholder="City"
               className={location.forminput}
            />
            <div className={location.row}>
            <input
                type="text"
                placeholder="Building or street no"
               className={location.forminput}
            />

            <input
                type="text"
                placeholder="Apt no"
                className={location.forminput}
            />
              </div>

            {/* HOW DO WE GET IN? */}
            <div  className={location.subheading}>
                <p>HOW DO WE GET IN?</p>
            </div>
            <div className={location.options}>
                {["Someone is Home", "Doorman"].map((label) => (
                    <button
                        key={label}
                        className={`${location.locbuttons} ${accessOption === label ? location.active : ""}`}
                        onClick={() => setAccessOption(label)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* ANY PETS */}
            
            <div className={location.subheading}>
                <p>ANY PETS?</p>
            </div>

            <div className={location.rowyesno}>
                {["Yes", "No"].map((label) => (
                    <button
                        key={label}
                        className={`${location.yesnobuttons} ${answer === label ? location.active : ""}`}
                        onClick={() => setAnswer(label)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* What types of pets? */}
            <div className={location.box}>
                <textarea
                    className={location.forminput}
                    placeholder="What types of pets?  Some of our cleaners have pet allergies." />

                {/* ADDITIONAL NOTES */}
               <div className={location.subheading}>
                    <p>ADDITIONAL NOTES</p>
                </div>
                <textarea
                    className={`${location.forminput} ${location.textbox}`}
                    placeholder="I would like Sophie to be my cleaner. Please change my sheets (fresh bedding is on the bed) and empty the dishwasher."
                />
            </div>
        </div>
    );
};

export default Location;




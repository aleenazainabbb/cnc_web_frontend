'use client';

import React, { useState } from "react";
import login from './styles/login.module.css';
import Image from "next/image";
import Link from "next/link";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const Signup: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

  const handleSignup = () => {
    // Perform signup logic (e.g., validation) here
    router.push('/Sidebar'); // navigate to another page
  };

    return (
        <div style={{ display: "flex" }}> {/* Left Image */}
            <div className={login.leftImage}>
                <Image
                    src="/images/signuppic.png"
                    alt="Side Visual"
                    fill
                    className={login.imageFill}
                />

            </div>
            <div className={login.signupmain} >
                <div className={login.container}>
                    <button className={login.signupbackbutton} >&lt; Back</button>
                    <div className={login.image} style={{ marginLeft: "5px" }} >
                        <Image
                            src="/images/carelogo.svg"
                            alt="CarenClean"
                            width={73}
                            height={57}
                        />
                    </div>
                </div>
                <div style={{ marginLeft: "15%" }}>
                    {/* title */}
                    <h1 className={login.signuptitle} style={{ marginBottom: "1px", marginTop: "28px" }}>Create an account using email</h1>
                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <div style={{ display: "flex", gap: "1rem" }}>
                            {/* First name */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label className={login.signuplabel}>First Name</label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className={login.smallinput}
                                />
                            </div>

                            {/* Last name */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label className={login.signuplabel}>Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className={login.smallinput}
                                />
                            </div>
                        </div>
                        {/* Email Address */}
                        <label className={login.signuplabel}>Email Address</label>
                        <input
                            type="email"
                            placeholder="Please enter email address"
                            className={login.signupinput}
                        />
                        {/* Phone Number */}
                        <label className={login.signuplabel}>Phone Number</label>
                        <PhoneInput
                            country={"ng"}
                            value="234"
                            placeholder="Enter phone number"
                            inputClass="phoneInput"

                            inputStyle={{
                                width: "426px",
                                height: "64px",
                                fontWeight: 500,
                                fontSize: "14px",
                                color: "#8692A6",
                                border: "1px solid #8692A6",
                                borderRadius: "6px",
                                verticalAlign: "middle",
                                paddingLeft: "50px",
                            }}

                            buttonStyle={{
                                border: "none",
                                background: "transparent",
                                borderTopLeftRadius: "6px",
                                borderBottomLeftRadius: "6px",
                                left: "10px",
                            }}
                        />

                        {/* Password */}
                        <label className={login.signuplabel}>Password </label>

                        <div style={{ position: "relative", width: "fit-content" }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                className={login.signupinput}
                                placeholder="Enter password"
                            />
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: "absolute",
                                    right: "20px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "#999",
                                    cursor: "pointer",
                                    width: "24px",
                                }}
                            >
                                {showPassword ? <EyeSlashIcon style={{ width: 18 }} /> : <EyeIcon style={{ width: 18 }} />}
                            </div>
                        </div>

                        {/* labels */}
                        <p className={login.charlabels}> Please make sure your password includes the following:<br />
                            - Is no less than 8 characters<br />
                            - Includes at least one special character<br />
                            - Includes at least one number<br />
                            - Includes at least one capital letter<br />
                            - Includes at least one lowercase letter<br />
                        </p>

                        <label className={login.charlabels}>SIGN UP </label>
                        {/* SIGNUP */}
                        <button onClick={handleSignup} className={login.signupbutton} >
                            SIGNUP
                        </button>


                        <label className={login.signupfooterlabel}>
                            Already have an account with CARENCLEAN?{" "}
                            <Link href="/Login" className={login.signupminilabel}>
                                LOGIN
                            </Link>
                        </label>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Signup;
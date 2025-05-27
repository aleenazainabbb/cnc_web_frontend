'use client';

import React, { useState } from "react";
import login from './styles/login.module.css';
import Image from "next/image";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div style={{ display: "flex" }}>
            {/* Left Image */}
            <div className={login.leftImage}>
                <Image
                    src="/images/loginpic.png"
                    alt="Side Visual"
                    fill
                    className={login.imageFill}
                />
            </div>

            <button className={login.closeButton}>
                <span className={login.backsign}>&lt; </span>
                <span className={login.backButton}>Back</span>
            </button>

            <div className={login.main}>
                {/* logo */}
                <div className={login.image}>
                    <Image
                        src="/images/carelogo.svg"
                        alt="CarenClean"
                        width={73}
                        height={57}
                    />
                </div>

                {/* title */}
                <h1 className={login.title}>Log in with email</h1>
                <div style={{ display: "flex", flexDirection: "column" }}>

                    {/* Email Address */}
                    <label className={login.label}>Email Address</label>
                    <input
                        type="email"
                        placeholder="Please enter email address"
                        className={login.input}
                        style={{ marginTop: "15px" }}
                    />

                    {/* Password */}
                        <label className={login.label}>Password </label>

                        <div style={{ position: "relative", width: "fit-content" }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                className={login.input}
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
                    <label className={login.minilabel} >FOGOT PASSWORD? </label>
                    <button className={login.button}>LOGIN NOW</button>
                    <div>
                        <label className={login.footerlabel}>
                            Don't have an account with CARENCLEAN?{" "}
                            <Link href="/Signup" className={login.minilabel}>
                                CREATE YOUR ACCOUNT
                            </Link>
                        </label>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;





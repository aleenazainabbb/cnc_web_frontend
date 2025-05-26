import React from "react";
import login from './styles/login.module.css';
import Image from "next/image";
import Link from "next/link";
// import { log } from "console";

const Signup: React.FC = () => {
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
            <div className={login.main} >
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
                    <h1 className={login.title} style={{marginBottom:"1px", marginTop:"28px"}}>Create an account using email</h1>
                    <div style={{ display: "flex", flexDirection: "column" }}>

                        {/* First name */}
                        <div style={{ display: "flex", }}>
                            <div style={{ flex: 1 }}>
                                <label className={login.label}>First Name</label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className={login.smallinput}
                                />
                            </div>
                            {/* last name */}
                            <div style={{ flex: 1, marginLeft: "0px" }}>
                                <label className={login.label}>Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className={login.smallinput}
                                />
                            </div>
                        </div>

                        
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
                        <input
                            type="password"
                            placeholder="Please enter password"
                            className={login.input}
                            style={{ marginTop: "15px" }}
                        />
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
        </div>
    );
};
export default Signup;
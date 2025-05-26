import React from "react";
import login from './styles/login.module.css';
import Image from "next/image";
import Link from "next/link";

const Login: React.FC = () => {
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


    );
};

export default Login;





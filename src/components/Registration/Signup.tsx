import React from "react";
import login from './styles/login.module.css';
import Image from "next/image";
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
            <div className={login.main}>

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
            </div>
        </div>
    );
};
export default Signup;
'use client';
import React, { useState } from "react";
import login from './styles/login.module.css';
import Image from "next/image";
import Link from "next/link";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useRegister } from "../../context/registerContext";
import Snackbar from '../popups/Snackbar';
import { isValidEmail, isValidPassword } from '../../../utils/validators';

const Signup: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const router = useRouter();
    const { registerUser } = useRegister();

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value: string) => {
        setForm({ ...form, phone: value });
    };

    const handleSignup = async () => {
        setLoading(true);

        const { firstName, lastName, email, phone, password } = form;

        if (!firstName || !lastName || !email || !phone || !password) {
            setSnackbar({ message: 'Please fill in all fields.', type: 'error' });
            setLoading(false);
            return;
        }

        if (!isValidEmail(email)) {
            setSnackbar({ message: 'Invalid email format.', type: 'error' });
            setLoading(false);
            return;
        }

        if (!isValidPassword(password)) {
            setSnackbar({ message: 'Password must meet all the required criteria.', type: 'error' });
            setLoading(false);
            return;
        }

        try {
            const response = await registerUser(form);
            // Success path
            // setSnackbar({ message: 'Signup successful!', type: 'success' });
            const successMessage = response?.data?.message || 'Signup successful!';
            setSnackbar({ message: successMessage, type: 'success' });
            // router.push(`/Verification`); // Redirect to bookings page after successful signup
            router.push(`/Verification?email=${encodeURIComponent(email)}`);

        } catch (err: any) {
            const serverMessage = err?.message;
            setSnackbar({ message: serverMessage, type: 'error' });
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: "flex" }}>
            {/* Left Image */}
            <div className={login.leftImage}>
                <Image src="/images/signuppic.png" alt="Side Visual" fill className={login.imageFill} />
            </div>

            {/* Signup Form */}
            <div className={login.signupmain}>
                <div className={login.container}>
                    <button className={login.signupbackbutton}>&lt; Back</button>
                    <div className={login.image} style={{ marginLeft: "5px" }}>
                        <Image src="/images/carelogo.svg" alt="CarenClean" width={73} height={57} />
                    </div>
                </div>

                <div style={{ marginLeft: "15%" }}>
                    <h1 className={login.signuptitle}>Create an account using email</h1>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            {/* First Name */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label className={login.signuplabel}>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    className={login.smallinput}
                                />
                            </div>

                            {/* Last Name */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label className={login.signuplabel}>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    className={login.smallinput}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <label className={login.signuplabel}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Please enter email address ( email@gmail.com)"
                            className={login.signupinput}
                        />

                        {/* Phone */}
                        <label className={login.signuplabel}>Phone Number</label>
                        <PhoneInput
                            country={"ng"}
                            value={form.phone}
                            onChange={handlePhoneChange}
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
                        <label className={login.signuplabel}>Password</label>
                        <div style={{ position: "relative", width: "fit-content" }}>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                onChange={handleChange}
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
                                    cursor: "pointer",
                                    width: "24px",
                                }}
                            >
                                {showPassword ? <EyeSlashIcon style={{ width: 18 }} /> : <EyeIcon style={{ width: 18 }} />}
                            </div>
                        </div>

                        {/* Password Tips */}
                        <p className={login.charlabels}>
                            Please make sure your password includes the following:<br />
                            - Is no less than 8 characters<br />
                            - Includes at least one special character<br />
                            - Includes at least one number<br />
                            - Includes at least one capital letter<br />
                            - Includes at least one lowercase letter<br />
                        </p>

                        {/* Submit Button */}
                        <button onClick={handleSignup} className={login.signupbutton} disabled={loading}>
                            {loading ? 'Signing up...' : 'SIGNUP'}
                        </button>

                        <label className={login.signupfooterlabel}>
                            Already have an account with CARENCLEAN?{" "}
                            <Link href="/Login" className={login.signupminilabel}>LOGIN</Link>
                        </label>
                    </div>
                </div>
            </div>

            {/* Snackbar */}
            {snackbar && (
                <Snackbar
                    message={snackbar.message}
                    type={snackbar.type}
                    onClose={() => setSnackbar(null)}
                />
            )}
        </div>
    );
};

export default Signup;

'use client';
import React, { useState } from "react";
import test from './styles/signup.module.css';
import Image from "next/image";
import LinkWithLoader from '@/components/Loader/Link';
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
            const successMessage = response?.data?.message || 'Signup successful!';
            setSnackbar({ message: successMessage, type: 'success' });
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
            <div className={test.leftImage}>
                <Image src="/images/signuppic.png"
                    alt="Side Visual"
                    fill
                    className={test.imageFill} />
            </div>

            {/* Signup Form */}

            <div className={test.main}>
                <div className={test.container}>
                      <div className={test.box}>
                    <div className={test.row}>
                        {/* logo */}
                        <Image
                            src="/images/carelogo.svg"
                            alt="CarenClean"
                            width={73}
                            height={57}
                        />
                        {/* button */}
                        <LinkWithLoader href="/" className={test.backButton}>
                            <span className={test.backsign}>&lt;</span> Back
                        </LinkWithLoader>
                    </div>
                    {/* <div className={test.box}> */}
                        <h1 className={test.title}>Create a New Account</h1>
                        <div style={{ display: "flex", flexDirection: "column" }}>

                            <div className={test.nameRow}>
                                <div className={test.inputWrapper}>
                                    <label className={test.label}>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter First name"
                                        className={test.input}
                                    />
                                </div>
                                <div className={test.inputWrapper}>
                                    <label className={test.label}>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter Last name"
                                        className={test.input}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <label className={test.label}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Please enter email address"
                                className={test.input}
                            />

                            {/* Phone */}
                            <label className={test.label}>Phone Number</label>
                            <PhoneInput
                                country={"ng"}
                                value={form.phone}
                                onChange={handlePhoneChange}
                                placeholder="Enter phone number"
                                inputClass="phoneInput"
                                inputStyle={{
                                    width: "100%",
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
                            <label className={test.label}>Password</label>
                            <div className={test.password}>
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    onChange={handleChange}
                                    className={test.input}
                                    placeholder="Enter password"
                                />
                                <div
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={test.icon}
                                >
                                    {showPassword ? <EyeSlashIcon style={{ width: 18 }} /> : <EyeIcon style={{ width: 18 }} />}
                                </div>
                            </div>

                            {/* Password Tips */}
                            <p className={test.charlabels}>
                                Please make sure your password includes the following:<br />
                                - Is no less than 8 characters<br />
                                - Includes at least one special character<br />
                                - Includes at least one number<br />
                                - Includes at least one capital letter<br />
                                - Includes at least one lowercase letter<br />
                            </p>

                            {/* Submit Button */}
                            <button onClick={handleSignup} className={test.signupbutton} disabled={loading}>
                                {loading ? 'Signing up...' : 'SIGNUP'}
                            </button>

                            <label className={test.signupfooterlabel}>
                                Already have an account with CARENCLEAN?{" "}
                                <LinkWithLoader href="/Login" className={test.minilabel}>LOGIN</LinkWithLoader>
                            </label>
                        </div>
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

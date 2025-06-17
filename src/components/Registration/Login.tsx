'use client';

import React, { useState } from "react";
import login from './styles/login.module.css';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useAuth } from "../../context/AuthContext";
import Snackbar from '../popups/Snackbar';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { loginUser } = useAuth();
  const router = useRouter();
  const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleLogin = async () => {
    setError(null);
    // Only check if email and password are filled
    if (!email || !password) {
      setSnackbar({ message: 'Please fill in both email and password.', type: 'error' });
      return;
    }
    setLoading(true);
    try {
      await loginUser(email, password);
      setSnackbar({ message: 'Login successful!', type: 'success' });
      router.push('/Bookings/Dashboard');
    } catch (err: any) {
      // setError(err.message || 'Login failed. Please try again.');
      setSnackbar({ message: err.message || 'Login failed. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter email address"
            className={login.input}
            style={{ marginTop: "15px" }}
          />

          {/* Password */}
          <label className={login.label}>Password </label>

          <div style={{ position: "relative", width: "fit-content" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              {showPassword ? <EyeIcon style={{ width: 18 }} /> : <EyeSlashIcon style={{ width: 18 }} />}
            </div>
          </div>

          <label className={login.minilabel}>
            <Link href="/ForgetPassword/forgetpassword">FORGOT PASSWORD?</Link>
          </label>

          {/* Show error message */}
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

          <button
            className={login.button}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'LOGIN NOW'}
          </button>

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

      {/* Snackbar for alerts */}
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

export default Login;

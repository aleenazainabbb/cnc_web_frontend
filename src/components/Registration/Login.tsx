"use client";

import React, { useState } from "react";
import test from "./styles/test.module.css";
import Image from "next/image";
import LinkWithLoader from "@/components/Loader/Link";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../context/AuthContext";
import Snackbar from "../popups/Snackbar";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { loginUser } = useAuth();
  const router = useRouter();
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleLogin = async () => {
    setError(null);
    // Only check if email and password are filled
    if (!email || !password) {
      setSnackbar({
        message: "Please fill in both email and password.",
        type: "error",
      });
      return;
    }
    setLoading(true);
    try {
      await loginUser(email, password);
      setSnackbar({ message: "Login successful!", type: "success" });
      router.push("/Bookings/Dashboard");
    } catch (err: any) {
      // setError(err.message || 'Login failed. Please try again.');
      setSnackbar({
        message: err.message || "Login failed. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Left Image */}
      <div className={test.leftImage}>
        <Image
          src="/images/loginpic.png"
          alt="Side Visual"
          fill
          className={test.imageFill}
        />
      </div>

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
            <h1 className={test.title}>Log in with email</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Email Address */}
              <label className={test.label}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Please enter email address"
                className={test.input}
              />
              {/* Password */}

              <label className={test.label}>Password</label>
              <div className={test.password}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={test.input}
                  placeholder="Enter password"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className={test.icon}
                >
                  {showPassword ? (
                    <EyeIcon style={{ width: 18 }} />
                  ) : (
                    <EyeSlashIcon style={{ width: 18 }} />
                  )}
                </div>
              </div>

              {/* minilabel */}
              <label className={test.minilabel}>
                <LinkWithLoader href="/ForgetPassword/forgetpassword">
                  FORGOT PASSWORD?
                </LinkWithLoader>
              </label>

              {/* Show error message */}
              {error && (
                <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
              )}

              {/* button */}
              <button
                className={test.button}
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "Loading..." : "LOGIN NOW"}
              </button>

              <div>
                <label className={test.footerlabel}>
                  Don't have an account with CARENCLEAN?{" "}
                  <LinkWithLoader href="/Signup" className={test.minilabel}>
                    CREATE YOUR ACCOUNT
                  </LinkWithLoader>
                </label>
              </div>
            </div>
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

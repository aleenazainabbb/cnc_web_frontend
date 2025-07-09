'use client';

import React from 'react';
import styles from './styles/profile.module.css';
import { useProfile } from '@/context/profileContext';

const Profile: React.FC = () => {
  const {
    firstName,
    lastName,
    email,
    setFirstName,
    setLastName,
    updateProfile,
    loading,
  } = useProfile();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* First Row: First & Last Name */}
        <div className={styles.profileFormRow}>
          <div>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Last Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        {/* Second Row: Email & Button */}
        <div className={styles.profileFormRow}>
          <div>
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              className={styles.input}
              value={email}
              readOnly
              disabled
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={updateProfile}
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

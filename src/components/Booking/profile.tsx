'use client';
import React from 'react';
import styles from './styles/profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileFormContainer}>
      <div className={`${styles.profileFormRow} ${styles.profileFormRowLg}`}>

        {/* First Name */}
        <div className={styles.profileFormFlex1}>
          <label className={styles.profileFormLabel}>First Name</label>
          <input
            type="text"
            className={styles.profileFormInput}
            placeholder="Enter first name"
          />
        </div>

        {/* Last Name */}
        <div className={styles.profileFormFlex1}>
          <label className={styles.profileFormLabel}>Last Name</label>
          <input
            type="text"
            className={styles.profileFormInput}
            placeholder="Enter last name"
          />
        </div>
      </div>

      {/* Email */}
      <div className={styles.profileFormRow}>
        <label className={styles.profileFormLabel}>Email Address</label>
        <input
          type="email"
          className={styles.profileFormInput}
          placeholder="Enter email"
        />
      </div>

      {/* Update Button */}
      <div className={styles.profileFormButtonContainer}>
        <button className={styles.profileFormButton}>Update</button>
      </div>
    </div>
  );
}

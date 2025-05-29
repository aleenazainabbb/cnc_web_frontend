'use client';
import React from 'react';
import styles from './styles/profile.module.css';

export default function Profile() {
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
                        />
                    </div>
                    <div>
                        <label className={styles.label}>Last Name</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Enter last name"
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
                            placeholder="Please enter email address"
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

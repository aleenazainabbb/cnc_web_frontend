'use client';
import React from 'react';
import styles from './styles/profile.module.css';

const MyQuotes: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.profileFormRow}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Name"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Email"
                        />
                    </div>
                </div>

                <div className={styles.profileFormRow}>
                    <div className={styles.inputGroup}>

                        <label className={styles.label}>Phone</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Phone Num"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Address</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Address"
                        />
                    </div>
                </div>
                <div className={styles.profileFormRow}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Area</label>
                        <select className={styles.input} defaultValue="">
                            <option value="" disabled>Select area</option>
                            <option value="dubai">Dubai</option>
                            <option value="pakistan">Abu Dhabi</option>
                            <option value="pakistan">Ajman</option>
                            <option value="pakistan">Fujairah</option>
                            <option value="pakistan">Ras Al Khaimah</option>
                            <option value="pakistan">Abu Dhabi</option>
                            <option value="pakistan">Sharjah</option>
                            <option value="pakistan">Umm Al Quwain</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Lead Sources</label>
                        <select className={styles.input} defaultValue="">
                            <option value="" disabled>Select lead Sources</option>
                            <option value="whatsapp">WhatsApp</option>
                            <option value="email">Email</option>
                            <option value="email">Website</option>
                            <option value="email">Called</option>
                        </select>

                    </div>
                </div>

                <div className={styles.fullWidthInputGroup}>
                    <label className={styles.label}>Instructions</label>
                    <textarea
                        className={styles.input}
                        placeholder="Add any notes or details.. "
                    />
                </div>

                <div className={styles.quotesbuttonContainer}>
                    <button className={styles.button}>Cancel</button>
                    <button className={styles.button}>Save</button>
                </div>
            </div>
        </div>
    );
}
export default MyQuotes;

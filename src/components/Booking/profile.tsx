'use client';

import React from 'react';
import Image from 'next/image';
import styles from './styles/profile.module.css';
import { useProfile } from '@/context/profileContext';
import { useProfileImage } from '@/context/imageUpload';
import { FaCamera } from 'react-icons/fa';

const Profile: React.FC = () => {
  const {
    firstName,
    lastName,
    email,
    addressLine,
    phone,
    setFirstName,
    setLastName,
    setAddress,   
    setPhoneNumber,
    updateProfile,
    loading,
  } = useProfile();

  const { uploadedImage, uploadImage, loading: imageUploading } = useProfileImage();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };
  let storedImage = null;

if (typeof window !== 'undefined') {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    try {
      const parsedUser = JSON.parse(storedUser);
      storedImage = parsedUser?.profileImage || null;
    } catch (err) {
      console.error('Failed to parse user from localStorage:', err);
    }
  }
}

const imageSrc = storedImage || uploadedImage || '/images/profile.png';


  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Profile Image Upload */}
        <div className={styles.imageWrapper}>
          <label htmlFor="imageUpload" className={styles.imageLabel}>
            <div className={styles.imageContainer}>
              <Image
                src={imageSrc}
                alt="Profile"
                width={120}
                height={120}
                className={styles.profileImage}
              />
              {imageUploading ? (
                <div className={styles.imageLoader}>
                  <div className={styles.spinner}></div>
                </div>
              ) : (
                <div className={styles.uploadOverlay}>
                  <FaCamera className={styles.uploadIcon} />
                </div>
              )}
            </div>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.hiddenInput}
          />
        </div>

        {/* Form Starts */}
        <div className={styles.profileFormRow}>
          <div>
            <label htmlFor="firstName" className={styles.label}>First Name</label>
            <input
              id="firstName"
              type="text"
              className={styles.input}
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* last name  */}
          <div>
            <label htmlFor="lastName" className={styles.label}>Last Name</label>
            <input
              id="lastName"
              type="text"
              className={styles.input}
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.profileFormRow}>
          <div>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              value={email}
              readOnly
              disabled
            />
          </div>

          <div>
            <label htmlFor="addressLine" className={styles.label}>Address</label>
            <input
              id="addressLine"
              type="text"
              className={styles.input}
              placeholder="Enter your address"
              value={addressLine}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.profileFormRow}>
          <div>
            <label htmlFor="phone" className={styles.label}>Phone Number</label>
            <input
              id="phone"
              type="tel"
              className={styles.input}
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhoneNumber(e.target.value)}
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

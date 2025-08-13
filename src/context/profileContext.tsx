'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Snackbar from '@/components/popups/Snackbar';

interface ProfileContextType {
  firstName: string;
  lastName: string;
  email: string;
  addressLine: string;
  phone: string;
  loading: boolean;
  success: string;
  error: string;
  updateProfile: () => Promise<void>;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  clearMessages: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [addressLine, setAddress] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
  const loadUserFromStorage = () => {
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        setFirstName(user.firstName || '');
        setLastName(user.lastName || '');
        setEmail(user.email || '');
        setAddress(user.addressLine || '');
        setPhoneNumber(user.phone || '');
      } catch (err) {
        console.error('Failed to parse user from localStorage:', err);
      }
    }
  };

  loadUserFromStorage(); // Initial load

  // 🟢 Listen for login-triggered localStorage update
  window.addEventListener('storage', loadUserFromStorage);

  return () => {
    window.removeEventListener('storage', loadUserFromStorage);
  };
}, []);



  const updateProfile = async () => {
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const token = localStorage.getItem('token');
      const stored = localStorage.getItem('user');
      const userObj = stored ? JSON.parse(stored) : null;
      const userId = userObj?.id;

      if (!token || !userId) return;

      const res = await fetch(`${apiUrl}/api/users/update-user-info/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName, addressLine, phone }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error);

      // ✅ Preserve profileImage from previous user data
      const updatedUser = {
        ...userObj,
        firstName,
        lastName,
        addressLine,
        phone,
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));
      setSuccess(data?.message || 'Profile updated successfully');
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const clearMessages = () => {
    setSuccess('');
    setError('');
  };

  return (
    <ProfileContext.Provider
      value={{
        firstName,
        lastName,
        email,
        addressLine,
        phone,
        loading,
        success,
        error,
        updateProfile,
        setFirstName,
        setLastName,
        setAddress,
        setPhoneNumber,
        clearMessages,
      }}
    >
      {children}
      {(success || error) && (
        <Snackbar
          message={success || error}
          type={success ? 'success' : 'error'}
          onClose={clearMessages}
        />
      )}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) throw new Error('useProfile must be used within a ProfileProvider');
  return context;
};

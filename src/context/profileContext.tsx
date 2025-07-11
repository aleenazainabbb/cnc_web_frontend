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
  fetchProfile: () => Promise<void>;
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

  const fetchProfile = async () => {
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const res = await fetch(`${apiUrl}/api/users/get-user-info`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error);

      setEmail(data.email || '');
      setFirstName(data.firstName || '');
      setLastName(data.lastName || '');
      setAddress(data.addressLine || '');
      setPhoneNumber(data.phone || '');

      localStorage.setItem(
        'user',
        JSON.stringify({
          id: data.id,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          addressLine: data.addressLine,
          phone: data.phone,
        })
      );

      setSuccess(data?.message || '');
    } catch (err: any) {
      setError(err.message || 'Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const token = localStorage.getItem('token');
      const stored = localStorage.getItem('user');
      const userId = stored ? JSON.parse(stored).id : null;

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

      setSuccess(data?.message || '');

      await fetchProfile(); // Update state & localStorage
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchProfile(); // ✅ Always fetch fresh user data
    }
  }, []);

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
        fetchProfile,
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

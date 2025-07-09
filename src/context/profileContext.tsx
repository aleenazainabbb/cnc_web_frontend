'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Snackbar from '@/components/popups/Snackbar'; // ✅ Make sure this exists

interface ProfileContextType {
  firstName: string;
  lastName: string;
  email: string;
  loading: boolean;
  success: string;
  error: string;
  updateProfile: () => Promise<void>;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  clearMessages: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Load user data from localStorage on mount
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsed = JSON.parse(user);
        setEmail(parsed?.email || '');
        setFirstName(parsed?.firstName || '');
        setLastName(parsed?.lastName || '');
      } catch (err) {
        console.error('Error parsing user from localStorage:', err);
      }
    }
  }, []);

  const updateProfile = async () => {
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      const userId = user ? JSON.parse(user).id : null;
      
      if (!token) throw new Error('No token found');

      const response = await fetch(`${apiUrl}/api/users/update-user-info/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName }), // ✅ email not included
      });

      const data = await response.json();
      

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to update profile');
      }

      // Update only the name in localStorage, not the email
      const existing = localStorage.getItem('user');
      if (existing) {
        const parsed = JSON.parse(existing);
        const updated = {
          ...parsed,
          firstName,
          lastName,
        };
        localStorage.setItem('user', JSON.stringify(updated));
      }

      setSuccess(data?.message || 'Profile updated successfully');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
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
        loading,
        success,
        error,
        updateProfile,
        setFirstName,
        setLastName,
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

'use client';

import React, { createContext, useContext, useState } from 'react';

interface ProfileImageContextType {
  uploadedImage: string | null;
  uploadImage: (file: File) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const ProfileImageContext = createContext<ProfileImageContextType | undefined>(undefined);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const ProfileImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('profileImage');
    }
    return null;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File) => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found. Please log in.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file); // must match backend field name

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiUrl}/user/profile/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      const imageUrl = data?.profile?.imageUrl;

      if (!response.ok || !imageUrl) {
        throw new Error(data?.message || 'Image upload failed');
      }

      setUploadedImage(imageUrl);
      localStorage.setItem('profileImage', imageUrl);

      // Update user.profileImage in localStorage
      const user = localStorage.getItem('user');
      if (user) {
        const parsed = JSON.parse(user);
        parsed.profileImage = imageUrl;
        localStorage.setItem('user', JSON.stringify(parsed));
      }

    } catch (err: any) {
      const message = err.message || 'Image upload failed';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileImageContext.Provider value={{ uploadedImage, uploadImage, loading, error }}>
      {children}
    </ProfileImageContext.Provider>
  );
};

export const useProfileImage = () => {
  const context = useContext(ProfileImageContext);
  if (!context) {
    throw new Error('useProfileImage must be used within a ProfileImageProvider');
  }
  return context;
};

'use client';
import React, { createContext, useContext, useState } from 'react';

interface ResendCodeContextType {
  resendCode: (email: string) => Promise<{ success: boolean; message: string }>;
  loading: boolean;
}

const ResendCodeContext = createContext<ResendCodeContextType | undefined>(undefined);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const ResendCodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const resendCode = async (email: string): Promise<{ success: boolean; message: string }> => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token'); // Get token from localStorage

      const res = await fetch(`${apiUrl}/api/users/resend-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add token to header
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to resend code');

      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }

      return { success: true, message: data.message || 'Code resent successfully' };
    } catch (error: any) {
      return { success: false, message: error.message || 'Something went wrong' };
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResendCodeContext.Provider value={{ resendCode, loading }}>
      {children}
    </ResendCodeContext.Provider>
  );
};

export const useResendCode = () => {
  const context = useContext(ResendCodeContext);
  if (!context) throw new Error('useResendCode must be used within a ResendCodeProvider');
  return context;
};

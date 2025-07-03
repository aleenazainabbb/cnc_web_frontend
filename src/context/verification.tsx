'use client';

import React, { createContext, useState, useContext } from 'react';

interface VerificationContextType {
  verifyCode: (email: string, pinCode: string) => Promise<void>;
  loading: boolean;
}

const VerificationContext = createContext<VerificationContextType | undefined>(undefined);

export const VerificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const verifyCode = async (email: string, pinCode: string) => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.18.11:3000/api/users/verify-pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pinCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid verification code.');
      }

      console.log('Verification successful:', data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <VerificationContext.Provider value={{ verifyCode, loading }}>
      {children}
    </VerificationContext.Provider>
  );
};

export const useVerification = () => {
  const context = useContext(VerificationContext);
  if (!context) throw new Error('useVerification must be used within a VerificationProvider');
  return context;
};

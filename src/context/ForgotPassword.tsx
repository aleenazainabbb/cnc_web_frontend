'use client';

import React, { createContext, useContext, useState } from 'react';

interface ForgotPasswordContextType {
  sendResetCode: (email: string) => Promise<string>;
  loading: boolean;
}

const ForgotPasswordContext = createContext<ForgotPasswordContextType | undefined>(undefined);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const ForgotPasswordProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const sendResetCode = async (email: string): Promise<string> => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      return data.message;
    } catch (err: any) {
      throw new Error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ForgotPasswordContext.Provider value={{ sendResetCode, loading }}>
      {children}
    </ForgotPasswordContext.Provider>
  );
};

export const useForgotPassword = () => {
  const context = useContext(ForgotPasswordContext);
  if (!context) throw new Error('useForgotPassword must be used within a ForgotPasswordProvider');
  return context;
};

'use client';

import React, { createContext, useContext, useState } from 'react';

interface VerifyForgotPasswordContextType {
  verifyResetCode: (email: string, code: string) => Promise<string>;
  loading: boolean;
}

const VerifyForgotPasswordContext = createContext<VerifyForgotPasswordContextType | undefined>(undefined);

export const VerifyForgotPasswordProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const verifyResetCode = async (email: string, code: string): Promise<string> => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.18.11:3000/api/users/verify-reset-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Invalid code');
      return data.resetToken;
    } catch (err: any) {
      throw new Error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <VerifyForgotPasswordContext.Provider value={{ verifyResetCode, loading }}>
      {children}
    </VerifyForgotPasswordContext.Provider>
  );
};

export const useVerifyForgotPassword = () => {
  const context = useContext(VerifyForgotPasswordContext);
  if (!context) throw new Error('useVerifyForgotPassword must be used within a VerifyForgotPasswordProvider');
  return context;
};

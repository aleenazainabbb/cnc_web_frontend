'use client';

import React, { createContext, useContext, useState } from 'react';

interface ResetPasswordContextType {
  resetPassword: (resetToken: string, newPassword: string) => Promise<string>;
  loading: boolean;
}

const ResetPasswordContext = createContext<ResetPasswordContextType | undefined>(undefined);

export const ResetPasswordProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const resetPassword = async (resetToken: string, newPassword: string): Promise<string> => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.18.11:3001/api/users/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resetToken, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to reset password.');
      }

      return data.message;
    } catch (err: any) {
      throw new Error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResetPasswordContext.Provider value={{ resetPassword, loading }}>
      {children}
    </ResetPasswordContext.Provider>
  );
};

export const useResetPassword = () => {
  const context = useContext(ResetPasswordContext);
  if (!context) throw new Error('useResetPassword must be used within a ResetPasswordProvider');
  return context;
};

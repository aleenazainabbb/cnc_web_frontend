'use client';

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react';

interface LeadData {
  customer: string;
  email: string;
  phone: string;
  address: string;
  area: string;
  leadType: string;
  description: string;
}

interface LeadContextType {
  createLead: (leadData: LeadData) => Promise<void>;
  error: string;
  success: string;
  loading: boolean;
  clearMessages: () => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const LeadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const createLead = async (leadData: LeadData) => {
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const token = localStorage.getItem('token');

      const response = await fetch(`${apiUrl}/lead/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({
          ...leadData,
          leadType: 'web',
        }),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setSuccess(data.message || ''); // ✅ Show success message from server
      localStorage.setItem('leadData', JSON.stringify(leadData));
    } catch (err: any) {
      setError(err.message); // ✅ Show error message from server
    } finally {
      setLoading(false);
    }
  };

  const clearMessages = () => {
    setError('');
    setSuccess('');
  };

  return (
    <LeadContext.Provider value={{ createLead, error, success, loading, clearMessages }}>
      {children}
    </LeadContext.Provider>
  );
};

export const useLead = () => {
  const context = useContext(LeadContext);
  if (!context) throw new Error('useLead must be used within a LeadProvider');
  return context;
};

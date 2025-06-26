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

export const LeadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const createLead = async (leadData: LeadData) => {
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch('http://192.168.18.11:3000/lead/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          leadType: 'web',
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to submit quote.');
        // ✅ Save form data to localStorage
      localStorage.setItem('leadData', JSON.stringify(leadData));
console.log('Saved to localStorage:', JSON.parse(localStorage.getItem('leadData') || '{}'));


      setSuccess('Quote submitted successfully.');
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
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

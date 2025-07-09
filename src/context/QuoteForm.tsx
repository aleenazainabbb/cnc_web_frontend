// context/QuoteForm.tsx
'use client';
import React, { createContext, useContext, useState } from 'react';

interface QuoteFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  subService?: string;
  message?: string;
}

interface QuoteFormContextType {
  submitQuote: (data: QuoteFormData) => Promise<string>;
  loading: boolean;
}

const QuoteFormContext = createContext<QuoteFormContextType | undefined>(undefined);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const QuoteFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const submitQuote = async (data: QuoteFormData): Promise<string> => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/quote/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const resData = await response.json();

      if (!response.ok) throw new Error(resData.error || 'Failed to submit quote');
      return resData.message || 'Quote submitted successfully';
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <QuoteFormContext.Provider value={{ submitQuote, loading }}>
      {children}
    </QuoteFormContext.Provider>
  );
};

export const useQuoteForm = () => {
  const context = useContext(QuoteFormContext);
  if (!context) throw new Error('useQuoteForm must be used within a QuoteFormProvider');
  return context;
};

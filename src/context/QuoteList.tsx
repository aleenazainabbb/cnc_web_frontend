'use client';
import { CloudCog } from 'lucide-react';
import React, { createContext, useContext, useState } from 'react';

interface Quote {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  subService: string;
}

interface QuoteListContextType {
  quotes: Quote[];
  fetchQuotes: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const QuoteListContext = createContext<QuoteListContextType | undefined>(undefined);

export const QuoteListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuotes = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`http://192.168.18.11:3000/quote/getQuote`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // ✅ Send token in Authorization header
        },
      });

      const data = await res.json();

      console.log('Quotes response:', data); // ✅ Debugging log

      if (!res.ok) throw new Error(data?.error || 'Failed to fetch quotes');

      // ✅ Support flexible response shape
      const quotesArray = Array.isArray(data) ? data : data?.quotes || [];

      if (!Array.isArray(quotesArray)) {
        throw new Error('Unexpected quote data format');
      }

      setQuotes(quotesArray);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  return (
    <QuoteListContext.Provider value={{ quotes, fetchQuotes, loading, error }}>
      {children}
    </QuoteListContext.Provider>
  );
};

export const useQuoteList = () => {
  const context = useContext(QuoteListContext);
  if (!context) throw new Error('useQuoteList must be used within a QuoteListProvider');
  return context;
};

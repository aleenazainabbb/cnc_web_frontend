"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactContextType {
  createContact: (contactData: ContactData) => Promise<void>;
  error: string;
  success: string;
  loading: boolean;
  clearMessages: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const createContact = async (contactData: ContactData) => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/contact/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSuccess(data.message || "Message submitted successfully.");
    } catch (err: any) {
      setError(err.message || "Failed to submit message.");
    } finally {
      setLoading(false);
    }
  };

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  return (
    <ContactContext.Provider
      value={{ createContact, error, success, loading, clearMessages }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) throw new Error("useContact must be used within a ContactProvider");
  return context;
};

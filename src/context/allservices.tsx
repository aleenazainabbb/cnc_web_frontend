// context/allservices.tsx
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface Service {
  id: number;
  name: string;
//   description: string;
}

interface SubService {
  id: number;
  name: string;
//   description: string;
  serviceId: number;
}

interface ServiceContextType {
  services: Service[];
  subServices: SubService[];
  fetchServices: () => Promise<void>;
  fetchSubServices: (serviceId: number) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [subServices, setSubServices] = useState<SubService[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/service/getAllServices`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to fetch services');
     setServices(data); // if your API just returns an array

    } catch (err: any) {
      setError(err.message || 'Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  const fetchSubServices = async (serviceId: number) => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/service/getSubServices/${serviceId}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to fetch subservices');
      setSubServices(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch subservices');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <ServiceContext.Provider
      value={{ services, subServices, fetchServices, fetchSubServices, loading, error }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) throw new Error('useService must be used within a ServiceProvider');
  return context;
};

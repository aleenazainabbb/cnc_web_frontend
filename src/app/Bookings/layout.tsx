'use client';

import Sidebar from '@/components/navbar/Sidebar';
import { ReactNode, useEffect, useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import SpinnerLoader from '@/components/Loader/spinner';

interface LayoutProps {
  children: ReactNode;
}

export default function BookingLayout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Optional: adjust duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ProtectedRoute>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <div style={{ display: 'flex', backgroundColor: '#fafafa' }}>
          <Sidebar />
          <main style={{ flex: 1 }}>{children}</main>
        </div>
      )}
    </ProtectedRoute>
  );
}

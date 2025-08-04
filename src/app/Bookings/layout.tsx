'use client';

import Sidebar from '@/components/navbar/Sidebar';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import SpinnerLoader from '@/components/Loader/spinner';

interface BookingLayoutProps {
  children: ReactNode;
}

export default function BookingLayout({ children }: BookingLayoutProps) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // Enable autoHeight only for /Bookings/Profile (case-insensitive)
//   const autoHeight = ['/Bookings/Profile', '/Bookings/PaymentMethods'].some(path =>
//   pathname?.toLowerCase().includes(path)
// );

const autoHeight = pathname?.toLowerCase().includes('/bookings/profile');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ProtectedRoute>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <div
          style={{
            display: 'flex',
            height: autoHeight ? 'auto' : '100vh',
            backgroundColor: '#fafafa',
          }}
        >
          <Sidebar />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
        </div>
      )}
    </ProtectedRoute>
  );
}

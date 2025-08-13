'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import SpinnerLoader from '@/components/Loader/spinner';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth(); // ✅ get loading from context
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [loading, user]);

  if (loading || !user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
        <SpinnerLoader />
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;


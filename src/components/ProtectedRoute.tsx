'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import SpinnerLoader from '@/components/Loader/spinner';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
      <SpinnerLoader /> {/* Show spinner */}
    </div>
  );
}


  return <>{children}</>;
};

export default ProtectedRoute;

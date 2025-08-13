'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NProgress from 'nprogress';

export default function RouteProgressDone() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.done(); // stop progress when page is mounted
  }, [pathname]);

  return null;
}

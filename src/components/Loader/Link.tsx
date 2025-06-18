'use client';

import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

interface LinkProps extends React.ComponentProps<typeof NextLink> {}

export default function LinkWithLoader({ href, onClick, ...props }: LinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && typeof href === 'string') {
      e.preventDefault();
      NProgress.start();
      router.push(href);
    }
  };

  return <NextLink {...props} href={href} onClick={handleClick} />;
}

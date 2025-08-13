'use client';

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LayoutProps) {
  return (
  <main style={{ flex: 1 }}>{children}</main>
  );
}

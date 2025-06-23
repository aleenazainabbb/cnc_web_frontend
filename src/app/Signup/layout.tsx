'use client';

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function SignupLayout({ children }: LayoutProps) {
  return (
  <main style={{ flex: 1 }}>{children}</main>
  );
}

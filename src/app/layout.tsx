// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Suspense } from "react";
import { AuthProvider } from "@/context/AuthContext";
import ConditionalLayout from "@/components/ConditionalLayout"; // NEW component
import { RegisterProvider } from "@/context/registerContext";
import { VerificationProvider } from "@/context/verification";
import { ForgotPasswordProvider } from "@/context/ForgotPassword";
import { VerifyForgotPasswordProvider } from '@/context/VerifyForgotPassword';
import { ResetPasswordProvider } from '@/context/ResetPassword';
// import LinkWithLoader from "@/components/Loader/Link";
import RouteProgressDone from '@/components/Loader/RouteProgressDone';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Your existing head tags */}
        <link rel="stylesheet" href="/styles/bootstrap.min.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          defer
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <VerifyForgotPasswordProvider>
          <ForgotPasswordProvider>
            <ResetPasswordProvider>
              <VerificationProvider>
                <AuthProvider>
                  <RegisterProvider>
                    <Suspense fallback={<div>Loading...</div>}>
                      <RouteProgressDone />
                      <ConditionalLayout>{children}</ConditionalLayout>
                    </Suspense>
                  </RegisterProvider>
                </AuthProvider>
              </VerificationProvider>
            </ResetPasswordProvider>
          </ForgotPasswordProvider>
        </VerifyForgotPasswordProvider>
      </body>
    </html>
  );
}

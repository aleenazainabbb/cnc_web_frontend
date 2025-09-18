"use client";

import { useEffect, useState } from "react";

export default function SpinnerLoader() {
  const [mounted, setMounted] = useState(false);

  // Only render animation on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // SSR-safe placeholder (no mismatch with client)
    return (
      <div
        style={{
          width: "50px",
          height: "50px",
        }}
      />
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "4px solid #36B864",
          borderTop: "4px solid transparent",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

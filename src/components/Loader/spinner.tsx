'use client';

import React from 'react';

const SpinnerLoader = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const spinnerStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    border: '4px solid #36B864',
    borderTop: '4px solid transparent',
    borderRadius: '70%',
    animation: 'spin 0.8s linear infinite',
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle} />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SpinnerLoader;

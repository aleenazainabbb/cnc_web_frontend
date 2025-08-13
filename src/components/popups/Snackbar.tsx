import React, { useEffect, useState } from 'react';

interface SnackbarProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // start fade in

    const timer = setTimeout(() => {
      setVisible(false); // start fade out
      setTimeout(onClose, 300); // call onClose after fade out animation ends
    }, 4000); // total visible time

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <>
      <style>
        {`
          @keyframes slideFadeIn {
            0% {
              opacity: 0;
              transform: translate(-50%, 40px);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, 0);
            }
          }

          @keyframes slideFadeOut {
            0% {
              opacity: 1;
              transform: translate(-50%, 0);
            }
            100% {
              opacity: 0;
              transform: translate(-50%, 40px);
            }
          }
        `}
      </style>

      <div
        role="alert"
        aria-live="assertive"
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: type === 'success' ? '#4caf50' : '#f44336',
          color: 'white',
          padding: '14px 32px',
          borderRadius: '30px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
          zIndex: 9999,
          minWidth: '250px',
          textAlign: 'center',
          fontWeight: '600',
          fontSize: '1rem',
          animation: visible ? 'slideFadeIn 0.3s ease forwards' : 'slideFadeOut 0.3s ease forwards',
          userSelect: 'none',
          pointerEvents: 'auto',
          cursor: 'default',
          // Optional: smooth color transition if you want
          transition: 'background-color 0.3s ease',
        }}
      >
        {message}
      </div>
    </>
  );
};

export default Snackbar;

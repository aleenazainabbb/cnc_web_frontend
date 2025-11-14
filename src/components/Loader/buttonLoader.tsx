import React from "react";

interface ButtonLoaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({ isLoading, children, ...props }) => {
  return (
    <button
      {...props}
      disabled={props.disabled || isLoading} // disable while loading
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        cursor: props.disabled || isLoading ? "not-allowed" : "pointer",
      }}
    >
      {children}
      {isLoading && (
        <span
          style={{
            width: "16px",
            height: "16px",
            border: "2px solid #fff",
            borderTop: "2px solid transparent",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
            display: "inline-block",
          }}
        ></span>
      )}

      {/* Add keyframes for spin */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </button>
  );
};

export default ButtonLoader;

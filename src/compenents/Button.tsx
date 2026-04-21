import React from "react";

interface buttonProps {
    label: string;
    variant: string;
    onClick?: () => void;
}

const Button = ({label, variant, onClick}: buttonProps) => {

    const getStyles = (): React.CSSProperties => {
    return {
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
      fontWeight: "bold",
      margin: "5px",
      // Conditional styling logic
      backgroundColor: variant === "primary" ? "#007bff" : "#6c757d",
      color: "white",
    };
  };

    return (
        <button style={getStyles()} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;
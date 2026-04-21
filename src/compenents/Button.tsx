import React from "react";

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ label, variant = 'primary', onClick, type = 'button', disabled = false }: ButtonProps) => {
  const getStyles = (): React.CSSProperties => {
    return {
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: 'none',
      fontWeight: 'bold',
      margin: '5px',
      backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
      color: 'white',
      opacity: disabled ? 0.6 : 1,
    };
  };

  return (
    <button style={getStyles()} onClick={onClick} type={type} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
import React from 'react';
import { useTheme } from 'rinlab';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const { currentPalette } = useTheme();

  const baseStyles = {
    fontFamily: "'IBM Plex Mono', monospace",
    border: `1px solid hsl(${currentPalette.colors.border})`,
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: '0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.7 : 1,
  };

  const sizeStyles = {
    sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: `hsl(${currentPalette.colors.accent})`,
      color: `hsl(${currentPalette.colors.background})`,
      '&:hover': {
        backgroundColor: `hsl(${currentPalette.colors.hover})`,
      },
    },
    secondary: {
      backgroundColor: `hsl(${currentPalette.colors.background})`,
      color: `hsl(${currentPalette.colors.foreground})`,
      '&:hover': {
        backgroundColor: `hsl(${currentPalette.colors.hover})`,
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: `hsl(${currentPalette.colors.foreground})`,
      '&:hover': {
        backgroundColor: `hsl(${currentPalette.colors.hover})`,
      },
    },
  };

  const styles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={styles}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;

import React, { ReactNode } from 'react';
import { useTheme } from 'rinlab';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  onClick,
}) => {
  const { currentPalette } = useTheme();

  const baseStyles = {
    padding: '1.5rem',
    borderRadius: '4px',
    transition: '0.2s ease',
    cursor: onClick ? 'pointer' : 'default',
  };

  const variantStyles = {
    default: {
      backgroundColor: `hsl(${currentPalette.colors.background})`,
      border: `1px solid hsl(${currentPalette.colors.border})`,
    },
    elevated: {
      backgroundColor: `hsl(${currentPalette.colors.background})`,
      border: `1px solid hsl(${currentPalette.colors.border})`,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    bordered: {
      backgroundColor: 'transparent',
      border: `2px solid hsl(${currentPalette.colors.border})`,
    },
  };

  const styles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  return (
    <div
      style={styles}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

import React, { ReactNode } from 'react';
import { useTheme } from 'rinlab';

interface TextProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'mono';
  color?: 'default' | 'muted' | 'accent';
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color = 'default',
  className = '',
}) => {
  const { currentPalette } = useTheme();

  const variantStyles = {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      marginBottom: '1rem',
      fontFamily: "'IBM Plex Mono', monospace",
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      marginBottom: '0.75rem',
      fontFamily: "'IBM Plex Mono', monospace",
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: '0.5rem',
      fontFamily: "'IBM Plex Mono', monospace",
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: '0.5rem',
      fontFamily: "'IBM Plex Mono', monospace",
    },
    body: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    small: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    mono: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      fontFamily: "'IBM Plex Mono', monospace",
    },
  };

  const colorStyles = {
    default: {
      color: `hsl(${currentPalette.colors.foreground})`,
    },
    muted: {
      color: `hsl(${currentPalette.colors.muted})`,
    },
    accent: {
      color: `hsl(${currentPalette.colors.accent})`,
    },
  };

  const styles = {
    ...variantStyles[variant],
    ...colorStyles[color],
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return React.createElement(
    Component,
    {
      style: styles,
      className,
    },
    children
  );
};

export default Text;

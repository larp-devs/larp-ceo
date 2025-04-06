import React, { ReactNode } from 'react';
import { useTheme } from 'rinlab';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'alt' | 'dark';
  id?: string;
  paddingY?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  variant = 'default',
  id,
  paddingY = '4rem',
}) => {
  const { currentPalette } = useTheme();

  const variantStyles = {
    default: {
      backgroundColor: `hsl(${currentPalette.colors.background})`,
    },
    alt: {
      backgroundColor: `hsl(${currentPalette.colors.hover})`,
    },
    dark: {
      backgroundColor: `hsl(${currentPalette.colors.border})`,
      color: `hsl(${currentPalette.colors.foreground})`,
    },
  };

  const styles = {
    width: '100%',
    paddingTop: paddingY,
    paddingBottom: paddingY,
    ...variantStyles[variant],
  };

  return (
    <section style={styles} className={className} id={id}>
      {children}
    </section>
  );
};

export default Section;

import React from 'react';
import { useTheme } from 'rinlab';

interface ResponsiveGridProps {
  children: React.ReactNode;
  columns: {
    default: number;
    tablet?: number;
    mobile?: number;
  };
  gap?: string;
  className?: string;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns,
  gap = '2rem',
  className = '',
}) => {
  const { currentPalette } = useTheme();

  const styles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns.default}, 1fr)`,
    gap,
    width: '100%',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: `repeat(${columns.tablet || Math.min(columns.default, 2)}, 1fr)`,
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: `repeat(${columns.mobile || 1}, 1fr)`,
    },
  };

  return (
    <div style={styles} className={`responsive-grid ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;

import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  className?: string;
  columns?: number;
  gap?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  className = '',
  columns = 3,
  gap = '2rem',
}) => {
  const styles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
    width: '100%',
  };

  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
};

export default Grid;

import React, { ReactNode } from 'react';
import { useTheme } from 'rinlab';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  fluid = false,
}) => {
  const styles = {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    maxWidth: fluid ? '100%' : '1200px',
  };

  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
};

export default Container;

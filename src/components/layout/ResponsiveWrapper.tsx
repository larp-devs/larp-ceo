import React, { ReactNode } from 'react';

interface ResponsiveWrapperProps {
  children: ReactNode;
  className?: string;
}

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({
  children,
  className = '',
}) => {
  // This component adds responsive classes to its children
  return (
    <div className={`responsive-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveWrapper;

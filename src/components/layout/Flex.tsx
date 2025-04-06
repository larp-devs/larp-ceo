import React, { ReactNode } from 'react';

interface FlexProps {
  children: ReactNode;
  className?: string;
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

const Flex: React.FC<FlexProps> = ({
  children,
  className = '',
  direction = 'row',
  align = 'center',
  justify = 'flex-start',
  gap = '0',
  wrap = 'nowrap',
}) => {
  const styles = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap,
    flexWrap: wrap,
  };

  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
};

export default Flex;

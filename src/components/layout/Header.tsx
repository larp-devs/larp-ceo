import React, { useState } from 'react';
import { useTheme } from 'rinlab';
import { useCommand } from '@/components/terminal/CommandProvider';
import Container from './Container';
import Flex from './Flex';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const { currentPalette } = useTheme();
  const { openCommandTerminal } = useCommand();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      style={{
        borderBottom: `1px solid hsl(${currentPalette.colors.border})`,
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: `hsl(${currentPalette.colors.background})`,
      }}
    >
      <Container>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="1rem">
            <Text variant="h3" style={{ margin: 0 }}>
              LARP.CEO
            </Text>
          </Flex>

          {/* Desktop Navigation */}
          <Flex 
            className="desktop-nav"
            gap="2rem"
            style={{ 
              display: 'none',
              '@media (min-width: 768px)': {
                display: 'flex',
              }
            }}
          >
            <a href="#features" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
              <Text variant="mono">Features</Text>
            </a>
            <a href="#pricing" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
              <Text variant="mono">Pricing</Text>
            </a>
            <a href="#about" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
              <Text variant="mono">About</Text>
            </a>
          </Flex>

          <Flex gap="1rem">
            <Button 
              variant="outline" 
              onClick={openCommandTerminal}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>⌘</span> <span>K</span>
            </Button>
            
            <Button variant="primary">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              style={{
                display: 'block',
                '@media (min-width: 768px)': {
                  display: 'none',
                },
                background: 'none',
                border: 'none',
                color: `hsl(${currentPalette.colors.foreground})`,
                cursor: 'pointer',
                fontSize: '1.5rem',
              }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </Flex>
        </Flex>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: `hsl(${currentPalette.colors.background})`,
              borderBottom: `1px solid hsl(${currentPalette.colors.border})`,
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              '@media (min-width: 768px)': {
                display: 'none',
              }
            }}
          >
            <a href="#features" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
              <Text variant="mono">Features</Text>
            </a>
            <a href="#pricing" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
              <Text variant="mono">Pricing</Text>
            </a>
            <a href="#about" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
              <Text variant="mono">About</Text>
            </a>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;

import React from 'react';
import { useTheme } from 'rinlab';
import Container from './Container';
import Flex from './Flex';
import Text from '@/components/ui/Text';
import { useCommand } from '@/components/terminal/CommandProvider';

const Footer: React.FC = () => {
  const { currentPalette } = useTheme();
  const { openCommandTerminal } = useCommand();

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: `1px solid hsl(${currentPalette.colors.border})`,
        padding: '3rem 0',
        backgroundColor: `hsl(${currentPalette.colors.background})`,
      }}
    >
      <Container>
        <Flex 
          direction="column" 
          gap="2rem"
        >
          <Flex 
            justify="space-between" 
            align="flex-start" 
            gap="2rem"
            wrap="wrap"
          >
            <div style={{ flex: '1', minWidth: '200px' }}>
              <Text variant="h3" style={{ marginBottom: '1rem' }}>LARP.CEO</Text>
              <Text variant="body" color="muted">
                The ultimate platform for enterprise-level AI agent management.
              </Text>
              <div 
                style={{ 
                  marginTop: '1rem', 
                  cursor: 'pointer',
                  display: 'inline-block',
                }}
                onClick={openCommandTerminal}
              >
                <Text variant="mono" color="accent">
                  Press ⌘K to open terminal
                </Text>
              </div>
            </div>
            
            <Flex gap="3rem" wrap="wrap">
              <div>
                <Text variant="h4" style={{ marginBottom: '1rem' }}>Product</Text>
                <Flex direction="column" gap="0.5rem">
                  <a href="#features" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">Features</Text>
                  </a>
                  <a href="#pricing" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">Pricing</Text>
                  </a>
                  <a href="#early-larp" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">EARLY_LARP</Text>
                  </a>
                  <a href="#ascii-art" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">ASCII Art</Text>
                  </a>
                </Flex>
              </div>
              
              <div>
                <Text variant="h4" style={{ marginBottom: '1rem' }}>Company</Text>
                <Flex direction="column" gap="0.5rem">
                  <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">About</Text>
                  </a>
                  <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">Blog</Text>
                  </a>
                  <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">Careers</Text>
                  </a>
                  <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">Contact</Text>
                  </a>
                </Flex>
              </div>
              
              <div>
                <Text variant="h4" style={{ marginBottom: '1rem' }}>Legal</Text>
                <Flex direction="column" gap="0.5rem">
                  <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">Terms</Text>
                  </a>
                  <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">Privacy</Text>
                  </a>
                  <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">Cookies</Text>
                  </a>
                  <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                    <Text variant="mono">Licenses</Text>
                  </a>
                </Flex>
              </div>
            </Flex>
          </Flex>
          
          <div 
            style={{ 
              borderTop: `1px solid hsl(${currentPalette.colors.border})`,
              paddingTop: '1.5rem',
              marginTop: '1rem',
            }}
          >
            <Flex 
              justify="space-between" 
              align="center"
              wrap="wrap"
              gap="1rem"
            >
              <Text variant="small" color="muted">
                © {currentYear} LARP.CEO. All rights reserved.
              </Text>
              
              <Flex gap="1rem">
                <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                  <Text variant="mono">GitHub</Text>
                </a>
                <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                  <Text variant="mono">Twitter</Text>
                </a>
                <a href="#" style={{ color: `hsl(${currentPalette.colors.foreground})`, textDecoration: 'none' }}>
                  <Text variant="mono">LinkedIn</Text>
                </a>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;

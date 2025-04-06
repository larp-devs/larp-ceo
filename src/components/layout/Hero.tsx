import React from 'react';
import { useTheme } from 'rinlab';
import Container from './Container';
import Flex from './Flex';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import { useCommand } from '@/components/terminal/CommandProvider';

const Hero: React.FC = () => {
  const { currentPalette } = useTheme();
  const { openCommandTerminal } = useCommand();

  // ASCII art for the hero section
  const asciiArt = `
  ██╗      █████╗ ██████╗ ██████╗    ██████╗███████╗ ██████╗ 
  ██║     ██╔══██╗██╔══██╗██╔══██╗  ██╔════╝██╔════╝██╔═══██╗
  ██║     ███████║██████╔╝██████╔╝  ██║     █████╗  ██║   ██║
  ██║     ██╔══██║██╔══██╗██╔═══╝   ██║     ██╔══╝  ██║   ██║
  ███████╗██║  ██║██║  ██║██║       ╚██████╗███████╗╚██████╔╝
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝        ╚═════╝╚══════╝ ╚═════╝ 
  `;

  return (
    <section
      style={{
        background: `linear-gradient(135deg, hsl(${currentPalette.colors.background}), hsl(${currentPalette.colors.border}))`,
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Flex direction="column" align="center" gap="2rem">
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.1,
              zIndex: 0,
              fontSize: '2vw',
              whiteSpace: 'pre',
              fontFamily: "'IBM Plex Mono', monospace",
              color: `hsl(${currentPalette.colors.accent})`,
            }}
          >
            {asciiArt}
          </div>

          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Text variant="h1" style={{ marginBottom: '1rem' }}>
              Manage Your AI Agents Like a CEO
            </Text>
            <Text variant="h3" color="muted" style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              The ultimate platform for enterprise-level AI agent management
            </Text>
            <Flex justify="center" gap="1rem" wrap="wrap">
              <Button variant="primary" size="lg" onClick={openCommandTerminal}>
                Try Command Terminal
              </Button>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Flex>
          </div>

          <div
            style={{
              marginTop: '3rem',
              padding: '1rem',
              background: `hsl(${currentPalette.colors.background})`,
              border: `1px solid hsl(${currentPalette.colors.border})`,
              borderRadius: '4px',
              width: '100%',
              maxWidth: '800px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: `hsl(${currentPalette.colors.foreground})`,
                padding: '1rem',
                borderRadius: '4px',
                backgroundColor: `hsl(${currentPalette.colors.hover})`,
                position: 'relative',
              }}
            >
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: `hsl(${currentPalette.colors.accent})`, marginRight: '0.5rem' }}>{'>'}</span>
                <span>SUBSCRIBE FULL_CEO</span>
              </div>
              <div style={{ marginLeft: '1.5rem', color: `hsl(${currentPalette.colors.secondary})` }}>
                Activating LARP CEO with 10 agent management slots...
              </div>
              <div style={{ marginLeft: '1.5rem', color: `hsl(${currentPalette.colors.secondary})` }}>
                Initializing enterprise environment...
              </div>
              <div style={{ marginLeft: '1.5rem', color: `hsl(${currentPalette.colors.accent})` }}>
                Success! Your LARP CEO instance is now operational.
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Text variant="small" color="muted">
              Trusted by forward-thinking companies worldwide
            </Text>
            <Flex justify="center" gap="2rem" wrap="wrap" style={{ marginTop: '1rem' }}>
              {['ACME Corp', 'TechGiant', 'FutureLabs', 'Innovatech', 'ByteForge'].map((company, index) => (
                <Text key={index} variant="mono" color="muted">
                  {company}
                </Text>
              ))}
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Hero;

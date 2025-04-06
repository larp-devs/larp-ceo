import React from 'react';
import { useTheme } from 'rinlab';
import Container from './Container';
import Flex from './Flex';
import Section from './Section';
import Text from '@/components/ui/Text';

const AsciiArt: React.FC = () => {
  const { currentPalette } = useTheme();

  // ASCII art elements
  const asciiElements = [
    {
      title: "Command Terminal",
      art: `
  ┌─────────────────────────────┐
  │ $ LARP CEO                  │
  │ > MANAGE AGENTS             │
  │ > OPTIMIZE WORKFLOW         │
  │ > INCREASE PRODUCTIVITY     │
  │                             │
  │ [ENTER COMMAND]             │
  └─────────────────────────────┘
      `,
      description: "Control your AI agents with simple yet powerful commands"
    },
    {
      title: "Agent Network",
      art: `
       ┌─────┐     ┌─────┐
       │ AI1 │────▶│ AI3 │
       └─────┘     └─────┘
          ▲           │
          │           ▼
       ┌─────┐     ┌─────┐
       │ CEO │────▶│ AI4 │
       └─────┘     └─────┘
          │           ▲
          ▼           │
       ┌─────┐     ┌─────┐
       │ AI2 │────▶│ AI5 │
       └─────┘     └─────┘
      `,
      description: "Orchestrate complex agent networks with centralized control"
    },
    {
      title: "Performance Metrics",
      art: `
  ┌────────────────────────────┐
  │                            │
  │  █▀▀▀▀▀█  █▀▀▀▀▀█  █▀▀▀▀▀█ │
  │  █     █  █     █  █     █ │
  │  █  A  █  █  B  █  █  C  █ │
  │  █     █  █     █  █     █ │
  │  █▄▄▄▄▄█  █▄▄▄▄▄█  █▄▄▄▄▄█ │
  │                            │
  └────────────────────────────┘
      `,
      description: "Track and analyze agent performance in real-time"
    }
  ];

  return (
    <Section id="ascii-art" variant="dark">
      <Container>
        <Flex direction="column" align="center" gap="3rem">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <Text variant="h2">The Art of AI Management</Text>
            <Text variant="body" color="muted" style={{ marginTop: '1rem' }}>
              LARP CEO combines powerful functionality with retro-computing aesthetics
            </Text>
          </div>

          <Flex 
            direction="column" 
            gap="4rem" 
            style={{ width: '100%' }}
          >
            {asciiElements.map((element, index) => (
              <Flex 
                key={index} 
                direction={index % 2 === 0 ? 'row' : 'row-reverse'} 
                align="center" 
                gap="2rem"
                style={{
                  '@media (max-width: 768px)': {
                    flexDirection: 'column',
                  },
                }}
              >
                <div style={{ 
                  flex: 1,
                  backgroundColor: `hsla(${currentPalette.colors.background}, 0.3)`,
                  padding: '2rem',
                  borderRadius: '4px',
                  border: `1px solid hsla(${currentPalette.colors.border}, 0.5)`,
                }}>
                  <pre
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: `hsl(${currentPalette.colors.accent})`,
                      fontSize: 'clamp(0.5rem, 1vw, 1rem)',
                      whiteSpace: 'pre',
                      overflow: 'auto',
                      margin: 0,
                    }}
                  >
                    {element.art}
                  </pre>
                </div>
                
                <div style={{ flex: 1 }}>
                  <Text variant="h3">{element.title}</Text>
                  <Text variant="body" style={{ marginTop: '1rem' }}>
                    {element.description}
                  </Text>
                </div>
              </Flex>
            ))}
          </Flex>

          <div style={{ 
            padding: '2rem', 
            backgroundColor: `hsla(${currentPalette.colors.background}, 0.3)`,
            borderRadius: '4px',
            width: '100%',
            maxWidth: '800px',
            textAlign: 'center',
          }}>
            <Text variant="h4">Experience the Retro-Future of AI Management</Text>
            <pre
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: `hsl(${currentPalette.colors.accent})`,
                fontSize: 'clamp(0.5rem, 1vw, 0.8rem)',
                whiteSpace: 'pre',
                overflow: 'auto',
                margin: '1rem 0',
              }}
            >
{`
  ┌───────────────────────────────────────────┐
  │                                           │
  │   L A R P . C E O   -   T H E   F U T U R E   │
  │   O F   A I   M A N A G E M E N T         │
  │                                           │
  └───────────────────────────────────────────┘
`}
            </pre>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default AsciiArt;

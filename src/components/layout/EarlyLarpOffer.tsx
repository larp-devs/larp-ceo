import React from 'react';
import { useTheme } from 'rinlab';
import Container from './Container';
import Flex from './Flex';
import Section from './Section';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const EarlyLarpOffer: React.FC = () => {
  const { currentPalette } = useTheme();

  // ASCII art for the early offer section
  const asciiArt = `
   ___    _    ____  _  __   _     _    ____  ____  
  | __|  / \\  |  _ \\| |/ /  | |   / \\  |  _ \\|  _ \\ 
  | _|  / _ \\ | |_) | ' /   | |  / _ \\ | |_) | |_) |
  |___ /_/ \\_\\|____/|_|\\_\\  |_| /_/ \\_\\|  __/|  __/ 
                                       |_|   |_|    
  `;

  return (
    <Section id="early-larp" variant="alt">
      <Container>
        <Flex direction="column" align="center" gap="3rem">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <Text variant="h2">Limited Time Offer</Text>
            <Text variant="body" color="muted" style={{ marginTop: '1rem' }}>
              Be an early adopter and secure your LARP CEO license at our special pre-launch price
            </Text>
          </div>

          <Card 
            variant="elevated" 
            style={{ 
              width: '100%', 
              maxWidth: '800px',
              border: `2px solid hsl(${currentPalette.colors.accent})`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.1,
                zIndex: 0,
                fontSize: '1vw',
                whiteSpace: 'pre',
                fontFamily: "'IBM Plex Mono', monospace",
                color: `hsl(${currentPalette.colors.accent})`,
              }}
            >
              {asciiArt}
            </div>
            
            <Flex direction="column" gap="2rem" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ 
                backgroundColor: `hsl(${currentPalette.colors.accent})`,
                color: `hsl(${currentPalette.colors.background})`,
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '1.25rem',
                fontWeight: 'bold',
                display: 'inline-block',
                alignSelf: 'center',
              }}>
                42.069% OFF YEARLY PLANS
              </div>
              
              <Text variant="h3" style={{ textAlign: 'center' }}>
                Subscribe Now, Pay Less, Get More
              </Text>
              
              <Flex gap="2rem" wrap="wrap" justify="center">
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <Text variant="h4">What You Get:</Text>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: 0, 
                    margin: '1rem 0 0 0',
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: `hsl(${currentPalette.colors.accent})` }}>✓</span>
                      <span>Locked-in discounted rate</span>
                    </li>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: `hsl(${currentPalette.colors.accent})` }}>✓</span>
                      <span>Priority access to new features</span>
                    </li>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: `hsl(${currentPalette.colors.accent})` }}>✓</span>
                      <span>Exclusive early adopter badge</span>
                    </li>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: `hsl(${currentPalette.colors.accent})` }}>✓</span>
                      <span>Free upgrades for 1 year</span>
                    </li>
                  </ul>
                </div>
                
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <Text variant="h4">Yearly Savings:</Text>
                  <div style={{ 
                    margin: '1rem 0',
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>FULL CEO:</span>
                      <span>Save $6,749/year</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>PLATFORM CEO:</span>
                      <span>Save $3,482/year</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>GITHUB REPO CEO:</span>
                      <span>Save $2,119/year</span>
                    </div>
                  </div>
                </div>
              </Flex>
              
              <div style={{ 
                padding: '1rem',
                backgroundColor: `hsla(${currentPalette.colors.background}, 0.5)`,
                borderRadius: '4px',
                fontFamily: "'IBM Plex Mono', monospace",
                textAlign: 'center',
              }}>
                <Text variant="mono">
                  This offer expires when we officially launch. Act now to secure your discount.
                </Text>
              </div>
              
              <Button 
                variant="primary" 
                style={{ alignSelf: 'center', padding: '1rem 2rem' }}
              >
                Activate EARLY_LARP Offer
              </Button>
              
              <Text variant="small" color="muted" style={{ textAlign: 'center' }}>
                * All subscriptions come with a 30-day satisfaction guarantee
              </Text>
            </Flex>
          </Card>

          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            padding: '2rem',
            backgroundColor: `hsla(${currentPalette.colors.border}, 0.2)`,
            borderRadius: '4px',
            width: '100%',
            maxWidth: '800px',
          }}>
            <Text variant="h4" style={{ textAlign: 'center' }}>
              Why Wait? The Future of AI Management is Here
            </Text>
            <Text variant="body" style={{ textAlign: 'center' }}>
              Join the elite group of early adopters who are revolutionizing how AI agents are managed
            </Text>
            <div style={{ 
              fontFamily: "'IBM Plex Mono', monospace",
              padding: '0.5rem 1rem',
              backgroundColor: `hsla(${currentPalette.colors.accent}, 0.2)`,
              borderRadius: '4px',
              marginTop: '0.5rem',
            }}>
              <code>SUBSCRIBE --plan=FULL_CEO --yearly --coupon=EARLY_LARP</code>
            </div>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default EarlyLarpOffer;

import React from 'react';
import { useTheme } from 'rinlab';
import Container from './Container';
import Flex from './Flex';
import Section from './Section';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const Pricing: React.FC = () => {
  const { currentPalette } = useTheme();

  // Calculate yearly prices with 42.069% discount
  const calculateYearlyPrice = (monthlyPrice: number) => {
    const yearlyPrice = monthlyPrice * 12;
    const discountedPrice = yearlyPrice * (1 - 0.42069);
    return Math.round(discountedPrice);
  };

  const pricingTiers = [
    {
      name: 'GITHUB REPO CEO',
      price: 420,
      yearlyPrice: calculateYearlyPrice(420),
      description: 'Perfect for managing a single GitHub repository with one AI agent',
      features: [
        '1 GitHub repo in 1 GitHub org',
        '1 AI agent under management',
        'Basic command terminal',
        'Standard security features',
        'Email support',
      ],
      cta: 'Start Small',
      popular: false,
    },
    {
      name: 'PLATFORM CEO',
      price: 690,
      yearlyPrice: calculateYearlyPrice(690),
      description: 'Ideal for managing multiple repositories or social media platforms',
      features: [
        'GitHub/TikTok/Instagram management',
        'Up to 3 AI agents under management',
        'Advanced command terminal',
        'Enhanced security features',
        'Priority email support',
        'Custom workflows',
      ],
      cta: 'Go Multi-Platform',
      popular: false,
    },
    {
      name: 'FULL CEO',
      price: 1337,
      yearlyPrice: calculateYearlyPrice(1337),
      description: 'Enterprise-grade solution for comprehensive AI agent management',
      features: [
        'Up to 10 agents under management',
        'Every +1 agent: +$182/mo or +$1337 one-time',
        'Full-featured command terminal',
        'Enterprise-grade security',
        '24/7 priority support',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced analytics dashboard',
      ],
      cta: 'Become CEO',
      popular: true,
    },
  ];

  return (
    <Section id="pricing">
      <Container>
        <Flex direction="column" align="center" gap="3rem">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <Text variant="h2">Pricing Plans</Text>
            <Text variant="body" color="muted" style={{ marginTop: '1rem' }}>
              Choose the perfect plan for your AI agent management needs
            </Text>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '2rem', 
            width: '100%',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                variant={tier.popular ? 'elevated' : 'default'} 
                style={{ 
                  width: '100%', 
                  maxWidth: '350px',
                  position: 'relative',
                  border: tier.popular ? `2px solid hsl(${currentPalette.colors.accent})` : undefined,
                }}
              >
                {tier.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '20px',
                    backgroundColor: `hsl(${currentPalette.colors.accent})`,
                    color: `hsl(${currentPalette.colors.background})`,
                    padding: '0.25rem 1rem',
                    borderRadius: '4px',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  }}>
                    MOST POPULAR
                  </div>
                )}
                
                <Flex direction="column" gap="1.5rem">
                  <Text variant="h3">{tier.name}</Text>
                  
                  <div>
                    <Text variant="h2" style={{ marginBottom: '0.5rem' }}>
                      ${tier.price}<Text variant="small" as="span">/mo</Text>
                    </Text>
                    <Text variant="body" color="muted">
                      or ${tier.yearlyPrice}/year with EARLY_LARP offer (42.069% off)
                    </Text>
                  </div>
                  
                  <Text variant="body">{tier.description}</Text>
                  
                  <div>
                    <Text variant="body" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Features include:
                    </Text>
                    <ul style={{ 
                      listStyleType: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.9rem',
                    }}>
                      {tier.features.map((feature, i) => (
                        <li key={i} style={{ 
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                        }}>
                          <span style={{ color: `hsl(${currentPalette.colors.accent})` }}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant={tier.popular ? 'primary' : 'outline'} 
                    style={{ width: '100%' }}
                  >
                    {tier.cta}
                  </Button>
                </Flex>
              </Card>
            ))}
          </div>

          <div style={{ 
            padding: '2rem', 
            backgroundColor: `hsla(${currentPalette.colors.border}, 0.2)`,
            borderRadius: '4px',
            width: '100%',
            maxWidth: '800px',
          }}>
            <Flex direction="column" gap="1rem" align="center">
              <Text variant="h3" style={{ textAlign: 'center' }}>EARLY_LARP Special Offer</Text>
              <Text variant="body" style={{ textAlign: 'center' }}>
                Subscribe to a yearly plan today and get 42.069% off while waiting for our official launch!
              </Text>
              <div style={{ 
                fontFamily: "'IBM Plex Mono', monospace",
                padding: '1rem',
                backgroundColor: `hsla(${currentPalette.colors.background}, 0.5)`,
                borderRadius: '4px',
                marginTop: '1rem',
                textAlign: 'center',
                width: '100%',
              }}>
                <code>SUBSCRIBE FULL_CEO --yearly --early-larp</code>
              </div>
              <Text variant="small" color="muted" style={{ textAlign: 'center', marginTop: '1rem' }}>
                Limited time offer. Prices will increase after official launch.
              </Text>
            </Flex>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default Pricing;

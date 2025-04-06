import React from 'react';
import { useTheme } from 'rinlab';
import Container from './Container';
import Grid from './Grid';
import Flex from './Flex';
import Section from './Section';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/Card';

const Features: React.FC = () => {
  const { currentPalette } = useTheme();

  const features = [
    {
      title: 'Multi-Agent Management',
      description: 'Manage up to 10 AI agents simultaneously with our enterprise-grade platform. Assign tasks, monitor performance, and optimize workflows.',
      icon: '🤖',
    },
    {
      title: 'Command Terminal',
      description: 'Control your AI agents with our powerful command terminal interface. Simple commands, powerful results.',
      icon: '💻',
    },
    {
      title: 'Real-time Analytics',
      description: 'Track agent performance metrics in real-time. Identify bottlenecks and optimize your AI workforce.',
      icon: '📊',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols keep your data and agents safe at all times.',
      icon: '🔒',
    },
    {
      title: 'Custom Workflows',
      description: 'Create custom workflows and automation sequences for your agents to execute complex tasks.',
      icon: '⚙️',
    },
    {
      title: 'API Integration',
      description: 'Connect your agents to any third-party service with our robust API integration capabilities.',
      icon: '🔌',
    },
  ];

  return (
    <Section id="features" variant="alt">
      <Container>
        <Flex direction="column" align="center" gap="3rem">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <Text variant="h2">Enterprise-Grade AI Agent Management</Text>
            <Text variant="body" color="muted" style={{ marginTop: '1rem' }}>
              LARP CEO provides cutting-edge tools for managing your AI agents with precision and efficiency.
            </Text>
          </div>

          <Grid columns={3} gap="2rem" style={{
            '@media (max-width: 1024px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
            '@media (max-width: 768px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
          }}>
            {features.map((feature, index) => (
              <Card key={index} variant="elevated" style={{ height: '100%' }}>
                <Flex direction="column" gap="1rem">
                  <div style={{ 
                    fontSize: '2rem', 
                    marginBottom: '0.5rem',
                    backgroundColor: `hsla(${currentPalette.colors.border}, 0.3)`,
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                  }}>
                    {feature.icon}
                  </div>
                  <Text variant="h4">{feature.title}</Text>
                  <Text variant="body" color="muted">{feature.description}</Text>
                </Flex>
              </Card>
            ))}
          </Grid>

          <div style={{ 
            padding: '2rem', 
            backgroundColor: `hsla(${currentPalette.colors.accent}, 0.1)`,
            border: `1px solid hsla(${currentPalette.colors.accent}, 0.3)`,
            borderRadius: '4px',
            width: '100%',
            maxWidth: '800px',
            textAlign: 'center',
          }}>
            <Text variant="h3">Ready to revolutionize your AI workflow?</Text>
            <Text variant="body" style={{ margin: '1rem 0' }}>
              Join the elite group of companies leveraging LARP CEO for unparalleled AI management.
            </Text>
            <div style={{ 
              fontFamily: "'IBM Plex Mono', monospace",
              padding: '1rem',
              backgroundColor: `hsla(${currentPalette.colors.background}, 0.5)`,
              borderRadius: '4px',
              marginTop: '1rem',
              display: 'inline-block',
            }}>
              <code>SUBSCRIBE FULL_CEO --early-access</code>
            </div>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default Features;

import React, { useState, useEffect, useRef } from 'react';
import { useTheme, themePalettes } from 'rinlab';

interface CommandTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Command {
  name: string;
  description: string;
  icon: string;
  example: string;
}

const commands: Command[] = [
  {
    name: 'SUBSCRIBE',
    description: 'Subscribe to LARP CEO service',
    icon: '[$]',
    example: 'SUBSCRIBE FULL_CEO'
  },
  {
    name: 'PRICING',
    description: 'View pricing information',
    icon: '[*]',
    example: 'PRICING FULL_CEO'
  },
  {
    name: 'AGENTS',
    description: 'Manage your AI agents',
    icon: '[%]',
    example: 'AGENTS LIST'
  },
  {
    name: 'HELP',
    description: 'Get help with commands',
    icon: '[!]',
    example: 'HELP COMMANDS'
  }
];

const CommandTerminal: React.FC<CommandTerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<Command[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { currentPalette } = useTheme();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    
    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }
    
    const filtered = commands.filter(cmd => 
      cmd.name.toLowerCase().includes(value.toLowerCase()) || 
      cmd.description.toLowerCase().includes(value.toLowerCase())
    );
    
    setSuggestions(filtered);
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: `hsla(${currentPalette.colors.background}, 0.9)`,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: "'IBM Plex Mono', monospace",
        color: `hsl(${currentPalette.colors.foreground})`,
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: `hsl(${currentPalette.colors.background})`,
          border: `1px solid hsl(${currentPalette.colors.border})`,
          borderRadius: '4px',
          padding: '1rem',
        }}
      >
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>LARP CEO COMMAND TERMINAL</h2>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: `hsl(${currentPalette.colors.foreground})`,
              cursor: 'pointer',
              fontSize: '1.2rem',
            }}
          >
            ×
          </button>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '0.5rem' }}>{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter command..."
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                color: `hsl(${currentPalette.colors.foreground})`,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>
        </div>
        
        {suggestions.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            {suggestions.map((cmd, index) => (
              <div 
                key={index} 
                style={{ 
                  marginBottom: '1rem',
                  padding: '0.5rem',
                  border: `1px solid hsl(${currentPalette.colors.border})`,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: '0.2s ease',
                  backgroundColor: `hsl(${currentPalette.colors.background})`,
                }}
                onClick={() => setInput(cmd.name)}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>{cmd.icon}</span>
                  <span style={{ fontWeight: 'bold' }}>{cmd.name}</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: `hsl(${currentPalette.colors.secondary})` }}>
                  {cmd.description}
                </div>
                <div style={{ 
                  marginTop: '0.5rem', 
                  fontSize: '0.8rem',
                  color: `hsl(${currentPalette.colors.accent})`,
                  fontStyle: 'italic'
                }}>
                  Example: {cmd.example}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {suggestions.length === 0 && input.trim() !== '' && (
          <div style={{ marginTop: '1rem', color: `hsl(${currentPalette.colors.secondary})` }}>
            No commands found. Type HELP for available commands.
          </div>
        )}
        
        {input.trim() === '' && (
          <div style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '0.5rem', color: `hsl(${currentPalette.colors.secondary})` }}>
              Available Commands:
            </div>
            {commands.map((cmd, index) => (
              <div key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>{cmd.icon}</span>
                <span style={{ fontWeight: 'bold' }}>{cmd.name}</span>
                <span style={{ marginLeft: '0.5rem', fontSize: '0.9rem', color: `hsl(${currentPalette.colors.secondary})` }}>
                  - {cmd.description}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommandTerminal;

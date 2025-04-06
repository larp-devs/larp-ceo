import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import CommandTerminal from './CommandTerminal';

interface CommandContextType {
  openCommandTerminal: () => void;
  closeCommandTerminal: () => void;
  isCommandTerminalOpen: boolean;
}

const CommandContext = createContext<CommandContextType | undefined>(undefined);

export const useCommand = () => {
  const context = useContext(CommandContext);
  if (!context) {
    throw new Error('useCommand must be used within a CommandProvider');
  }
  return context;
};

interface CommandProviderProps {
  children: ReactNode;
}

export const CommandProvider: React.FC<CommandProviderProps> = ({ children }) => {
  const [isCommandTerminalOpen, setIsCommandTerminalOpen] = useState(false);

  const openCommandTerminal = () => setIsCommandTerminalOpen(true);
  const closeCommandTerminal = () => setIsCommandTerminalOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Command+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <CommandContext.Provider value={{ openCommandTerminal, closeCommandTerminal, isCommandTerminalOpen }}>
      {children}
      <CommandTerminal isOpen={isCommandTerminalOpen} onClose={closeCommandTerminal} />
    </CommandContext.Provider>
  );
};

export default CommandProvider;

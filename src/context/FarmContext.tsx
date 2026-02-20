import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface FarmPersona {
  id: string;
  name: string;
  acres: number;
  multiplier: number;
}

export const farmPersonas: FarmPersona[] = [
  { id: 'small', name: 'Small Farmer (1 acre)', acres: 1, multiplier: 1 },
  { id: 'medium', name: 'Medium Farmer (5 acres)', acres: 5, multiplier: 5 },
  { id: 'cooperative', name: 'Cooperative Farm (50 acres)', acres: 50, multiplier: 50 },
];

interface FarmContextType {
  persona: FarmPersona;
  selectedPersona: FarmPersona;  // Alias for compatibility
  setPersona: (persona: FarmPersona) => void;
  beforeData: {
    fertilizerCost: number;
    yield: number;
    profit: number;
    risk: number;
    riskScore: number;  // Alias for compatibility
  };
  afterData: {
    fertilizerCost: number;
    yield: number;
    profit: number;
    risk: number;
    riskScore: number;  // Alias for compatibility
  };
}

const FarmContext = createContext<FarmContextType | undefined>(undefined);

export function FarmProvider({ children }: { children: ReactNode }) {
  const [persona, setPersona] = useState<FarmPersona>(farmPersonas[0]);

  const beforeData = {
    fertilizerCost: Math.round(5200 * persona.multiplier),
    yield: 3.8 * persona.multiplier,
    profit: Math.round(12500 * persona.multiplier),
    risk: 42,
    riskScore: 42,  // Alias for compatibility
  };

  const afterData = {
    fertilizerCost: Math.round(3600 * persona.multiplier),
    yield: 4.5 * persona.multiplier,
    profit: Math.round(22800 * persona.multiplier),
    risk: 28,
    riskScore: 28,  // Alias for compatibility
  };

  return (
    <FarmContext.Provider value={{ persona, selectedPersona: persona, setPersona, beforeData, afterData }}>
      {children}
    </FarmContext.Provider>
  );
}

export function useFarm() {
  const context = useContext(FarmContext);
  if (!context) {
    throw new Error('useFarm must be used within FarmProvider');
  }
  return context;
}

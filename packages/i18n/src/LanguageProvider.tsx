'use client';
import { createContext } from 'react';
import { LanguageProviderProps, LanguageProviderValue } from './types';

export const LanguageContext = createContext({} as LanguageProviderValue);

export const LanguageProvider = ({ children, lang }: LanguageProviderProps) => {
  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

"use client";
import { PropsWithChildren, createContext, useState } from "react";

export const LanguageContext = createContext({} as LanguageProviderValue);
export type LanguageProviderProps = PropsWithChildren & {
    lang: string
}
export type LanguageProviderValue = {
    lang: string
}
export const LanguageProvider = ({ children, lang }: LanguageProviderProps) => {
  return (
    <LanguageContext.Provider value={{lang}}>{children}</LanguageContext.Provider>
  );
};

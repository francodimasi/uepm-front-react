import { PropsWithChildren } from "react";

export type LanguageProviderValue = {
  lang: string;
};

export type LanguageProviderProps = PropsWithChildren & LanguageProviderValue;

export type Language = {
  iso: string;
  name: string;
};

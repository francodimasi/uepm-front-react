import { AxiosInstance } from 'axios';
import { Context, createContext } from 'react';
import { AxiosProviderValue } from './types';
export const AxiosContext: Context<{ axios: AxiosInstance }> = createContext(
  {} as AxiosProviderValue
);

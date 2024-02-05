'use client';

import { Context, Dispatch, createContext, useReducer } from 'react';
import { BrowserReducer } from './reducer';
import { BrowserState } from './types';
import { ContextLogger } from 'utils/logger';

export type BrowserContextModel = {
  browserState: BrowserState;
  browserDispatch: Dispatch<BrowserState & { type: string }>;
};

export const BrowserContext: Context<BrowserContextModel> = createContext(
  {} as BrowserContextModel,
);

export const BrowserProvider = (props: any) => {
  const initialState: BrowserState = {
    query: '',
  };

  const loggerReducer = ContextLogger(BrowserReducer);

  const [browserState, browserDispatch] = useReducer(
    loggerReducer,
    initialState,
  );
  const value = { browserState, browserDispatch };

  return (
    <BrowserContext.Provider value={value as any}>
      {props.children}
    </BrowserContext.Provider>
  );
};

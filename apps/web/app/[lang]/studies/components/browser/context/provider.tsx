'use client';

import { Context, Dispatch, createContext, useReducer } from 'react';
import { StudiesBrowserReducer } from './reducer';
import { StudiesBrowserState } from './types';
import { ContextLogger } from 'utils/logger';

type BrowserContextModel = {
  browserState: StudiesBrowserState;
  browserDispatch: Dispatch<Partial<StudiesBrowserState> & { type: string }>;
};

export const StudiesBrowserContext: Context<BrowserContextModel> =
  createContext({} as BrowserContextModel);

export const StudiesBrowserProvider = (props: any) => {
  const initialState: StudiesBrowserState = {
    selectedStudy: undefined,
    showStudyPreview: false,
    studies: [],
  };

  const loggerReducer = ContextLogger(StudiesBrowserReducer);

  const [browserState, browserDispatch] = useReducer(
    loggerReducer,
    initialState,
  );
  const value = { browserState, browserDispatch };

  return (
    <StudiesBrowserContext.Provider value={value as any}>
      {props.children}
    </StudiesBrowserContext.Provider>
  );
};

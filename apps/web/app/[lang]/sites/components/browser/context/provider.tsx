'use client';

import { Context, Dispatch, createContext, useReducer } from 'react';
import { SitesBrowserReducer } from './reducer';
import { SitesBrowserState } from './types';
import { ContextLogger } from 'utils/logger';

export type BrowserContextModel = {
  browserState: SitesBrowserState;
  browserDispatch: Dispatch<Partial<SitesBrowserState> & { type: string }>;
};

export const SitesBrowserContext: Context<BrowserContextModel> = createContext(
  {} as BrowserContextModel,
);

export const SitesBrowserProvider = (props: any) => {
  const initialState: SitesBrowserState = {
    showSitePreview: false,
    selectedSite: undefined,
    sites: [],
  };

  const loggerReducer = ContextLogger(SitesBrowserReducer);

  const [browserState, browserDispatch] = useReducer(
    loggerReducer,
    initialState,
  );
  const value = { browserState, browserDispatch };

  return (
    <SitesBrowserContext.Provider value={value as any}>
      {props.children}
    </SitesBrowserContext.Provider>
  );
};

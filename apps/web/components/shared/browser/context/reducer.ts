import { BrowserState } from './types';

export const browserActions = {
  SET_QUERY: 'setQuery',
};

/**
 * Manage browser state
 * @param state
 * @param action
 * @returns new state
 */
export const BrowserReducer = (
  state: BrowserState,
  action: BrowserState & { type: string },
) => {
  switch (action.type) {
    case browserActions.SET_QUERY: {
      return {
        ...state,
        query: action.query,
      };
    }
  }
  return state;
};

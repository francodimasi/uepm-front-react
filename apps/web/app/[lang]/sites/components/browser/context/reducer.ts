import { SitesBrowserState } from './types';

export const sitesBrowserActions = {
  SET_SELECTED_SITE: 'setSelectedSite',
  SET_SITES: 'setSites',
};

/**
 * Manage sites browser state
 * @param state
 * @param action
 * @returns new state
 */
export const SitesBrowserReducer = (
  state: SitesBrowserState,
  action: SitesBrowserState & { type: string },
) => {
  switch (action.type) {
    case sitesBrowserActions.SET_SELECTED_SITE: {
      return {
        ...state,
        selectedSite: action.selectedSite,
      };
    }
    case sitesBrowserActions.SET_SITES: {
      return {
        ...state,
        sites: action.sites,
      };
    }
  }
  return state;
};

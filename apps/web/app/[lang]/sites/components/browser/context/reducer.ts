import { SitesBrowserState } from './types';

export const sitesBrowserActions = {
  CLOSE_SITE_PREVIEW: 'closeSitePreview',
  SET_SELECTED_SITE: 'setSelectedSite',
  SET_SELECTED_SITE_MODAL: 'setSelectedSiteModal',
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
        showSitePreview: true,
      };
    }
    case sitesBrowserActions.SET_SELECTED_SITE_MODAL: {
      return {
        ...state,
        selectedSite: action.selectedSite,
        showSitePreviewModal: true,
      };
    }
    case sitesBrowserActions.SET_SITES: {
      return {
        ...state,
        sites: action.sites,
      };
    }
    case sitesBrowserActions.CLOSE_SITE_PREVIEW: {
      return {
        ...state,
        showSitePreview: false,
        showSitePreviewModal: false,
      };
    }
  }
  return state;
};

import { StudiesBrowserState } from './types';

export const studiesBrowserActions = {
  SET_SELECTED_STUDY: 'setSelectedStudy',
  SET_STUDIES: 'setStudies',
  CLOSE_STUDY_PREVIEW: 'closeStudyPreview',
};

/**
 * Manage sites browser state
 * @param state
 * @param action
 * @returns new state
 */
export const StudiesBrowserReducer = (
  state: StudiesBrowserState,
  action: StudiesBrowserState & { type: string },
) => {
  switch (action.type) {
    case studiesBrowserActions.SET_SELECTED_STUDY: {
      return {
        ...state,
        selectedStudy: action.selectedStudy,
        showStudyPreview: true,
      };
    }
    case studiesBrowserActions.SET_STUDIES: {
      return {
        ...state,
        studies: action.studies,
      };
    }
    case studiesBrowserActions.CLOSE_STUDY_PREVIEW: {
      return {
        ...state,
        showStudyPreview: false,
      };
    }
  }
  return state;
};

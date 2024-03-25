import { useContext } from 'react';
import { StudiesBrowserContext } from './context/provider';
import useTailwindBreakpoints from 'ui/hooks/useTailwindBreakpoints';
import { Modal } from 'ui/core';
import { LocaleProps } from 'intl';
import { StudyPreviewProps } from './StudiesBrowser.types';
import { studiesBrowserActions } from './context/reducer';
import { StudyPreviewContent } from '../studyPreviewContent';

export const StudyPreview: React.FC<StudyPreviewProps & LocaleProps> = ({
  locale,
}) => {
  const { browserState, browserDispatch } = useContext(StudiesBrowserContext);
  const { currentBreakpoint, isMobile } = useTailwindBreakpoints();

  const handleOnClose = () => {
    browserDispatch({ type: studiesBrowserActions.CLOSE_STUDY_PREVIEW });
  };

  return (
    <>
      {browserState.selectedStudy && browserState.showStudyPreview && (
        <>
          {(isMobile || currentBreakpoint === 'md') && (
            <div className="block lg:hidden">
              <Modal
                open={browserState.showStudyPreview}
                onClose={handleOnClose}
                className="z-20 rounded-xl mx-2 text-left max-h-[80vh]"
              >
                <StudyPreviewContent
                  study={browserState.selectedStudy}
                  locale={locale}
                />
              </Modal>
            </div>
          )}
        </>
      )}
    </>
  );
};

import { Card, Modal } from 'ui/core';
import { SitePreviewContent } from '../sitePreviewContent';
import { SitesBrowserContext } from './context/provider';
import { useContext } from 'react';
import { sitesBrowserActions } from './context/reducer';
import useTailwindBreakpoints from 'ui/hooks/useTailwindBreakpoints';

export const SitePreview = () => {
  const { browserState, browserDispatch } = useContext(SitesBrowserContext);
  const { currentBreakpoint, isMobile } = useTailwindBreakpoints();

  const handleOnClose = () => {
    browserDispatch({ type: sitesBrowserActions.CLOSE_SITE_PREVIEW });
  };

  const locale = 'es';
  return (
    <>
      {browserState.selectedSite && browserState.showSitePreview && (
        <>
          {(isMobile || currentBreakpoint === 'md') && (
            <div className="block lg:hidden">
              <Modal
                open={browserState.showSitePreview}
                onClose={handleOnClose}
                className="z-20 rounded-xl mx-2 text-left"
              >
                <SitePreviewContent
                  site={browserState.selectedSite}
                  locale={locale}
                />
              </Modal>
            </div>
          )}
          <div className="hidden lg:h-[80vh] lg:block m-4 lg:row-start-1 lg:col-start-2 lg:col-span-1 z-20 overflow-y-auto">
            <Card className="flex flex-col gap-4 items-start justify-normal bg-white !m-0 !p-4">
              <SitePreviewContent
                site={browserState.selectedSite}
                onClose={handleOnClose}
              />
            </Card>
          </div>
        </>
      )}
    </>
  );
};

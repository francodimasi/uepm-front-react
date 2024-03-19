import { Card, Modal } from 'ui/core';
import { SitePreviewCard } from '../sitePreviewCard';
import { SitesBrowserContext } from './context/provider';
import { useContext } from 'react';
import { sitesBrowserActions } from './context/reducer';
import useTailwindBreakpoints from 'ui/hooks/useTailwindBreakpoints';

export const SitePreview = () => {
  const { browserState, browserDispatch } = useContext(SitesBrowserContext);
  const { currentBreakpoint, isMobile } = useTailwindBreakpoints();

  const handleOnClosePreview = () => {
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
                onClose={handleOnClosePreview}
                className="z-20 rounded-xl mx-2 text-left"
              >
                <SitePreviewCard
                  site={browserState.selectedSite}
                  onClose={handleOnClosePreview}
                  locale={locale}
                />
              </Modal>
            </div>
          )}
          <div className="hidden lg:h-[80vh] lg:block m-4 lg:row-start-1 lg:col-start-2 lg:col-span-1 z-20 overflow-y-auto">
            <Card className="flex flex-col gap-4 items-start justify-normal bg-white !m-0 !p-4">
              <SitePreviewCard
                site={browserState.selectedSite}
                onClose={handleOnClosePreview}
              />
            </Card>
          </div>
        </>
      )}
    </>
  );
};

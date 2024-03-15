'use client';

import { useContext } from 'react';
import { SitesBrowserProps } from './SitesBrowser.types';
import { useTranslations, LocaleProps } from 'intl';
import { SitesBrowserContext } from './context/provider';
import { sitesBrowserActions } from './context/reducer';
import { SiteItem } from '../siteItem';
import {
  Algolia,
  AlgoliaInfiniteHits,
  AlgoliaSearch,
  AlgoliaFacetDropdown,
  AlgoliaRefinementList,
  AlgoliaSearchStats,
} from 'ui/components';
import dynamic from 'next/dynamic';
import { SitePreviewCard, SitePreviewCardMobile } from '../sitePreviewCard';
import { Modal } from 'ui/core';

const AlgoliaMap = dynamic(() => import('ui/components/algolia/map/Map'), {
  ssr: false,
});

export const SitesBrowser = ({
  apiKey,
  appId,
  indexName,
  locale,
}: SitesBrowserProps & LocaleProps) => {
  const t = useTranslations('sites.browser');

  const {
    browserState: {
      sites,
      selectedSite,
      showSitePreview,
      showSitePreviewModal,
    },
    browserDispatch,
  } = useContext(SitesBrowserContext);

  const handleHits = (hits: any[]) => {
    if (JSON.stringify(hits) === JSON.stringify(sites)) return;
    browserDispatch({ type: sitesBrowserActions.SET_SITES, sites: hits });
  };

  const handleOnClosePreview = () => {
    browserDispatch({ type: sitesBrowserActions.CLOSE_SITE_PREVIEW });
  };

  return (
    <Algolia
      appId={appId}
      apiKey={apiKey}
      indexName={indexName}
      className="sm:h-screen"
    >
      {selectedSite && showSitePreviewModal && (
        <Modal
          open={showSitePreviewModal}
          onClose={handleOnClosePreview}
          className="z-20 rounded-xl mx-2 text-left"
        >
          <SitePreviewCardMobile
            site={selectedSite}
            onClose={handleOnClosePreview}
            locale={locale}
          />
        </Modal>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="w-full sm:h-[80vh] col-span-1 lg:col-span-1 xl:col-span-1">
          <div className="w-full col-span-1 lg:col-span-1 xl:col-span-1 grid gap-1 mb-2">
            <AlgoliaSearch
              placeholder={t('placeholder')}
              className="sm:h-auto searchbox"
            >
              <div className="inline-flex justify-between w-full">
                <AlgoliaFacetDropdown
                  facetAttribute="country"
                  facetText={t('selectCountry')}
                >
                  <AlgoliaRefinementList
                    attribute="country"
                    escapeFacetValues={true}
                    searchable={false}
                    classNames={{
                      list: 'space-y-2 w-full',
                      label:
                        'relative flex h-6 flex items-center w-full cursor-pointer',
                      checkbox:
                        'h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600',
                      labelText: 'ml-2 text-sm leading-6 font-medium text-dark',
                      count: 'font-normal text-xs ms-1 text-gray-dark',
                    }}
                  />
                </AlgoliaFacetDropdown>
                <AlgoliaSearchStats className="hidden sm:block text-dark text-base text-end font-normal font-['DMSans'] leading-normal me-5 mb-2" />
              </div>
            </AlgoliaSearch>
          </div>
          <div className="block sm:hidden col-span-1 lg:col-span-2">
            <AlgoliaMap
              className="h-[400px] sm:h-full w-full relative"
              center={
                selectedSite
                  ? [selectedSite._geoloc.lat, selectedSite._geoloc.lng]
                  : undefined
              }
              zoom={12}
              minZoom={4}
              scrollWheelZoom={true}
            />
          </div>

          <div className="block sm:hidden w-full sm:h-5/6 relative col-span-1 sm:overflow-y-scroll sm:overflow-auto">
            <AlgoliaInfiniteHits
              className="relative"
              hit={SiteItem}
              browserDispatchAction={
                sitesBrowserActions.SET_SELECTED_SITE_MODAL
              }
              onChange={handleHits}
            />
          </div>

          <div className="hidden sm:block w-full sm:h-5/6 relative col-span-1 sm:overflow-y-scroll sm:overflow-auto">
            <AlgoliaInfiniteHits
              className="relative"
              hit={SiteItem}
              browserDispatchAction={sitesBrowserActions.SET_SELECTED_SITE}
              onChange={handleHits}
            />
          </div>
        </div>
        {selectedSite && showSitePreview && (
          <div className="hidden h-3/4 sm:block m-4 sm:row-start-1 sm:col-start-2 sm:col-span-1 z-20 overflow-y-scroll">
            <SitePreviewCard
              site={selectedSite}
              onClose={handleOnClosePreview}
            ></SitePreviewCard>
          </div>
        )}
        <div className="hidden sm:block sm:row-start-1 sm:col-start-2 sm:col-end-4 z-10">
          <AlgoliaMap
            className="h-full z-10 w-full relative"
            center={
              selectedSite
                ? [selectedSite._geoloc.lat, selectedSite._geoloc.lng]
                : undefined
            }
            zoom={12}
            minZoom={4}
            scrollWheelZoom={true}
          />
        </div>
      </div>
    </Algolia>
  );
};

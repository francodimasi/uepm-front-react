'use client';

import { useContext, useState } from 'react';
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
}: SitesBrowserProps & LocaleProps) => {
  const t = useTranslations('sites.browser');

  const [modalOpen, setModalOpen] = useState(false);

  const {
    browserState: { sites, selectedSite },
    browserDispatch,
  } = useContext(SitesBrowserContext);

  const handleHits = (hits: any[]) => {
    if (JSON.stringify(hits) === JSON.stringify(sites)) return;
    browserDispatch({ type: sitesBrowserActions.SET_SITES, sites: hits });
  };

  const handleOnCloseModal = () => {
    setModalOpen(false);
  };

  const handleOnClick = () => {
    setModalOpen(true);
  };

  const handleOnClosePreview = () => {
    browserDispatch({
      type: sitesBrowserActions.SET_SELECTED_SITE,
      selectedSite: undefined,
    });
  };

  return (
    <Algolia
      appId={appId}
      apiKey={apiKey}
      indexName={indexName}
      className="sm:h-screen"
    >
      <span onClick={handleOnClick}>CLICK TO OPEN MODAL </span>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {selectedSite && (
          <Modal open={modalOpen} onClose={handleOnCloseModal} className="z-20">
            <SitePreviewCardMobile
              site={selectedSite}
              onClose={handleOnCloseModal}
            />
          </Modal>
        )}

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

          <div className="w-full sm:h-5/6 relative col-span-1 lg:col-span-1 xl:col-span-1 sm:overflow-y-scroll sm:overflow-auto">
            <AlgoliaInfiniteHits
              className="relative"
              hit={SiteItem}
              onChange={handleHits}
            />
          </div>
        </div>
        {selectedSite && (
          <div className="hidden sm:h-[80vh] sm:block m-4 sm:row-start-1 sm:col-start-2 sm:col-span-1 z-20">
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

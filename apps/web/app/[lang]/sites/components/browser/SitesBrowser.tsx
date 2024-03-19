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
import { SitePreview } from './SitePreview';

const AlgoliaMap = dynamic(() => import('ui/components/algolia/map/Map'), {
  ssr: false,
});

export const SitesBrowser = ({
  apiKey,
  appId,
  indexName,
}: SitesBrowserProps & LocaleProps) => {
  const t = useTranslations('sites.browser');

  const { browserState, browserDispatch } = useContext(SitesBrowserContext);

  const handleHits = (hits: any[]) => {
    if (JSON.stringify(hits) === JSON.stringify(browserState.sites)) return;
    browserDispatch({ type: sitesBrowserActions.SET_SITES, sites: hits });
  };

  return (
    <Algolia
      appId={appId}
      apiKey={apiKey}
      indexName={indexName}
      className="sm:h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="w-full lg:h-[80vh] col-span-1">
          <div className="w-full col-span-1 grid gap-1 mb-2">
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
                <AlgoliaSearchStats className="block text-dark text-base text-end font-normal font-['DMSans'] leading-normal me-5 mb-2" />
              </div>
            </AlgoliaSearch>
          </div>
          <div className="block lg:hidden col-span-1 lg:col-span-2">
            <AlgoliaMap
              className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-full w-full relative"
              center={
                browserState.selectedSite
                  ? [
                      browserState.selectedSite._geoloc.lat,
                      browserState.selectedSite._geoloc.lng,
                    ]
                  : undefined
              }
              zoom={12}
              minZoom={4}
              scrollWheelZoom={true}
            />
          </div>

          <div className="block w-full lg:h-5/6 relative col-span-1 lg:overflow-y-scroll">
            <AlgoliaInfiniteHits
              className="relative"
              hit={SiteItem}
              onClick={(site) =>
                browserDispatch({
                  type: sitesBrowserActions.SET_SELECTED_SITE,
                  selectedSite: site,
                })
              }
              onChange={handleHits}
            />
          </div>
        </div>
        <SitePreview />

        <div className="hidden lg:block lg:row-start-1 lg:col-start-2 lg:col-end-4 z-10">
          <AlgoliaMap
            className="h-full z-10 w-full relative"
            center={
              browserState.selectedSite
                ? [
                    browserState.selectedSite._geoloc.lat,
                    browserState.selectedSite._geoloc.lng,
                  ]
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

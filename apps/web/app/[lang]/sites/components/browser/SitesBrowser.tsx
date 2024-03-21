'use client';

import { useContext } from 'react';
import dynamic from 'next/dynamic';
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

const AlgoliaMap = dynamic(
  () => import('ui/components/algolia/map').then((module) => module.AlgoliaMap),
  {
    ssr: false,
  },
);

export const SitesBrowser = ({
  apiKey,
  appId,
  indexName,
}: SitesBrowserProps & LocaleProps) => {
  const t = useTranslations('sites.browser');

  const {
    browserState: { sites },
    browserDispatch,
  } = useContext(SitesBrowserContext);

  const handleHits = (hits: any[]) => {
    if (JSON.stringify(hits) === JSON.stringify(sites)) return;
    browserDispatch({ type: sitesBrowserActions.SET_SITES, sites: hits });
  };

  return (
    <Algolia
      appId={appId}
      apiKey={apiKey}
      indexName={indexName}
      className="sm:h-screen"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="sm:h-[80vh] col-span-1 lg:col-span-1">
          <div className="col-span-1 lg:col-span-1 grid gap-1 mb-2">
            <AlgoliaSearch
              placeholder={t('placeholder')}
              className="sm:h-auto searchbox"
            >
              <div className="flex items-center justify-between w-full">
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
                        'h-4 w-4 cursor-pointer rounded border-gray-300 text-primary focus:ring-0 focus:ring-offset-0',
                      labelText: 'ml-2 text-sm leading-6 font-medium text-dark',
                      count: 'font-normal text-xs ms-1 text-gray-dark',
                    }}
                  />
                </AlgoliaFacetDropdown>
                <AlgoliaSearchStats className="hidden sm:flex text-dark text-sm text-end font-normal font-['DMSans'] leading-normal me-5" />
              </div>
            </AlgoliaSearch>
          </div>
          <div className="block sm:hidden col-span-1 lg:col-span-2">
            <AlgoliaMap
              className="h-[400px] sm:h-full w-full relative"
              center={[-34.61, -58.37]}
              zoom={12}
              minZoom={2}
              maxZoom={16}
              scrollWheelZoom={true}
              clusters
            />
          </div>
          <div className="w-full sm:h-5/6 relative col-span-1 lg:col-span-1 sm:overflow-y-scroll sm:overflow-auto">
            <AlgoliaInfiniteHits
              className="relative"
              hit={SiteItem}
              onChange={handleHits}
            />
          </div>
        </div>
        <div className="hidden sm:h-[80vh] sm:block col-span-1 lg:col-span-2">
          <AlgoliaMap
            className="h-full z-10 w-full relative"
            center={[-34.61, -58.37]}
            zoom={12}
            minZoom={2}
            maxZoom={16}
            scrollWheelZoom={true}
            clusters
          />
        </div>
      </div>
    </Algolia>
  );
};

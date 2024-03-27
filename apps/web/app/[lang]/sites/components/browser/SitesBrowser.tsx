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
import { SelectedSite } from '../selectedSite';
import { AlgoliaSite } from '@models/site.types';

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
  locale,
}: SitesBrowserProps & LocaleProps) => {
  const t = useTranslations('sites.browser');

  const {
    browserState: { selectedSite, showSitePreview },
    browserDispatch,
  } = useContext(SitesBrowserContext);

  return (
    <Algolia
      appId={appId}
      apiKey={apiKey}
      indexName={indexName}
      className="sm:h-screen"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:h-[80vh] col-span-1">
          <div className="col-span-1 grid gap-1 mb-2">
            <AlgoliaSearch
              placeholder={t('placeholder')}
              delay={500}
              className="sm:h-auto searchbox"
            />
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
              <AlgoliaSearchStats className="block text-dark text-base text-end font-normal font-['DMSans'] leading-normal me-5 mb-2" />
            </div>
          </div>
          <div className="flex lg:hidden col-span-1 lg:col-span-2">
            <AlgoliaMap
              className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-full w-full relative"
              center={
                selectedSite
                  ? [selectedSite._geoloc.lat, selectedSite._geoloc.lng]
                  : undefined
              }
              zoom={12}
              minZoom={2}
              maxZoom={16}
              scrollWheelZoom={true}
              clusters
            />
          </div>
          <div className="w-full sm:h-5/6 relative col-span-1 lg:col-span-1 sm:overflow-y-scroll sm:overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <AlgoliaInfiniteHits
              className="relative"
              hit={SiteItem}
              onClick={(site: AlgoliaSite) =>
                browserDispatch({
                  type: sitesBrowserActions.SET_SELECTED_SITE,
                  selectedSite: site,
                })
              }
            />
          </div>
        </div>
        {selectedSite && showSitePreview && <SelectedSite locale={locale} />}
        <div className="hidden lg:block lg:row-start-1 lg:col-start-2 lg:col-end-4 z-10 relative">
          <AlgoliaMap
            className="h-full z-10 w-full relative"
            center={
              selectedSite
                ? [selectedSite._geoloc.lat, selectedSite._geoloc.lng]
                : undefined
            }
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

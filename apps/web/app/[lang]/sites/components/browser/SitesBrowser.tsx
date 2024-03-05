'use client';

import { useContext } from 'react';
import { SitesBrowserProps } from './SitesBrowser.types';
import { useTranslations, LocaleProps } from 'intl';
import { SitesBrowserContext } from './context/provider';
import { sitesBrowserActions } from './context/reducer';
import { SiteItem } from '../siteItem';
import { Algolia, AlgoliaHits, AlgoliaSearch } from 'ui/components';
import dynamic from 'next/dynamic';

const AlgoliaMap = dynamic(() => import('ui/components/algolia/map/Map'), {
  ssr: false,
});

export const SitesBrowser = ({
  apiKey,
  appId,
  indexName
} : SitesBrowserProps & LocaleProps ) => {
  const t = useTranslations('sites');

  const {
    browserState: { sites },
    browserDispatch,
  } = useContext(SitesBrowserContext);

  const handleHits = (hits: any[]) => {
    if (JSON.stringify(hits) === JSON.stringify(sites)) return;
    browserDispatch({ type: sitesBrowserActions.SET_SITES, sites: hits });
  };

  return (
    <Algolia appId={appId} apiKey={apiKey} indexName={indexName}>
      <div className="h-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="w-full h-full col-span-1 lg:col-span-1 xl:col-span-1">
          <AlgoliaSearch
            placeholder={t('browser.placeholder')}
            className="h-full searchbox"

          />
          <div className="block sm:hidden col-span-1 lg:col-span-2">
            <AlgoliaMap className="h-[500px] sm:h-full w-full relative" />
          </div>
          
          <div className="w-full h-full sm:h-[1000px] relative col-span-1 lg:col-span-1 xl:col-span-1 sm:overflow-y-scroll sm:overflow-auto">
            <AlgoliaHits
              className="sm:h-[500px] relative"
              hit={SiteItem}
              onChange={handleHits}
            />
          </div>
        </div>
        <div className="hidden sm:block col-span-1 lg:col-span-2">
          <AlgoliaMap className="h-full z-10 w-full relative" />
        </div>
      </div>
    </Algolia>
  );
};

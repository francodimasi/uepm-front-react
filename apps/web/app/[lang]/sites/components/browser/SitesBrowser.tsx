'use client';

import { useContext } from 'react';
import { SitesBrowserProps } from './SitesBrowser.types';
import { useTranslations } from 'intl';
import { SitesBrowserContext } from './context/provider';
import { sitesBrowserActions } from './context/reducer';
import { SiteItem } from '../siteItem';
import { Algolia, AlgoliaHits, AlgoliaSearch } from 'ui/components';
import dynamic from 'next/dynamic';

const AlgoliaMap = dynamic (() => import('ui/components/algolia/map/Map'), { ssr: false})


export const SitesBrowser = ({
  apiKey,
  appId,
  indexName,
}: SitesBrowserProps) => {
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
      <div
        className="flex max-h-[1000px] h-full grid grid-cols-1 lg:grid-cols-3 gap-5"
        style={{ border: '1px solid black' }}
      >
        <div
          className="w-full col-span-1 lg:col-span-1 xl:col-span-1"
          style={{ border: '1px solid red' }}
        >
          <div
            className="w-full col-span-1 lg:col-span-1 xl:col-span-1"
            style={{ border: '1px solid pink' }}
          >
            <AlgoliaSearch
              placeholder={t('browser.placeholder')}
              className="h-full searchbox"
            />
          </div>
          <div
            className="block sm:hidden col-span-1 lg:col-span-2"
            style={{ border: '1px solid green' }}
          >
            <AlgoliaMap className="h-[1000px] w-full relative" />
          </div>
          <div
            className="w-full col-span-1 lg:col-span-1 xl:col-span-1"
            style={{ border: '1px solid gray' }}
          >
            Order
          </div>
          <div
            className="w-full h-[1000px] relative col-span-1 lg:col-span-1 xl:col-span-1 overflow-y-scroll"
            style={{ border: '1px solid blue' }}
          >
            <AlgoliaHits
              className="h-[1000px] relative"
              hit={SiteItem}
              onChange={handleHits}
            />
          </div>
        </div>
        <div
          className="hidden sm:block col-span-1 lg:col-span-2"
          style={{ border: '1px solid green' }}
        >
          <AlgoliaMap className="h-[1000px] z-10 w-full relative" />
        </div>
      </div>
    </Algolia>
  );
};

'use client';

import { Stats } from 'react-instantsearch';
import { useTranslations } from 'intl';
import { AlgoliaSearchStatsProps } from './SearchStats.types';

export function AlgoliaSearchStats({ className }: AlgoliaSearchStatsProps) {
  const t = useTranslations('sites.browser');
  return (
    <Stats
      className={className}
      translations={{
        rootElementText({ nbHits }) {
          return nbHits > 0
            ? nbHits > 1
              ? `${t('found')} ${nbHits!.toLocaleString()} ${t('sites')}`
              : `${t('found')} ${nbHits!.toLocaleString()} ${t('site')} `
            : t('notFound');
        },
      }}
    />
  );
}

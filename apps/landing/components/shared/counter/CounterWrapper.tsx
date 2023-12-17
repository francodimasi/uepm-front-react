'use client';

import { useCallback, useContext, useMemo } from 'react';
import { SitesContext } from '../../sites/SitesProvider';
import { Counter } from './Counter';
import { CounterItem } from './types/counter.type';
import { Site } from '@components/sites/types/sites.type';
import { LanguageContext, useClientTranslation } from 'i18n';

export const CounterWrapper = ({
  name,
  cities,
  clinics,
  specialists,
  specialities,
}: Site) => {
  const { selected } = useContext(SitesContext);
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: 'sites.counter' });

  const counterData: CounterItem[] = useMemo(
    () => [
      {
        label: t('specialists'),
        value: specialists,
      },
      {
        label: t('clinics'),
        value: clinics,
      },
      {
        label: t('cities'),
        value: cities,
      },
      {
        label: t('specialities'),
        value: specialities,
      },
    ],
    [cities, clinics, specialists, specialities],
  );

  const CounterList = useCallback(
    () => (
      <>
        <h3 className="text-light font-bold text-base sm:text-2xl">{name}</h3>
        <div className="grid  grid-cols-2 sm:grid-cols-4 mt-2.5 sm:mt-10">
          {counterData.map((item, index) => (
            <div key={index} className="my-5 sm:my-0 col-span-1">
              <Counter {...item} />
            </div>
          ))}
        </div>
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected],
  );

  return <CounterList />;
};

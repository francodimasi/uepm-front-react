'use client';

import { SearchBox, Stats } from 'react-instantsearch';
import { GlassIcon } from 'ui/core';
import { AlgoliaSearchProps } from './Search.types';
import { useTranslations, LocaleProps } from 'intl';

export const AlgoliaSearch = ({
  placeholder = '',
}: AlgoliaSearchProps & LocaleProps) => {
  const t = useTranslations('sites.browser');

  return (
    <div className="w-full col-span-1 lg:col-span-1 xl:col-span-1 grid gap-1 mb-2">
      <SearchBox
        placeholder={placeholder}
        className="searchbox "
        classNames={{
          root: 'w-full h-9 border-b border-dark border-opacity-30 mb-3',
          submit: 'appearence-none absolute',
          submitIcon:
            'w-6 h-6 absolute cursor-pointer appearance-none justify-content-start',
          form: 'h-7 justify-between items-center flex',
          input:
            'w-full ms-6 border-0 bg-transparent hover:apperance-none relative placeholder:opacity-50 focus:ring-0 py-5 sm:pt-3 sm:pb-3 px-3 font-["DMSans"] font-semibold text-sm sm:text-base text-start focus:placeholder:opacity-0',
        }}
        submitIconComponent={() => <GlassIcon />}
      />
      <Stats
        className="hidden sm:block text-dark text-base text-end font-normal font-['DMSans'] leading-normal me-5 mb-2"
        translations={{
          rootElementText({ nbHits }) {
            return nbHits > 0
              ? nbHits > 1
                ? `${t('found')} ${nbHits!.toLocaleString()} ${t('sites')}`
                : `${t('found')}  ${nbHits!.toLocaleString()} ${t('site')} `
              : t('notFound');
          },
        }}
      />
    </div>
  );
};

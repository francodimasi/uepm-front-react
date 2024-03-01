'use client';

import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { Algolia, AlgoliaAutocomplete } from 'ui/components';
import { BrowserProps } from './Browser.types';
import { useTranslations } from 'intl';
import { Button, P1 } from 'ui/core';
import { BrowserContext } from './context/provider';
import { browserActions } from './context/reducer';
import { twMerge } from 'tailwind-merge';
import { QueryType } from './context/types';

export const Browser = ({
  apiKey,
  appId,
  indexName,
  title,
  subtitle,
  placeholder,
  className,
  locale,
}: BrowserProps) => {
  const t = useTranslations('actions');
  const router = useRouter();

  const {
    browserState: { query, format },
    browserDispatch,
  } = useContext(BrowserContext);

  useEffect(() => {
    if (query !== '') {
      handleQuery(query, format);
    }
  }, [query, format]);

  const updateQuery = (query: string, format: QueryType) => {
    browserDispatch({ type: browserActions.SET_QUERY, query, format });
  };

  const handleSearch = () => {
    const search = (document.querySelector('.aa-Input') as any)?.value;
    router.push(
      `${process.env.NEXT_PUBLIC_PRODUCT_PATIENTS}ensayos?query=${search}&page=1`,
    );
  };

  const handleQuery = (query: string, format: QueryType) => {
    switch (format) {
      case 'suggestion':
        router.push(
          `${process.env.NEXT_PUBLIC_PRODUCT_PATIENTS}ensayos?query=&conditions%5B%5D=${query}&page=1&lang=${locale}`,
        );
        break;
      default:
        router.push(
          `${process.env.NEXT_PUBLIC_PRODUCT_PATIENTS}ensayos?query=${query}&page=1`,
        );
    }
  };

  return (
    <div
      className={twMerge(
        `flex flex-col flex-1 justify-between md:pe-8 ${className}`,
      )}
    >
      <div className="pb-4 flex flex-col md:hidden">
        <P1 className="font-semibold !my-0 !text-xl pe-1">{title}</P1>
        <P1 className="!my-0">{subtitle}</P1>
      </div>
      <div className="pb-4 hidden md:flex">
        <P1 className="font-semibold pe-1">{title}</P1>
        <P1>{subtitle}</P1>
      </div>
      <div className="flex">
        <Algolia
          appId={appId}
          apiKey={apiKey}
          indexName={`${indexName}${locale}`}
        >
          <AlgoliaAutocomplete
            appId={appId}
            apiKey={apiKey}
            indexName={`${indexName}${locale}`}
            placeholder={placeholder}
            initialValue={query}
            onQuery={updateQuery}
          />
        </Algolia>
        <Button
          color="dark"
          shape="round"
          size="sm"
          className="px-8 hidden md:flex ms-4"
          onClick={handleSearch}
        >
          {t('search')}
        </Button>
      </div>
    </div>
  );
};

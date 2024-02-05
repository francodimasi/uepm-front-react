'use client';

import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { Algolia } from 'ui/components';
import { API_KEY, APP_ID, INDEX_NAME } from './constants';
import { BrowserProps } from './Browser.types';
import { useTranslations } from 'intl';
import { Button, P1 } from 'ui/core';
import { BrowserContext } from './context/provider';
import { browserActions } from './context/reducer';
import { twMerge } from 'tailwind-merge';

export const Browser = ({
  title,
  subtitle,
  placeholder,
  className,
  locale,
}: BrowserProps) => {
  const t = useTranslations('actions');
  const router = useRouter();

  const {
    browserState: { query },
    browserDispatch,
  } = useContext(BrowserContext);

  useEffect(() => {
    if (query !== '') {
      handleQuery(query);
    }
  }, [query]);

  const updateQuery = (query: string) => {
    browserDispatch({ type: browserActions.SET_QUERY, query });
  };

  const handleSearch = () => {
    const search = (document.querySelector('.aa-Input') as any)?.value;
    router.push(
      `${process.env.NEXT_PUBLIC_PRODUCT_PATIENTS}ensayos?query=${search}&page=1`,
    );
  };

  const handleQuery = (query: string) => {
    router.push(
      `${process.env.NEXT_PUBLIC_PRODUCT_PATIENTS}ensayos?query=&conditions%5B%5D=${query}&page=1&lang=${locale}`,
    );
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
          appId={APP_ID}
          apiKey={API_KEY}
          indexName={`${INDEX_NAME}${locale}`}
          placeholder={placeholder}
          initialValue={query}
          onQuery={updateQuery}
        />
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

'use client';

import { MutableRefObject, useCallback, useRef } from 'react';
import { SearchBox } from 'react-instantsearch';
import { GlassIcon } from 'ui/core';
import { AlgoliaSearchProps } from './Search.types';
import { LocaleProps } from 'intl';

export const AlgoliaSearch = ({
  placeholder = '',
  delay,
}: AlgoliaSearchProps & LocaleProps) => {
  const timerId: MutableRefObject<NodeJS.Timeout | undefined> = useRef();

  const queryHook = useCallback(
    (query: string, search: Function) => {
      if (delay) {
        if (timerId.current) {
          clearTimeout(timerId.current);
        }
        timerId.current = setTimeout(() => search(query), delay);
      } else {
        search(query);
      }
    },
    [delay],
  );

  return (
    <SearchBox
      placeholder={placeholder}
      className="searchbox"
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
      queryHook={queryHook}
    />
  );
};

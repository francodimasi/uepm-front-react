'use client';

import { SearchBox } from 'react-instantsearch';
import { GlassIcon } from 'ui/core';
import { AlgoliaSearchProps } from './Search.types';
import { LocaleProps } from 'intl';

export const AlgoliaSearch = ({
  placeholder = '',
  children,

}: AlgoliaSearchProps & LocaleProps) => {

  return (
    <>
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
        onChangeCapture={() => {}}
      />
      {children}
    </>
  );
};

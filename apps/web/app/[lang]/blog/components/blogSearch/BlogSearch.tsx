import { useEffect, useRef, useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { SearchNormalIcon } from 'ui/core';
import { useRouter } from '@intl/navigation';
import { defaultLocale, LocaleProps } from 'intl';

export const BlogSearch = ({ locale = defaultLocale }: LocaleProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>();
  const ref = useDetectClickOutside({
    //TODO manejar evento nativos de react
    onTriggered: () => setOpen(false),
  });
  const router = useRouter();

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const handleSubmit = () => {
    if (search !== '') {
      router.push(
        {
          pathname: '/blog/search/[query]',
          params: { query: search },
        },
        {
          locale,
        },
      );
    }
  };
  // TODO unificar todo
  return (
    <div
      ref={ref}
      className=" pb-0 px-5 mb-0 border-b border-b-gray-light justify-center items-center inline-flex"
      onKeyDown={handleKeyPress}
    >
      {open ? (
        <>
          <button
            className="w-6 h-6 relative cursor-pointer z-40 mb-2"
            onClick={handleSubmit}
          >
            <SearchNormalIcon />
          </button>

          <div className="absolute top-0 left-0 z-20 w-[97%] border-b-1 border-gray-medium">
            <input
              ref={inputRef}
              className="w-full bg-white outline-none pb-3 px-3 font-['DMSans'] font-normal text-normal text-start"
              placeholder="Ingrese la Búsqueda..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </>
      ) : (
        <div
          className="w-6 h-6 relative cursor-pointer mb-2"
          onClick={() => setOpen(true)}
        >
          <SearchNormalIcon />
        </div>
      )}
    </div>
  );
};

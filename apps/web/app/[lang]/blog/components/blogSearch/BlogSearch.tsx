import { useEffect, useRef, useState } from 'react';
import { GlassIcon } from 'ui/core';
import { useRouter } from '@intl/navigation';
import { defaultLocale, LocaleProps, useTranslations } from 'intl';

export const BlogSearch = ({ locale = defaultLocale }: LocaleProps) => {
  const t = useTranslations('actions');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>();
  const router = useRouter();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

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
  return (
    <div
      ref={ref}
      className="sm:mt-0 mt-0.5 pb-0 px-5 mb-0 justify-center items-center inline-flex"
      onKeyDown={handleKeyPress}
    >
      {open ? (
        <>
          <button
            className="w-6 h-6 relative cursor-pointer z-40"
            onClick={handleSubmit}
          >
            <GlassIcon />
          </button>

          <div className="absolute top-0 left-0 z-20 w-full h-full">
            <input
              ref={inputRef}
              className="w-full h-full bg-light focus:ring-0 focus:outline-none border-1 border-gray-medium focus:border-gray-dark py-5 sm:pt-3 sm:pb-3 px-3 font-['DMSans'] font-normal text-normal text-start"
              placeholder={`${t('search')}...`}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </>
      ) : (
        <div
          className="w-6 h-6 relative cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <GlassIcon />
        </div>
      )}
    </div>
  );
};

import { useState } from 'react';
import { BlogSearchInput } from './BlogSearchInput';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { SearchNormalIcon } from 'ui/core';
import { useRouter } from '@intl/navigation';
import { defaultLocale, LocaleProps } from 'intl';

export const BlogSearch = ({ locale = defaultLocale }: LocaleProps) => {
  const [open, setOpen] = useState(false);
  const [criteria, setCriteria] = useState('');
  const ref = useDetectClickOutside({
    onTriggered: () => setOpen(false),
  });
  const router = useRouter();

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    router.push(
      {
        pathname: '/blog/search/[query]',
        params: { query: criteria },
      },
      {
        locale,
      },
    );
  };

  return (
    <div
      ref={ref}
      className=" pb-2 px-5 mb-0 border-b border-b-gray-light justify-center items-center inline-flex"
      onKeyDown={handleKeyPress}
    >
      {open ? (
        <>
          <button
            className="w-6 h-6 relative cursor-pointer z-40"
            onClick={handleSubmit}
          >
            <SearchNormalIcon />
          </button>
          <BlogSearchInput
            open={open}
            setCriteria={setCriteria}
            criteria={criteria}
          />
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

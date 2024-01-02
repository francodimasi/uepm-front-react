import { useEffect, useRef } from 'react';
import { BlogSearchInputProps } from './BlogSearch.types';

export const BlogSearchInput = ({ open }: BlogSearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <div className="absolute top-[1px] right-0 z-20 w-full border-b-1 border-gray-medium">
      <input
        ref={inputRef}
        className="w-full bg-light outline-none p-3"
        placeholder="Type your search..."
        type="text"
      />
    </div>
  );
};

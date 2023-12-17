import { useEffect, useRef } from 'react';

type PostSearchInputProps = {
  open: boolean;
};
export const PostSearchInput = ({ open }: PostSearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      <div className="absolute top-[1px] right-0 z-20 w-full border-b-1 border-gray-medium">
        <input
          ref={inputRef}
          className="w-full bg-light outline-none p-4"
          placeholder="Type your search..."
          type="text"
        />
      </div>
    </>
  );
};

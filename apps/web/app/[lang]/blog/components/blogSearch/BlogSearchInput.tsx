import { useEffect, useRef } from 'react';
import { BlogSearchInputProps } from './BlogSearch.types';

export const BlogSearchInput = ({
  open,
  setCriteria,
  criteria,
}: BlogSearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <div className="absolute top-0 left-0 z-20 w-[97%] border-b-2 border-gray-dark">
      <input
        ref={inputRef}
        className="w-full bg-white outline-none pb-2 pt-1 px-3 font-['DMSans'] font-medium text-lg text-center"
        placeholder="Ingrese su criterio de búsqueda..."
        type="text"
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
      />
    </div>
  );
};

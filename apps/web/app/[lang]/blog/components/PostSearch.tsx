import { useCallback, useState } from 'react';
import { PostSearchInput } from './PostSearchInput';
import { useDetectClickOutside } from 'react-detect-click-outside';

export const PostSearch = () => {
  const [open, setOpen] = useState(false);
  const ref = useDetectClickOutside({ onTriggered: () => setOpen(false) });

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    /**@todo add search funcionality */
    console.log('search');
  }, []);

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className="h-full flex items-center justify-end border-b-1 border-gray-medium"
    >
      {open ? (
        <>
          <button className="relative z-30 p-4 cursor-pointer" type="submit">
            <span className="material-icons block">search</span>
          </button>
          <PostSearchInput open={open} />
        </>
      ) : (
        <>
          <div
            className="relative z-30 p-4 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <span className="material-icons block">search</span>
          </div>
        </>
      )}
    </form>
  );
};

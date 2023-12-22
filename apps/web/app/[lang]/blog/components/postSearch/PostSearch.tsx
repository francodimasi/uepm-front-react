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
      className="w-24 py-1 px-3 mb-0 border-b border-b-gray-light justify-center items-center inline-flex"
    >
      {open ? (
        <>
          <button
            className="w-6 h-6 relative cursor-pointer z-40 py-3"
            type="submit"
          >
            <span className="material-icons block">search</span>
          </button>
          <PostSearchInput open={open} />
        </>
      ) : (
        <>
          <div
            className="w-6 h-6 relative cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <span className="material-icons block">search</span>
          </div>
        </>
      )}
    </form>
  );
};

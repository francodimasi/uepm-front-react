import { PostItemSkeleton } from './PostItemSkeleton';

export const SuggestedPostSkeleton = () => {

  return (
    <>
      <div className="hidden sm:flex w-full  animate-pulse h-96 flex-col justify-start items-start gap-4 ">
        <PostItemSkeleton size="small" />
        <PostItemSkeleton size="small" />
        <PostItemSkeleton size="small" />
      </div>
    </>
  );
};

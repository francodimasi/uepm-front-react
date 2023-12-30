import { BlogItemSkeleton } from '../../../app/[lang]/blog/components/blogItem';

export const EditorSelectionSkeleton = () => {
  return (
    <div className="hidden sm:flex w-full  animate-pulse h-96 flex-col justify-start items-start gap-4 ">
      <BlogItemSkeleton type="small" />
      <BlogItemSkeleton type="small" />
      <BlogItemSkeleton type="small" />
    </div>
  );
};

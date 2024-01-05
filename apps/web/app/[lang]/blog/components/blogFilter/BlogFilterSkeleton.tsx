import { BlogItemSkeleton } from '@components/shared/blogItem';

type BlogFilterSkeletonProps = {
  entries: number;
};

export const BlogFilterSkeleton = ({ entries }: BlogFilterSkeletonProps) => {
  return (
    <>
      {(() => {
        const options = [];
        for (let i = 0; i < entries; i++) {
          options.push(
            <div
              key={i}
              className="pt-0 pb-10 border-b border-gray-medium sm:mb-0 sm:mt-10 sm:pb-7"
            >
              <BlogItemSkeleton type="large" />
            </div>,
          );
        }
        return options;
      })()}
    </>
  );
};

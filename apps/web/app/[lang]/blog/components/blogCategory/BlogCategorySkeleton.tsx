import { BlogItemSkeleton } from '../blogItem';

type BlogCategorySkeletonProps = {
  entries: number;
};

export const BlogCategorySkeleton = ({
  entries,
}: BlogCategorySkeletonProps) => {
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

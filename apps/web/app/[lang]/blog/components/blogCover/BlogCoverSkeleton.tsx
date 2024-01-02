import { BlogItemSkeleton } from '@components/shared/blogItem';

export const BlogCoverSkeleton = () => {
  return (
    <>
      <div className="col-span-12  mt-6 mb-6 sm:mt-10 sm:mb-10 border-b-1 border-gray-medium sm:border-0">
        <div>
          <BlogItemSkeleton type="bigger" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-12 mt-0 ">
        <div className="sm:basis-2/3 order-2 sm:order-1">
          <div className="flex flex-col ">
            <div className="sm:h-56 pb-6 border-b border-gray-medium sm:mb-5 sm:mt-0 sm:pb-0">
              <BlogItemSkeleton type="large" />
            </div>
            <div className="py-6 sm:py-0 sm:h-56 border-b border-gray-medium sm:my-5">
              <BlogItemSkeleton type="large" />
            </div>
            <div className="py-6 sm:py-0  sm:h-56 border-b border-gray-medium sm:my-5">
              <BlogItemSkeleton type="large" />
            </div>
            <div className="py-6 sm:py-0  sm:h-56 sm:mt-5">
              <BlogItemSkeleton type="large" />
            </div>
          </div>
        </div>
        <div className="sm:basis-1/3 order-1 sm:order-2">
          <div className="flex flex-col">
            <div className=" border-b border-gray-medium mb-6 pb-6 sm:pb-10">
              <BlogItemSkeleton type="vertical" />
            </div>
            <div className="sm:border-0 border-b border-gray-medium mb-6 pb-6 sm:pb-10">
              <BlogItemSkeleton type="vertical" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

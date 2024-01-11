import { BlogItemSkeleton } from '@components/shared/blogItem';

export const BlogCoverSkeleton = () => {
  return (
    <>
      <div className="col-span-12  mt-6 mb-6 sm:mt-10 sm:mb-10 border-b-1 border-gray-medium sm:border-0">
        <div>
          <BlogItemSkeleton size="xl" position="end" orientation="vertical" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-12 mt-0 ">
        <div className="sm:basis-2/3 order-2 sm:order-1">
          <div className="flex flex-col ">
            <div className="border-b border-gray-medium pb-4 mt-4">
              <BlogItemSkeleton size="md" />
            </div>
            <div className=" border-b border-gray-medium pb-4 mt-4">
              <BlogItemSkeleton size="md" />
            </div>
            <div className="  border-b border-gray-medium pb-4 mt-4">
              <BlogItemSkeleton size="md" />
            </div>
            <div className="pb-4 mt-4">
              <BlogItemSkeleton size="md" />
            </div>
          </div>
        </div>
        <div className="sm:basis-1/3 order-1 sm:order-2">
          <div className="flex flex-col">
            <div className=" border-b border-gray-medium mb-4 pb-4 sm:pb-10">
              <BlogItemSkeleton orientation="vertical" size="md"/>
            </div>
            <div className="sm:border-0 border-b border-gray-medium mb-4 pb-4 sm:pb-10">
              <BlogItemSkeleton orientation="vertical" size="md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const BlogCategoryHeaderSkeleton = () => {
  return (
    <>
      <div className="hidden sm:flex relative animate-pulse border-b border-b-gray-light justify-center items-center w-full">
        <div className="flex items-center w-full mb-5">
          <div className="h-4 ms-8 bg-gray-medium rounded-full dark:bg-gray-dark w-36"></div>
          <div className="h-4 ms-24 bg-gray-medium rounded-full dark:bg-gray-dark w-36"></div>
          <div className="h-4 ms-24 bg-gray-medium rounded-full dark:bg-gray-dark w-36"></div>
          <div className="h-4 ms-24 bg-gray-medium rounded-full dark:bg-gray-dark w-36"></div>
        </div>
      </div>
      <div className="flex sm:hidden w-full">
        <div className="h-8 bg-gray-light rounded-full dark:bg-gray-medium w-full"></div>
      </div>
    </>
  );
};

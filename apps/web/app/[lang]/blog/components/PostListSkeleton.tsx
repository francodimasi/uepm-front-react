import React from 'react';


type PostListSkeletonParams = {
    entries: number
  };


export const PostListSkeleton = ({entries} : PostListSkeletonParams) => {
  return (
    <div className='mt-10 space-y-6 lg:space-y-6'>
      {
        (
          () => {
            const options = [];
            for (let i = 0 ; i < entries; i++) {
              options.push(
                  <div key={i} role="status" className="relative animate-pulse isolate flex flex-col gap-6 lg:flex-row border-b border-gray-medium pb-6">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-52 lg:shrink-0 ">
                        <svg className="w-20 h-20 text-gray-medium m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="h-3 bg-primary-dark  opacity-60  rounded-full w-48 mb-4"></div>
                        <div className="h-6 bg-gray-medium opacity-80 rounded-full w-100 mb-4"></div>
                        <div className="h-6 bg-gray-medium opacity-80 rounded-full w-100"></div>
                        <div className="h-3 bg-gray-medium opacity-80 rounded-full w-32 my-6"></div>
                        <div className="h-2 bg-gray-medium opacity-80 rounded-full w-100 mb-5"></div>
                        <div className="h-2 bg-gray-medium opacity-80 rounded-full w-100"></div>
                    </div>
                  </div>
              )
            }
            return options;
          }
        )()
      }
    </div>
  )
}


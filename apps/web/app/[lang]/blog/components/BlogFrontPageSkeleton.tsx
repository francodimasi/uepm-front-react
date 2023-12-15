import ImagePlaceholder from 'public/images/ImagePlaceholder.svg'
import Image from 'next/image';

export const BlogFrontPageSkeleton = () => {
  return (
    <div className='mt-10 space-y-6 lg:space-y-6'>  
      <div role="status" className="relative animate-pulse isolate flex flex-col gap-6 lg:flex-row border-b border-gray-medium pb-6">
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-52 lg:shrink-0 ">
          <Image src={ImagePlaceholder} fill  aria-hidden="true" className='opacity-20 text-gray-medium p-6' alt="Placeholder" />
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
    </div>
  )
}


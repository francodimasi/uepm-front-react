import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon} from  '@heroicons/react/outline'

export const Pagination = () => {
  return (
    <nav className="flex items-center justify-center pt-8 px-4 sm:px-0">
      <div className="flex w-0 flex-1 flex-end justify-end " >
        <a href="#" className="inline-flex items-center border-b-2 pe-10 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
          <path d="M0.292893 7.5927C-0.0976311 7.98322 -0.0976311 8.61639 0.292893 9.00691L6.65685 15.3709C7.04738 15.7614 7.68054 15.7614 8.07107 15.3709C8.46159 14.9803 8.46159 14.3472 8.07107 13.9567L2.41421 8.2998L8.07107 2.64295C8.46159 2.25243 8.46159 1.61926 8.07107 1.22874C7.68054 0.838212 7.04738 0.838212 6.65685 1.22874L0.292893 7.5927ZM1 9.2998L33 9.2998L33 7.2998L1 7.2998L1 9.2998Z" fill="#E7DED7"/>
        </svg>
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <div className='h-7 justify-start items-center gap-3 inline-flex'>
          <div className=" w-6 h-7 p-2 border-b-2  border-transparent justify-end items-center gap-2 inline-flex">
            <div className=" text-right text-dark text-base font-normal font-['DMSans'] leading-normal">1</div>
          </div>
          <div className=" w-6 h-7 p-2 border-b-2 justify-end items-center gap-2 inline-flex">
            <div className=" text-right text-dark text-base font-bold font-['DMSans'] leading-normal">2</div>
          </div>
          <div className=" w-6 h-7 p-2 border-b-2 border-transparent  justify-end items-center gap-2 inline-flex">
            <div className=" text-right text-dark text-base font-normal font-['DMSans'] leading-normal">3</div>
          </div>
          <span className="inline-flex items-center border-b-2 border-transparent border-indigo-500 px-4 pb-2  text-base font-medium font-['DMSans'] leading-normal">
            ...
          </span>
          <div className=" w-6 h-7 p-2 border-b-2 border-transparent  justify-end items-center gap-2 inline-flex">
            <div className=" text-right text-dark text-base font-normal font-['DMSans'] leading-normal">8</div>
          </div>
          <div className=" w-6 h-7 p-2 border-b-2 border-transparent  justify-end items-center gap-2 inline-flex">
            <div className=" text-right text-dark text-base font-normal font-['DMSans'] leading-normal">9</div>
          </div>
          <div className=" w-6 h-7 p-2 border-b-2 border-transparent justify-end items-center gap-2 inline-flex">
            <div className=" text-right text-dark text-base font-normal font-['DMSans'] leading-normal">10</div>
          </div>
        </div>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-start ps-3">
        <a href="#" className="inline-flex items-center border-b-2 border-transparent pl-10 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
          <path d="M32.7071 9.00691C33.0976 8.61638 33.0976 7.98322 32.7071 7.5927L26.3431 1.22873C25.9526 0.83821 25.3195 0.83821 24.9289 1.22873C24.5384 1.61926 24.5384 2.25242 24.9289 2.64295L30.5858 8.2998L24.9289 13.9567C24.5384 14.3472 24.5384 14.9803 24.9289 15.3709C25.3195 15.7614 25.9526 15.7614 26.3431 15.3709L32.7071 9.00691ZM8.74228e-08 9.2998L32 9.2998L32 7.2998L-8.74228e-08 7.2998L8.74228e-08 9.2998Z" fill="#020001"/>
        </svg>
        </a>
      </div>
    </nav>
  )
};

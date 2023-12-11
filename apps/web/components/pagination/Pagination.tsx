import Image from "next/image";
import LeftArrow from "public/images/LeftArrow.svg"
import RightArrow from "public/images/RightArrow.svg"



type PagintationParams = {
  handlePagination: Function
};

export const Pagination = ({handlePagination} : PagintationParams) => {
  return (
    <nav className="flex items-center justify-center pt-8 px-4 sm:px-0">
      <div className="flex w-0 flex-1 flex-end justify-end " >
        <a href="#" className="opacity-20 inline-flex items-center border-b-2 pe-10 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
          <Image src={LeftArrow} width={33} height={16} alt="Previous Page" style={{fill:'red'}}/>
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
          <Image src={RightArrow} width={33} height={16} alt="Previous Page" />
        </a>
      </div>
    </nav>
  )
};

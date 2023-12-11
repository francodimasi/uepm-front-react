import Image from "next/image";
import clsx from "clsx";
import LeftArrow from "public/images/LeftArrow.svg"
import RightArrow from "public/images/RightArrow.svg"
import Link from "next/link";



type PagintationParams = {
  mainPath: string
  actualPage: number
  pagesCount: number
};

export const Pagination = ({mainPath, actualPage, pagesCount} : PagintationParams) => {
  const pageRangeDisplayed = 6;
  const isPreviousDisabled = actualPage === 1;
  const isNextDisabled = actualPage === pagesCount;

  const previousClasses = clsx("inline-flex items-center border-b-2 pe-10 border-transparent text-sm font-medium", {
    "opacity-20 text-gray-500 ": isPreviousDisabled === true
  });

  const nextClasses = clsx("inline-flex items-center border-b-2 pe-10 border-transparent text-sm font-medium", {
    "opacity-20 text-gray-500 ": isNextDisabled === true
  });

  // const leftSide = pageRangeDisplayed / 2;
  // const rightSide = pageRangeDisplayed - leftSide;
  // const paginationList = []
  // if (pagesCount <= leftSide) {
  //   for (let index = 1; index <= pagesCount; index++) {
  //     paginationList.push({
  //       side: 'left',
  //       page: index,
  //       isSelected: false
  //     })
  //     // <li className=" w-6 h-7 p-2 border-b-2  border-transparent justify-end items-center gap-2 inline-flex font-normal cursor-pointer hover:font-bold  hover:border-b-1 hover:border-gray-medium">
  //     //   <Link href={`${mainPath}/`} className=" text-right text-dark text-base font-['DMSans'] leading-normal">1</Link>
  //     // </li>
  //     //  <li className=" w-6 h-7 p-2 border-b-2 justify-end items-center gap-2 inline-flex">
  //     //   <div className=" text-right text-dark text-base font-semibold font-['DMSans'] leading-normal">2</div>
  //     //   </li>
  //   }
  // } else {
  //   for (let index = 0; index <= leftSide; index++) {
  //     paginationList.push({
  //       side: 'left',
  //       page: index,
  //       isSelected: false
  //     })
  //   }
  //   // <li className="inline-flex items-center border-b-2 border-transparent border-indigo-500 px-4 pb-2  text-base font-['DMSans'] leading-normal">
  //   //   ...
  //   // </li>
  //   for (let index = leftSide + 1; index <= pagesCount; index++) {
  //     paginationList.push({
  //       side: 'right',
  //       page: index,
  //       isSelected: false
  //     })
  //   }
  // }

  const paginationList = []
  for (let index = 1; index <= pagesCount; index++) {
    paginationList.push({
      page: index,
      isSelected: (index === actualPage)
    })
  }

  return (
    <nav className="flex items-center justify-center pt-8 px-4 sm:px-0">
      <div className="flex w-0 flex-1 flex-end justify-end " >
        <Link href="#" className={previousClasses} >
          <Image src={LeftArrow} width={33} height={16} alt="Previous Page" />
        </Link>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <ul className='h-7 justify-start items-center gap-3 inline-flex'>
        { 
          paginationList.map((pageInfo) => (
              <li key={pageInfo.page} className=" w-6 h-7 p-2 border-b-2  border-transparent justify-end items-center gap-2 inline-flex font-normal cursor-pointer hover:font-bold  hover:border-b-1 hover:border-gray-medium">
                <Link href={`${mainPath}/${pageInfo.page}`} className=" text-right text-dark text-base font-['DMSans'] leading-normal">{pageInfo.page}</Link>
              </li>
            )
          )
        }
          
        </ul>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-start ps-3">
        <a href="#" className={nextClasses}>
          <Image src={RightArrow} width={33} height={16} alt="Previous Page" />
        </a>
      </div>
    </nav>
  )
};

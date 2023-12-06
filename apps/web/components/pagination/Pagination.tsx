import { Fragment } from "react"

export const Pagination = ({selectedPage, setSelectedPage, totalPages}) => {
  console.log(totalPages)
  const rangeFn = n => Array.from(Array(n).keys())
  const pageNumbers = rangeFn(totalPages)

  const goToNextPage = () => {
    if(selectedPage !== totalPages) setSelectedPage(selectedPage + 1)
  }
  
  const goToPrevPage = () => {
    if(selectedPage !== 1) setSelectedPage(selectedPage - 1)
  }
  
  const inactivePageStyle = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
  const activePageStyle = "border-indigo-500 text-indigo-600"
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <span
          onClick={goToPrevPage}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          {'<----'}
          Previous
        </span>
      </div>
      <div className="hidden md:-mt-px md:flex">
        { pageNumbers.map((pn, index) => {
          return <Fragment key={index}>
              <div
              onClick={() => setSelectedPage(pn+1)}
              className={`cursor-pointer inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${selectedPage == pn+1 ? activePageStyle : inactivePageStyle}`}
            >
              {pn+1}
            </div>
          </Fragment>
        })}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <span
              onClick={goToNextPage}
              className="cursor-pointer inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          {'---->'}
        </span>
      </div>
    </nav>
  )
}


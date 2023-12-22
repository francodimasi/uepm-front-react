'use client';

import { ArrowLeftIcon } from 'ui/core/icons/ArrowLeftIcon';
import { ArrowRightIcon } from 'ui/core/icons/ArrowRightIcon';
import ReactPaginate from 'react-paginate';
import { PagintationParams } from './Pagination.types';

export const Pagination = ({
  actualPage,
  pagesCount,
  setPage,
}: PagintationParams) => {
  return (
    <ReactPaginate
      breakLabel="..."
      breakClassName="font-bold text-lg cursor-pointer"
      onPageChange={(event) => setPage(event.selected + 1)}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pagesCount}
      previousLabel={<ArrowLeftIcon />}
      nextLabel={<ArrowRightIcon />}
      renderOnZeroPageCount={null}
      initialPage={actualPage - 1}
      className="flex items-center justify-center pt-4 px-4 sm:px-0 gap-5"
      pageClassName=" w-6 h-7 p-2 justify-end items-center gap-2 inline-flex font-light cursor-pointer hover:font-semibold  hover:border-b-1 hover:border-gray-dark"
      activeClassName="border-b-2 border-dark hover:border-b-2 hover:boder-dark"
      activeLinkClassName="font-bold"
      pageLinkClassName="text-right text-dark text-base font-['DMSans'] leading-normal"
      disabledClassName="opacity-20 text-gray-500 "
    />
  );
};

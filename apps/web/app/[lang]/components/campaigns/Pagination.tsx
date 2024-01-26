import { Button } from 'ui/core';
import { ArrowBackIcon, ArrowForwardIcon } from 'ui/core/icons';

export const Pagination = ({ currentPage, totalPages, setPage }) => {
  const prevDisabled = () => currentPage === 1;
  const nextDisabled = () => currentPage === totalPages;

  const goToNextPage = () => {
    if (!nextDisabled()) setPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (!prevDisabled()) {
      setPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full flex gap-2 items-center justify-between sm:justify-end">
      <Button
        onClick={goToPrevPage}
        disabled={prevDisabled()}
        fill="clear"
        size="sm"
        iconOnly
      >
        <ArrowBackIcon disabled={prevDisabled()} />
      </Button>
      <span>
        <span className="font-semibold">{currentPage}</span>
        <span className="px-1">/</span>
        <span>{totalPages}</span>
      </span>
      <Button
        onClick={goToNextPage}
        disabled={nextDisabled()}
        fill="clear"
        size="sm"
        iconOnly
      >
        <ArrowForwardIcon disabled={nextDisabled()} />
      </Button>
    </div>
  );
};

import { ArrowBackIcon, ArrowForwardIcon } from 'ui/core/icons';

export const Pagination = ({ currentPage, totalPages, setPage }) => {
  const DISABLED_FILL = '#E7DED7';
  const ENABLED_FILL = '#020001';

  const prevDisabled = () => currentPage === 1;
  const nextDisabled = () => currentPage === totalPages;

  const goToNextPage = () => {
    if (currentPage !== totalPages) setPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      setPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full flex gap-2 items-center justify-between sm:justify-end">
      <button onClick={goToPrevPage} disabled={prevDisabled()}>
        <span>
          <ArrowBackIcon fill={prevDisabled() ? DISABLED_FILL : ENABLED_FILL} />
        </span>
      </button>
      <span>
        {currentPage}/{totalPages}
      </span>
      <button onClick={goToNextPage} disabled={nextDisabled()}>
        <span>
          <ArrowForwardIcon
            fill={nextDisabled() ? DISABLED_FILL : ENABLED_FILL}
          />
        </span>
      </button>
    </div>
  );
};

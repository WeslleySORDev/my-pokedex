interface IPagination {
  handleCurrentPage: (value: number) => void;
  currentPage: number;
  MAX_ITEMS_ON_PAGE: number;
}

export function Pagination({
  handleCurrentPage,
  currentPage,
  MAX_ITEMS_ON_PAGE,
}: IPagination) {
  const MAX_ITEMS = 9;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  const maxFirst = Math.max(Math.ceil(1302 / MAX_ITEMS_ON_PAGE) - MAX_ITEMS, 1);
  const first = Math.min(Math.max(currentPage - MAX_LEFT, 1), maxFirst);
  return (
    <div className="mt-6 flex w-full items-center px-0">
      <div className="flex items-center gap-4">
        <button
          className={`hidden rounded-sm bg-grayscale-background p-2 disabled:cursor-not-allowed disabled:bg-transparent sm:block`}
          onClick={() => handleCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {currentPage > MAX_LEFT + 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCurrentPage(1)}
              className="text-grayscale-white"
            >
              1
            </button>
            <span className="text-grayscale-white">...</span>
          </div>
        )}
      </div>
      <ul className="flex flex-1 items-center justify-center gap-4">
        {Array.from({
          length: Math.min(MAX_ITEMS, Math.ceil(1302 / MAX_ITEMS_ON_PAGE)),
        })
          .map((_, index) => index + first)
          .map((page) =>
            page < Math.ceil(1302 / MAX_ITEMS_ON_PAGE) ? (
              <li key={page}>
                <button
                  onClick={() => handleCurrentPage(page)}
                  className={
                    page === currentPage
                      ? "text-grayscale-dark underline underline-offset-4"
                      : "text-grayscale-white"
                  }
                >
                  {page}
                </button>
              </li>
            ) : null,
          )}
      </ul>
      <div className="flex items-center gap-4">
        {currentPage < Math.ceil(1302 / MAX_ITEMS_ON_PAGE) - MAX_LEFT && (
          <div className="flex items-center gap-2">
            <span className="text-grayscale-white">...</span>
            <button
              onClick={() => handleCurrentPage(27)}
              className="text-grayscale-white"
            >
              27
            </button>
          </div>
        )}
        <button
          className={`hidden rounded-sm bg-grayscale-background p-2 disabled:cursor-not-allowed disabled:bg-transparent sm:block`}
          onClick={() => handleCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(1302 / MAX_ITEMS_ON_PAGE)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

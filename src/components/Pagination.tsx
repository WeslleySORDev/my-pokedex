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
    <div className="flex items-center w-full px-16 mt-6">
      <button
        className={`disabled:bg-transparent disabled:cursor-not-allowed bg-grayscale-background rounded-sm p-2`}
        onClick={() => handleCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Anterior
      </button>
      <ul className="flex items-center justify-center gap-4 flex-1">
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
            ) : null
          )}
      </ul>
      <button
        className={`disabled:bg-transparent disabled:cursor-not-allowed bg-grayscale-background rounded-sm p-2`}
        onClick={() => handleCurrentPage(currentPage + 1)}
        disabled={currentPage === Math.ceil(1302 / MAX_ITEMS_ON_PAGE)}
      >
        Próxima
      </button>
    </div>
  );
}

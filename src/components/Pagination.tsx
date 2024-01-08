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
    <div className="mt-6 flex w-full items-center rounded bg-grayscale-white px-2 xs:px-4">
      <div className="flex items-center gap-8">
        <button
          className={`hidden rounded-sm fill-[#000000] disabled:cursor-not-allowed xs:block`}
          onClick={() => handleCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 256 256"
          >
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </button>
        {currentPage > MAX_LEFT + 1 && (
          <div className="ml-auto hidden items-center gap-2 sm:flex">
            <button
              onClick={() => handleCurrentPage(1)}
              className="text-grayscale-dark"
            >
              1
            </button>
            <span className="text-grayscale-dark">...</span>
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
              <li className="text-xs xs:text-base" key={page}>
                <button
                  onClick={() => handleCurrentPage(page)}
                  className={
                    page === currentPage
                      ? "bg-[#7b8795] px-2 py-1 xs:px-4 xs:py-2 text-grayscale-white"
                      : "text-grayscale-dark"
                  }
                >
                  {page}
                </button>
              </li>
            ) : null,
          )}
      </ul>
      <div className="flex items-center gap-8">
        <div className="ml-auto hidden items-center gap-2 sm:flex">
          <span className="text-grayscale-dark">...</span>
          <button
            onClick={() => handleCurrentPage(27)}
            className="text-grayscale-dark"
          >
            27
          </button>
        </div>
        <button
          className={`hidden rounded-sm fill-[#000000] disabled:cursor-not-allowed xs:block`}
          onClick={() => handleCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(1302 / MAX_ITEMS_ON_PAGE)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

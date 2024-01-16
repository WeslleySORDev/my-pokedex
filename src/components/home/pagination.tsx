import { useWindowSize } from "@/hooks/useWindowSize";

interface IPagination {
  handleCurrentPage: (value: number) => void;
  currentPage: number;
  pages: number;
}

export function Pagination({
  handleCurrentPage,
  currentPage,
  pages,
}: IPagination) {
  const size = useWindowSize();
  const MAX_ITEMS = size.width <= 375 ? 3 : size.width <= 768 ? 5 : 9;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(currentPage - MAX_LEFT, 1), maxFirst);
  return (
    <div className="mt-6 flex w-full items-center rounded bg-grayscale-white px-2 xs:px-4">
      <div className="flex items-center gap-4 xs:gap-6 sm:gap-8">
        <button
          className={`rounded-sm fill-[#000000] disabled:cursor-not-allowed`}
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
        <div
          className={`ml-auto flex items-center gap-2 text-xs sm:text-sm ${
            currentPage < (MAX_LEFT + 2) && "invisible"
          }`}
        >
          <button
            onClick={() => handleCurrentPage(1)}
            className="text-grayscale-dark"
          >
            1
          </button>
          <span className="text-grayscale-dark">...</span>
        </div>
      </div>
      <ul className="flex flex-1 items-center justify-center">
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li className="text-xs sm:text-sm" key={page}>
              <button
                onClick={() => handleCurrentPage(page)}
                className={
                  page === currentPage
                    ? "bg-[#7b8795] px-4 py-2 text-grayscale-white"
                    : "px-4 py-2 text-grayscale-dark"
                }
              >
                {page}
              </button>
            </li>
          ))}
      </ul>
      <div className="flex items-center gap-4 xs:gap-6 sm:gap-8">
        <div
          className={`ml-auto flex items-center gap-2 text-xs sm:text-sm ${
            currentPage > pages - (MAX_LEFT + 1) && "invisible"
          }`}
        >
          <span className="text-grayscale-dark">...</span>
          <button
            onClick={() => handleCurrentPage(pages)}
            className="text-grayscale-dark"
          >
            {pages}
          </button>
        </div>
        <button
          className={`rounded-sm fill-[#000000] disabled:cursor-not-allowed`}
          onClick={() => handleCurrentPage(currentPage + 1)}
          disabled={currentPage === pages}
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

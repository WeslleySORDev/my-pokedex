import { SetStateAction } from "react";

interface IPagination {
  handlePage: (value: number) => void;
  handleKeyDown: (event: any) => void;
  pageFront: number;
  setPageFront: (value: SetStateAction<number>) => void;
  page: number;
  MAX_ITEMS_ON_PAGE: number;
}

export function Pagination({
  handlePage,
  page,
  pageFront,
  setPageFront,
  MAX_ITEMS_ON_PAGE,
  handleKeyDown,
}: IPagination) {
  return (
    <div className="flex items-center sticky bottom-0 bg-white w-full justify-between p-2">
      <button
        className="p-4 rounded-md bg-cyan-300 text-zinc-500"
        onClick={() => handlePage(page - 1)}
        disabled={page === 0}
      >
        Anterior
      </button>
      <div className="flex items-center gap-4">
        <input
          value={pageFront}
          onChange={(e) => {
            if (
              parseInt(e.currentTarget.value) >
              Math.ceil(1302 / MAX_ITEMS_ON_PAGE - 1)
            ) {
              return setPageFront(Math.ceil(1302 / MAX_ITEMS_ON_PAGE));
            }
            if (parseInt(e.currentTarget.value) <= 0) {
              return setPageFront(1);
            }
            return setPageFront(parseInt(e.currentTarget.value));
          }}
          onKeyDown={handleKeyDown}
          className={`p-4 text-center ${
            pageFront - 1 !== page ? "bg-red-500" : "bg-red-300"
          }`}
          type="number"
          min={1}
          max={Math.ceil(1302 / MAX_ITEMS_ON_PAGE)}
        />
        <span className="hidden sm:block">
          de {Math.ceil(1302 / MAX_ITEMS_ON_PAGE)}
        </span>
      </div>
      <button
        className="p-4 rounded-md bg-cyan-300 text-zinc-500"
        onClick={() => handlePage(page + 1)}
        disabled={page === Math.ceil(1302 / MAX_ITEMS_ON_PAGE - 1)}
      >
        Proximo
      </button>
    </div>
  );
}

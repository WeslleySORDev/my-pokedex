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
    <div className="flex justify-center gap-4 items-center w-full">
      <button
        className="fill-white disabled:invisible"
        onClick={() => handlePage(page - 1)}
        disabled={page === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
        >
          <path d="M208,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h80a16,16,0,0,0,16-16V88A16,16,0,0,0,208,72Zm0,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h88Z"></path>
        </svg>
      </button>
      <div className="flex flex-col items-center">
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
          className={`text-center border border-grayscale-background placeholder:text-grayscale-white text-grayscale-white ${
            pageFront - 1 !== page ? "bg-red-500" : "bg-transparent"
          }`}
          type="number"
          min={1}
          max={Math.ceil(1302 / MAX_ITEMS_ON_PAGE)}
        />
        <span className="hidden sm:block text-grayscale-white">
          Página {pageFront} de {Math.ceil(1302 / MAX_ITEMS_ON_PAGE)}
        </span>
      </div>
      <button
        className="fill-white disabled:invisible "
        onClick={() => handlePage(page + 1)}
        disabled={page === Math.ceil(1302 / MAX_ITEMS_ON_PAGE - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
        >
          <path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H48A16,16,0,0,0,32,88v80a16,16,0,0,0,16,16h80v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H48V88h88a8,8,0,0,0,8-8V51.31L220.69,128Z"></path>
        </svg>
      </button>
    </div>
  );
}

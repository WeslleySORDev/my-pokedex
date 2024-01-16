import { useState } from "react";
import { Pagination } from "../pagination";
import { CustomInput } from "./custom-input";
import { PokemonLogo } from "./pokemon-logo";

type HeaderProps = {
  handleCurrentPage: (value: number) => void;
  MAX_ITEMS_ON_PAGE: number;
  currentPage: number;
};

export function Header({
  handleCurrentPage,
  MAX_ITEMS_ON_PAGE,
  currentPage,
}: HeaderProps) {
  const [input, setInput] = useState("");
  const pages = Math.ceil(1302 / MAX_ITEMS_ON_PAGE);

  return (
    <div className="flex w-full flex-col gap-2 px-3 pt-3">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-16">
        <PokemonLogo />
        <CustomInput input={input} setInput={setInput} />
      </div>
      <Pagination
        pages={pages}
        handleCurrentPage={handleCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

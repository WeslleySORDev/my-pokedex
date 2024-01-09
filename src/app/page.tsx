"use client";

import { IPokemon } from "@/@types/Pokemon";
import { CustomSearchInput } from "@/components/CustomSearchInput";
import { Pagination } from "@/components/Pagination";
import { PokemonCard } from "@/components/PokemonCard";
import { PokemonLogo } from "@/components/PokemonLogo";
import { SkeletonCard } from "@/components/SkeletonCard";
import { instance } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearchParam = () => {
    setSearchParam(input);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionStorageCurrentPage = sessionStorage.getItem(
        "my-pokedex-current-page",
      );
      if (sessionStorageCurrentPage)
        setCurrentPage(parseInt(sessionStorageCurrentPage));
    }
  }, []);
  const MAX_ITEMS_ON_PAGE = 50;

  const handleCurrentPage = (value: number) => {
    setCurrentPage(value);
  };

  const fetchPokemonData = async (page: number) => {
    const pokemonNames = await instance
      .get(
        `pokemon/?limit=${MAX_ITEMS_ON_PAGE}&offset=${
          (page - 1) * MAX_ITEMS_ON_PAGE
        }`,
      )
      .then((res) => res.data.results);
    const allPokemonData: any = await Promise.all(
      pokemonNames.map(async (pokemonName: { name: string }): Promise<any> => {
        const pokemonData = await instance
          .get<IPokemon>("pokemon/" + pokemonName.name)
          .then((res) => res.data);
        return pokemonData;
      }),
    );
    return allPokemonData;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["pokemons", currentPage, searchParam],
    queryFn: () => fetchPokemonData(currentPage),
    staleTime: 60 * 1000,
  });

  if (error) {
    return <div>Algo deu errado!</div>;
  }

  return (
    <main className="mx-auto flex max-w-[640px] flex-col items-center justify-between gap-4 bg-identity-primary p-1">
      <div className="flex w-full flex-col gap-2 px-3 pt-3">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-16">
          <PokemonLogo />
          <CustomSearchInput
            handleSearchParam={handleSearchParam}
            input={input}
            setInput={setInput}
          />
        </div>
        <div
          className={`${
            searchParam === "" && "invisible"
          } flex w-full items-center justify-between text-grayscale-dark`}
        >
          <div className="flex items-center gap-4">
            <span className="subtitle-1 text-grayscale-white">Filtro: </span>
            <span className="body-1 max-w-52 truncate rounded bg-grayscale-white px-4 py-1">
              {searchParam}
            </span>
          </div>
          <button
            onClick={() => {
              setSearchParam("");
              setInput("");
            }}
            className="rounded-md bg-grayscale-white fill-grayscale-dark p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </button>
        </div>
        <Pagination
          MAX_ITEMS_ON_PAGE={MAX_ITEMS_ON_PAGE}
          handleCurrentPage={handleCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <div className="flex max-h-[calc(100lvh-212px)] min-h-[calc(100lvh-212px)] w-full flex-wrap justify-center gap-2 overflow-auto rounded-lg bg-grayscale-white px-3 py-6 shadow-inner2dp sm:max-h-[calc(100lvh-176px)] sm:min-h-[calc(100lvh-176px)]">
        {!isLoading
          ? data.map((pokemon: IPokemon) => {
              return (
                <PokemonCard
                  name={pokemon.name}
                  id={pokemon.id.toString()}
                  key={pokemon.name + pokemon.id}
                  currentPage={currentPage}
                />
              );
            })
          : Array.from({ length: MAX_ITEMS_ON_PAGE }, (_, i) => (
              <SkeletonCard key={i} />
            ))}
      </div>
    </main>
  );
}

"use client";

import { IPokemon } from "@/@types/Pokemon";
import { CustomSearchInput } from "@/components/CustomSearchInput";
import { Pagination } from "@/components/Pagination";
import { PokemonCard } from "@/components/PokemonCard";
import { PokemonLogo } from "@/components/PokemonLogo";
import { SkeletonCard } from "@/components/SkeletonCard";
import { instance } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  const [pageFront, setPageFront] = useState(1);
  const MAX_ITEMS_ON_PAGE = 50;

  const handleKeyDown = (event: any) => {
    if (event.key === "Escape") {
      event.preventDefault();
      return setPageFront(page + 1);
    }
    if (event.key === "." || event.key === ",") {
      event.preventDefault();
    }
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.currentTarget.value === "") {
        return console.log("vazio");
      }
      if (
        parseInt(event.currentTarget.value) >
        Math.ceil(1302 / MAX_ITEMS_ON_PAGE - 1)
      ) {
        return handlePage(Math.ceil(1302 / MAX_ITEMS_ON_PAGE - 1));
      }
      if (parseInt(event.currentTarget.value) <= 0) {
        return handlePage(0);
      }
      return handlePage(parseInt(event.currentTarget.value) - 1);
    }
  };

  const handlePage = (value: number) => {
    setPage(value);
    setPageFront(value + 1);
  };

  const fetchPokemonData = async (page: number) => {
    const pokemonNames = await instance
      .get(
        `pokemon/?limit=${MAX_ITEMS_ON_PAGE}&offset=${page * MAX_ITEMS_ON_PAGE}`
      )
      .then((res) => res.data.results);
    const allPokemonData: any = await Promise.all(
      pokemonNames.map(async (pokemonName: { name: string }): Promise<any> => {
        const pokemonData = await instance
          .get<IPokemon>("pokemon/" + pokemonName.name)
          .then((res) => res.data);
        return pokemonData;
      })
    );
    return allPokemonData;
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["pokemons", page],
    queryFn: () => fetchPokemonData(page),
  });

  if (error) {
    return <div>Algo deu errado!</div>;
  }

  return (
    <main className="flex flex-col gap-4 items-center justify-between max-w-[640px] mx-auto p-1 bg-identity-primary">
      <div className="flex flex-col gap-2 px-3 pt-3 pb-6 w-full">
        <div className="flex items-center justify-between w-full">
          <PokemonLogo />
          <Pagination
            MAX_ITEMS_ON_PAGE={MAX_ITEMS_ON_PAGE}
            handleKeyDown={handleKeyDown}
            handlePage={handlePage}
            page={page}
            pageFront={pageFront}
            setPageFront={setPageFront}
          />
        </div>

        <div className="flex gap-4 w-full">
          <CustomSearchInput />
          <button className="w-8 h-8 bg-grayscale-white rounded-2xl shadow-inner2dp flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 12H2.5C2.35556 12 2.23611 11.9528 2.14167 11.8583C2.04722 11.7639 2 11.6444 2 11.5C2 11.3556 2.04722 11.2361 2.14167 11.1417C2.23611 11.0472 2.35556 11 2.5 11H5.5C5.64444 11 5.76389 11.0472 5.85833 11.1417C5.95278 11.2361 6 11.3556 6 11.5C6 11.6444 5.95278 11.7639 5.85833 11.8583C5.76389 11.9528 5.64444 12 5.5 12ZM13.5 5H2.5C2.35556 5 2.23611 4.95278 2.14167 4.85833C2.04722 4.76389 2 4.64444 2 4.5C2 4.35556 2.04722 4.23611 2.14167 4.14167C2.23611 4.04722 2.35556 4 2.5 4H13.5C13.6444 4 13.7639 4.04722 13.8583 4.14167C13.9528 4.23611 14 4.35556 14 4.5C14 4.64444 13.9528 4.76389 13.8583 4.85833C13.7639 4.95278 13.6444 5 13.5 5ZM9.5 8.5H2.5C2.35556 8.5 2.23611 8.45278 2.14167 8.35833C2.04722 8.26389 2 8.14444 2 8C2 7.85556 2.04722 7.73611 2.14167 7.64167C2.23611 7.54722 2.35556 7.5 2.5 7.5H9.5C9.64444 7.5 9.76389 7.54722 9.85833 7.64167C9.95278 7.73611 10 7.85556 10 8C10 8.14444 9.95278 8.26389 9.85833 8.35833C9.76389 8.45278 9.64444 8.5 9.5 8.5Z"
                fill="#DC0A2D"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-2 flex-wrap px-3 py-6 bg-grayscale-white rounded-lg shadow-inner2dp max-h-[calc(100vh-132px)] sm:max-h-[calc(100vh-150px)] overflow-auto">
        {!isLoading
          ? data.map((pokemon: IPokemon) => {
              return (
                <PokemonCard
                  name={pokemon.name}
                  id={pokemon.id.toString()}
                  key={pokemon.name + pokemon.id}
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

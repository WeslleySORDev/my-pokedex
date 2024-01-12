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

type MyPokedexSessionStorageProps = {
  currentPage: number;
  scrollTop: number;
}

export default function Home() {
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionStorageMyPokedex = sessionStorage.getItem(
        "my-pokedex",
      );
      if (sessionStorageMyPokedex) {
        let jsonSessionStorageMyPokedex: MyPokedexSessionStorageProps = JSON.parse(sessionStorageMyPokedex)
        setCurrentPage(jsonSessionStorageMyPokedex.currentPage);
      }
    }
  }, []);

  const MAX_ITEMS_ON_PAGE = 50;

  const handleCurrentPage = (value: number) => {
    setCurrentPage(value);
    let jsonSessionStorageMyPokedex = JSON.stringify({
      currentPage: value,
      scrollTop: 0
    } as MyPokedexSessionStorageProps)
    sessionStorage.setItem(
      "my-pokedex",
      jsonSessionStorageMyPokedex
    );
  };

  const fetchPokemonData = async (page: number) => {
    const pokemonNames = await instance
      .get(
        `pokemon/?limit=${MAX_ITEMS_ON_PAGE}&offset=${(page - 1) * MAX_ITEMS_ON_PAGE
        }`,
      )
      .then((res) => res.data.results);
    const allPokemonData: any = await Promise.all(
      pokemonNames.map(
        async (pokemonName: { name: string }): Promise<any> => {
          const pokemonData = await instance
            .get<IPokemon>("pokemon/" + pokemonName.name)
            .then((res) => res.data);
          return pokemonData;
        },
      ),
    );
    return allPokemonData;
  };
  const pages = Math.ceil(1302 / MAX_ITEMS_ON_PAGE);
  const { isLoading, error, data } = useQuery({
    queryKey: ["pokemons", currentPage],
    queryFn: () => fetchPokemonData(currentPage),
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
            input={input}
            setInput={setInput}
          />
        </div>
        <Pagination
          pages={pages}
          handleCurrentPage={handleCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <div className="flex max-h-[calc(100lvh-132px)] min-h-[calc(100lvh-132px)] w-full flex-wrap content-start justify-center gap-2 overflow-auto rounded-lg bg-grayscale-white px-3 py-6 shadow-inner2dp sm:max-h-[calc(100lvh-136px)] sm:min-h-[calc(100lvh-136px)]">
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

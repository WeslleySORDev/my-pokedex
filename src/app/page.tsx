"use client";

import { IPokemon } from "@/@types/Pokemon";
import { PokemonCard } from "@/components/PokemonCard";
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
    <main className="flex flex-col min-h-screen gap-4 items-center justify-between relative">
      <div className="max-w-[640px] relative pt-4 px-4">
        <div className="flex gap-4 flex-wrap sm:px-4 justify-center">
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
      </div>
    </main>
  );
}

"use client";

import { instance } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const MAX_ITEMS_ON_PAGE = 25;

  const fetchPokemonData = async (offset: number) => {
    const pokemonNames = await instance
      .get(`pokemon/?limit=${MAX_ITEMS_ON_PAGE}&offset=${offset}`)
      .then((res) => res.data.results);
    const allPokemonData: any = await Promise.all(
      pokemonNames.map(async (pokemonName: { name: string }): Promise<any> => {
        const pokemonData = await instance
          .get("pokemon/" + pokemonName.name)
          .then((res) => res.data);
        return pokemonData;
      })
    );
    return allPokemonData;
  };
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["pokemons", offset],
      queryFn: () => fetchPokemonData(offset),
    });

  if (error) {
    return <div>Algo deu errado!</div>;
  }

  return (
    <main className="flex flex-col min-h-screen gap-4 items-center justify-between p-4">
      <div className="flex gap-4 flex-wrap">
        {!isLoading ? (
          data.map((pokemon) => {
            return (
              <div
                className="p-2 border border-zinc-700 rounded-md flex flex-col gap-2"
                key={pokemon.name}
              >
                <Image
                  src={pokemon.sprites.front_default}
                  width={128}
                  height={128}
                  alt={pokemon.name}
                />
                <span className="text-center">{pokemon.name}</span>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center">
            <h1>Loading...</h1>
          </div>
        )}
      </div>
      <div className="flex gap-8 items-center">
        <button
          className="p-4 rounded-md bg-cyan-300 text-zinc-500"
          onClick={() =>
            setOffset((prevState) => Math.max(prevState - MAX_ITEMS_ON_PAGE, 0))
          }
          disabled={offset === 0}
        >
          Anterior
        </button>
        <span className="p-4 bg-red-300">
          {offset === 0 ? "1" : offset / MAX_ITEMS_ON_PAGE + 1}
        </span>
        <button
          className="p-4 rounded-md bg-cyan-300 text-zinc-500"
          onClick={() =>
            setOffset((prevState) => prevState + MAX_ITEMS_ON_PAGE)
          }
        >
          Proximo
        </button>
      </div>
    </main>
  );
}

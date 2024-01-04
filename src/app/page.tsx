"use client";

import { IPokemon } from "@/@types/Pokemon";
import { PokemonCard } from "@/components/PokemonCard";
import { instance } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  const MAX_ITEMS_ON_PAGE = 25;

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
    console.log(allPokemonData);
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
    <main className="flex flex-col min-h-screen gap-4 items-center justify-between relative pt-4">
      <div className="max-w-[407px] relative">
        <div className="flex gap-4 flex-wrap min-h-screen">
          {!isLoading ? (
            data.map((pokemon: IPokemon) => {
              return (
                <PokemonCard
                  name={pokemon.name}
                  id={pokemon.id.toString()}
                  image={pokemon.sprites.front_default as string}
                  types={pokemon.types}
                  key={pokemon.name + pokemon.id}
                />
              );
            })
          ) : (
            <div className="flex items-center justify-center">
              <h1>Loading...</h1>
            </div>
          )}
        </div>
        <div className="flex gap-8 items-center sticky bottom-0 bg-white w-full justify-between p-2">
          <button
            className="p-4 rounded-md bg-cyan-300 text-zinc-500"
            onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
            disabled={page === 0}
          >
            Anterior
          </button>
          <span className="p-4 bg-red-300">{page + 1}</span>
          <button
            className="p-4 rounded-md bg-cyan-300 text-zinc-500"
            onClick={() => setPage((prevState) => prevState + 1)}
          >
            Proximo
          </button>
        </div>
      </div>
    </main>
  );
}

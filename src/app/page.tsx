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
    <main className="flex flex-col gap-4 items-center justify-between bg-identity-primary max-w-[360px] mx-auto p-1">
      <div className="flex flex-col gap-2 px-3 pt-3 pb-6 w-full">
        <div className="flex gap-4 items-center">
          <div className="relative w-[24px] h-[24px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8572 12C14.8572 13.578 13.578 14.8571 12.0001 14.8571C10.4221 14.8571 9.14292 13.578 9.14292 12C9.14292 10.422 10.4221 9.14286 12.0001 9.14286C13.578 9.14286 14.8572 10.422 14.8572 12Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0001 24C18.0454 24 23.0467 19.5296 23.8785 13.7143H16.8503C16.1443 15.7118 14.2393 17.1429 12.0001 17.1429C9.76083 17.1429 7.85584 15.7118 7.14984 13.7143H0.121582C0.953404 19.5296 5.95468 24 12.0001 24ZM7.14984 10.2857H0.121582C0.953404 4.47035 5.95468 0 12.0001 0C18.0454 0 23.0467 4.47035 23.8785 10.2857H16.8503C16.1443 8.28824 14.2393 6.85714 12.0001 6.85714C9.76083 6.85714 7.85584 8.28824 7.14984 10.2857ZM14.8572 12C14.8572 13.578 13.578 14.8571 12.0001 14.8571C10.4221 14.8571 9.14292 13.578 9.14292 12C9.14292 10.422 10.4221 9.14286 12.0001 9.14286C13.578 9.14286 14.8572 10.422 14.8572 12Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="headline text-grayscale-white">Pokédex</h1>
        </div>
      </div>
      <div className="flex justify-center gap-2 flex-wrap px-3 py-6 bg-grayscale-white rounded-lg shadow-inner2dp">
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
      {/* <div className="flex items-center sticky bottom-0 bg-white w-full justify-between p-2">
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
        </div> */}
    </main>
  );
}

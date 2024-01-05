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
        <div className="flex gap-4 w-full">
          <div className="rounded-2xl bg-grayscale-white shadow-inner2dp flex-1 pl-3 pr-4 py-2 flex items-center gap-2">
            <div className="relative w-[16px] h-[16px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9 13.6167L8.88333 9.6C8.55 9.88889 8.16111 10.1139 7.71667 10.275C7.27222 10.4361 6.8 10.5167 6.3 10.5167C5.1 10.5167 4.08333 10.1 3.25 9.26667C2.41667 8.43334 2 7.42778 2 6.25C2 5.07223 2.41667 4.06667 3.25 3.23334C4.08333 2.4 5.09444 1.98334 6.28333 1.98334C7.46111 1.98334 8.46389 2.4 9.29167 3.23334C10.1194 4.06667 10.5333 5.07223 10.5333 6.25C10.5333 6.72778 10.4556 7.18889 10.3 7.63334C10.1444 8.07778 9.91111 8.49445 9.6 8.88334L13.65 12.9C13.75 12.9889 13.8 13.1028 13.8 13.2417C13.8 13.3806 13.7444 13.5056 13.6333 13.6167C13.5333 13.7167 13.4111 13.7667 13.2667 13.7667C13.1222 13.7667 13 13.7167 12.9 13.6167ZM6.28333 9.51667C7.18333 9.51667 7.95 9.19723 8.58333 8.55834C9.21667 7.91945 9.53333 7.15 9.53333 6.25C9.53333 5.35 9.21667 4.58056 8.58333 3.94167C7.95 3.30278 7.18333 2.98334 6.28333 2.98334C5.37222 2.98334 4.59722 3.30278 3.95833 3.94167C3.31944 4.58056 3 5.35 3 6.25C3 7.15 3.31944 7.91945 3.95833 8.55834C4.59722 9.19723 5.37222 9.51667 6.28333 9.51667Z"
                  fill="#DC0A2D"
                />
              </svg>
            </div>
            <input
              placeholder="Search"
              className="bg-transparent flex-1 text-grayscale-medium body-3 px-1"
              type="text"
            />
          </div>
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

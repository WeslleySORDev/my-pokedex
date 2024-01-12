"use client"
import { IPokemon } from "@/@types/Pokemon";
import { PokemonLogo } from "@/components/PokemonLogo";
import { instance } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from 'next/navigation'
import { PokemonCard } from "@/components/PokemonCard";
import { SkeletonCard } from "@/components/SkeletonCard";

export default function Search() {
  const params = useParams()
  const fetchPokemonData = async () => {
    const pokemonNames = await instance
      .get("pokemon/?limit=1304&offset=0")
      .then((res) => res.data.results);
    const filteredPokemonNames = pokemonNames.filter((pokemon: { name: string }) => pokemon.name.includes(params.searchParam as string))
    const allPokemonData: any = filteredPokemonNames.length > 0 ? await Promise.all(
      filteredPokemonNames.map(
        async (pokemonName: { name: string }): Promise<any> => {
          const pokemonData = await instance
            .get<IPokemon>("pokemon/" + pokemonName.name)
            .then((res) => res.data);
          return pokemonData;
        },
      ),
    ) : [];
    return allPokemonData;
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["pokemons", params],
    queryFn: () => fetchPokemonData(),
  });
  if (isLoading) {
    return (
      <main className="mx-auto flex max-w-[640px] flex-col items-center justify-between gap-4 bg-identity-primary p-1">
        <div className="flex w-full flex-col gap-2 px-3 pt-3">
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-16">
            <PokemonLogo />
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-4 text-grayscale-dark">
          <div className="flex items-center gap-4">
            <span className="subtitle-1 text-grayscale-white">Filtro: </span>
            <span className="body-1 max-w-52 truncate rounded bg-grayscale-white px-4 py-2">
              {params.searchParam}
            </span>
          </div>
          <Link
            href="/"
            className="rounded-md bg-[#7b8795] px-4 py-2 text-grayscale-white hover:brightness-95 body-1"
          >
            Página Inicial
          </Link>
        </div>
        <div className="flex max-h-[calc(100lvh-116px)] min-h-[calc(100lvh-116px)] content-start w-full flex-wrap justify-center gap-2 overflow-auto rounded-lg bg-grayscale-white px-3 py-6 shadow-inner2dp sm:max-h-[calc(100lvh-116px)] sm:min-h-[calc(100lvh-116px)]">
          {Array.from({ length: 64 }, (_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </main>
    )
  }
  return (
    <main className="mx-auto flex max-w-[640px] flex-col items-center justify-between gap-4 bg-identity-primary p-1">
      <div className="flex w-full flex-col gap-2 px-3 pt-3">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-16">
          <PokemonLogo />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-4 text-grayscale-dark">
        <div className="flex items-center gap-4">
          <span className="subtitle-1 text-grayscale-white">Filtro: </span>
          <span className="body-1 max-w-52 truncate rounded bg-grayscale-white px-4 py-2">
            {params.searchParam}
          </span>
        </div>
        <Link
          href="/"
          className="rounded-md bg-[#7b8795] px-4 py-2 text-grayscale-white hover:brightness-95 body-1"
        >
          Página Inicial
        </Link>
      </div>
      <div className="flex max-h-[calc(100lvh-116px)] min-h-[calc(100lvh-116px)] content-start w-full flex-wrap justify-center gap-2 overflow-auto rounded-lg bg-grayscale-white px-3 py-6 shadow-inner2dp sm:max-h-[calc(100lvh-116px)] sm:min-h-[calc(100lvh-116px)]">
        {data.length > 0 ? data.map((pokemon: IPokemon) => {
          return (
            <PokemonCard
              name={pokemon.name}
              id={pokemon.id.toString()}
              key={pokemon.name + pokemon.id}
            />
          );
        }) : <h1 className="text-center headline">Nenhum resultado encontrado, volte para a pagina inicial e procure por outra coisa.</h1>
        }
      </div>
    </main>
  )
}
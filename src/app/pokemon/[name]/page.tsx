"use client";

import { instance } from "@/services/axios";
import { ArrowBack } from "./components/ArrowBack";
import { LoadingPage } from "./components/LoadingPage";
import { PokeballBG } from "./components/PokeballBG";
import { PokemonHeight } from "./components/PokemonHeight";
import { PokemonImage } from "./components/PokemonImage";
import { PokemonMoves } from "./components/PokemonMoves";
import { PokemonType } from "./components/PokemonType";
import { PokemonWeight } from "./components/PokemonWeight";
import { IPokemon } from "@/@types/Pokemon";
import { useQuery } from "@tanstack/react-query";

type PokemonType = {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  weight: number;
  height: number;
  id: number;
  name: string;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};

export default function Pokemon({ params }: { params: { name: string } }) {
  const pokemonBgVariants: any = {
    bug: "bg-type-bug",
    dark: "bg-type-dark",
    dragon: "bg-type-dragon",
    electric: "bg-type-electric",
    fairy: "bg-type-fairy",
    fighting: "bg-type-fighting",
    fire: "bg-type-fire",
    flying: "bg-type-flying",
    ghost: "bg-type-ghost",
    normal: "bg-type-normal",
    grass: "bg-type-grass",
    ground: "bg-type-ground",
    ice: "bg-type-ice",
    poison: "bg-type-poison",
    psychic: "bg-type-psychic",
    rock: "bg-type-rock",
    steel: "bg-type-steel",
    water: "bg-type-water",
  };
  const fetchPokemonData = async (name: string) => {
    const data = await instance
      .get<PokemonType>(`pokemon/${name}`)
      .then((res) => res.data);
    return data;
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["pokemons", params.name],
    queryFn: () => fetchPokemonData(params.name),
  });
  if (isLoading) {
    return <LoadingPage />;
  }
  if (data) {
    const formattedID =
      data.id.toString().length === 1
        ? "00" + data.id.toString()
        : data.id.toString().length === 2
        ? "0" + data.id.toString()
        : data.id.toString();
    return (
      <main
        className={`flex flex-col max-w-[640px] mx-auto min-h-screen max-h-screen relative p-1 ${
          pokemonBgVariants[data.types[0].type.name]
        }`}
      >
        <div className="flex px-5 pt-5 pb-6 gap-2">
          <ArrowBack />
          <h1 className="headline text-grayscale-white flex-1 truncate">
            {data.name[0].toUpperCase() + data.name.slice(1)}
          </h1>
          <span className="subtitle-2 text-grayscale-white">
            #{formattedID}
          </span>
        </div>
        <div className="max-h-[640px] min-h-[640px] mt-auto w-full bg-grayscale-white relative flex flex-col gap-4 rounded-lg shadow-inner2dp pt-14 px-2 sm:px-5 pb-5">
          <PokemonImage
            url={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedID}.png`}
            alt={`Imagem do pokemon ${data.name}`}
          />
          <div className="flex gap-4 items-center w-full justify-center">
            {data.types
              ? data.types.map((type) => {
                  return (
                    <PokemonType
                      key={type.type.name + type.slot}
                      type={type.type.name}
                      className={`px-2 py-[2px] rounded-[10px] text-grayscale-white subtitle-3 ${
                        pokemonBgVariants[type.type.name]
                      }`}
                    />
                  );
                })
              : null}
          </div>
          <span className="text-grayscale-wireframe subtitle-1 text-center">
            About
          </span>
          <div className="flex w-full h-16">
            <PokemonWeight />
            <div className="w-[1px] h-full bg-grayscale-light"></div>
            <PokemonHeight />
            <div className="w-[1px] h-full bg-grayscale-light"></div>
            <PokemonMoves />
          </div>
          <span className="w-full line-clamp-6 text-grayscale-dark body-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            iaculis eros vitae tellus condimentum maximus sit amet in eros. cing
            elit. Nunc iaculis eros vitae tellus condimentum maximus sit amet in
            eros.. cing elit. Nunc iaculis eros vitae tellus condimentum maximus
            sit amet in eros.
          </span>
          <span className="text-grayscale-wireframe subtitle-1 text-center">
            Base Stats
          </span>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col">
              <span className="max-h-4 subtitle-3 text-grayscale-wireframe text-end">
                HP
              </span>
              <span className="max-h-4 subtitle-3 text-grayscale-wireframe text-end">
                ATK
              </span>
              <span className="max-h-4 subtitle-3 text-grayscale-wireframe text-end">
                DEF
              </span>
              <span className="max-h-4 subtitle-3 text-grayscale-wireframe text-end">
                SATK
              </span>
              <span className="max-h-4 subtitle-3 text-grayscale-wireframe text-end">
                SDEF
              </span>
              <span className="max-h-4 subtitle-3 text-grayscale-wireframe text-end">
                SPD
              </span>
            </div>
            <div className="w-[1px] min-h-full bg-grayscale-light"></div>
            <div className="flex flex-col">
              <span className="max-h-4 body-3 text-grayscale-dark">999</span>
              <span className="max-h-4 body-3 text-grayscale-dark">999</span>
              <span className="max-h-4 body-3 text-grayscale-dark">999</span>
              <span className="max-h-4 body-3 text-grayscale-dark">999</span>
              <span className="max-h-4 body-3 text-grayscale-dark">999</span>
              <span className="max-h-4 body-3 text-grayscale-dark">999</span>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex w-full max-h-4 items-center flex-1 relative">
                <div
                  className={`h-1 w-full rounded opacity-[0.2] ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
                <div
                  className={`h-1 rounded-l w-1/2 top-1/2 -translate-y-1/2 bg-opacity-100 left-0 absolute ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
              </div>
              <div className="flex w-full max-h-4 items-center flex-1 relative">
                <div
                  className={`h-1 w-full rounded opacity-[0.2] ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
                <div
                  className={`h-1 rounded-l w-1/2 top-1/2 -translate-y-1/2 bg-opacity-100 left-0 absolute ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
              </div>
              <div className="flex w-full max-h-4 items-center flex-1 relative">
                <div
                  className={`h-1 w-full rounded opacity-[0.2] ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
                <div
                  className={`h-1 rounded-l w-1/2 top-1/2 -translate-y-1/2 bg-opacity-100 left-0 absolute ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
              </div>
              <div className="flex w-full max-h-4 items-center flex-1 relative">
                <div
                  className={`h-1 w-full rounded opacity-[0.2] ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
                <div
                  className={`h-1 rounded-l w-1/2 top-1/2 -translate-y-1/2 bg-opacity-100 left-0 absolute ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
              </div>
              <div className="flex w-full max-h-4 items-center flex-1 relative">
                <div
                  className={`h-1 w-full rounded opacity-[0.2] ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
                <div
                  className={`h-1 rounded-l w-1/2 top-1/2 -translate-y-1/2 bg-opacity-100 left-0 absolute ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
              </div>
              <div className="flex w-full max-h-4 items-center flex-1 relative">
                <div
                  className={`h-1 w-full rounded opacity-[0.2] ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
                <div
                  className={`h-1 rounded-l w-1/2 top-1/2 -translate-y-1/2 bg-opacity-100 left-0 absolute ${
                    pokemonBgVariants[data.types[0].type.name]
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <PokeballBG />
      </main>
    );
  }
}

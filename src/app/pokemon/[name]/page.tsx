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
import { IPokemon } from "@/types/Pokemon";
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
    const getProgressBar = (value: number) => {
      const biggestStats = Math.max(...data.stats.map((o) => o.base_stat));
      const progressBar =
        biggestStats < 100
          ? Math.round((value / 100) * 100)
          : Math.round((value / biggestStats) * 100);
      return progressBar.toString() + "%";
    };
    return (
      <main
        className={`relative mx-auto flex max-h-screen min-h-screen max-w-[640px] flex-col p-1 ${
          pokemonBgVariants[data.types[0].type.name]
        }`}
      >
        <div className="flex gap-2 px-5 pb-6 pt-5">
          <ArrowBack />
          <h1 className="headline flex-1 truncate text-grayscale-white">
            {data.name[0].toUpperCase() + data.name.slice(1)}
          </h1>
          <span className="subtitle-2 text-grayscale-white">
            #{formattedID}
          </span>
        </div>
        <div className="relative mt-auto flex max-h-[576px] min-h-[576px] w-full flex-col gap-4 rounded-lg bg-grayscale-white px-2 pb-5 pt-14 shadow-inner2dp sm:px-5">
          <PokemonImage
            url={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedID}.png`}
            alt={`Imagem do pokemon ${data.name}`}
          />
          <div className="flex w-full items-center justify-center gap-4">
            {data.types
              ? data.types.map((type) => {
                  return (
                    <PokemonType
                      key={type.type.name + type.slot}
                      type={type.type.name}
                      className={`subtitle-3 rounded-[10px] px-2 py-[2px] text-grayscale-white ${
                        pokemonBgVariants[type.type.name]
                      }`}
                    />
                  );
                })
              : null}
          </div>
          <span className="subtitle-1 text-center text-grayscale-wireframe">
            About
          </span>
          <div className="flex h-16 w-full">
            <PokemonWeight weight={data.weight} />
            <div className="h-full w-[1px] bg-grayscale-light"></div>
            <PokemonHeight height={data.height} />
            <div className="h-full w-[1px] bg-grayscale-light"></div>
            <PokemonMoves abilities={data.abilities} />
          </div>
          <span className="body-3 line-clamp-6 w-full text-grayscale-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            iaculis eros vitae tellus condimentum maximus sit amet in eros. cing
            elit. Nunc iaculis eros vitae tellus condimentum maximus sit amet in
            eros.. cing elit. Nunc iaculis eros vitae tellus condimentum maximus
            sit amet in eros.
          </span>
          <span className="subtitle-1 text-center text-grayscale-wireframe">
            Base Stats
          </span>
          <div className="flex w-full gap-4">
            <div className="flex flex-col">
              <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
                HP
              </span>
              <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
                ATK
              </span>
              <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
                DEF
              </span>
              <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
                SATK
              </span>
              <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
                SDEF
              </span>
              <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
                SPD
              </span>
            </div>
            <div className="min-h-full w-[1px] bg-grayscale-light"></div>
            <div className="flex flex-col">
              {data.stats.map((stat, index) => {
                return (
                  <span
                    key={
                      stat.base_stat +
                      Math.floor(Math.random() * (999 - 1 + 1) + 1)
                    }
                    className="body-3 max-h-4 text-grayscale-dark"
                  >
                    {stat.base_stat.toString().length === 1
                      ? "00" + stat.base_stat.toString()
                      : stat.base_stat.toString().length === 2
                        ? "0" + stat.base_stat.toString()
                        : stat.base_stat.toString()}
                  </span>
                );
              })}
            </div>
            <div className="flex w-full flex-col">
              {Array.from({
                length: 6,
              }).map((_, index) => {
                return (
                  <div
                    key={`Progress Bar Stats key ` + index}
                    className="relative flex max-h-4 w-full flex-1 items-center"
                  >
                    <div
                      className={`h-1 w-full rounded opacity-[0.2] ${
                        pokemonBgVariants[data.types[0].type.name]
                      }`}
                    ></div>
                    <div
                      className={`absolute left-0 top-1/2 h-1 w-0 -translate-y-1/2 animate-widthAnimation rounded-l bg-opacity-100 transition-all duration-75 ${
                        pokemonBgVariants[data.types[0].type.name]
                      }`}
                      style={{
                        width: getProgressBar(data.stats[index].base_stat),
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <PokeballBG />
      </main>
    );
  }
}

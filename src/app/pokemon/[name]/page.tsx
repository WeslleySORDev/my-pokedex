"use client";

import { useQuery } from "@tanstack/react-query";
import { instance } from "@/services/axios";
import { LoadingPage } from "@/components/pokemon/loading-page";
import { PokemonImage } from "@/components/pokemon/pokemon-image";
import { PokemonType } from "@/components/pokemon/pokemon-type";
import { Height } from "@/components/pokemon/attribute/height";
import { Weight } from "@/components/pokemon/attribute/weight";
import { Moves } from "@/components/pokemon/attribute/moves";
import { PokeballIcon } from "@/components/pokemon/icons/pokeball-icon";
import { Title } from "@/components/pokemon/title";
import { BaseStats } from "@/components/pokemon/base-stats";
import { pokemonBgVariants } from "@/utils/variables";

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
        className={`relative mx-auto flex max-h-screen min-h-screen max-w-[640px] flex-col p-1 ${
          pokemonBgVariants[data.types[0].type.name]
        }`}
      >
        <Title name={data.name} formattedID={formattedID} />
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
            <Weight weight={data.weight} />
            <div className="h-full w-[1px] bg-grayscale-light"></div>
            <Height height={data.height} />
            <div className="h-full w-[1px] bg-grayscale-light"></div>
            <Moves abilities={data.abilities} />
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
          <BaseStats stats={data.stats} types={data.types} />
        </div>
        <PokeballIcon />
      </main>
    );
  }
}

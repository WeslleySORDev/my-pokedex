import { ArrowBack } from "./ArrowBack";
import { PokeballBG } from "./PokeballBG";
import { PokemonHeight } from "./PokemonHeight";
import { PokemonImage } from "./PokemonImage";
import { PokemonMoves } from "./PokemonMoves";
import { PokemonType } from "./PokemonType";
import { PokemonWeight } from "./PokemonWeight";

export function LoadingPage() {
  return (
    <main className="flex flex-col max-w-[640px] mx-auto min-h-screen max-h-screen bg-grayscale-wireframe relative p-1">
      <div className="flex px-5 pt-5 pb-6 gap-2">
        <ArrowBack />
        <h1 className="headline text-grayscale-white flex-1 truncate">
          Pokemon Name
        </h1>
        <span className="subtitle-2 text-grayscale-white">#999</span>
      </div>
      <div className="max-h-[640px] min-h-[640px] mt-auto w-full bg-grayscale-white relative flex flex-col gap-4 rounded-lg shadow-inner2dp pt-14 px-2 sm:px-5 pb-5">
        <PokemonImage isLoading/>
        <div className="flex gap-4 items-center w-full justify-center">
          <PokemonType />
          <PokemonType />
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis
          eros vitae tellus condimentum maximus sit amet in eros. cing elit.
          Nunc iaculis eros vitae tellus condimentum maximus sit amet in eros..
          cing elit. Nunc iaculis eros vitae tellus condimentum maximus sit amet
          in eros.
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
            <div className="flex w-full max-h-4 items-center flex-1">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2] relative">
                <div className="h-full bg-grayscale-medium rounded-l w-1/2 top-0 left-0"></div>
              </div>
            </div>
            <div className="flex w-full max-h-4 items-center flex-1">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="h-full bg-grayscale-medium rounded-l w-1/2 top-0 left-0"></div>
              </div>
            </div>
            <div className="flex w-full max-h-4 items-center flex-1">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="h-full bg-grayscale-medium rounded-l w-1/2 top-0 left-0"></div>
              </div>
            </div>
            <div className="flex w-full max-h-4 items-center flex-1">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="h-full bg-grayscale-medium rounded-l w-1/2 top-0 left-0"></div>
              </div>
            </div>
            <div className="flex w-full max-h-4 items-center flex-1">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="h-full bg-grayscale-medium rounded-l w-1/2 top-0 left-0"></div>
              </div>
            </div>
            <div className="flex w-full max-h-4 items-center flex-1">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="h-full bg-grayscale-medium rounded-l w-1/2 top-0 left-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PokeballBG />
    </main>
  );
}
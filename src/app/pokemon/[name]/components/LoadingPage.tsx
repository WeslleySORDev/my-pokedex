import { ArrowBack } from "./ArrowBack";
import { PokeballBG } from "./PokeballBG";
import { PokemonHeight } from "./PokemonHeight";
import { PokemonImage } from "./PokemonImage";
import { PokemonMoves } from "./PokemonMoves";
import { PokemonType } from "./PokemonType";
import { PokemonWeight } from "./PokemonWeight";

export function LoadingPage() {
  return (
    <main className="relative mx-auto flex max-h-screen min-h-screen max-w-[640px] flex-col bg-grayscale-wireframe p-1">
      <div className="flex gap-2 px-5 pb-6 pt-5">
        <ArrowBack />
        <h1 className="headline flex-1 truncate text-grayscale-white">
          Pokemon Name
        </h1>
        <span className="subtitle-2 text-grayscale-white">#999</span>
      </div>
      <div className="relative mt-auto flex max-h-[576px] min-h-[576px] w-full flex-col gap-4 rounded-lg bg-grayscale-white px-2 pb-5 pt-14 shadow-inner2dp sm:px-5">
        <PokemonImage isLoading />
        <div className="flex w-full items-center justify-center gap-4">
          <PokemonType />
          <PokemonType />
        </div>
        <span className="subtitle-1 text-center text-grayscale-wireframe">
          About
        </span>
        <div className="flex h-16 w-full">
          <PokemonWeight />
          <div className="h-full w-[1px] bg-grayscale-light"></div>
          <PokemonHeight />
          <div className="h-full w-[1px] bg-grayscale-light"></div>
          <PokemonMoves />
        </div>
        <span className="body-3 line-clamp-6 w-full text-grayscale-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis
          eros vitae tellus condimentum maximus sit amet in eros. cing elit.
          Nunc iaculis eros vitae tellus condimentum maximus sit amet in eros..
          cing elit. Nunc iaculis eros vitae tellus condimentum maximus sit amet
          in eros.
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
            <span className="body-3 max-h-4 text-grayscale-dark">999</span>
            <span className="body-3 max-h-4 text-grayscale-dark">999</span>
            <span className="body-3 max-h-4 text-grayscale-dark">999</span>
            <span className="body-3 max-h-4 text-grayscale-dark">999</span>
            <span className="body-3 max-h-4 text-grayscale-dark">999</span>
            <span className="body-3 max-h-4 text-grayscale-dark">999</span>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex max-h-4 w-full flex-1 items-center">
              <div className="relative h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="left-0 top-0 h-full w-1/2 rounded-l bg-grayscale-medium"></div>
              </div>
            </div>
            <div className="flex max-h-4 w-full flex-1 items-center">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="left-0 top-0 h-full w-1/2 rounded-l bg-grayscale-medium"></div>
              </div>
            </div>
            <div className="flex max-h-4 w-full flex-1 items-center">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="left-0 top-0 h-full w-1/2 rounded-l bg-grayscale-medium"></div>
              </div>
            </div>
            <div className="flex max-h-4 w-full flex-1 items-center">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="left-0 top-0 h-full w-1/2 rounded-l bg-grayscale-medium"></div>
              </div>
            </div>
            <div className="flex max-h-4 w-full flex-1 items-center">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="left-0 top-0 h-full w-1/2 rounded-l bg-grayscale-medium"></div>
              </div>
            </div>
            <div className="flex max-h-4 w-full flex-1 items-center">
              <div className="h-1 w-full rounded bg-grayscale-wireframe opacity-[0.2]">
                <div className="left-0 top-0 h-full w-1/2 rounded-l bg-grayscale-medium"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PokeballBG />
    </main>
  );
}

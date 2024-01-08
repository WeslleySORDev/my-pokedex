import { ArrowBack } from "./components/ArrowBack";
import { PokemonHeight } from "./components/PokemonHeight";
import { PokemonImage } from "./components/PokemonImage";
import { PokemonMoves } from "./components/PokemonMoves";
import { PokemonType } from "./components/PokemonType";
import { PokemonWeight } from "./components/PokemonWeight";

export default function Pokemon({ params }: { params: { name: string } }) {
  return (
    <main className="flex flex-col max-w-[640px] mx-auto min-h-screen max-h-screen bg-grayscale-wireframe relative p-1">
      <div className="flex px-5 pt-5 pb-6 gap-2">
        <ArrowBack />
        <h1 className="headline text-grayscale-white flex-1 truncate">
          {params.name[0].toUpperCase() + params.name.slice(1)}
        </h1>
        <span className="subtitle-2 text-grayscale-white">#999</span>
      </div>
      <div className="max-h-[640px] min-h-[640px] mt-auto w-full bg-grayscale-white relative flex flex-col gap-4 rounded-lg shadow-inner2dp pt-14 px-2 sm:px-5 pb-5">
        <PokemonImage />
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
      </div>
      <div className="absolute top-1 right-1">
        <svg
          width="208"
          height="208"
          viewBox="0 0 208 208"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <path
              d="M128.762 104C128.762 117.676 117.676 128.762 104 128.762C90.3244 128.762 79.2381 117.676 79.2381 104C79.2381 90.3244 90.3244 79.2381 104 79.2381C117.676 79.2381 128.762 90.3244 128.762 104Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M104 208C156.393 208 199.738 169.257 206.947 118.857H146.035C139.917 136.169 123.407 148.571 104 148.571C84.5933 148.571 68.0835 136.169 61.9648 118.857H1.05322C8.26235 169.257 51.6067 208 104 208ZM61.9648 89.1429H1.05322C8.26235 38.7431 51.6067 0 104 0C156.393 0 199.738 38.7431 206.947 89.1429H146.035C139.917 71.8314 123.407 59.4286 104 59.4286C84.5933 59.4286 68.0835 71.8314 61.9648 89.1429ZM128.762 104C128.762 117.676 117.676 128.762 104 128.762C90.3244 128.762 79.2381 117.676 79.2381 104C79.2381 90.3244 90.3244 79.2381 104 79.2381C117.676 79.2381 128.762 90.3244 128.762 104Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </main>
  );
}

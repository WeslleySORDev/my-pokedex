import { ArrowBack } from "./components/ArrowBack";
import { PokemonImage } from "./components/PokemonImage";
import { PokemonType } from "./components/PokemonType";

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
          <div className="flex flex-col flex-1">
            <div className="flex fill-grayscale-dark text-grayscale-dark gap-2 justify-center my-auto">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.28333 13H13.05L12 5.66663H5.33333L4.28333 13ZM8.66667 4.66663C8.95556 4.66663 9.19444 4.5694 9.38333 4.37496C9.57222 4.18051 9.66667 3.9444 9.66667 3.66663C9.66667 3.37774 9.57222 3.13885 9.38333 2.94996C9.19444 2.76107 8.95556 2.66663 8.66667 2.66663C8.38889 2.66663 8.15278 2.76107 7.95833 2.94996C7.76389 3.13885 7.66667 3.37774 7.66667 3.66663C7.66667 3.9444 7.76389 4.18051 7.95833 4.37496C8.15278 4.5694 8.38889 4.66663 8.66667 4.66663ZM10.4 4.66663H12C12.2556 4.66663 12.4778 4.74718 12.6667 4.90829C12.8556 5.0694 12.9667 5.27774 13 5.53329L14.0333 12.8666C14.0778 13.1666 14.0028 13.4305 13.8083 13.6583C13.6139 13.8861 13.3611 14 13.05 14H4.28333C3.97222 14 3.71945 13.8861 3.525 13.6583C3.33056 13.4305 3.25556 13.1666 3.3 12.8666L4.33333 5.53329C4.36667 5.27774 4.47778 5.0694 4.66667 4.90829C4.85556 4.74718 5.07778 4.66663 5.33333 4.66663H6.93333C6.84444 4.51107 6.77778 4.35274 6.73333 4.19163C6.68889 4.03051 6.66667 3.85551 6.66667 3.66663C6.66667 3.11107 6.86111 2.63885 7.25 2.24996C7.63889 1.86107 8.11111 1.66663 8.66667 1.66663C9.22222 1.66663 9.69444 1.86107 10.0833 2.24996C10.4722 2.63885 10.6667 3.11107 10.6667 3.66663C10.6667 3.85551 10.6444 4.03051 10.6 4.19163C10.5556 4.35274 10.4889 4.51107 10.4 4.66663ZM4.28333 13H13.05H4.28333Z"
                  fill="#1D1D1D"
                />
              </svg>
              <span className="body-3">9,9 kg</span>
            </div>
            <span className="text-center mt-auto caption text-grayscale-medium">
              Weight
            </span>
          </div>
          <div className="w-[1px] h-full bg-grayscale-light"></div>
          <div className="flex flex-col flex-1">
            <div className="flex fill-grayscale-dark text-grayscale-dark gap-2 justify-center my-auto">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 2.33337C4 2.06671 4.1 1.83337 4.3 1.63337C4.5 1.43337 4.73333 1.33337 5 1.33337L11 1.33337C11.2556 1.33337 11.4861 1.43337 11.6917 1.63337C11.8972 1.83337 12 2.06671 12 2.33337V13.6667C12 13.9334 11.8972 14.1667 11.6917 14.3667C11.4861 14.5667 11.2556 14.6667 11 14.6667H5C4.73333 14.6667 4.5 14.5667 4.3 14.3667C4.1 14.1667 4 13.9334 4 13.6667L4 2.33337ZM5 2.33337L5 13.6667H11V11.5H8V10.5H11V8.50004H8V7.50004H11V5.50004H8V4.50004H11V2.33337L5 2.33337ZM8 4.50004V5.50004V4.50004ZM8 7.50004V8.50004V7.50004ZM8 10.5V11.5V10.5Z"
                  fill="#1D1D1D"
                />
              </svg>

              <span className="body-3">9,9 m</span>
            </div>
            <span className="text-center mt-auto caption text-grayscale-medium">
              Height
            </span>
          </div>
          <div className="w-[1px] h-full bg-grayscale-light"></div>
          <div className="flex flex-col flex-1">
            <div className="flex flex-col text-grayscale-dark gap-1 justify-center items-center my-auto">
              <span className="text-grayscale-dark body-3">Ability 1</span>
              <span className="text-grayscale-dark body-3">Ability 1</span>
            </div>
            <span className="text-center mt-auto caption text-grayscale-medium">
              Moves
            </span>
          </div>
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

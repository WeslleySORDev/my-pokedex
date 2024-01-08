import { ArrowBack } from "./components/ArrowBack";

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
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 z-10">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="200" height="200" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_1258_9" transform="scale(0.0025)" />
              </pattern>
              <image
                id="image0_1258_9"
                width="400"
                height="400"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBQTFRFAAAAZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm+zfHiAAAAQB0Uk5TABNEHA0EMMGSbiYBg//RTwYYxudmEjfm43IPafL83WgMChQirtZXBzaLtLaz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"
              />
            </defs>
          </svg>
        </div>
        <div className="flex gap-4 items-center w-full justify-center">
          <span className="px-2 py-[2px] rounded-[10px] bg-grayscale-medium text-grayscale-white subtitle-3">
            Type
          </span>
          <span className="px-2 py-[2px] rounded-[10px] bg-grayscale-medium text-grayscale-white subtitle-3">
            Type
          </span>
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

type PokemonHeightType = {
  height?: number;
};

export function PokemonHeight({ height }: PokemonHeightType) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="my-auto flex justify-center gap-2 fill-grayscale-dark text-grayscale-dark">
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

        <span className="body-3">{height ? height : "9,9"} m</span>
      </div>
      <span className="caption mt-auto text-center text-grayscale-medium">
        Height
      </span>
    </div>
  );
}

type PokemonTypeProps = {
  type?: string;
  className?: string;
};

export function PokemonType({ type, className }: PokemonTypeProps) {
  return (
    <span
      className={
        className
          ? className
          : "px-2 py-[2px] rounded-[10px] bg-grayscale-medium text-grayscale-white subtitle-3"
      }
    >
      {type ? type[0].toUpperCase() + type.slice(1) : "Type"}
    </span>
  );
}

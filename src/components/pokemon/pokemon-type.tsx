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
          : "subtitle-3 rounded-[10px] bg-grayscale-medium px-2 py-[2px] text-grayscale-white"
      }
    >
      {type ? type[0].toUpperCase() + type.slice(1) : "Type"}
    </span>
  );
}

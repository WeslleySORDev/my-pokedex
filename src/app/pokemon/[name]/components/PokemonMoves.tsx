type PokemonMovesType = {
  abilities?: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
};

export function PokemonMoves({ abilities }: PokemonMovesType) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="my-auto flex flex-col items-center justify-center gap-1 text-grayscale-dark">
        {abilities ? (
          abilities.map((ability, index) =>
            index < 2 ? (
              <span
                key={ability.ability.name + ability.slot}
                className="body-3 truncate text-grayscale-dark"
              >
                {ability.ability.name[0].toUpperCase() +
                  ability.ability.name.slice(1)}
              </span>
            ) : null,
          )
        ) : (
          <>
            <span className="body-3 text-grayscale-dark">Ability 1</span>
            <span className="body-3 text-grayscale-dark">Ability 1</span>
          </>
        )}
      </div>
      <span className="caption mt-auto text-center text-grayscale-medium">
        Moves
      </span>
    </div>
  );
}

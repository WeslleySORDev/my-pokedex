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
    <div className="flex flex-col flex-1">
      <div className="flex flex-col text-grayscale-dark gap-1 justify-center items-center my-auto">
        {abilities ? (
          abilities.map((ability, index) =>
            index < 2 ? (
              <span
                key={ability.ability.name + ability.slot}
                className="text-grayscale-dark body-3 truncate"
              >
                {ability.ability.name[0].toUpperCase() +
                  ability.ability.name.slice(1)}
              </span>
            ) : null
          )
        ) : (
          <>
            <span className="text-grayscale-dark body-3">Ability 1</span>
            <span className="text-grayscale-dark body-3">Ability 1</span>
          </>
        )}
      </div>
      <span className="text-center mt-auto caption text-grayscale-medium">
        Moves
      </span>
    </div>
  );
}

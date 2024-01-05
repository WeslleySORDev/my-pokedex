import Image from "next/image";

type PokemonCardProps = {
  name: string;
  id: string;
  image: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};

export function PokemonCard(props: PokemonCardProps) {
  const formattedID =
    props.id.length === 1
      ? "00" + props.id
      : props.id.length === 2
      ? "0" + props.id
      : props.id;
  return (
    <div
      className="px-6 py-4 bg-[rgba(0,_0,_0,_0.10)] rounded-3xl flex gap-2 w-full max-w-[640px]"
      key={props.name}
    >
      <div className="relative w-[55px] h-[68px] mr-6">
        <Image
          loading="lazy"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedID}.png`}
          width={55}
          height={68}
          alt={props.name}
        />
      </div>
      <div className="flex flex-col flex-1 items-start w-full font-pokemonclassic">
        <span className="text-center max-w-64 truncate text-xs sm:text-base">
          {props.name[0].toUpperCase() + props.name.slice(1)}
        </span>
        <span>#{formattedID}</span>
      </div>
      <div className="flex items-center gap-1">
        {props.types && props.types.length > 0
          ? props.types.map((type) => {
              return (
                <div
                  key={props.name + props.id + type.type.name}
                  className="relative w-[48px] h-[28px] sm:w-16 sm:h-[28px]"
                >
                  <Image
                    className="max-w-full max-h-full"
                    src={`/assets/${type.type.name}.svg`}
                    width={64}
                    height={28}
                    alt="Pokemon Ability"
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

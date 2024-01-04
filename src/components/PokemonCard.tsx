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
      className="px-6 py-4 bg-[rgba(0,_0,_0,_0.10)] rounded-3xl flex gap-2 w-full max-w-[375px]"
      key={props.name}
    >
      <div className="relative max-w-[55px] max-h-[68px] mr-6">
        <Image
          loading="lazy"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedID}.png`}
          width={55}
          height={68}
          alt={props.name}
        />
      </div>
      <div className="flex flex-col flex-1 items-start">
        <span className="text-center">
          {props.name[0].toUpperCase() + props.name.slice(1)}
        </span>
        <span>#{formattedID}</span>
      </div>
      <div className="flex gap-1">
        {props.types && props.types.length > 0
          ? props.types.map((type) => {
              return (
                <Image
                  key={props.name + props.id + type.type.name}
                  src={`/assets/${type.type.name}.svg`}
                  width={64}
                  height={28}
                  alt="Pokemon Ability"
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

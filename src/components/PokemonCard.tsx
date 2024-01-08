import Image from "next/image";
import Link from "next/link";

type PokemonCardProps = {
  name: string;
  id: string;
  currentPage?: number;
};

export function PokemonCard(props: PokemonCardProps) {
  const formattedID =
    props.id.length === 1
      ? "00" + props.id
      : props.id.length === 2
      ? "0" + props.id
      : props.id;
  const setSessionCurrentPage = () => {
    sessionStorage.setItem(
      "my-pokedex-current-page",
      props.currentPage?.toString() as string
    );
  };
  return (
    <Link
      href={`/pokemon/${props.name}`}
      className="bg-grayscale-white rounded-lg shadow-drop2dp w-[104px] h-[108px] relative flex flex-col"
      onClick={setSessionCurrentPage}
    >
      <span className="px-2 pt-1 text-grayscale-medium caption text-end">
        #{formattedID}
      </span>
      <div className="relative w-[72px] h-[72px] mx-auto z-10">
        <Image
          loading="eager"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedID}.png`}
          width={72}
          height={72}
          alt={props.name}
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[44px] w-full bg-grayscale-background flex justify-center items-end rounded-lg">
        <span className="text-grayscale-dark body-3 max-w-[88px] truncate">
          {props.name[0].toUpperCase() + props.name.slice(1)}
        </span>
      </div>
    </Link>
  );
}

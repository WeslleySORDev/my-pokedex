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
      props.currentPage?.toString() as string,
    );
  };
  return (
    <Link
      href={`/pokemon/${props.name}`}
      className="relative flex h-[108px] w-[104px] flex-col rounded-lg bg-grayscale-white shadow-drop2dp"
      onClick={setSessionCurrentPage}
    >
      <span className="caption px-2 pt-1 text-end text-grayscale-medium">
        #{formattedID}
      </span>
      <div className="relative z-10 mx-auto h-[72px] w-[72px]">
        <Image
          loading="eager"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedID}.png`}
          width={72}
          height={72}
          alt={props.name}
        />
      </div>
      <div className="absolute bottom-0 left-1/2 flex h-[44px] w-full -translate-x-1/2 items-end justify-center rounded-lg bg-grayscale-background">
        <span className="body-3 max-w-[88px] truncate text-grayscale-dark">
          {props.name[0].toUpperCase() + props.name.slice(1)}
        </span>
      </div>
    </Link>
  );
}

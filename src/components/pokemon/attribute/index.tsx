import { Height } from "@/components/pokemon/attribute/height";
import { Weight } from "@/components/pokemon/attribute/weight";
import { Moves } from "@/components/pokemon/attribute/moves";

type AttributeProps = {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  weight: number;
  height: number;
};

export function Attribute({ abilities, height, weight }: AttributeProps) {
  return (
    <div className="flex h-16 w-full">
      <Weight weight={weight} />
      <div className="h-full w-[1px] bg-grayscale-light"></div>
      <Height height={height} />
      <div className="h-full w-[1px] bg-grayscale-light"></div>
      <Moves abilities={abilities} />
    </div>
  );
}

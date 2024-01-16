import { ArrowBack } from "@/components/pokemon/icons/arrow-back-icon";

type TitleProps = {
  formattedID: string;
  name: string;
};

export function Title({ name, formattedID }: TitleProps) {
  return (
    <div className="flex gap-2 px-5 pb-6 pt-5">
      <ArrowBack />
      <h1 className="headline flex-1 truncate text-grayscale-white">
        {name[0].toUpperCase() + name.slice(1)}
      </h1>
      <span className="subtitle-2 text-grayscale-white">#{formattedID}</span>
    </div>
  );
}

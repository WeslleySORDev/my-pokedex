type BaseStatsProps = {
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};

export function BaseStats({ stats, types }: BaseStatsProps) {
  const pokemonBgVariants: any = {
    bug: "bg-type-bug",
    dark: "bg-type-dark",
    dragon: "bg-type-dragon",
    electric: "bg-type-electric",
    fairy: "bg-type-fairy",
    fighting: "bg-type-fighting",
    fire: "bg-type-fire",
    flying: "bg-type-flying",
    ghost: "bg-type-ghost",
    normal: "bg-type-normal",
    grass: "bg-type-grass",
    ground: "bg-type-ground",
    ice: "bg-type-ice",
    poison: "bg-type-poison",
    psychic: "bg-type-psychic",
    rock: "bg-type-rock",
    steel: "bg-type-steel",
    water: "bg-type-water",
  };
  const getProgressBar = (value: number) => {
    const biggestStats = Math.max(...stats.map((o) => o.base_stat));
    const progressBar =
      biggestStats < 100
        ? Math.round((value / 100) * 100)
        : Math.round((value / biggestStats) * 100);
    return progressBar.toString() + "%";
  };
  return (
    <div className="flex w-full gap-4">
      <div className="flex flex-col">
        <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
          HP
        </span>
        <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
          ATK
        </span>
        <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
          DEF
        </span>
        <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
          SATK
        </span>
        <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
          SDEF
        </span>
        <span className="subtitle-3 max-h-4 text-end text-grayscale-wireframe">
          SPD
        </span>
      </div>
      <div className="min-h-full w-[1px] bg-grayscale-light"></div>
      <div className="flex flex-col">
        {stats.map((stat, index) => {
          return (
            <span
              key={
                stat.base_stat + Math.floor(Math.random() * (999 - 1 + 1) + 1)
              }
              className="body-3 max-h-4 text-grayscale-dark"
            >
              {stat.base_stat.toString().length === 1
                ? "00" + stat.base_stat.toString()
                : stat.base_stat.toString().length === 2
                  ? "0" + stat.base_stat.toString()
                  : stat.base_stat.toString()}
            </span>
          );
        })}
      </div>
      <div className="flex w-full flex-col">
        {Array.from({
          length: 6,
        }).map((_, index) => {
          return (
            <div
              key={`Progress Bar Stats key ` + index}
              className="relative flex max-h-4 w-full flex-1 items-center"
            >
              <div
                className={`h-1 w-full rounded opacity-[0.2] ${
                  pokemonBgVariants[types[0].type.name]
                }`}
              ></div>
              <div
                className={`absolute left-0 top-1/2 h-1 w-0 -translate-y-1/2 animate-widthAnimation rounded-l bg-opacity-100 transition-all duration-75 ${
                  pokemonBgVariants[types[0].type.name]
                }`}
                style={{
                  width: getProgressBar(stats[index].base_stat),
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

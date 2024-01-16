import { PokeballIcon } from "./pokeball-icon";

export function PokemonLogo() {
  return (
    <div className="flex items-center gap-4">
      <PokeballIcon />
      <h1 className="headline text-grayscale-white">Pokédex</h1>
    </div>
  );
}

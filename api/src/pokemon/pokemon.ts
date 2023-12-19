import { Pokemon as PokeApiPokemon } from "pokenode-ts";

export type Pokemon = Pick<PokeApiPokemon, "name" | "id"> & {
  sprite: PokeApiPokemon["sprites"]["front_default"];
};

import { NamedAPIResource, Pokemon as PokeApiPokemon } from "pokenode-ts";

export type Pokemon = Pick<PokeApiPokemon, "name" | "id"> & {
  sprite: PokeApiPokemon["sprites"]["front_default"];
};

export type PokemonNames = Pick<NamedAPIResource, "name">;

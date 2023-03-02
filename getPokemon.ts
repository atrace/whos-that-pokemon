import { Pokemon, PokemonClient } from "pokenode-ts";

export const getPokemon = async (name: string): Promise<Pokemon> => {
  const api = new PokemonClient();

  try {
    return await api.getPokemonByName(name);
  } catch (error) {
    console.error(error);
  }
};

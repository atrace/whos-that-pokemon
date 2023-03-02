import { NamedAPIResourceList, Pokemon, PokemonClient } from "pokenode-ts";

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  const api = new PokemonClient();

  try {
    return await api.getPokemonByName(name);
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonNames = async (
  offset?: number
): Promise<NamedAPIResourceList> => {
  const api = new PokemonClient();

  try {
    return await api.listPokemons(offset || 0, 20);
  } catch (error) {
    console.error(error);
  }
};

const capitalise = (word) => {
  if (word.length === 0) {
    return undefined;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getPrettyPokemonNames = async (offset?: number) => {
  const rawNames = await getPokemonNames();
  const prettyNames = [];

  rawNames.results.forEach((element) => {
    console.log(element);
    prettyNames.push({ value: element.name, label: capitalise(element.name) });
  });

  return prettyNames;
};

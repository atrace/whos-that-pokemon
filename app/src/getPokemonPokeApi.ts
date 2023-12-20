import { NamedAPIResource, Pokemon, PokemonClient } from "pokenode-ts";
import { Item } from "react-native-picker-select";

const capitalise = (word) => {
  if (word.length === 0) {
    return undefined;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getPrettyPokemonNames = (
  namesToPrettify: NamedAPIResource[]
): Item[] => {
  console.log("namesToPrettify:", namesToPrettify);
  const prettyNames = [];

  namesToPrettify.forEach((element) => {
    prettyNames.push({
      value: element.name,
      label: capitalise(element.name)
    });
  });

  return prettyNames;
};

export interface PokeClient {
  getPokemonByName: (name: string) => Promise<Pokemon>;
  getPokemonNames: (offset?: number) => Promise<Item[]>;
  getPokemonByHabitatId: (offset?: number) => Promise<Item[]>;
}

export const getPokeClient = (): PokeClient => {
  const client = new PokemonClient();

  const getPokemonByName = async (name: string): Promise<Pokemon> => {
    try {
      return await client.getPokemonByName(name);
    } catch (error) {
      console.error(error);
    }
  };

  const getPokemonNames = async (offset?: number): Promise<Item[]> => {
    try {
      const response = await client.listPokemons(offset || 0, 20);

      return getPrettyPokemonNames(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getPokemonByHabitatId = async (id: number): Promise<Item[]> => {
    try {
      const response = await client.getPokemonHabitatById(id);
      return getPrettyPokemonNames(response.pokemon_species);
    } catch (error) {
      console.error(error);
    }
  };

  return { getPokemonByName, getPokemonNames, getPokemonByHabitatId };
};

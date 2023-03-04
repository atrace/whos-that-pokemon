import {
  NamedAPIResource,
  NamedAPIResourceList,
  Pokemon,
  PokemonClient,
} from "pokenode-ts";
import { Item } from "react-native-picker-select";

const capitalise = (word) => {
  if (word.length === 0) {
    return undefined;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export interface PokeClient {
  getPokemonByName: (name: string) => Promise<Pokemon>;
  getPokemonNames: (offset?: number) => Promise<NamedAPIResourceList>;
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
    const api = new PokemonClient();

    try {
      const response = await api.listPokemons(offset || 0, 20);

      return getPrettyPokemonNames(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getPrettyPokemonNames = async (
    namesToPrettify: NamedAPIResource[]
  ): Promise<Item[]> => {
    const prettyNames = [];

    namesToPrettify.forEach((element) => {
      console.log(element);
      prettyNames.push({
        value: element.name,
        label: capitalise(element.name),
      });
    });

    return prettyNames;
  };

  return { getPokemonByName, getPokemonNames };
};

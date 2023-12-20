import {
  Configuration,
  ConfigurationParameters,
  DefaultApi,
  Pokemon
} from "pokemon-lil-api";
import { Item } from "react-native-picker-select";

const capitalise = (word) => {
  if (word.length === 0) {
    return undefined;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};

interface NamedAPIEntity {
  name: string;
  url: string;
}

export const getPrettyPokemonNames = (
  namesToPrettify: NamedAPIEntity[]
): Item[] => {
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
  // getPokemonNames: (offset?: number) => Promise<Item[]>;
  // getPokemonByHabitatId: (offset?: number) => Promise<Item[]>;
}

export const getPokeClient = (): PokeClient => {
  const config: ConfigurationParameters = { basePath: "http://localhost:3000" };
  const client = new DefaultApi(new Configuration(config));

  const getPokemonByName = async (name: string): Promise<Pokemon> => {
    try {
      const response = await client.getPokemon(name);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // const getPokemonNames = async (offset?: number): Promise<Item[]> => {
  //   try {
  //     // const response = await client.listPokemons(offset || 0, 20);

  //     // return getPrettyPokemonNames(response.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getPokemonByHabitatId = async (id: number): Promise<Item[]> => {
  //   try {
  //     const response = await client.getPokemonHabitatById(id);
  //     return getPrettyPokemonNames(response.pokemon_species);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return {
    getPokemonByName
    // , getPokemonNames, getPokemonByHabitatId
  };
};

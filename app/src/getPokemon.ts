import {
  Configuration,
  ConfigurationParameters,
  DefaultApi,
  Pokemon,
  PickNamedAPIResourceName as PokemonNames
} from "pokemon-lil-api";
import { Item } from "react-native-picker-select";

const capitalise = (word: string) => {
  if (word.length === 0) {
    return undefined;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getPrettyPokemonNames = (namesToPrettify: PokemonNames[]): Item[] => {
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
  getPokemonDetailByName: (name: string) => Promise<Pokemon>;
  getPokemonsByHabitatId: (id: number) => Promise<Item[]>;
}

export const getPokeClient = (): PokeClient => {
  const config: ConfigurationParameters = { basePath: "http://localhost:3000" };
  const client = new DefaultApi(new Configuration(config));

  const getPokemonDetailByName = async (name: string): Promise<Pokemon> => {
    try {
      const response = await client.getPokemonByName(name);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getPokemonsByHabitatId = async (id: number): Promise<Item[]> => {
    console.log("id:", id);
    try {
      const response = await client.getPokemonsByHabitatId(id);
      console.log("response:", response);
      return getPrettyPokemonNames(response.data);
    } catch (error) {
      console.log("error:", error);
      console.error(error);
    }
  };

  return {
    getPokemonDetailByName,
    getPokemonsByHabitatId
  };
};

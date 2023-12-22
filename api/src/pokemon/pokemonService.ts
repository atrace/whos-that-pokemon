import { PokemonClient } from "pokenode-ts";
import { Pokemon, PokemonNames } from "./pokemon";

export class PokemonService {
  client = new PokemonClient();

  public async getDetail(name: string): Promise<Pokemon> {
    try {
      const result = await this.client.getPokemonByName(name);

      return {
        name: result.name,
        id: result.id,
        sprite: result.sprites.front_default
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async getNames({
    habitatId
  }: {
    habitatId: number;
  }): Promise<PokemonNames[]> {
    try {
      const result = await this.client.getPokemonHabitatById(habitatId);

      return result.pokemon_species;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

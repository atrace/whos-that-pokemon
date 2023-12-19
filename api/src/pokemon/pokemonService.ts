import { Pokemon } from "./pokemon";
import { ditto } from "./testPokemon";

export class PokemonService {
  public get(name: string): Pokemon {
    console.log("name:", name);
    return {
      name: ditto.name,
      id: ditto.id,
      sprite: ditto.sprites.front_default
    };
  }
}

import { Controller, Get, Path, Route } from "tsoa";
import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemonService";

@Route("pokemon")
export class PokemonController extends Controller {
  @Get("{name}")
  public async getPokemon(@Path() name: string): Promise<Pokemon> {
    return new PokemonService().get(name);
  }
}

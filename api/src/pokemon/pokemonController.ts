import { Controller, Get, Path, Query, Route } from "tsoa";
import { Pokemon, PokemonNames } from "./pokemon";
import { PokemonService } from "./pokemonService";

@Route("pokemon")
export class PokemonController extends Controller {
  @Get("{name}")
  public async getPokemonByName(@Path() name: string): Promise<Pokemon> {
    return new PokemonService().getDetail(name);
  }

  @Get()
  public async getPokemonsByHabitatId(
    @Query() habitatId: number
  ): Promise<PokemonNames[]> {
    return new PokemonService().getNames({ habitatId });
  }
}

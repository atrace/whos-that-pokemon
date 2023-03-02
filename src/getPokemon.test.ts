import { getPokemonByName } from "./getPokemon";
import { ditto as examplePokemon } from "./pokemon";

describe("getPokemon", () => {
  it("should get a Pokemon", async () => {
    // Arrange
    const pokemonName = "ditto";

    // Act
    const pokemon = await getPokemonByName(pokemonName);

    // Assert
    expect(pokemon).toBeDefined();
    expect(pokemon).toEqual(examplePokemon);
  });
});

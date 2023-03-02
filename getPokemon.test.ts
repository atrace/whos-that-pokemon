import { getPokemon } from "./getPokemon";
import { pokemon as examplePokemon } from "./pokemon";

describe("getPokemon", () => {
  it("should get a Pokemon", async () => {
    // Arrange
    const pokemonName = "ditto";

    // Act
    const pokemon = await getPokemon(pokemonName);

    // Assert
    expect(pokemon).toBeDefined();
    expect(pokemon).toEqual(examplePokemon);
  });
});

import {
  getPokemonByName,
  getPokemonNames,
  getPrettyPokemonNames,
} from "./getPokemon";
import { ditto as examplePokemon } from "./pokemon";

describe("getPokemonByName", () => {
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

describe("getPokemonNames", () => {
  it("should get first 20 pokemon if no offset provided", async () => {
    // Arrange / Act
    const pokemonList = await getPokemonNames();

    // Assert
    expect(pokemonList).toBeDefined();
    expect(pokemonList.count).toEqual(1279);
    expect(pokemonList.next).toEqual(
      "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
    );
    expect(pokemonList.previous).toBeNull();
    expect(pokemonList.results.length).toEqual(20);
  });

  it("should get second 20 pokemon if offset of 20 provided", async () => {
    // Arrange / Act
    const pokemonList = await getPokemonNames(20);

    // Assert
    expect(pokemonList).toBeDefined();
    expect(pokemonList.count).toEqual(1279);
    expect(pokemonList.next).toEqual(
      "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20"
    );
    expect(pokemonList.previous).toEqual(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    expect(pokemonList.results.length).toEqual(20);
  });
});

describe("getPrettyPokemonNames", () => {
  it("should get first 20 pokemon if no offset provided", async () => {
    // Arrange / Act
    const prettyNames = await getPrettyPokemonNames();

    // Assert
    expect(prettyNames).toBeDefined();
    expect(prettyNames.length).toEqual(20);
    expect(prettyNames[0].label).toEqual("Bulbasaur");
    expect(prettyNames[0].value).toEqual("bulbasaur");
  });
});

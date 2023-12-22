import { Pokemon } from "pokemon-lil-api";
import { PokeClient, getPokeClient, getPrettyPokemonNames } from "./getPokemon";

const examplePokemon: Pokemon = {
  name: "ditto",
  id: 132,
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
};

describe("getPokemon", () => {
  let client: PokeClient;

  beforeAll(() => {
    console.error = jest.fn();
    client = getPokeClient();
  });

  describe("getPokemonByName", () => {
    it("should get a Pokemon", async () => {
      // Arrange
      const pokemonName = "ditto";

      // Act
      const pokemon = await client.getPokemonDetailByName(pokemonName);

      // Assert
      expect(pokemon).toBeDefined();
      expect(pokemon).toEqual(examplePokemon);
    });

    it("should catch and log an error thrown", async () => {
      // Arrange / Act
      const result = await client.getPokemonDetailByName(
        "this pokemon does not exist"
      );

      // Assert
      expect(result).toBeUndefined();
      expect(console.error).toBeCalledWith(
        expect.objectContaining({
          message: "Request failed with status code 404"
        })
      );
    });
  });

  describe("getPokemonsByHabitatId", () => {
    it("should return pretty pokemon names for provided forest habitat id", async () => {
      // Arrange / Act
      const result = await client.getPokemonsByHabitatId(2);

      // Assert
      expect(result).toBeDefined();
      expect(result[0].value).toEqual("caterpie"); // pokemon #1 that lives in grasslands
      expect(result[0].label).toEqual("Caterpie"); // pokemon #1 that lives in grasslands
    });

    it("should catch and log an error thrown", async () => {
      // Arrange / Act
      const result = await client.getPokemonsByHabitatId(2000); // This habitat doesn't exist

      // Assert
      expect(result).toBeUndefined();
      expect(console.error).toBeCalledWith(
        expect.objectContaining({
          message: "Request failed with status code 404"
        })
      );
    });
  });

  describe("getPrettyPokemonNames", () => {
    it("should return pokemon names as drop down items", () => {
      // Arrange
      const pokemonNamesToPrettify = [
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
        { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
        { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
        { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
        { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
        { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
        { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
        { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
        { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
        { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
        { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
        { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
        { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
        { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
        { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
        { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
        { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
        { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
        { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
        { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" }
      ];

      // Act
      const prettyNames = getPrettyPokemonNames(pokemonNamesToPrettify);

      // Assert
      expect(prettyNames).toEqual([
        { value: "bulbasaur", label: "Bulbasaur" },
        { value: "ivysaur", label: "Ivysaur" },
        { value: "venusaur", label: "Venusaur" },
        { value: "charmander", label: "Charmander" },
        { value: "charmeleon", label: "Charmeleon" },
        { value: "charizard", label: "Charizard" },
        { value: "squirtle", label: "Squirtle" },
        { value: "wartortle", label: "Wartortle" },
        { value: "blastoise", label: "Blastoise" },
        { value: "caterpie", label: "Caterpie" },
        { value: "metapod", label: "Metapod" },
        { value: "butterfree", label: "Butterfree" },
        { value: "weedle", label: "Weedle" },
        { value: "kakuna", label: "Kakuna" },
        { value: "beedrill", label: "Beedrill" },
        { value: "pidgey", label: "Pidgey" },
        { value: "pidgeotto", label: "Pidgeotto" },
        { value: "pidgeot", label: "Pidgeot" },
        { value: "rattata", label: "Rattata" },
        { value: "raticate", label: "Raticate" }
      ]);
    });
  });
});

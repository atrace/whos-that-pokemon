import { getPokeClient, getPrettyPokemonNames } from "./getPokemon";
import { ditto as examplePokemon } from "./pokemon";

describe("getPokemon", () => {
  let client;

  beforeAll(() => {
    client = getPokeClient();
  });

  describe("getPokemonByName", () => {
    it("should get a Pokemon", async () => {
      // Arrange
      const pokemonName = "ditto";

      // Act
      const pokemon = await client.getPokemonByName(pokemonName);

      // Assert
      expect(pokemon).toBeDefined();
      expect(pokemon).toEqual(examplePokemon);
    });
  });

  describe("getPokemonNames", () => {
    it("should get first 20 pokemon if no offset provided", async () => {
      // Arrange / Act
      const pokemonList = await client.getPokemonNames();
      console.log("pokemonList:", pokemonList);

      // Assert
      expect(pokemonList).toBeDefined();
      expect(pokemonList.length).toEqual(20);
      expect(pokemonList[0].value).toEqual("bulbasaur"); // pokemon #1
    });

    it("should get second 20 pokemon if offset of 20 provided", async () => {
      // Arrange / Act
      const pokemonList = await client.getPokemonNames(20);

      // Assert
      expect(pokemonList).toBeDefined();
      expect(pokemonList.length).toEqual(20);
      expect(pokemonList[0].value).toEqual("spearow"); // pokemon #20
    });
  });

  describe("getPrettyPokemonNames", () => {
    it("should get first 20 pokemon if no offset provided", () => {
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
      expect(prettyNames).toBeDefined();
      expect(prettyNames.length).toEqual(20);
      expect(prettyNames[0].label).toEqual("Bulbasaur");
      expect(prettyNames[0].value).toEqual("bulbasaur");
    });
  });
});

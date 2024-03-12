import { Pokemon } from "pokemon-lil-api";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Item } from "react-native-picker-select";
import { Button } from "../components/Button";
import { PokeClient } from "../getPokemon";
import { FinalPages, Page, hasChanged } from "../utils";
import { Hooray } from "./hooray";
import { PickPokemon } from "./pickPokemon";

interface FinalChoicesProps {
  client: PokeClient;
  habitatId: number;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

export const FinalChoices = ({
  client,
  habitatId,
  setPage
}: FinalChoicesProps) => {
  const [currentPage, setCurrentPage] = useState<FinalPages>("PICKER");

  const [pokemonName, setPokemonName] = useState("ditto");
  const ditto: Pokemon = {
    id: 132,
    name: "ditto",
    sprite: "this is a URL i promise"
  };
  const [pokemon, setPokemon] = useState<Pokemon>(ditto);

  const [names, setNames] = useState<Item[]>([
    { label: "Ditto", value: "ditto" },
    { label: "Luxray", value: "luxray" },
    { label: "Pikachu", value: "pikachu" }
  ]);

  useEffect(() => {
    console.log("I'm using an effect!");
    client
      .getPokemonDetailByName(pokemonName)
      .then((data) =>
        setPokemon((current) => (hasChanged(current, data) ? data : current))
      );
  }, [pokemonName]);

  useEffect(() => {
    console.log("I'm using another effect!");
    client.getPokemonsByHabitatId(habitatId).then((data) => {
      console.log("data:", data);
      return setNames((current) =>
        hasChanged(current, data) ? data : current
      );
    });
  }, []);

  return (
    <View style={styles.body}>
      {currentPage === "PICKER" ? (
        <PickPokemon
          setPokemonName={setPokemonName}
          names={names}
          confirmPokemon={() => setCurrentPage("HOORAY")}
        />
      ) : (
        <Hooray
          pokemon={pokemon}
          chooseAnother={() => setCurrentPage("PICKER")}
        />
      )}
      <Button onPress={() => setPage("HABITAT")} style={{ marginTop: 30 }}>
        <Text>Choose a different habitat</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: { alignItems: "center", paddingTop: "8%" }
});

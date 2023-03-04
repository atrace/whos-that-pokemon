import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Item } from "react-native-picker-select";
import { getPokemonByName, getPrettyPokemonNames } from "../getPokemon";
import { ditto } from "../pokemon";
import { Hooray } from "./hooray";
import { PickPokemon } from "./pickPokemon";

const hasChanged = (currentState, newState) => {
  return JSON.stringify(currentState) !== JSON.stringify(newState);
};

type FinalPages = "PICKER" | "HOORAY";

export const FinalChoices = () => {
  const [currentPage, setCurrentPage] = useState<FinalPages>("PICKER");

  const [names, setNames] = useState<Item[]>([
    { label: "Ditto", value: "ditto" },
    { label: "Luxray", value: "luxray" },
    { label: "Pikachu", value: "pikachu" },
  ]);
  const [pokemonName, setPokemonName] = useState("ditto");
  const [pokemon, setPokemon] = useState(ditto);

  useEffect(() => {
    console.log("I'm using an effect!");
    getPokemonByName(pokemonName).then((data) =>
      setPokemon((current) => (hasChanged(current, data) ? data : current))
    );
  }, [pokemonName]);

  useEffect(() => {
    console.log("I'm using another effect!");
    getPrettyPokemonNames().then((data) =>
      setNames((current) => (hasChanged(current, data) ? data : current))
    );
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
    </View>
  );
};

const styles = StyleSheet.create({
  body: { alignItems: "center" },
});

import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { PokemonCard } from "../components/pokemonCard";
import { getPokemonByName, getPrettyPokemonNames } from "../getPokemon";
import { ditto } from "../pokemon";
import { PickPokemon } from "./pickPokemon";

const hasChanged = (currentState, newState) => {
  return JSON.stringify(currentState) !== JSON.stringify(newState);
};

export const FinalChoices = () => {
  const [names, setNames] = useState([
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
      <PickPokemon setPokemonName={setPokemonName} names={names} />
      <PokemonCard pokemon={pokemon} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: { alignItems: "center" },
});

import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Item } from "react-native-picker-select";
import { PokeClient } from "../getPokemon";
import { ditto } from "../pokemon";
import { FinalPages, hasChanged } from "../utils";
import { Hooray } from "./hooray";
import { PickPokemon } from "./pickPokemon";

interface FinalChoicesProps {
  client: PokeClient;
  names: Item[];
  setNames: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const FinalChoices = ({ client, names, setNames }) => {
  const [currentPage, setCurrentPage] = useState<FinalPages>("PICKER");

  const [pokemonName, setPokemonName] = useState("ditto");
  const [pokemon, setPokemon] = useState(ditto);

  useEffect(() => {
    console.log("I'm using an effect!");
    client
      .getPokemonByName(pokemonName)
      .then((data) =>
        setPokemon((current) => (hasChanged(current, data) ? data : current))
      );
  }, [pokemonName]);

  useEffect(() => {
    console.log("I'm using another effect!");
    client
      .getPokemonNames()
      .then((data) =>
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
  body: { alignItems: "center", paddingTop: "8%" },
});

import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Picker from "react-native-picker-select";
import { getPokemonByName, getPrettyPokemonNames } from "./src/getPokemon";
import { ditto } from "./src/pokemon";

const hasChanged = (currentState, newState) => {
  return JSON.stringify(currentState) !== JSON.stringify(newState);
};

const App = () => {
  const [pokemonName, setPokemonName] = useState("ditto");
  const [pokemon, setPokemon] = useState(ditto);
  const [names, setNames] = useState([
    { label: "Ditto", value: "ditto" },
    { label: "Luxray", value: "luxray" },
    { label: "Pikachu", value: "pikachu" },
  ]);

  useEffect(() => {
    console.log("I'm using another effect!");
    getPrettyPokemonNames().then((data) =>
      setNames((current) => (hasChanged(current, data) ? data : current))
    );
  }, []);

  useEffect(() => {
    console.log("I'm using an effect!");
    getPokemonByName(pokemonName).then((data) =>
      setPokemon((current) => (hasChanged(current, data) ? data : current))
    );
  }, [pokemonName]);

  return (
    <View>
      <View style={styles.stuckContainer}>
        <Text>Here is something I want to stay stuck to the top.</Text>
      </View>
      <ScrollView style={styles.scrollingContainer}>
        <View style={styles.body}>
          <Picker
            onValueChange={(newName) => {
              console.log(newName);
              setPokemonName((currentName) =>
                newName === null ? currentName : newName
              );
            }}
            items={names}
            style={pickerSelectStyles}
          />
          <Image
            source={{
              uri: pokemon.sprites.front_default,
            }}
            style={{ width: 200, height: 200 }}
          />
          <Text>Hello, I am {pokemon.name}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  stuckContainer: {
    height: "20%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "red",
  },
  body: { alignItems: "center" },
  scrollingContainer: {
    backgroundColor: "green",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: "white",
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: "white",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default App;

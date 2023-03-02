import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { getPokemonByName } from "./src/getPokemon";
import { ditto } from "./src/pokemon";

const hasChanged = (currentState, newState) => {
  return JSON.stringify(currentState) !== JSON.stringify(newState);
};

const App = () => {
  const [pokemon, setPokemon] = useState(ditto);

  useEffect(() => {
    console.log("I'm using an effect!");
    getPokemonByName("pikachu").then((data) =>
      setPokemon((current) => (hasChanged(current, data) ? data : current))
    );
  }, []);

  return (
    <View>
      <View style={styles.stuckContainer}>
        <Text>Here is something I want to stay stuck to the top.</Text>
      </View>
      <ScrollView style={styles.scrollingContainer}>
        <View style={styles.body}>
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

export default App;

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { pokemon } from "./pokemon";

const App = () => (
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

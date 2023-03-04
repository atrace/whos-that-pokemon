import { ScrollView, StyleSheet, Image, View, Text } from "react-native";
import { FinalChoices } from "./src/pages/finalChoices";
import { useFonts } from "expo-font";

const App = () => {
  const [loaded] = useFonts({
    pokemonHollow: require("./assets/fonts/pokemon/Pokemon-Hollow.ttf"),
    pokemonSolid: require("./assets/fonts/pokemon/Pokemon-Solid.ttf"),
  });
  console.log("🚀 ~ loaded:", loaded);

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Who's that </Text>
          <Image
            source={require("./assets/logo.png")}
            style={{ height: 50, width: 54 }}
          />
          <Text style={styles.headerText}> Pokémon</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollingContainer}>
        <FinalChoices />
      </ScrollView>
    </View>
  );
};

const colours = { pokemonYellow: "#e9bd30", pokemonBlue: "#355fa0" };

const styles = StyleSheet.create({
  header: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    // verticalAlign: "bottom",
    backgroundColor: "red",
    paddingTop: "10%",
    paddingBottom: 7,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: { color: "white", fontFamily: "pokemonSolid", fontSize: 20 },
  scrollingContainer: {
    backgroundColor: "green",
  },
});

export default App;

import { Image, StyleSheet, Text, View } from "react-native";

export const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerContent}>
      <Text style={styles.headerText}>Who's that </Text>
      <Image
        source={require("../../assets/logo.png")}
        style={{ height: 50, width: 54 }}
      />
      <Text style={styles.headerText}> Pokémon</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    paddingTop: "10%",
    paddingBottom: "4%",
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

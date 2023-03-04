import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Item } from "react-native-picker-select";
import { Header } from "./components/Header";
import { getPokeClient } from "./getPokemon";
import { FinalChoices } from "./pages/finalChoices";
import { Page } from "./utils";

export const AppContainer = () => {
  const [page, setPage] = useState<Page>("HABITAT");

  const [names, setNames] = useState<Item[]>([
    { label: "Ditto", value: "ditto" },
    { label: "Luxray", value: "luxray" },
    { label: "Pikachu", value: "pikachu" },
  ]);

  const client = getPokeClient();

  return (
    <View>
      <Header />
      <ScrollView style={styles.scrollingContainer}>
        {page === "HABITAT" && (
          <FinalChoices client={client} names={names} setNames={setNames} />
        )}
        {page === "FINAL CHOICES" && (
          <FinalChoices client={client} names={names} setNames={setNames} />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollingContainer: {
    backgroundColor: "green",
    height: "100%",
  },
});

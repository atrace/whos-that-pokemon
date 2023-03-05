import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Header } from "./components/Header";
import { getPokeClient } from "./getPokemon";
import { FinalChoices } from "./pages/finalChoices";
import { Habitat } from "./pages/habitatPicker";
import { Page } from "./utils";

export const AppContainer = () => {
  const [page, setPage] = useState<Page>("HABITAT");

  const [habitatId, setHabitatId] = useState<number>();

  const client = getPokeClient();

  return (
    <View>
      <Header />
      <ScrollView style={styles.scrollingContainer}>
        {page === "HABITAT" && (
          <Habitat setHabitatId={setHabitatId} setPage={setPage} />
        )}
        {page === "FINAL CHOICES" && (
          <FinalChoices
            client={client}
            habitatId={habitatId}
            setPage={setPage}
          />
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

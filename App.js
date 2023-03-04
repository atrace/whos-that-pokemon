import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FinalChoices } from "./src/pages/finalChoices";

const App = () => {
  return (
    <View>
      <View style={styles.stuckContainer}>
        <Text>Who's that Pokémon?</Text>
      </View>
      <ScrollView style={styles.scrollingContainer}>
        <FinalChoices />
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
  scrollingContainer: {
    backgroundColor: "green",
  },
});

export default App;

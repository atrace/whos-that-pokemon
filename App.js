import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.stuckContainer}>
        <Text>Here is something I want to stay stuck to the top.</Text>
      </View>
      <ScrollView style={styles.scrollingContainer}>
        <View style={styles.body}>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scroll</Text>
          <Text>All of this and below will scrolllll</Text>
          <Text>All of this and below will scroll</Text>
        </View>
      </ScrollView>
      <Image></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  stuckContainer: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
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

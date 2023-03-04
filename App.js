import { useFonts } from "expo-font";
import { AppContainer } from "./src/AppContainer";

const App = () => {
  const [loaded] = useFonts({
    pokemonHollow: require("./assets/fonts/pokemon/Pokemon-Hollow.ttf"),
    pokemonSolid: require("./assets/fonts/pokemon/Pokemon-Solid.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <AppContainer />;
};

export default App;

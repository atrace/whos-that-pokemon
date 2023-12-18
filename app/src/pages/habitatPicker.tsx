import { PokemonHabitats } from "pokenode-ts";
import { useState } from "react";
import { Text, View } from "react-native";
import { Item } from "react-native-picker-select";
import { Button } from "../components/Button";
import { PokeClient } from "../getPokemon";
import { Page } from "../utils";

export interface HabitatProps {
  setHabitatId: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

const StringIsNumber = (value) => isNaN(Number(value)) === false;
const habitats = Object.keys(PokemonHabitats)
  .filter(StringIsNumber)
  .map((key) => PokemonHabitats[key]);

export const Habitat = ({ setPage, setHabitatId }: HabitatProps) => {
  return (
    <>
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          padding: 20,
          fontSize: 18,
        }}
      >
        Where did you see the pokemon?
      </Text>
      <View
        style={{
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {habitats.map((habitat: string) => {
          return (
            <View
              key={habitat}
              style={{
                flex: 1,
                alignItems: "center",
                minWidth: "50%",
              }}
            >
              <Button
                onPress={() => {
                  const newHabitatId: number = PokemonHabitats[habitat];
                  console.log("🚀 ~ habitat:", habitat);
                  setHabitatId(newHabitatId);
                  setPage("FINAL CHOICES");
                }}
                style={{
                  width: "95%",
                  backgroundColor: "white",
                  paddingVertical: 15,
                  margin: "2.5%",
                  borderColor: "red",
                  borderWidth: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {habitat}
                </Text>
              </Button>
            </View>
          );
        })}
      </View>
      {/* <Button onPress={() => setPage("FINAL CHOICES")}>
        <Text>Next page</Text>
      </Button> */}
    </>
  );
};

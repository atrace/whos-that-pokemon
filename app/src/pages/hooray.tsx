import { Pokemon } from "pokemon-lil-api";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "../components/Button";
import { PokemonCard } from "../components/PokemonCard";

interface HoorayProps {
  pokemon: Pokemon;
  chooseAnother: () => void;
}

export const Hooray = ({ pokemon, chooseAnother }: HoorayProps) => {
  return (
    <View>
      <PokemonCard pokemon={pokemon} />
      <Button onPress={chooseAnother}>
        <Text>Choose another</Text>
      </Button>
    </View>
  );
};

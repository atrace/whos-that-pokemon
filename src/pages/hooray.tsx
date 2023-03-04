import { Pokemon } from "pokenode-ts";
import React from "react";
import { View } from "react-native";
import { PokemonCard } from "../components/pokemonCard";

interface HoorayProps {
  pokemon: Pokemon;
}

export const Hooray = ({ pokemon }: HoorayProps) => {
  return (
    <View>
      <PokemonCard pokemon={pokemon} />
    </View>
  );
};

import { Pokemon } from "pokenode-ts";
import React from "react";
import { Image, Text, View } from "react-native";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => (
  <View>
    <Image
      source={{
        uri: pokemon.sprites.front_default,
      }}
      style={{ width: 200, height: 200 }}
    />
    <Text>Hello, I am {pokemon.name}</Text>
  </View>
);

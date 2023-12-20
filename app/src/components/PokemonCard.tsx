import { Pokemon } from "pokemon-lil-api";
import React from "react";
import { Image, Text, View } from "react-native";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => (
  <View>
    <Image
      source={{
        uri: pokemon.sprite
      }}
      style={{ width: 200, height: 200 }}
    />
    <Text>Hello, I am {pokemon.name}</Text>
  </View>
);

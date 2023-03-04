import React from "react";
import { StyleSheet } from "react-native";
import Picker, { Item } from "react-native-picker-select";

interface PickPokemonProps {
  setPokemonName: React.Dispatch<React.SetStateAction<string>>;
  names: Item[];
}

export const PickPokemon = ({ setPokemonName, names }: PickPokemonProps) => {
  return (
    <Picker
      onValueChange={(newName) => {
        console.log(newName);
        setPokemonName((currentName) =>
          newName === null ? currentName : newName
        );
      }}
      items={names}
      style={pickerSelectStyles}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: "white",
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: "white",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

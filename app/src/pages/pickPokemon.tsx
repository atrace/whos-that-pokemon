import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Picker, { Item } from "react-native-picker-select";
import { Button } from "../components/Button";

interface PickPokemonProps {
  setPokemonName: React.Dispatch<React.SetStateAction<string>>;
  names: Item[];
  confirmPokemon: () => void;
}

export const PickPokemon = ({
  setPokemonName,
  names,
  confirmPokemon
}: PickPokemonProps) => {
  console.log(
    "setPokemonName, names, confirmPokemon,:",
    setPokemonName,
    names,
    confirmPokemon
  );
  const [disabled, setDisabled] = useState(true);

  return (
    <View>
      <Text style={{ marginBottom: 10, alignSelf: "center", color: "white" }}>
        Let's narrow down that pokemon!
      </Text>
      <Picker
        onValueChange={(newName) => {
          console.log(newName);
          setPokemonName((currentName) => {
            if (newName === null) {
              setDisabled(true);
              return currentName;
            }
            setDisabled(false);
            return newName;
          });
        }}
        items={names}
        style={pickerSelectStyles}
      />
      <Button onPress={confirmPokemon} disabled={disabled}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 15
          }}
        >
          View Pokémon
        </Text>
      </Button>
    </View>
  );
};

const commonPickerStyles = {
  minWidth: "70%",
  marginBottom: 16,
  backgroundColor: "white",
  fontSize: 16,
  paddingHorizontal: 10,
  color: "black",
  paddingRight: 30, // to ensure the text is never behind the icon
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    ...commonPickerStyles,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
  },
  inputAndroid: {
    ...commonPickerStyles,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
  },
});

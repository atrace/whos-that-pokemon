import { Pressable, PressableProps, StyleSheet } from "react-native";
import { View } from "react-native/types";

type ButtonProps = PressableProps & React.RefAttributes<View> & {};

export const Button = ({ onPress, disabled, style, children }: ButtonProps) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? "blue" : disabled ? "pink" : "red",
      },
      { ...styles.button, ...style },
    ]}
  >
    {children}
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

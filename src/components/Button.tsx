import { Pressable, PressableProps, StyleSheet } from "react-native";
import { View } from "react-native/types";

type ButtonProps = PressableProps & React.RefAttributes<View> & {};

export const Button = ({ onPress, children }: ButtonProps) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? "blue" : "red",
      },
      styles.button,
    ]}
  >
    {children}
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});

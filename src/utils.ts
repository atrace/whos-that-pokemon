export type Page = "HABITAT" | "FINAL CHOICES";

export const colours = { pokemonYellow: "#e9bd30", pokemonBlue: "#355fa0" };

export const hasChanged = (currentState, newState) => {
  return JSON.stringify(currentState) !== JSON.stringify(newState);
};

export type FinalPages = "PICKER" | "HOORAY";

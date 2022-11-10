import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const shadowStyles = StyleSheet.create({
  shadow1: {
    shadowColor: "#161616",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.16,
    shadowRadius: 14,
  },
  shadow2: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  shadow3: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

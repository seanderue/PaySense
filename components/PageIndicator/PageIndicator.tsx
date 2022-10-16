import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../shared/colors";

interface PageIndicatorProps {}

export const PageIndicator: FC<PageIndicatorProps> = () => {
  return <View style={styles.switchSelectorBG}></View>;
};

const styles = StyleSheet.create({
  switchSelectorBG: {
    backgroundColor: colors.neutral9,
    height: 48,
    width: "100%",
    borderRadius: 32,
  },
});

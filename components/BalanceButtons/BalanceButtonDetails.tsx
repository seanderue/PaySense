import { SkiaMutableValue } from "@shopify/react-native-skia";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { textStyles } from "../shared/textStyles";

//prop types
import { BalanceButtonDetailsProps } from "./types";

export const BalanceButtonDetails: FC<BalanceButtonDetailsProps> = ({
  title,
  balance,
  percentRemaining,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={textStyles.Body1}>{title}</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={textStyles.Overline}>{`$${balance}`}</Text>
        <Text style={[textStyles.Overline, styles.percentageText]}>{`${
          percentRemaining * 100
        }%`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lowerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    marginBottom: 39,
  },
  percentageText: {
    textAlign: "right",
    color: "#B1B5C3",
  },
});

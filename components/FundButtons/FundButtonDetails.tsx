import { SkiaMutableValue } from "@shopify/react-native-skia";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { textStyles } from "../shared/textStyles";

//prop types
import { FundButtonDetailsProps } from "./types";

export const FundButtonDetails: FC<FundButtonDetailsProps> = ({
  title,
  fundBalance,
  percentRemaining,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={textStyles.Body2}>{title}</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={textStyles.Overline}>{`$${fundBalance}`}</Text>
        <Text style={[textStyles.Overline, styles.percentageText]}>{`${(
          percentRemaining * 100
        ).toFixed(1)}%`}</Text>
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
  },
  percentageText: {
    textAlign: "right",
    color: "#B1B5C3",
  },
});

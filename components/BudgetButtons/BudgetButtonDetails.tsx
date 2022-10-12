import { SkiaMutableValue } from "@shopify/react-native-skia";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Body1 from "../Texts/Body1";
import Overline from "../Texts/Overline";

//prop types
import { BudgetButtonDetailsProps } from "./types";

export const BudgetButtonDetails: FC<BudgetButtonDetailsProps> = ({
  title,
  balance,
  percentRemaining,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Body1>{title}</Body1>
      </View>
      <View style={styles.lowerContainer}>
        <Overline>{`$${balance}`}</Overline>
        <Overline textAlign="right" color={"#B1B5C3"}>{`${
          percentRemaining * 100
        }%`}</Overline>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

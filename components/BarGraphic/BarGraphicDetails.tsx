import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../shared/colors";
import { textStyles } from "../shared/textStyles";

import { BarGraphicDetailsProps } from "./types";

export const BarGraphicDetails: FC<BarGraphicDetailsProps> = ({
  currency,
  amount,
  label,
}) => {
  const currencySymbol = currency ? currency : "$";

  return (
    <View style={styles.detailsContainer}>
      <Text style={[textStyles.TinyLabel, { color: colors.white }]}>
        {label}
      </Text>
      <View style={styles.amountContainer}>
        <Text style={[textStyles.Cap4, { color: colors.white }]}>
          {currencySymbol}
        </Text>
        <Text style={[textStyles.Title3, { color: colors.white }]}>
          {amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  amountContainer: {
    // marginTop: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
});

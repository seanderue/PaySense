import React, { FC } from "react";
import { BalanceButton } from "./BalanceButton";
import { Dimensions, StyleSheet, View } from "react-native";
import { ScreenWidth as width } from "../shared/sizes";

import { BalanceButtonPageProps } from "./types";
import { NewBalance } from "./NewBalance";

export const BalanceButtonPage: FC<BalanceButtonPageProps> = ({
  data,
  page,
}) => {
  const sixDataElements = data.slice(page * 6, page * 6 + 6);
  const topRowElements = sixDataElements.slice(0, 3).map((item) => {
    if (item.id === "1") return <NewBalance key={item.id} />;
    else return <BalanceButton key={item.id} {...item} />;
  });
  const bottomRowElements = sixDataElements.slice(-3).map((item) => {
    return <BalanceButton key={item.id} {...item} />;
  });

  return (
    //Will probably turn the pageContainer View into a slideable view
    <View style={styles.pageContainer}>
      <View style={styles.pageTopRow}>{topRowElements}</View>
      <View style={styles.pageBottomRow}>{bottomRowElements}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    // backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
    width: width,
    // justifyContent: "center",
  },
  pageTopRow: {
    // backgroundColor: "teal",
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  pageBottomRow: {
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
});

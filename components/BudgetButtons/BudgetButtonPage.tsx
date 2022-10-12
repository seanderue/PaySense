import React, { FC } from "react";
import { BudgetButton } from "./BudgetButton";
import { Dimensions, StyleSheet, View } from "react-native";
import H1 from "../Texts/H1";

//MAY NEED TO RENAME
import { BudgetButtonPageProps } from "./types";

const { width } = Dimensions.get("window");

export const BudgetButtonPage: FC<BudgetButtonPageProps> = ({ data, page }) => {
  const sixDataElements = data.slice(page * 6, page * 6 + 6);
  const topRowElements = sixDataElements.slice(0, 3).map((item) => {
    if (item.id === "1") return <H1 key={item.id}>New</H1>;
    else return <BudgetButton key={item.id} {...item} />;
  });
  const bottomRowElements = sixDataElements.slice(-3).map((item) => {
    return <BudgetButton key={item.id} {...item} />;
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
    backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
    width: width,
    // justifyContent: "center",
  },
  pageTopRow: {
    backgroundColor: "teal",
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  pageBottomRow: {
    backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
});

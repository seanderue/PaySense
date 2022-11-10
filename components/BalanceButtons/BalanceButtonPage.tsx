import React, { FC, useState } from "react";
import { BalanceButton } from "./BalanceButton";
import { Dimensions, StyleSheet, View } from "react-native";
import { BALANCE_PAGE_MARGIN, ScreenWidth as width } from "../shared/sizes";

import { BalanceButtonPageProps, BalanceButtonProps } from "./types";
import { NewBalance } from "./NewBalance";
import { CONTENT_WIDTH_PERCENTAGE } from "../shared/sizes";

let bottomRowWidth;

export const BalanceButtonPage: FC<BalanceButtonPageProps> = ({
  data,
  page,
}) => {
  const sixDataElements = data.slice(page * 6, page * 6 + 6);

  const topRowElements = sixDataElements.slice(0, 3).map((item) => {
    if (item.id === 1) return <NewBalance key={item.id} />;
    else return <BalanceButton key={item.id} {...item} />;
  });

  // Removing the elements from the array to prevent bottomRowElement duplication
  for (let i = 0; i < 3; i++) {
    sixDataElements.shift();
  }

  const bottomRowElements = sixDataElements.slice(-3).map((item) => {
    return <BalanceButton key={item.id} {...item} />;
  });

  // Altering bottomRow width so space-between results in correct alignment
  bottomRowWidth = bottomRowElements.length < 3 ? "63.8%" : "100%";

  return (
    //Will probably turn the pageContainer View into a slideable view
    <View style={styles.pageContainer}>
      <View style={styles.pageTopRow}>{topRowElements}</View>
      <View style={[styles.pageBottomRow, { width: bottomRowWidth }]}>
        {bottomRowElements}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    // backgroundColor: "pink",
    display: "flex",
    width: width * CONTENT_WIDTH_PERCENTAGE,
    marginRight: BALANCE_PAGE_MARGIN,
    height: 300,
  },
  pageTopRow: {
    // backgroundColor: "teal",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 39,
  },
  pageBottomRow: {
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

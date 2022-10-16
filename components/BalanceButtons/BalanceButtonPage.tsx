import React, { FC, useState } from "react";
import { BalanceButton } from "./BalanceButton";
import { Dimensions, StyleSheet, View } from "react-native";
import { BALANCE_PAGE_MARGIN, ScreenWidth as width } from "../shared/sizes";

import { BalanceButtonPageProps, BalanceButtonProps } from "./types";
import { NewBalance } from "./NewBalance";
import { CONTENT_WIDTH_PERCENTAGE } from "../../screens/Home";

export const BalanceButtonPage: FC<BalanceButtonPageProps> = ({
  data,
  page,
}) => {
  const sixDataElements = data.slice(page * 6, page * 6 + 6);

  // const topRowElements: JSX.Element[] = [];
  // for (let i = 0; i++; i < 3) {
  //   let currentElement: any;
  //   if (sixDataElements.length > 0) {
  //     currentElement = sixDataElements.shift;
  //     topRowElements.push(currentElement);
  //   }
  // }
  // topRowElements.map((item) => {
  //   return <BalanceButton key={item.id} {...item} />;
  // });

  // const topRowElements = sixDataElements.map((item) => {
  //   sixDataElements.shift()
  // })
  // .map((item) => {
  //   if (item.id === "1") return <NewBalance key={item.id} />;
  //   else return <BalanceButton key={item.id} {...item} />;
  // });

  const topRowElements = sixDataElements.slice(0, 3).map((item) => {
    if (item.id === 1) return <NewBalance key={item.id} />;
    else return <BalanceButton key={item.id} {...item} />;
  });

  const bottomRowElements = sixDataElements.slice(-3).map((item) => {
    if (!topRowElements.includes(<BalanceButton key={item.id} {...item} />)) {
      return <BalanceButton key={item.id} {...item} />;
    }
    return null;
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
    width: "100%",
    justifyContent: "space-between",
  },
});

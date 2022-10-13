import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../components/colors";
import { ScreenHeight, ScreenWidth } from "../components/shared";
import H1 from "../components/Texts/H1";

const CONTENT_WIDTH_PERCENTAGE = 0.8746;
const TOP_FOLD_HEIGHT_PERCENTAGE = 0.328;
const BOTTOM_FOLD_HEIGHT_PERCENTAGE = 1 - TOP_FOLD_HEIGHT_PERCENTAGE;
const SAFE_STATUS_BAR_HEIGHT = 44;

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <View style={styles.topFoldContainer}>
          <View style={styles.iconsContainer}></View>
          <H1>TESTICLES</H1>
        </View>
        <View style={styles.bottomFoldContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#33404F",
  },
  wrapper: {
    height: ScreenHeight,
    width: ScreenWidth,
    alignSelf: "center",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
  },
  topFoldContainer: {
    width: "100%",
    paddingHorizontal:
      (ScreenWidth - ScreenWidth * CONTENT_WIDTH_PERCENTAGE) / 2,
    flex: TOP_FOLD_HEIGHT_PERCENTAGE,
    // paddingTop: SAFE_STATUS_BAR_HEIGHT,
  },
  bottomFoldContainer: {
    width: "100%",
    flex: BOTTOM_FOLD_HEIGHT_PERCENTAGE,
    backgroundColor: colors.white,
    borderTopEndRadius: 47,
    borderTopLeftRadius: 47,
  },
  iconsContainer: {
    marginTop: SAFE_STATUS_BAR_HEIGHT,
    width: "100%",
    height: 24,
    backgroundColor: "cyan",
  },
});

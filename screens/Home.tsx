import React, { FC } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { colors } from "../components/shared/colors";
import { ScreenHeight, ScreenWidth } from "../components/shared/sizes";
import { textStyles } from "../components/shared/textStyles";

import Ionicon from "react-native-vector-icons/Ionicons";
import { BalanceButtonSection } from "../components/BalanceButtons/BalanceButtonSection";
import { balanceData } from "../balanceData";

const CONTENT_WIDTH_PERCENTAGE = 0.8746;
const TOP_FOLD_HEIGHT_PERCENTAGE = 0.328;
const BOTTOM_FOLD_HEIGHT_PERCENTAGE = 1 - TOP_FOLD_HEIGHT_PERCENTAGE;
const SAFE_STATUS_BAR_HEIGHT = 44;

//Migrate some code to a screen for this

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <View style={styles.topFoldContainer}>
          <View style={styles.iconsContainer}>
            <Pressable
              onPress={() => {
                console.log("cog pressed");
              }}
            >
              <Ionicon
                style={styles.icon}
                name="settings-outline"
                size={20}
                color="#A1B2C8"
              />
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("bell pressed");
              }}
            >
              <Ionicon
                style={styles.icon}
                name="md-notifications-outline"
                size={20}
                color="#A1B2C8"
              />
            </Pressable>
          </View>
          <Text style={[textStyles.H1, styles.heroText]}>Hi Sean!</Text>
          <Text style={[textStyles.Subtitle1, styles.heroText]}>
            Here's Your Month's Balance
          </Text>
        </View>
        <View style={styles.bottomFoldContainer}>
          <BalanceButtonSection data={balanceData} page={0} />
        </View>
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
    paddingTop: 60,
    borderTopEndRadius: 47,
    borderTopLeftRadius: 47,
  },
  iconsContainer: {
    marginTop: SAFE_STATUS_BAR_HEIGHT,
    width: "100%",
    height: 24,
    paddingHorizontal:
      (ScreenWidth - ScreenWidth * CONTENT_WIDTH_PERCENTAGE) / 4,
    // backgroundColor: "cyan",
    flexDirection: "row-reverse",
  },
  icon: {
    paddingLeft: 3,
    paddingRight: 3,
  },
  heroText: {
    color: colors.white,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

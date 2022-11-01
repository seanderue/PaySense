import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../shared/colors";

import Ionicon from "react-native-vector-icons/Ionicons";
import { ScreenHeight, ScreenWidth } from "../shared/sizes";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface SwitchSelectorProps {
  toggledRight: boolean;
}

// Dimension Constants
const SLIDER_LEFT_POSITIONED_RIGHT = ScreenWidth * 0.872 - ScreenWidth * 0.4;
const SLIDER_WIDTH_POSITIONED_RIGHT = ScreenWidth * 0.34667;
const SLIDER_WIDTH_POSITIONED_LEFT = ScreenWidth * 0.40533;
const ANIMATION_DURATION = 500;

export const SwitchSelector: FC<SwitchSelectorProps> = ({ toggledRight }) => {
  const leftOffset = useSharedValue(0);
  const width = useSharedValue(SLIDER_WIDTH_POSITIONED_LEFT);
  const progress = useSharedValue(0);

  useEffect(() => {
    leftOffset.value = toggledRight ? SLIDER_LEFT_POSITIONED_RIGHT : 0;
    width.value = toggledRight
      ? SLIDER_WIDTH_POSITIONED_RIGHT
      : SLIDER_WIDTH_POSITIONED_LEFT;
    progress.value = withTiming(toggledRight ? 1 : 0, {
      duration: ANIMATION_DURATION,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [toggledRight]);

  const animatedSliderStyles = useAnimatedStyle(() => {
    return {
      left: withTiming(leftOffset.value, {
        duration: ANIMATION_DURATION,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      width: withTiming(width.value, {
        duration: ANIMATION_DURATION,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const AnimatedIcon = Animated.createAnimatedComponent(Ionicon);

  const goalFontColor = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [colors.gray3, colors.primary]
    );

    return { color };
  });

  const budgetFontColor = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [1, 0],
      [colors.gray3, colors.primary]
    );

    return { color };
  });

  return (
    <View style={styles.switchSelectorBG}>
      <Animated.View
        style={[styles.slider, animatedSliderStyles]}
      ></Animated.View>
      <View style={styles.textContainer}>
        <View style={styles.budgetsTextContainer}>
          <AnimatedIcon
            style={[styles.icon, budgetFontColor]}
            name="wallet"
            size={20}
          />
          <Animated.Text style={[styles.budgetsText, budgetFontColor]}>
            Budgets
          </Animated.Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.goalsTextContainer}>
          <AnimatedIcon
            style={[styles.icon, goalFontColor]}
            name="heart"
            size={20}
          />
          <Animated.Text style={[styles.budgetsText, goalFontColor]}>
            Goals
          </Animated.Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchSelectorBG: {
    backgroundColor: colors.neutral9,
    height: ScreenHeight * 0.0591133,
    width: ScreenWidth * 0.872,
    borderRadius: 32,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // color: "red",
  },
  textContainer: {
    // backgroundColor: colors.redDark,
    height: ScreenHeight * 0.04926,
    width: "50%",
  },
  slider: {
    position: "absolute",
    backgroundColor: colors.white,
    height: ScreenHeight * 0.04926,
    borderRadius: 47,
    marginLeft: "2%",
    marginRight: "2%",
  },
  budgetsTextContainer: {
    position: "absolute",
    top: "25%",
    left: "25%",
    zIndex: 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  goalsTextContainer: {
    position: "absolute",
    top: "25%",
    right: "25%",
    zIndex: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: "1.33%",
  },
  budgetsText: {
    color: colors.gray3,
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    lineHeight: 20,
    marginLeft: "1.33%",
  },
});

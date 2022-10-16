import {
  Easing,
  runTiming,
  useFont,
  useValue,
} from "@shopify/react-native-skia";
import React, { FC, useEffect } from "react";
import { PixelRatio, Pressable, StyleSheet, View, Text } from "react-native";
import { BalanceButtonDetails } from "./BalanceButtonDetails";
import { BalanceIcon } from "./BalanceIcon";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const RADIUS = PixelRatio.roundToNearestPixel(79.32 / 2);

// prop types
import { BalanceButtonProps } from "./types";

export const BalanceButton: FC<BalanceButtonProps> = ({
  title,
  emojiIcon,
  balance,
  percentRemaining,
}) => {
  const chartAnimationState = useValue(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  }, []);

  // Skia Animation
  const animateChart = () => {
    console.log("donut pressed");
    chartAnimationState.current = 0;
    runTiming(chartAnimationState, 1 - percentRemaining, {
      duration: 1250,
      easing: Easing.inOut(Easing.cubic),
    });
  };

  const DELAY = 500;

  useEffect(() => {
    opacity.value = withDelay(DELAY, withSpring(1));
    scale.value = withDelay(DELAY, withSpring(1));
    setTimeout(() => animateChart(), DELAY);
  }, []);

  const font = useFont(require("../../assets/fonts/Poppins-Regular.ttf"), 14);
  const smallerFont = useFont(
    require("../../assets/fonts/Poppins-Regular.ttf"),
    10
  );

  if (!font || !smallerFont) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Pressable onPress={animateChart} style={styles.BalanceButtonContainer}>
        <BalanceIcon emoji={emojiIcon} percentRemaining={chartAnimationState} />
      </Pressable>
      <BalanceButtonDetails
        title={title}
        balance={balance}
        percentRemaining={percentRemaining}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 0,
    // flexShrink: 1,
  },
  BalanceButtonContainer: {
    height: RADIUS * 2,
    width: RADIUS * 2,
  },
  title: {},
});

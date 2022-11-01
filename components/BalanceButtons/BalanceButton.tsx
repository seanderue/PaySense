import {
  Easing as SkEasing,
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
  withTiming,
  Easing as ReEasing,
} from "react-native-reanimated";

const RADIUS = PixelRatio.roundToNearestPixel(79.32 / 2);
const ANIMATION_DURATION = 500;

// prop types
import { BalanceButtonProps } from "./types";

export const BalanceButton: FC<BalanceButtonProps> = ({
  title,
  emojiIcon,
  balance,
  percentRemaining,
  id,
  balanceType,
}) => {
  const chartAnimationState = useValue(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  // Skia Animation
  const animateChart = () => {
    console.log(`${balanceType} donut ${id} pressed`);
    chartAnimationState.current = 0;
    runTiming(chartAnimationState, 1 - percentRemaining, {
      duration: 1250,
      easing: SkEasing.inOut(SkEasing.cubic),
    });
  };

  const DELAY = id * 75;

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  }, []);

  useEffect(() => {
    // Reseting values to
    opacity.value = 0;
    scale.value = 0;

    // Running animation
    opacity.value = withDelay(DELAY, withTiming(1));
    scale.value = withDelay(
      DELAY,
      withTiming(1, {
        duration: 500,
        easing: ReEasing.bezier(0.25, 0.1, 0.25, 1),
      })
    );
    setTimeout(() => animateChart(), DELAY);
  }, [balanceType]);

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
  },
  BalanceButtonContainer: {
    height: RADIUS * 2,
    width: RADIUS * 2,
  },
  title: {},
});

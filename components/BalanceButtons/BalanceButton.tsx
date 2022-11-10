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
import { useNavigation } from "@react-navigation/native";

const RADIUS = PixelRatio.roundToNearestPixel(79.32 / 2);
const ANIMATION_DURATION = 500;
const BUTTON_STROKE_WIDTH = 3;
const FONT_SIZE = 30;

// prop types
import { BalanceButtonProps } from "./types";
import { RootStackParams } from "../../navigators/Navigation";
import { StackNavigationProp } from "@react-navigation/stack";

export const BalanceButton: FC<BalanceButtonProps> = ({
  title,
  emojiIcon,
  balance,
  percentRemaining,
  id,
  balanceType,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
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
        duration: ANIMATION_DURATION,
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
  const nav = () => {
    navigation.navigate("BalanceDetails", {
      title: title,
      emojiIcon: emojiIcon,
      balance: balance,
      percentRemaining: percentRemaining,
      id: id,
      balanceType: balanceType,
    });
  };

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Pressable
        onPress={() => {
          nav();
        }}
        style={styles.BalanceButtonContainer}
      >
        <BalanceIcon
          emoji={emojiIcon}
          percentRemaining={chartAnimationState}
          strokeWidth={BUTTON_STROKE_WIDTH}
          iconFontSize={FONT_SIZE}
          radius={RADIUS}
        />
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

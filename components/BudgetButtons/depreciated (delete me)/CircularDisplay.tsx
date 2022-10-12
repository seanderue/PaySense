import React from "react";
import { Dimensions, PixelRatio, StyleSheet, View } from "react-native";
import Animated, {
  interpolateColor,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { BudgetDonut } from "../BudgetDonut";
import { CircularProgress, SweepGradientDemo } from "./CircularProgress";

const { width } = Dimensions.get("window");
export const size = width - 32;
const STROKE_WIDTH = 20;
const r = PixelRatio.roundToNearestPixel(size - STROKE_WIDTH) / 2;

const { PI } = Math;

const defaultProgress = -0.1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: r * 2,
    height: r * 2,
  },
});

export const CircularDisplay = () => {
  const progress = useSharedValue(defaultProgress);
  const backgroundColor = useDerivedValue(() => {
    return interpolateColor(
      progress.value,
      [0, Math.PI, Math.PI * 2],
      ["#ff3884", "#fcf409", "#38ffb3"]
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <SweepGradientDemo /> */}
        <Animated.View style={StyleSheet.absoluteFill}>
          {/* <CircularProgress
            backgroundColor={backgroundColor}
            strokeWidth={STROKE_WIDTH}
            progress={progress}
            {...{ r }}
          /> */}
          <BudgetDonut
            strokeWidth={5}
            radius={100}
            percentageComplete={0.5}
            targetPercentage={0.75}
            font={undefined}
            smallerFont={undefined}
          />
        </Animated.View>
      </View>
    </View>
  );
};

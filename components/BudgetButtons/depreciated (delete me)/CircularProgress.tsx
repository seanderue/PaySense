//Still need to interpolate the radians to percentage
// https://youtu.be/Y50CQfyFkGI?t=386

import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  multiply,
  useAnimatedProps,
  Value,
} from "react-native-reanimated";
import {
  Canvas,
  Rect,
  SweepGradient,
  Circle,
  Skia,
  Shader,
  vec,
  rotate,
} from "@shopify/react-native-skia";
import { interpolateColor } from "react-native-reanimated";

// Colors
import { colors } from "../../colors";

//Temporary
import { size } from "./CircularDisplay";
import React from "react";

const { PI, sin, cos } = Math;
// const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
  progress: Animated.SharedValue<number>;
  r: number;
  strokeWidth: number;
  backgroundColor: Animated.SharedValue<string | number>;
}

export const SweepGradientDemo = () => {
  return (
    <Canvas style={[{ flex: 1 }]}>
      <Rect x={0} y={0} width={256} height={256}>
        <SweepGradient
          transform={[{ rotate: 0.08225 }]}
          origin={{ x: 128, y: 128 }}
          c={vec(128, 128)}
          start={0}
          colors={["#44A5FF", "#E16AFF", "#FF9D43"]}
        />
      </Rect>
    </Canvas>
  );
};

export const CircularProgress = ({
  progress,
  r,
  strokeWidth,
  backgroundColor,
}: CircularProgressProps) => {
  // Calculating factors that will be used to calculate strokeDashoffset
  const alpha = interpolate(progress.value, [0, 1], [0, PI * 2]);
  const radius = r - strokeWidth / 2;
  const circumference = radius * 2 * PI;

  // Converting polar coordinates to react native coordinates
  const cx = r + strokeWidth * 2;
  const cy = r + strokeWidth * 2;
  const x = (α: number) => cx - r * cos(α);
  const y = (α: number) => -r * sin(α) + cy;

  // Creating animated props
  const props = useAnimatedProps(() => {
    return {
      stroke: backgroundColor.value,
      strokeDashoffset: alpha * radius,
    };
  });

  return (
    <>
      <Canvas style={{ flex: 1 }}>
        <Circle cx={r} cy={r} r={r}>
          <SweepGradient
            transform={[{ rotate: 0.08225 }]}
            origin={{ x: r, y: r }}
            c={vec(r, r)}
            start={0}
            colors={["#44A5FF", "#E16AFF", "#FF9D43"]}
          />
        </Circle>
      </Canvas>
      {/* ORIGINAL ARCS */}
      {/* <Svg
        style={[StyleSheet.absoluteFill]}
        width={size + 32}
        height={size + 32}
      ></Svg>
      <Svg
        style={[
          StyleSheet.absoluteFill,
          {
            transform: [{ rotate: "-90deg" }],
          },
        ]}
      >
        <Circle
          cx={r}
          cy={r}
          fill="transparent"
          stroke={colors.neutral9}
          r={radius}
          {...{ strokeWidth }}
        />
        <AnimatedCircle
          animatedProps={props}
          cx={r}
          cy={r}
          fill="transparent"
          r={radius}
          stroke={"#3884ff"}
          strokeDasharray={`${circumference}, ${circumference}`}
          {...{ strokeWidth }}/>
      </Svg> */}
    </>
  );
};

import {
  Canvas,
  Path,
  SkFont,
  Skia,
  SkiaMutableValue,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";
import React, { FC } from "react";

import { StyleSheet, View } from "react-native";
import { DonutGradientPath } from "./DonutGradientPath";

interface BalanceDonutProps {
  strokeWidth: number;
  radius: number;
  percentRemaining: SkiaMutableValue<number>;
}

export const BalanceDonut: FC<BalanceDonutProps> = ({
  strokeWidth,
  radius,
  percentRemaining,
}) => {
  return (
    <View style={styles.container}>
      <Canvas
        style={[
          styles.container,
          {
            transform: [{ rotate: "-90deg" }],
          },
        ]}
      >
        <DonutGradientPath
          strokeWidth={strokeWidth}
          radius={radius}
          percentRemaining={percentRemaining}
        />
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

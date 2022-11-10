import { Canvas, SkiaMutableValue } from "@shopify/react-native-skia";
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
    <View style={{ width: radius * 2.05, height: radius * 2.05 }}>
      <Canvas
        style={[
          { width: radius * 2.05, height: radius * 2.05 },
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

//https://youtu.be/VSynoqXjQvg?t=221

import { Canvas, Path, SkFont, Skia } from "@shopify/react-native-skia";
import React, { FC } from "react";

import { StyleSheet, View } from "react-native";

interface BudgetProps {
  strokeWidth: number;
  radius: number;
  percentageComplete: number;
  titleFont: SkFont;
  subtitleFont: SkFont;
  targetPercentage: number;
}

export const Budget: FC<BudgetProps> = ({
  strokeWidth,
  radius,
  percentageComplete,
  titleFont,
  subtitleFont,
  targetPercentage,
}) => {
  const innerRadius = radius - strokeWidth / 2;
  const targetText = `${targetPercentage * 100}`;

  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  const width = titleFont.getTextWidth(targetText);

  return (
    <View style={styles.container}>
      <Canvas style={styles.container}>
        <Path
          path={path}
          color="orange"
          style="stroke"
          strokeWidth={strokeWidth}
          strokeCap="round"
          start={0}
          end={targetPercentage}
        />
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

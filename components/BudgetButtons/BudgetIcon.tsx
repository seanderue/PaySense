import { autoScroll } from "@shopify/flash-list";
import {
  Canvas,
  Group,
  SkiaMutableValue,
  Text,
  useFont,
} from "@shopify/react-native-skia";
import React, { FC } from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import { BudgetDonut } from "./BudgetDonut";
import { DonutGradientPath } from "./DonutGradientPath";

const RADIUS = PixelRatio.roundToNearestPixel(79.32 / 2);
const STROKE_WIDTH = 4.5;

import { BudgetIconProps } from "./types";

export const BudgetIcon: FC<BudgetIconProps> = ({
  emoji,
  percentRemaining,
}) => {
  const fontSize = 30;
  //Will this have to load for every component?
  //It is really heavy and prevents quick loading
  const font = useFont(
    require("../../assets/fonts/NotoColorEmoji-Regular.ttf"),
    fontSize
  );
  if (font === null) {
    return null;
  }

  const iconWidth = fontSize;
  const innerRadius = RADIUS - STROKE_WIDTH / 2;

  return (
    <View style={styles.container}>
      <Canvas style={[styles.canvas]}>
        <Group
          transform={[{ rotate: Math.PI * 1.5 }]}
          origin={{ x: RADIUS, y: RADIUS }}
        >
          <DonutGradientPath
            strokeWidth={STROKE_WIDTH}
            radius={RADIUS}
            percentRemaining={percentRemaining}
          />
        </Group>
        <Text
          text={emoji}
          font={font}
          x={innerRadius - iconWidth / 2 - 1}
          y={innerRadius + iconWidth / 2 - 2}
          opacity={1}
        />
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  canvas: {
    height: RADIUS * 2,
    width: RADIUS * 2,
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
  },
});

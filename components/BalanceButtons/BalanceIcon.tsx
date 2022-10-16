import {
  Canvas,
  Group,
  SkiaMutableValue,
  useFont,
} from "@shopify/react-native-skia";
import React, { FC } from "react";
import { PixelRatio, StyleSheet, View, Text } from "react-native";
import { BalanceDonut } from "./BalanceDonut";
import { DonutGradientPath } from "./DonutGradientPath";

const RADIUS = PixelRatio.roundToNearestPixel(79.32 / 2);
const STROKE_WIDTH = 3;
const FONT_SIZE = 30;
const innerRadius = RADIUS - STROKE_WIDTH / 2;

import { BalanceIconProps } from "./types";

export const BalanceIcon: FC<BalanceIconProps> = ({
  emoji,
  percentRemaining,
}) => {
  //Will this have to load for every component?
  //It is really heavy and prevents quick loading
  const font = useFont(
    require("../../assets/fonts/NotoColorEmoji-Regular.ttf"),
    FONT_SIZE
  );

  if (font === null) {
    return null;
  }

  const iconWidth = FONT_SIZE;

  return (
    <View style={styles.container}>
      <Text style={styles.emojiIcon}>{emoji}</Text>
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
  emojiIcon: {
    position: "absolute",
    fontSize: FONT_SIZE,
    zIndex: 2,
    left: innerRadius - FONT_SIZE / 2 - 0.5,
    top: innerRadius - FONT_SIZE / 2 - 0.5,
  },
});

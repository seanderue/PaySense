import { Canvas, Group } from "@shopify/react-native-skia";
import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { DonutGradientPath } from "./DonutGradientPath";

const FONT_SIZE = 30;

import { FundIconProps } from "./types";

export const FundIcon: FC<FundIconProps> = ({
  emoji,
  percentRemaining,
  strokeWidth,
  iconFontSize,
  radius,
}) => {
  const iconWidth = FONT_SIZE;
  const innerRadius = radius - strokeWidth / 2;

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    canvas: {
      height: radius * 2,
      width: radius * 2,
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
    },
    emojiIcon: {
      position: "absolute",
      fontSize: iconFontSize,
      zIndex: 2,
      left: innerRadius - iconFontSize / 2 - 0.5,
      top: innerRadius - iconFontSize / 2 - 0.5,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.emojiIcon}>{emoji}</Text>
      <Canvas style={[styles.canvas]}>
        <Group
          transform={[{ rotate: Math.PI * 1.5 }]}
          origin={{ x: radius, y: radius }}
        >
          <DonutGradientPath
            strokeWidth={strokeWidth}
            radius={radius}
            percentRemaining={percentRemaining}
          />
        </Group>
      </Canvas>
    </View>
  );
};

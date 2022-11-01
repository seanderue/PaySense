import React, { FC } from "react";
import {
  Skia,
  LinearGradient,
  Canvas,
  RoundedRect,
  vec,
} from "@shopify/react-native-skia";
import { StyleSheet, View } from "react-native";
import { ScreenWidth, ScreenHeight } from "../shared/sizes";
import { colors } from "../shared/colors";
import { BarGraphicDetails } from "./BarGraphicDetails";

import { BarGraphicDetailsProps } from "./types";

const barBottomWidth = ScreenWidth * 0.25333;
const barBottomHeight = ScreenHeight * 0.013547;

export const BarGraphic: FC<BarGraphicDetailsProps> = ({
  amount,
  label,
  currency,
}) => {
  return (
    <View>
      <BarGraphicDetails amount={amount} label={label} currency={currency} />
      <Canvas style={styles.canvas}>
        <RoundedRect
          x={0}
          y={0}
          width={barBottomWidth}
          height={barBottomHeight}
          r={ScreenWidth * 0.02933}
          color={colors.gray1}
        />
        <RoundedRect
          x={0}
          y={0}
          width={barBottomWidth * 0.999}
          height={barBottomHeight}
          r={ScreenWidth * 0.02933}
        >
          <LinearGradient
            start={vec(0, barBottomHeight / 2)}
            end={vec(barBottomWidth, barBottomHeight / 2)}
            colors={[
              colors.gradientOrange,
              colors.gradientMagenta,
              colors.gradientBlue,
            ]}
            positions={[0, 0.2, 0.6]}
          />
        </RoundedRect>
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    height: barBottomHeight + 1,
    width: barBottomWidth + 1,
  },
});

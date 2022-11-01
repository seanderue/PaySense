import { Path, Skia, SweepGradient, vec } from "@shopify/react-native-skia";
import React, { FC } from "react";
import { colors } from "../shared/colors";

// Prop types
import { DonutGradientPathProps } from "./types";

export const DonutGradientPath: FC<DonutGradientPathProps> = ({
  strokeWidth,
  radius,
  percentRemaining,
}) => {
  const innerRadius = radius - strokeWidth / 2;
  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  return (
    <>
      <Path
        path={path}
        style={"stroke"}
        color={"#F4F5F6"}
        strokeWidth={strokeWidth}
        start={0}
        end={1}
      />
      <Path
        path={path}
        style={"stroke"}
        strokeWidth={strokeWidth}
        strokeCap="round"
        start={percentRemaining}
        end={1}
      >
        <SweepGradient
          origin={{ x: radius, y: radius }}
          c={vec(radius, radius)}
          start={0}
          //4 gradient colors to handle the coloring of the rounded strokecap
          colors={[
            colors.gradientOrange,
            colors.gradientBlue,
            colors.gradientMagenta,
            colors.gradientOrange,
          ]}
          positions={[0, 0.04, 0.6, 0.9]}
        />
      </Path>
    </>
  );
};

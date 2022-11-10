import { Canvas, Oval, Group, Mask, Rect } from "@shopify/react-native-skia";
import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { colors } from "../shared/colors";
import { ScreenHeight, ScreenWidth } from "../shared/sizes";

// Contstants
const TOP_FOLD_HEIGHT = ScreenHeight * 0.41;
const MAX_SIZE = ScreenWidth * 0.42;
const MIN_SIZE = ScreenWidth * 0.16;
const VIEWABLE_BG_AREA_HEIGHT = ScreenHeight * 0.2;

// ---Helper Functions & Types---
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomizeValueSign = (value: number) => {
  return Math.random() < 0.5 ? -value : value;
};

type decorationProps = {
  diameter: number;
  x: number;
  y: number;
  icon?: string;
};

// ---Decoration Element Component---

const AnimatedBGElement: FC<decorationProps> = ({ diameter, x, y, icon }) => {
  // Animation Effects
  useEffect(() => {
    yOffset.value = 0;
    yOffset.value = withRepeat(
      withTiming(randomizeValueSign(20), { duration: 10000 }),
      -1,
      true
    );

    xOffset.value = 0;
    xOffset.value = withRepeat(
      withTiming(randomizeValueSign(2), { duration: 10000 }),
      -1,
      true
    );
  }, [AnimatedDetailsBackground]);

  const yOffset = useSharedValue(0);
  const xOffset = useSharedValue(0);
  const animatedBGComponent = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: yOffset.value }, { translateX: xOffset.value }],
    };
  }, []);
  const dimensions = diameter;
  const right = x;
  const top = y;

  return (
    <>
      <Animated.View
        style={[
          {
            position: "absolute",
            zIndex: 3,
            height: dimensions,
            width: dimensions,
            backgroundColor: colors.backgroundBlueFaded,
            borderRadius: dimensions / 2,
            top: top,
            right: right,
            alignItems: "center",
          },
          animatedBGComponent,
        ]}
      >
        <Animated.Text
          style={[
            {
              position: "absolute",
              zIndex: 1,
              color: colors.redDark,
              top: dimensions / 5,
              fontSize: dimensions / 2,
              opacity: 0.2,
            },
          ]}
        >
          {icon}
        </Animated.Text>
      </Animated.View>
    </>
  );
};

// ---Animated Details Background Component---

export const AnimatedDetailsBackground: FC<{ icon: string }> = ({ icon }) => {
  const [DecorElements, setDecorElements] = useState([
    <AnimatedBGElement key={0} diameter={0} x={0} y={0} icon={icon} />,
  ]);

  // --Populating Decor Elements--

  const setDecorLayout = () => {
    const decorations: JSX.Element[] = [];
    const positions: decorationProps[] = [];
    const elementMargin = ScreenWidth * 0.027;
    //Remove all entries in array before repopulating
    // may be redundant once state is involved

    for (let i = 0; i < 6; i++) {
      decorations.pop;
      positions.pop;
    }

    for (let i = 0; i < 5; i++) {
      // -Verbose Logic-
      const positionsIsInitialized = positions.length > 0;
      let newestElement = positions[positions.length - 1];
      let newestElementIsLargerThan50PercentMaxSize =
        newestElement?.diameter > MAX_SIZE / 2;
      let newestElementIsAboveHalfOfViewArea =
        newestElement?.y > VIEWABLE_BG_AREA_HEIGHT / 2;

      let randomDiameter = positionsIsInitialized
        ? newestElementIsLargerThan50PercentMaxSize
          ? getRandomInt(MIN_SIZE, MAX_SIZE / 2)
          : getRandomInt(MAX_SIZE / 2, MAX_SIZE)
        : getRandomInt(MIN_SIZE, MAX_SIZE);

      const newElementPosition: decorationProps = {
        diameter: randomDiameter,
        x: positionsIsInitialized
          ? newestElement.x + newestElement.diameter
          : 0,
        y: positionsIsInitialized
          ? newestElementIsAboveHalfOfViewArea
            ? newestElement.y - newestElement.diameter * 1.2
            : newestElement.y + newestElement.diameter * 1.2
          : 0,
        icon: icon,
      };
      positions.push(newElementPosition);
      decorations.push(<AnimatedBGElement key={i} {...newElementPosition} />);
    }
    return decorations;
  };

  useEffect(() => {
    setDecorElements(setDecorLayout());
  }, []);

  return (
    <View style={styles.frame}>
      <Canvas style={styles.canvas}>
        <Mask
          mode="luminance"
          mask={
            <Group>
              <Rect
                x={0}
                y={0}
                width={ScreenWidth}
                height={TOP_FOLD_HEIGHT}
                color={colors.white}
              />
              <Oval
                x={-(ScreenWidth * 1.2 - ScreenWidth) / 2}
                y={0}
                width={ScreenWidth * 1.2}
                height={ScreenHeight * 0.35}
                color={colors.black}
              />
            </Group>
          }
        >
          <Rect
            x={0}
            y={0}
            width={ScreenWidth}
            height={TOP_FOLD_HEIGHT}
            color={colors.white}
          />
        </Mask>
      </Canvas>
      <>{DecorElements}</>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: ScreenWidth,
    backgroundColor: colors.black,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  canvas: {
    position: "absolute",
    zIndex: 5,
    width: ScreenWidth,
    height: TOP_FOLD_HEIGHT,
    top: 0,
  },
});

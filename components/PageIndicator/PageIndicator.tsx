import React, { FC, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { colors } from "../shared/colors";
import { ScreenWidth } from "../shared/sizes";

interface PageIndicatorProps {
  pageCount: number;
  activePageIndex: number;
  toggledRight: boolean;
}

interface PageDotProps {
  animatedStyles: object;
}

const PageDot: FC<PageDotProps> = ({ animatedStyles }) => {
  return (
    <Animated.View style={[styles.pageDot, animatedStyles]}></Animated.View>
  );
};

export const PageIndicator: FC<PageIndicatorProps> = ({
  pageCount,
  activePageIndex,
}) => {
  const DELAY = 500;

  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);
  const progress = useSharedValue(0);
  const lastActive = useRef(activePageIndex);

  //Fade-In upon balance type switch
  useEffect(() => {
    // Reseting values to
    opacity.value = 0;
    scale.value = 0;

    // Running animation
    opacity.value = withDelay(DELAY, withTiming(1));
    scale.value = withDelay(
      DELAY,
      withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );
  }, [pageCount]);

  //Recolor dot upon page swipe
  useEffect(() => {
    // Reseting values
    lastActive.current = activePageIndex;
    progress.value = 0;

    // Running animation
    progress.value =
      // withDelay(
      //   DELAY,
      withTiming(1, {
        duration: 700,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    // );
  }, [activePageIndex]);

  //Debugging
  useEffect(() => {
    // console.log(`activePageIndex: ${activePageIndex}`);
    // console.log(`lastActive.current: ${lastActive.current}`);
  }, [activePageIndex]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  }, []);

  const animatedColorActive = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.gray1, colors.gray3]
    );
    return { backgroundColor };
  }, []);

  const animatedColorLastActive = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.gray3, colors.gray1]
    );
    return { backgroundColor };
  }, []);

  const checkIfActive = (index: number) => {
    return index === activePageIndex ? true : false;
  };

  const checkIfLastActive = (index: number) => {
    return index === lastActive.current;
  };

  const dotElements = [...Array(pageCount)].map((_, i) => {
    return (
      <PageDot
        animatedStyles={
          !(checkIfActive(i) || checkIfLastActive(i))
            ? [animatedStyles, { backgroundColor: colors.gray1 }]
            : checkIfActive(i)
            ? [animatedStyles, animatedColorActive]
            : [animatedStyles, animatedColorLastActive]
        }
        key={i}
      />
    );
  });

  return <View style={styles.pageIndicatorContainer}>{dotElements}</View>;
};

const styles = StyleSheet.create({
  pageDot: {
    height: ScreenWidth * 0.02677,
    width: ScreenWidth * 0.02677,
    borderRadius: 100,
    marginRight: 5,
    marginLeft: 5,
  },
  inactive: {
    backgroundColor: colors.gray1,
  },
  active: {
    backgroundColor: colors.gray3,
  },
  pageIndicatorContainer: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});

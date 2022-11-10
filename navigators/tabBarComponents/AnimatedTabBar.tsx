// Libraries
import React, { FC, useEffect, useReducer, useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

// Params
import {
  BottomTabBarButtonProps,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";

// Shared Styling
import { colors } from "../../components/shared/colors";
import { shadowStyles } from "../../components/shared/shadowStyles";

// Custom components
import { TabBarTab } from "./TabBarTab";
import { ScreenHeight, ScreenWidth } from "../../components/shared/sizes";
import { AddNewButton } from "./AddNewButton";

// ---Constants---;
const ADD_BUTTON_LENGTH = Math.round(ScreenWidth * 0.16);
const ADD_BUTTON_Y_OFFSET = -ADD_BUTTON_LENGTH / 2;
const WALLET_TAB_INDEX = 0;
const STATS_TAB_INDEX = 1;
const TAB_BAR_HEIGHT_CLOSED = Math.round(ScreenHeight * 0.1108);
const TAB_BAR_HEIGHT_OPEN = Math.round(ScreenHeight * 0.707);
const TAB_BAR_TOGGLE_TIMING = {
  duration: 500,
  easing: Easing.bezier(0, 0, 0.6, 1),
};

export const AnimatedTabBar = ({
  state: { routes },
  navigation,
}: BottomTabBarProps) => {
  //Animation Values
  const height = useSharedValue(TAB_BAR_HEIGHT_CLOSED);
  const rotation = useSharedValue(0);
  const progress = useSharedValue(0);
  const [toggledOpen, setToggledOpen] = useState(false);

  useEffect(() => {
    height.value = toggledOpen
      ? withTiming(TAB_BAR_HEIGHT_OPEN, TAB_BAR_TOGGLE_TIMING)
      : withTiming(TAB_BAR_HEIGHT_CLOSED, TAB_BAR_TOGGLE_TIMING);
  }, [toggledOpen]);

  const highlightWalletTab = () => {
    progress.value = withTiming(0);
  };

  const highlightStatsTab = () => {
    progress.value = withTiming(1);
  };

  // ----Animated Styles----

  const animatedHeightStyles = useAnimatedStyle(() => {
    return { height: height.value };
  });
  const animatedRotationStyles = useAnimatedStyle(() => {
    return { transform: [{ rotate: `${rotation.value}deg` }] };
  });
  const walletColorStyles = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [1, 0],
      [colors.gray3, colors.primary]
    );
    return { color };
  });
  const statsColorStyles = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [colors.gray3, colors.primary]
    );
    return { color };
  });

  // ---- Plus Circle Button ----

  const AddTabBarButton: FC<BottomTabBarButtonProps> = ({
    children,
    onPress,
  }) => {
    return (
      <View>
        <Pressable onPress={onPress}>
          <View style={styles.addButton}>{children}</View>
        </Pressable>
      </View>
    );
  };

  // --- Animated Tab Bar ----
  return (
    <>
      <Animated.View style={[styles.tabBarStyle, animatedHeightStyles]}>
        <View
          style={{ flex: 1, borderRadius: 40, justifyContent: "flex-start" }}
        >
          <View style={styles.tabBarContainer}>
            {!toggledOpen && (
              <TabBarTab
                animatedStyles={walletColorStyles}
                name={routes[WALLET_TAB_INDEX].name}
                onPress={() => {
                  highlightWalletTab();
                  navigation.navigate(routes[WALLET_TAB_INDEX].name);
                }}
              />
            )}
            <AddTabBarButton
              children={
                <Animated.View
                  style={[{ position: "absolute" }, animatedRotationStyles]}
                >
                  <Feather
                    name="plus"
                    size={32}
                    color={colors.white}
                    // style={{ marginLeft: 4 }}
                  />
                </Animated.View>
              }
              onPress={() => {
                console.log("pressed");
                rotation.value = withTiming(
                  toggledOpen ? 0 : 45,
                  TAB_BAR_TOGGLE_TIMING
                );
                setToggledOpen((prev) => !prev);
              }}
            />
            {!toggledOpen && (
              <TabBarTab
                animatedStyles={statsColorStyles}
                name={routes[STATS_TAB_INDEX].name}
                onPress={() => {
                  highlightStatsTab();
                  navigation.navigate(routes[STATS_TAB_INDEX].name);
                }}
              />
            )}
          </View>
          <View style={styles.bottomFoldWrapper}>
            <Pressable
              onPress={() => {
                console.log("tap");
              }}
            >
              <View style={styles.buttonContainer}>
                <AddNewButton label={"New transaction"} icon={"💸"} />
                <AddNewButton label={"New budget"} icon={"💰"} />
                <AddNewButton label={"New saving goal"} icon={"🎯"} />
                <AddNewButton label={"Balance adjustment"} icon={"🎚"} />
              </View>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    justifyContent: "center",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: colors.white,
    borderRadius: TAB_BAR_HEIGHT_CLOSED * 0.4444,
    height: TAB_BAR_HEIGHT_CLOSED,
    paddingBottom: 0,
    ...shadowStyles.shadow1,
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: TAB_BAR_HEIGHT_CLOSED,
  },
  addButton: {
    top: ADD_BUTTON_Y_OFFSET,
    height: ADD_BUTTON_LENGTH,
    width: ADD_BUTTON_LENGTH,
    borderRadius: ADD_BUTTON_LENGTH / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    ...shadowStyles.shadow2,
  },
  bottomFoldWrapper: {
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    height: "90%",
    width: ScreenWidth * 0.9,
    paddingBottom: TAB_BAR_HEIGHT_CLOSED / 2,
    justifyContent: "space-between",
  },
});

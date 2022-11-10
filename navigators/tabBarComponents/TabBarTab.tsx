import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React, { FC, useEffect, useState } from "react";
import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../components/shared/colors";
import { ScreenWidth } from "../../components/shared/sizes";
import { textStyles } from "../../components/shared/textStyles";

type TabBarTabProps = {
  name: string;
  //Depreciated :active?
  active?: boolean;
  onPress: () => void;
  animatedStyles: { color: string };
};

type TabIconProps = {
  name: string;
};

export const TabBarTab = ({
  animatedStyles,
  name,
  onPress,
}: TabBarTabProps) => {
  const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

  const TabIcon: FC<TabIconProps> = ({ name }) => {
    const Icon = () => {
      // If the route name = home, return home tab JSX
      return name === "HomeStack" ? (
        <View style={styles.tab}>
          <AnimatedIcon
            name="wallet"
            size={24}
            style={[styles.walletTab, animatedStyles]}
          />
          <Animated.Text style={[textStyles.Cap2, animatedStyles]}>
            Wallet
          </Animated.Text>
        </View>
      ) : // If the route name = Stats, return Stats tab JSX
      name === "StatsStack" ? (
        <View style={styles.tab}>
          <AnimatedIcon
            name="stats-chart"
            size={24}
            style={[styles.statsTab, animatedStyles]}
          />
          <Animated.Text style={[textStyles.Cap2, animatedStyles]}>
            Stats
          </Animated.Text>
        </View>
      ) : (
        <Text> ? </Text>
      );
    };

    return <Icon />;
  };

  return (
    <Pressable onPress={onPress}>
      <TabIcon name={name} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    justifyContent: "center",
    width: ScreenWidth * 0.12,
    color: colors.accentBlue,
    // top: 10,
  },
  walletTab: { paddingLeft: 4 },
  statsTab: { paddingLeft: 2 },
});

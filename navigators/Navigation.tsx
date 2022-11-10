import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

// ---Screen Imports---
import Home from "../screens/Home";
import Stats from "../screens/Stats";

// Shared Styling
import { colors } from "../components/shared/colors";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Assets
import { Ionicons } from "@expo/vector-icons";
import { AnimatedTabBar } from "./tabBarComponents/AnimatedTabBar";
import Settings from "../screens/Settings";
import BalanceDetails from "../screens/BalanceDetails";

export type RootStackParams = {
  Home: undefined;
  Stats: undefined;
  Settings: undefined;
  BalanceDetails: {
    title: string;
    emojiIcon: string;
    balance: number;
    percentRemaining: number;
    id: number;
    balanceType: string;
  };
};

export type TabStackParams = {
  HomeStack: undefined;
  StatsStack: undefined;
};

const Tabs = createBottomTabNavigator<TabStackParams>();
const Stack = createStackNavigator<RootStackParams>();

const TabsScreen = () => {
  return (
    <Tabs.Navigator
      tabBar={(props) => <AnimatedTabBar {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen name="HomeStack" component={HomeStack} options={{}} />
      <Tabs.Screen name="StatsStack" component={StatsStack} options={{}} />
    </Tabs.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={Settings} options={{}} />
      <Stack.Screen
        name="BalanceDetails"
        component={BalanceDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const StatsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stats" component={Stats} options={{}} />
      <Stack.Screen name="Settings" component={Settings} options={{}} />
    </Stack.Navigator>
  );
};

const Navigation: FunctionComponent = () => {
  const progress = useSharedValue(0);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    progress.value = withTiming(tab === 0 ? 1 : 0, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [tab]);

  return (
    <NavigationContainer>
      <TabsScreen />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    color: colors.accentBlue,
    // top: 10,
  },
  walletTab: { paddingLeft: 4 },
  statsTab: { paddingLeft: 2 },
});

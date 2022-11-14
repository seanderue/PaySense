import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, View, Text, GestureResponderEvent } from "react-native";
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
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Assets
import { Ionicons } from "@expo/vector-icons";
import { AnimatedTabBar } from "./tabBarComponents/AnimatedTabBar";
import Settings from "../screens/Settings";
import FundDetails from "../screens/FundDetails";
import { EditBudget } from "../screens/EditBudget";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScreenHeight } from "../components/shared/sizes";
import { textStyles } from "../components/shared/textStyles";
import { BackIconButton } from "../components/IconButtons/BackIconButton";
import { FundButtonProps } from "../components/FundButtons/types";

export type RootStackParams = {
  Home: undefined;
  Stats: undefined;
  Settings: undefined;
  FundDetails: FundButtonProps;
  EditBudget: undefined;
  NewBudget: undefined;
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
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={Settings} options={{}} />
      <Stack.Screen
        name="FundDetails"
        component={FundDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditBudget"
        component={EditBudget}
        options={{
          headerTitle: "Edit Budget",
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            height: ScreenHeight * 0.13547,
          },
          headerTitleStyle: [textStyles.LogoBig, textStyles.textColorDark],
          headerLeft: (props) => (
            <BackIconButton
              {...props}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerLeftContainerStyle: {
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          },
        }}
      />
      <Stack.Screen
        name="NewBudget"
        component={EditBudget}
        options={{
          headerTitle: "New Budget",
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            height: ScreenHeight * 0.13547,
          },
          headerTitleStyle: [textStyles.LogoBig, textStyles.textColorDark],
          headerLeft: (props) => (
            <BackIconButton
              {...props}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerLeftContainerStyle: {
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          },
        }}
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
    <SafeAreaProvider>
      <NavigationContainer>
        <TabsScreen />
      </NavigationContainer>
    </SafeAreaProvider>
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

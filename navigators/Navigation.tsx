import React, {
  FC,
  FunctionComponent,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

// ---Screen Imports---
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import OldNewHome from "../screens/OldNewHome";

// custom components
import { colors } from "../components/shared/colors";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

// params
import { BudgetCardProps } from "../components/BalanceButtons/types";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

// budget back icon
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  LayoutChangeEvent,
} from "react-native";
import { textStyles } from "../components/shared/textStyles";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Animation values
const DEFAULT_HEIGHT = 90;

const RootStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const AnimatedTabBar = ({
  state: { index: activeIndex, routes },
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const reducer = (state: any, action: { y: number; index: number }) => {
    // Add the new value to the state
    return [...state, { y: action.y, index: action.index }];
  };

  const [layout, dispatch] = useReducer(reducer, []);
  // console.log(layout);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({ y: event.nativeEvent.layout.y, index });
  };

  //Animation Values
  const height = useSharedValue(DEFAULT_HEIGHT);
  const rotation = useSharedValue(0);
  const addButtonYOffset = useSharedValue(-30);
  const [toggledOpen, setToggledOpen] = useState(false);

  useEffect(() => {
    height.value = toggledOpen
      ? withTiming(574, {
          duration: 500,
          easing: Easing.bezier(0, 0, 0.6, 1),
        })
      : withTiming(DEFAULT_HEIGHT, {
          duration: 500,
          easing: Easing.bezier(0, 0, 0.6, 1),
        });
  }, [toggledOpen]);

  const animatedHeightStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, { duration: 500 }),
    };
  });

  const animatedRotationStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  const animatedYOffsetStyles = useAnimatedStyle(() => {
    return {
      top: addButtonYOffset.value,
    };
  });

  const AddTabBarButton: FC<BottomTabBarButtonProps> = ({
    children,
    onPress,
  }) => {
    return (
      <Animated.View style={animatedYOffsetStyles}>
        <Pressable onPress={onPress}>
          <View style={styles.addButton}>{children}</View>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <>
      <Animated.View style={[styles.tabBarStyle, animatedHeightStyles]}>
        <View
          style={{ flex: 1, borderRadius: 40, justifyContent: "flex-start" }}
        >
          <View style={styles.tabBarContainer}>
            {toggledOpen ? (
              <></>
            ) : (
              <TabBarComponent
                active={0 === activeIndex}
                options={descriptors[routes[0].key].options}
                onLayout={(e) => handleLayout(e, 0)}
                onPress={() => navigation.navigate(routes[0].name)}
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
                rotation.value = withTiming(toggledOpen ? 0 : 45, {
                  duration: 500,
                  easing: Easing.bezier(0, 0, 0.6, 1),
                });
                setToggledOpen((prev) => !prev);
              }}
            />
            {toggledOpen ? (
              <></>
            ) : (
              <TabBarComponent
                active={1 === activeIndex}
                options={descriptors[routes[1].key].options}
                onLayout={(e) => handleLayout(e, 1)}
                onPress={() => navigation.navigate(routes[1].name)}
              />
            )}
          </View>
        </View>
      </Animated.View>
    </>
  );
};

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};

const TabBarComponent = ({
  active,
  options,
  onLayout,
  onPress,
}: TabBarComponentProps) => {
  const ref = useRef(null);

  return (
    <Pressable onPress={onPress} onLayout={onLayout}>
      {options.tabBarIcon ? (
        options.tabBarIcon({
          focused: active ? active : false,
          color: active ? colors.primary : colors.gray3,
          size: 30,
        })
      ) : (
        <Text>?</Text>
      )}
    </Pressable>
  );
};

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

// const walletColor = useAnimatedStyle(() => {
//   const color = interpolateColor(
//     progress.value,
//     [0, 1],
//     [colors.gray3, colors.primary]
//   );

//   return { color };
// });

// const statsColor = useAnimatedStyle(() => {
//   const color = interpolateColor(
//     progress.value,
//     [1, 0],
//     [colors.gray3, colors.primary]
//   );

//   return { color };
// });

const Navigation: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBar={(props) => <AnimatedTabBar {...props} />}
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tab}>
                <AnimatedIcon
                  name="wallet"
                  size={24}
                  color={colors.primary}
                  style={{ paddingLeft: 4 }}
                />
                <Text
                  style={[
                    textStyles.Cap2,
                    { color: focused ? colors.primary : colors.gray3 },
                  ]}
                >
                  Wallet
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Welcome"
          component={Welcome}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tab}>
                <AnimatedIcon
                  name="stats-chart"
                  size={24}
                  color={focused ? colors.primary : colors.gray3}
                  style={{ paddingLeft: 2 }}
                />
                <Text
                  style={[
                    textStyles.Cap2,
                    { color: focused ? colors.primary : colors.gray3 },
                  ]}
                >
                  Stats
                </Text>
              </View>
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const shadowStyles = StyleSheet.create({
  shadow1: {
    shadowColor: "#161616",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.16,
    shadowRadius: 14,
  },
  shadow2: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
});

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    // top: 10,
  },
  tabBarStyle: {
    position: "absolute",
    justifyContent: "center",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: colors.white,
    borderRadius: 40,
    height: 90,
    paddingBottom: 0,
    ...shadowStyles.shadow1,
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 15,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    ...shadowStyles.shadow2,
  },
});

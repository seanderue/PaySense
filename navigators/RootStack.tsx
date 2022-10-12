import React, { FunctionComponent } from "react";

// React Screens
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Budget from "../screens/Budget";

// custom components
import { colors } from "../components/colors";
import Greeting from "../components/Headers/Greeting";
import Profile from "../components/Headers/Profile";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// ---Budget Screen Imports---

// params
import { BudgetCardProps } from "../components/BudgetButtons/types";

// budget back icon
import { Ionicons } from "@expo/vector-icons";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Budget: BudgetCardProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.white,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.neutral2,
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting mainText="Hey Sean" subText="Welcome back" {...props} />
            ),
            headerTitleAlign: "left",
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Budget"
          component={Budget}
          options={({ route }) => ({
            headerTitle: route?.params?.title,
            headerTitleAlign: "center",
            headerBackImage: (props) => (
              <Ionicons
                {...props}
                name="chevron-back"
                size={25}
                color={colors.neutral3}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

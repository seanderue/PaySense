import React, { FunctionComponent } from "react";

// React Screens
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";

// custom components
import { colors } from "../components/colors";
import Greeting from "../components/Headers/Greeting";
import Profile from "../components/Headers/Profile";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.white,
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120,
                    },
                    headerTintColor: colors.neutral2,
                }}
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options= {{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options= {{ 
                        headerTitle: (props) => (
                            <Greeting
                                mainText="Hey Seanalong"
                                subText="Welcome back"
                                {...props}
                            />
                        ),
                        headerLeft: () => <></>
                     }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
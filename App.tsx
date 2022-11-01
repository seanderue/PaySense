import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Custom font
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// React Navigation
import Navigation from "./navigators/Navigation";

// Amplify
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

import { withAuthenticator } from "@aws-amplify/ui-react";

import { BalanceButtonSection } from "./components/BalanceButtons/BalanceButtonSection";
import { StyleSheet, Text, View } from "react-native";
import { BalanceButtonPage } from "./components/BalanceButtons/BalanceButtonPage";
import Home from "./screens/Home";
import { BarGraphic } from "./components/BarGraphic/BarGraphic";

function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "NotoColorEmoji-Regular": require("./assets/fonts/NotoColorEmoji-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigation />;
}

//Migrate this code
const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-around",
  },
});

// export default withAuthenticator(App)
export default App;

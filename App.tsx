import React from "react";
// Custom font
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// React Navigation
import RootStack from "./navigators/RootStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
    "Poppins-Medium": require('./assets/fonts/Poppins-Medium.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RootStack />
  ); 
}
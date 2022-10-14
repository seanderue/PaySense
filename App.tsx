import React from "react";
// Custom font
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// React Navigation
import RootStack from "./navigators/RootStack";

// Amplify
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

import { withAuthenticator } from "@aws-amplify/ui-react";

import { BudgetButtonSection } from "./components/BalanceButtons/BalanceButtonSection";
import { StyleSheet, Text, View } from "react-native";
import { BudgetButtonPage } from "./components/BalanceButtons/BalanceButtonPage";
import { Home } from "./screens/Home";

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

  return (
    // <>
    //   <View style={{ marginTop: 250 }}>
    //     <Text>Testing the font 🍎👾🍗🛼🏡🥊</Text>
    //     <Text style={{ fontFamily: "Poppins-Regular" }}>
    //       Testing the font 🍎👾🍗🛼🏡🥊
    //     </Text>
    //   </View>
    //   <View style={styles.container}>
    //     <BudgetButtonSection data={budgetData} page={0} />
    //   </View>
    //   {/* <View style={styles.container}>
    //     <BudgetButtonPage data={budgetData} page={0} />
    //   </View> */}
    // </>
    // return <RootStack />;
    <Home />
  );
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

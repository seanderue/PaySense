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

import { BudgetButtonSection } from "./components/BudgetButtons/BudgetButtonSection";
import { StyleSheet, Text, View } from "react-native";
import { BudgetButtonPage } from "./components/BudgetButtons/BudgetButtonPage";

function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "NotoColorEmoji-Regular": require("./assets/fonts/NotoColorEmoji-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  //Migrate some code to a screen for this

  const budgetData = [
    {
      id: "1",
      title: "test",
      balance: 420.69,
      emojiIcon: "",
      percentRemaining: 0.34,
    },
    {
      id: "2",
      title: "ONE",
      balance: 420.69,
      emojiIcon: "🍎",
      percentRemaining: 0.34,
    },
    {
      id: "3",
      title: "TWO",
      balance: 23.19,
      emojiIcon: "🍎",
      percentRemaining: 0.23,
    },
    {
      id: "4",
      title: "THREE",
      balance: 40,
      emojiIcon: "🍎",
      percentRemaining: 0.69,
    },
    {
      id: "5",
      title: "FOUR",
      balance: 23.19,
      emojiIcon: "🍎",
      percentRemaining: 0.23,
    },
    {
      id: "6",
      title: "FIVE",
      balance: 23.19,
      emojiIcon: "🍎",
      percentRemaining: 0.23,
    },
    {
      id: "7",
      title: "SIX",
      balance: 23.19,
      emojiIcon: "🍎",
      percentRemaining: 0.23,
    },
    {
      id: "8",
      title: "SEVEN",
      balance: 23.19,
      emojiIcon: "🍎",
      percentRemaining: 0.23,
    },
    {
      id: "9",
      title: "EIGHT",
      balance: 23.19,
      emojiIcon: "🍎",
      percentRemaining: 0.23,
    },
  ];

  return (
    <>
      <View style={{ marginTop: 250 }}>
        <Text>Testing the font 🍎👾🍗🛼🏡🥊</Text>
        <Text style={{ fontFamily: "Poppins-Regular" }}>
          Testing the font 🍎👾🍗🛼🏡🥊
        </Text>
      </View>
      <View style={styles.container}>
        <BudgetButtonSection data={budgetData} page={0} />
      </View>
      {/* <View style={styles.container}>
        <BudgetButtonPage data={budgetData} page={0} />
      </View> */}
    </>
  );
  // return <RootStack />;
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

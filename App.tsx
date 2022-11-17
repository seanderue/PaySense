import React from "react";

// Custom font
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// React Navigation
import Navigation from "./navigators/Navigation";

// Amplify
// @ts-ignore
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import signUpConfig from "./util/signUpConfig";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

import { StyleSheet } from "react-native";
import { colors } from "./components/shared/colors";
import { ScreenWidth } from "./components/shared/sizes";
import { textStyles } from "./components/shared/textStyles";

function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
  });

  // Auth.signOut();

  // Eventually use an update AppLoading
  if (!fontsLoaded) {
    return <></>;
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

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: colors.primary,
    borderRadius: ScreenWidth * 0.02133,
  },
  buttonDisabled: {
    ...AmplifyTheme.button,
    backgroundColor: colors.primaryDisabled,
    borderRadius: ScreenWidth * 0.02133,
  },
  sectionHeaderText: {
    ...AmplifyTheme.sectionHeaderText,
    ...textStyles.LogoBig,
    color: textStyles.textColorDark,
  },
  buttonText: {
    ...AmplifyTheme.buttonText,
    ...textStyles.Cap2,
    color: colors.white,
  },
  input: {
    ...AmplifyTheme.input,
    borderRadius: ScreenWidth * 0.02133,
    ...textStyles.Body2,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: colors.primary,
  },
  sectionFooterLinkDisabled: {
    ...AmplifyTheme.sectionFooterLinkDisabled,
    color: colors.redDark,
  },
  inputLabel: {
    ...AmplifyTheme.inputLabel,
    ...textStyles.Body2,
  },
  errorRowText: {
    ...AmplifyTheme.errorRowText,
    ...textStyles.Cap2,
  },
  errorRow: {
    ...AmplifyTheme.errorRow,
    alignItems: "center",
  },
};

export default withAuthenticator(App, { signUpConfig, theme: customTheme });
// export default App;

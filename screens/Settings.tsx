import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

// custom components
import { colors } from "../components/shared/colors";
import { RootStackParams } from "../navigators/Navigation";
import { Auth } from "aws-amplify";

const Settings: FC<
  NativeStackScreenProps<RootStackParams, "Settings">
> = () => {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.welcomeContainer}>
        <View style={styles.topSection}>
          <Text>Imagine pretty Settings here for now</Text>
          <Text>⚙️⚙️</Text>
          <Text>Ooooh...ahhhh.....</Text>
          <Pressable
            onPress={() => {
              Auth.signOut();
            }}
            style={{ width: "100%", backgroundColor: colors.redDark }}
          >
            <Text>Sign Out</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  welcomeContainer: {
    backgroundColor: colors.white,
    width: "100%",
    height: "100%",
  },
  topSection: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 25,
    flex: 1,
  },
});

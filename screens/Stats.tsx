import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigators/Navigation";

// custom components
import { colors } from "../components/shared/colors";

const Stats: FC<NativeStackScreenProps<RootStackParams, "Stats">> = ({
  navigation,
}) => {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.welcomeContainer}>
        <View style={styles.topSection}>
          <Text>Imagine pretty stats here for now</Text>
          <Text>📈📊</Text>
          <Text>Ooooh...ahhhh.....</Text>
        </View>
      </View>
    </>
  );
};

export default Stats;

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

import { useFont } from "@shopify/react-native-skia";
import React from "react";
import { PixelRatio, Pressable, StyleSheet, Text, View } from "react-native";
import { Budget } from "./BudgetComponent";

const RADIUS = PixelRatio.roundToNearestPixel(130);
const STROKE_WIDTH = 12;

export const BudgetContainer = () => {
  const percentageComplete = 0.85;

  const titleFont = useFont(require("../../assets/Poppins-Regular.ttf"), 14);
  const subtitleFont = useFont(require("../../assets/Poppins-Regular.ttf"), 10);

  if (!titleFont || !subtitleFont) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.budgetContainer}>
        <Budget
          radius={RADIUS}
          strokeWidth={STROKE_WIDTH}
          percentageComplete={percentageComplete}
          targetPercentage={percentageComplete}
          titleFont={titleFont}
          subtitleFont={subtitleFont}
        />
      </View>
      <Pressable onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Animate!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 40,
    backgroundColor: "orange",
    paddingHorizontal: 60,
    paddingVertical: 15,
  },
  budgetContainer: {
    height: RADIUS * 2,
    width: RADIUS * 2,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

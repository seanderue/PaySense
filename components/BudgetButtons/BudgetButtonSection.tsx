import React, { FC } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { BudgetButtonPage } from "./BudgetButtonPage";

//IRRELEVANT TYPE
import { BudgetButtonPageProps } from "./types";
const { width, height } = Dimensions.get("window");

export const BudgetButtonSection: FC<BudgetButtonPageProps> = ({ data }) => {
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
    {
      id: "10",
      title: "NINE",
      balance: 23.19,
      emojiIcon: "🍎",
      percentRemaining: 0.23,
    },
    {
      id: "11",
      title: "TEN",
      balance: 23.19,
      emojiIcon: "🍎",
      percentRemaining: 0.23,
    },
    {
      id: "12",
      title: "ELEVEN",
      balance: 23.19,
      emojiIcon: "🍎",
      percentRemaining: 0.23,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          style={styles.ScrollView}
        >
          <BudgetButtonPage data={budgetData} page={0} />
          <BudgetButtonPage data={budgetData} page={1} />
          <BudgetButtonPage data={budgetData} page={2} />
        </Animated.ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScrollView: { height: "100%" },
  slider: {
    height: 0.61 * height,
    backgroundColor: "cyan",
  },
  container: {
    flex: 1,
  },
});

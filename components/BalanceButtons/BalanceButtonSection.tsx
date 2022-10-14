import React, { FC } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { BalanceButtonPage } from "./BalanceButtonPage";
import { balanceData } from "../../balanceData";

//IRRELEVANT TYPE
import { BalanceButtonPageProps } from "./types";
const { width, height } = Dimensions.get("window");

export const BalanceButtonSection: FC<BalanceButtonPageProps> = ({ data }) => {
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
          <BalanceButtonPage data={balanceData} page={0} />
          <BalanceButtonPage data={balanceData} page={1} />
        </Animated.ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScrollView: { height: "100%" },
  slider: {
    height: 0.61 * height,
    // backgroundColor: "cyan",
  },
  container: {
    flex: 1,
  },
});

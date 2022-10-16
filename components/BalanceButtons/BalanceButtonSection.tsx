import React, { FC } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { BalanceButtonPage } from "./BalanceButtonPage";
import { balanceData } from "../shared/balanceData";

import { CONTENT_WIDTH_PERCENTAGE } from "../../screens/Home";
import { BALANCE_PAGE_MARGIN } from "../shared/sizes";
const { width, height } = Dimensions.get("window");

export const BalanceButtonSection: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          horizontal
          snapToInterval={
            width * CONTENT_WIDTH_PERCENTAGE + BALANCE_PAGE_MARGIN
          }
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

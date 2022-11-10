import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet, Pressable } from "react-native";

// components
import { colors } from "../shared/colors";

// types
import { TransactionProps } from "./types";
import { BalanceDonut } from "../BalanceButtons/BalanceDonut";
import { textStyles } from "../shared/textStyles";
import { ScreenHeight, ScreenWidth } from "../shared/sizes";
import { shadowStyles } from "../shared/shadowStyles";
import { useValue } from "@shopify/react-native-skia";
import Animated, {
  Easing,
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const TransactionItem: FunctionComponent<TransactionProps> = ({
  title,
  amount,
  date,
  percentMissing,
}) => {
  const SCREEN_HEIGHT_CLOSED = ScreenHeight * 0.06897;
  const SCREEN_HEIGHT_OPEN = ScreenHeight * 0.16089;

  const [transactionIsClosed, setTransactionIsClosed] = useState(true);

  const animatedHeight = useSharedValue(SCREEN_HEIGHT_CLOSED);
  let screenHeightOpen: number;

  const onLayout = (event: {
    nativeEvent: {
      layout: { x: number; y: number; height: number; width: number };
    };
  }) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    screenHeightOpen = height;
    console.log(height);
  };

  const truncateString = (string: string, number: number) => {
    if (string.length <= number) return string;
    return string.slice(0, number) + "...";
  };

  const truncatedTitle = truncateString(title, 16);

  useEffect(() => {
    animatedHeight.value = transactionIsClosed
      ? withTiming(SCREEN_HEIGHT_CLOSED, { duration: 500 })
      : withTiming(SCREEN_HEIGHT_OPEN, { duration: 500 });
  }, [transactionIsClosed]);

  const openTransaction = () => {
    setTransactionIsClosed((prev) => !prev);
  };

  const animatedHeightStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
    };
  }, []);

  return (
    <Pressable style={styles.pressable} onPress={openTransaction}>
      {/* <Animated.View
        layout={SequencedTransition}
        style={[styles.transactionContainer]}
      > */}
      <Animated.View style={[styles.transactionContainer, animatedHeightStyle]}>
        <View style={styles.transactionDetailsContainer}>
          <View style={styles.transactionLabelContainer}>
            <BalanceDonut
              strokeWidth={3}
              radius={(ScreenWidth * 0.09333) / 2}
              percentRemaining={useValue(1 - percentMissing)}
            />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>
                {transactionIsClosed ? truncatedTitle : title}
              </Text>
              <Text style={[textStyles.Body2, textStyles.textColorLight]}>
                {date}
              </Text>
            </View>
          </View>
          <View style={styles.transactionAmountContainer}>
            <Text style={[textStyles.Title2, textStyles.textColorDark]}>
              -${amount}
            </Text>
            {!transactionIsClosed && (
              <Animated.Text
                entering={FadeInUp}
                exiting={FadeOutUp}
                style={[textStyles.Body2, textStyles.textColorLight]}
              >
                ${(150 * percentMissing).toFixed(2)}
              </Animated.Text>
            )}
          </View>
        </View>
        {!transactionIsClosed && (
          <Animated.View
            entering={FadeInUp.duration(400)
              .delay(200)
              .easing(Easing.out(Easing.cubic))}
            exiting={FadeOutUp.duration(250).springify()}
            style={styles.transactionButtonContainer}
          >
            <Pressable
              style={styles.transactionButton}
              onPress={() => console.log(`edit ${title}`)}
            >
              <Text style={(textStyles.Body2, styles.buttonLabel)}>Edit</Text>
            </Pressable>
            <Pressable
              style={styles.transactionButton}
              onPress={() => console.log(`delete ${title}`)}
            >
              <Text style={(textStyles.Body2, styles.buttonLabel)}>Delete</Text>
            </Pressable>
          </Animated.View>
        )}
      </Animated.View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  transactionContainer: {
    width: "100%",
    display: "flex",
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: ScreenWidth * 0.04267,
    paddingVertical: ScreenHeight * 0.00985,
    paddingHorizontal: ScreenWidth * 0.04267,
    backgroundColor: colors.white,
    ...shadowStyles.shadow3,
    marginBottom: ScreenHeight * 0.01232,
  },
  transactionLabelContainer: {
    display: "flex",
    flexDirection: "row",
  },
  transactionDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  pressable: {
    width: "100%",
  },
  transactionDetails: {
    paddingLeft: ScreenWidth * 0.0265,
    width: ScreenWidth * 0.46667,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  transactionAmountContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  transactionButtonContainer: {
    width: "100%",
    marginTop: ScreenHeight * 0.02586,
    marginBottom: ScreenHeight * 0.00985,
    flexDirection: "row",
    justifyContent: "center",
  },
  transactionButton: {
    borderRadius: ScreenWidth * 0.032,
    backgroundColor: colors.darkGray1,
    marginHorizontal: ScreenWidth * 0.028,
    width: ScreenWidth * 0.25333,
    height: ScreenHeight * 0.03695,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: colors.white,
  },
  transactionTitle: {
    flexWrap: "wrap",
    ...textStyles.Cap2,
    ...textStyles.textColorDark,
  },
});

export default TransactionItem;

import React, { FC, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigators/Navigation";

// custom components
import { colors } from "../components/shared/colors";
import { useRoute } from "@react-navigation/native";
import { AnimatedDetailsBackground } from "../components/AnimatedDetailsBackground/AnimatedDetailsBackground";

import type { RouteProp } from "@react-navigation/native";
import { ScreenHeight, ScreenWidth } from "../components/shared/sizes";
import {
  Canvas,
  Easing,
  Group,
  runTiming,
  useValue,
} from "@shopify/react-native-skia";
import { DonutGradientPath } from "../components/BalanceButtons/DonutGradientPath";
import { textStyles } from "../components/shared/textStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import EIcon from "react-native-vector-icons/Entypo";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { FlashList } from "@shopify/flash-list";
import { shadowStyles } from "../components/shared/shadowStyles";
import { BalanceDonut } from "../components/BalanceButtons/BalanceDonut";
import TransactionItem from "../components/Transactions/TransactionItem";
import { transactionData } from "../components/shared/transactionData";

type DetailsScreenRouteProp = RouteProp<RootStackParams, "BalanceDetails">;

const FONT_SIZE = 40;

const BalanceDetails: FC<
  NativeStackScreenProps<RootStackParams, "BalanceDetails">
> = ({ navigation }) => {
  // Route params
  const route: DetailsScreenRouteProp = useRoute();
  const { title, emojiIcon, balance, percentRemaining, id, balanceType } =
    route.params;

  // Skia Animation
  const chartAnimationState = useValue(0);

  const animateChart = () => {
    chartAnimationState.current = 0;
    runTiming(chartAnimationState, 1 - percentRemaining, {
      duration: 1250,
      easing: Easing.inOut(Easing.cubic),
    });
  };

  useEffect(() => {
    animateChart();
  }, []);

  const balanceData = transactionData.filter(
    (transaction) => transaction.fund === title
  );

  console.log("percentages are hard-coded");

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.topFold}>
        <View
          style={[
            styles.animatedBG,
            {
              // width: ScreenWidth,
              // height: ScreenHeight * 0.351,
              // borderStyle: "dashed",
              // borderColor: "red",
              // borderWidth: 2,
            },
          ]}
        >
          <View
            style={{
              width: ScreenWidth,
              height: ScreenHeight * 0.351,
              // borderStyle: "dashed",
              // borderColor: "red",
              // borderWidth: 2,
            }}
          >
            <AnimatedDetailsBackground icon={emojiIcon} />
          </View>
        </View>
        {/* <View style={{ flex: 1 }}> */}
        <View style={styles.textIconContainer}>
          <Text style={[styles.amountTitle]}>Total {"\n"}Balance:</Text>
          <View style={styles.amountContainer}>
            <Text style={[styles.amountSymbol]}>$</Text>
            <Text style={[styles.amountLabel]}>{balance}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
            style={styles.button}
          >
            <EIcon
              name="chevron-left"
              color={colors.gray3}
              size={ScreenWidth * 0.08}
            />
          </TouchableOpacity>
        </View>
        <Canvas style={[styles.balanceIconContainer]}>
          <Group
            transform={[{ rotate: Math.PI * 1.5 }]}
            origin={{ x: 100, y: 100 }}
          >
            <DonutGradientPath
              strokeWidth={12}
              radius={100}
              percentRemaining={chartAnimationState}
            />
          </Group>
        </Canvas>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log("back");
            }}
            style={styles.button}
          >
            <MIcon
              name="edit"
              color={colors.gray3}
              size={ScreenWidth * 0.06}
              style={styles.iconPaddingAdjustment}
            />
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </View>
      <View style={styles.bodyContainer}>
        <Text style={[textStyles.LogoBig, textStyles.textColorDark]}>
          {title}
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={[textStyles.Subtitle2, textStyles.textColorDark]}>
            6% of total income
          </Text>
          <Text style={[textStyles.Subtitle2, textStyles.textColorDark]}>
            20% of needs money
          </Text>
        </View>
        <Text
          style={[
            textStyles.LogoSmall,
            textStyles.textColorDark,
            styles.activityLabel,
          ]}
        >
          Activity
        </Text>
        {/* <TransactionItem
          id={0}
          title={"Charlestons #413239"}
          amount={400}
          date={"Aug 15, 2022"}
          percentMissing={0.2}
        /> */}
        {/* <TransactionItem
          id={1}
          title={"Home Depot #623232 86232328 6232328"}
          amount={19}
          date={"Aug 12, 2022"}
          percentMissing={0.5}
        />
        <TransactionItem
          id={2}
          title={"Krusty Krab #2234235"}
          amount={5.99}
          date={"Aug 1, 2022"}
          percentMissing={0.55}
        /> */}
        <View style={{ width: "100%", height: 400, paddingBottom: "40%" }}>
          <FlashList
            showsVerticalScrollIndicator={false}
            data={balanceData}
            estimatedItemSize={ScreenHeight * 0.06897}
            renderItem={({ item }) => {
              return (
                <TransactionItem
                  id={item.id}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                  percentMissing={item.percentMissing}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default BalanceDetails;

const styles = StyleSheet.create({
  animatedBG: {
    backgroundColor: colors.backgroundBlue,
    height: ScreenHeight * 0.351,
    width: ScreenWidth * 1.2,
    position: "absolute",
    borderBottomRightRadius: ScreenWidth,
    borderBottomLeftRadius: ScreenWidth,
    bottom: ScreenHeight * 0.05399,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  topFold: {
    position: "absolute",
    width: "100%",
    height: ScreenHeight * 0.328,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    zIndex: 6,
    backgroundColor: colors.yellowDark,
  },
  button: {
    borderColor: colors.gray2,
    borderWidth: 2,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ScreenWidth * 0.13333,
    width: ScreenWidth * 0.13333,
    height: ScreenWidth * 0.13333,
  },
  buttonContainer: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  background: {
    backgroundColor: colors.gray3,
  },
  bodyContainer: {
    position: "absolute",
    zIndex: 5,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: ScreenHeight - ScreenHeight * 0.328,
    top: ScreenHeight * 0.328,
    paddingHorizontal: ScreenWidth * 0.09333,
    paddingVertical: ScreenHeight * 0.06158,
    flex: 1,
  },
  balanceIconContainer: {
    height: 100 * 2,
    width: 100 * 2,
    // right: ScreenWidth / 2 - 100,
    display: "flex",
    justifyContent: "center",
    backgroundColor: colors.accentGreen,
    borderRadius: 100,
  },
  container: {
    flexGrow: 1,
  },
  textIconContainer: {
    height: 100 * 2,
    width: 100 * 2,
    position: "absolute",
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  amountLabel: {
    fontFamily: "Poppins-Bold",
    color: colors.white,
    fontSize: 30,
  },
  amountTitle: {
    textAlign: "center",
    color: colors.white,
    ...textStyles.Title1,
  },
  amountSymbol: {
    color: colors.white,
    ...textStyles.Body1,
    fontSize: 18,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    height: 50,
  },
  iconPaddingAdjustment: {
    paddingLeft: ScreenWidth * 0.0053,
  },
  subtitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: ScreenHeight * 0.06158,
  },
  activityLabel: {
    marginBottom: ScreenHeight * 0.03075,
  },
});

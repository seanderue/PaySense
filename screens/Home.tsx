import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { colors } from "../components/shared/colors";
import { ScreenHeight, ScreenWidth } from "../components/shared/sizes";
import { textStyles } from "../components/shared/textStyles";

import Ionicon from "react-native-vector-icons/Ionicons";
import { FundButtonSection } from "../components/FundButtons/FundButtonSection";
import { SwitchSelector } from "../components/SwitchSelector/SwitchSelector";

import { CONTENT_WIDTH_PERCENTAGE } from "../components/shared/sizes";
import { BarGraphic } from "../components/BarGraphic/BarGraphic";

// Navigation types
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigators/Navigation";
import callGraphQL from "../util/callGraphQL";
import { mapListBudgets } from "../src/models/Fund/mapListBudgetsQuery";
import { ByPlacementIndexQuery } from "../src/API";
import { listSortedBudgets } from "../src/models/Fund/queries";
import { FundButtonProps } from "../components/FundButtons/types";
import { fundDataHardCoded } from "../components/shared/fundData";

//Amplify
import { DataStore } from "@aws-amplify/datastore";
import { Fund } from "../src/models";

const TOP_FOLD_HEIGHT_PERCENTAGE = 0.328;
const BOTTOM_FOLD_HEIGHT_PERCENTAGE = 1 - TOP_FOLD_HEIGHT_PERCENTAGE;
const SAFE_STATUS_BAR_HEIGHT = 44;

const Home: FC<NativeStackScreenProps<RootStackParams, "Home">> = ({
  navigation,
}) => {
  const [toggledRight, setToggleRight] = useState(false);
  const [fundData, setFundData] = useState<Fund[]>();
  const [budgetData, setBudgetData] = useState<FundButtonProps>();
  const [goalData, setGoalData] = useState<FundButtonProps>();

  // async function fetchData() {
  //   try {
  //     const fundData = await callGraphQL<ByPlacementIndexQuery>(
  //       listSortedBudgets
  //     );
  //     const budgets = mapListBudgets(fundData);
  //     console.log(JSON.stringify(fundData, 0, 5));
  //     console.log(JSON.stringify(budgets, 0, 5));
  //     setFundData(budgets);
  //   } catch (error) {
  //     console.error("Error fetching budgets", error);
  //   }
  // }

  // const fetchData = async () => {};

  async function fetchFunds() {
    const funds = await DataStore.query(Fund);
    setFundData(funds);
  }
  useEffect(async () => await fetchFunds(), []);

  const toggleSwitch = () => {
    setToggleRight((prevState) => {
      return !prevState;
    });
  };

  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <View style={styles.topFoldContainer}>
          <View style={styles.iconsContainer}>
            <Pressable
              onPress={() => {
                navigation.push("Settings");
                console.log("cog pressed");
              }}
            >
              <Ionicon
                style={styles.icon}
                name="settings-outline"
                size={20}
                color="#A1B2C8"
              />
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("bell pressed");
              }}
            >
              <Ionicon
                style={styles.icon}
                name="md-notifications-outline"
                size={20}
                color="#A1B2C8"
              />
            </Pressable>
          </View>
          <Text style={[textStyles.H1, styles.heroText]}>Hi Sean!</Text>
          <Text style={[textStyles.Subtitle1, styles.heroText]}>
            Here's Your Month's Balance
          </Text>
          <View style={styles.threeColumn}>
            <BarGraphic amount={"500.00"} label={"Needs left"} currency={"$"} />
            <BarGraphic amount={"300.00"} label={"Wants left"} currency={"$"} />
            <BarGraphic
              amount={"200.00"}
              label={"Amount saved"}
              currency={"$"}
            />
          </View>
        </View>
        <View style={styles.bottomFoldContainer}>
          <View style={styles.bottomFoldWrapper}>
            <Pressable onPress={toggleSwitch} style={styles.SwitchSelector}>
              <SwitchSelector toggledRight={toggledRight} />
            </Pressable>
            {fundData && (
              <FundButtonSection
                fundData={fundData}
                goalsToggled={toggledRight}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.backgroundBlue,
  },
  wrapper: {
    height: ScreenHeight,
    width: ScreenWidth,
    alignSelf: "center",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
  },
  topFoldContainer: {
    width: "100%",
    paddingHorizontal:
      (ScreenWidth - ScreenWidth * CONTENT_WIDTH_PERCENTAGE) / 2,
    flex: TOP_FOLD_HEIGHT_PERCENTAGE,
    // paddingTop: SAFE_STATUS_BAR_HEIGHT,
  },
  threeColumn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomFoldContainer: {
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    flex: BOTTOM_FOLD_HEIGHT_PERCENTAGE,
    backgroundColor: colors.white,
    paddingTop: 21,
    borderTopEndRadius: 47,
    borderTopLeftRadius: 47,
  },
  bottomFoldWrapper: {
    width: ScreenWidth * CONTENT_WIDTH_PERCENTAGE,
    // flex: 0.8,
    display: "flex",
    flexDirection: "column",
    height: "77%",
  },
  iconsContainer: {
    marginTop: SAFE_STATUS_BAR_HEIGHT,
    width: "100%",
    height: 24,
    paddingHorizontal:
      (ScreenWidth - ScreenWidth * CONTENT_WIDTH_PERCENTAGE) / 4,
    // backgroundColor: "cyan",
    flexDirection: "row-reverse",
  },
  icon: {
    paddingLeft: 3,
    paddingRight: 3,
  },
  heroText: {
    color: colors.white,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  SwitchSelector: {
    marginBottom: "5.688%",
  },
});

export default Home;

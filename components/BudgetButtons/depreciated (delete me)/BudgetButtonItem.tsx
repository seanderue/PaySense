import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// components
import { ScreenHeight, ScreenWidth } from "../../shared";
import { colors } from "../../colors";
import Title2 from "../../Texts/Title2";
import SmallTitle from "../../Texts/SmallTitle";
import Body1 from "../../Texts/Body1";
import Overline from "../../Texts/Overline";

// navigation
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "../../../screens/OldNewHome";

const BudgetCardBackground = styled.ImageBackground`
  height: ${ScreenHeight * 0.0972}px;
  width: ${ScreenWidth * 0.21}px;
  background-color: ${colors.neutral7};
  border-radius: 100%;
  border: 5px solid black;
  overflow: hidden;
`;

const BudgetCardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 100%;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: left;
  padding: 30px;
  flex: 1;
`;

const BudgetCardrow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// images
import budgetCard_bg from "./../../assets/bgs/Cookies1.jpeg";
// import new_bg from urlSafeDecode('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80')

// types
import { BudgetCardProps } from "../types";
import { urlSafeDecode } from "@aws-amplify/core";
import { ComponentPropsToStylePropsMap } from "@aws-amplify/ui-react";

const BudgetCardItem: FunctionComponent<BudgetCardProps> = (props) => {
  //configuring navigation
  const navigation = useNavigation<HomeProps["navigation"]>();

  // move to budget page
  const handlePress = () => {
    navigation.navigate("Budget", { ...props });
  };

  return (
    //Evaluate whether props.hasCustomImage is true, and return two different components accordingly
    <BudgetCardTouchable underlayColor={colors.neutral8} onPress={handlePress}>
      <>
        <BudgetCardBackground source={props.background}>
          <TouchableView></TouchableView>
        </BudgetCardBackground>
        {/* <SVGCircleElement /> */}
        <Title2 color={colors.black}>{props.title}</Title2>
        <Body1 color={colors.black}>${props.balance}</Body1>
      </>
    </BudgetCardTouchable>
  );
};

export default BudgetCardItem;

import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// components
import { ScreenWidth } from "../shared";
import { colors } from "../colors";
import Title2 from "../Texts/Title2";
import SmallTitle from "../Texts/SmallTitle";
import Body1 from "../Texts/Body1";
import Overline from "../Texts/Overline";

const BudgetCardBackground = styled.ImageBackground`
    height: 100%;
    width: ${ScreenWidth * 0.67}px;
    resize-mode: cover;
    background-color: ${colors.neutral7};
    border-radius: 25px;
    margin-right: 25px;
    overflow: hidden;
`;

const BudgetCardTouchable = styled.TouchableHighlight`
    height: 100%;
    border-radius: 25px;
`;

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`;

const BudgetCardrow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const gradient = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: contain;
    flex: 1;
`;

// images
import budgetCard_bg from "./../../assets/bgs/Cookies1.jpeg"

// types 
import { BudgetCardProps } from "./types";

const BudgetCardItem: FunctionComponent<BudgetCardProps> = (props) => {
    const handlePress = () => {};
    
    return (
        <BudgetCardBackground source={props.background}>
            <BudgetCardTouchable underlayColor={colors.yellow} onPress={handlePress}>
                <TouchableView>
                    <BudgetCardrow>
                        <Title2 textStyles={{ marginTop: 0, color: colors.neutral6 }}>{props.title}</Title2>
                    </BudgetCardrow>
                    <BudgetCardrow>
                        <View>
                            <Body1 color={colors.neutral6}>{props.balance}</Body1>
                        </View>
                    </BudgetCardrow>
                </TouchableView>
            </BudgetCardTouchable>
        </BudgetCardBackground>
    );
};

export default BudgetCardItem;
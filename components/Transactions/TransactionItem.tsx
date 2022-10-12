import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// components
import { colors } from "../colors";
import Cap1 from "../Texts/Cap1";
import Body1 from "../Texts/Body1";
import Title2 from "../Texts/Title2";

// types
import { TransactionProps } from "./types";
import TransactionAvi from "./TransactionAvi";

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{ marginLeft: 10 }}>
          <Cap1 color={colors.neutral3}>{props.title}</Cap1>
          <Body1 color={colors.neutral4}>{props.subtitle}</Body1>
        </View>
      </LeftView>
      <RightView>
        <Cap1
          color={colors.neutral3}
          textStyles={{
            textAlign: "right",
            marginBottom: 5,
          }}
        >
          {props.amount}
        </Cap1>
        <Body1
          color={colors.neutral4}
          textStyles={{
            textAlign: "right",
          }}
        >
          {props.date}
        </Body1>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;

import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

// components
import { colors } from "../colors";
import Cap1 from "../Texts/Cap1";
import Body1 from "../Texts/Body1";
import Title2 from "../Texts/Title2";

const TransactionSectionBackground = styled.View`
  width: 100%;
  flex: 2;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 5px;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

// types
import { TransactionSectionProps } from "./types";
import TransactionItem from "./TransactionItem";

const TransactionSection: FunctionComponent<TransactionSectionProps> = (
  props
) => {
  return (
    <TransactionSectionBackground>
      <TransactionRow>
        <Cap1 color={colors.neutral3}>Transaction</Cap1>
        <Body1 color={colors.neutral3}>
          Recent
          <Ionicons name="caret-down" size={13} color={colors.neutral3} />
        </Body1>
      </TransactionRow>

      <TransactionList
        data={props.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;

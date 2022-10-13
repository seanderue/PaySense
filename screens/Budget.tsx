import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import BudgetCardSection from "../components/BudgetButtons/depreciated (delete me)/OldBudgetButtonSection";
import TransactionSection from "../components/Transactions/TransactionsSection";

// images
import diningImg from "../assets/cards/dining-out.jpeg";

const BalanceContainer = styled(Container)`
  flex: 1;
  background-color: ${colors.neutral8};
  padding: 25px;
  width: 100%;
`;

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import AmountSection from "../components/Budget/AmountSection";
type Props = StackScreenProps<RootStackParamList, "Budget">;

const Budget: FunctionComponent<Props> = ({ route }) => {
  return (
    <BalanceContainer>
      <StatusBar style="dark" />
      <AmountSection balance={route?.params?.balance} />
    </BalanceContainer>
  );
};

export default Budget;
import React, { FunctionComponent, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { Container } from "../components/shared/sizes";
import { colors } from "../components/shared/colors";
import BudgetCardSection from "../components/BalanceButtons/depreciated (delete me)/OldBudgetButtonSection";
import TransactionSection from "../components/Transactions/TransactionsSection";

// images
import diningImg from "../assets/cards/dining-out.jpeg";

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { BudgetCardProps as BudgetCard } from "../components/BalanceButtons/types";

export type Props = StackScreenProps<RootStackParamList, "Home">;

// GraphQL queries
import { API, graphqlOperation } from "aws-amplify";
import { ListBudgetsQuery } from "../src/API";
import { listBudgets } from "../src/graphql/queries";
import { mapListBudgets } from "../src/models/budgetCards/mapListBudgetsQuery";
import callGraphQL from "../util/callGraphQL";
import { Image } from "react-native";

const HomeContainer = styled(Container)`
  background-color: ${colors.white};
  flex: 1;
  width: 100%;
`;

const Home: FunctionComponent<Props> = () => {
  const [budgets, setBudgets] = useState<BudgetCard[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const budgetData = await callGraphQL<ListBudgetsQuery>(listBudgets);
        // console.log(JSON.stringify(budgetData));
        const budgets = mapListBudgets(budgetData);
        setBudgets(budgets);
      } catch (error) {
        console.error("Error fetching budgets", error);
      }
    }
    getData();
  }, []);

  const cardsData = [
    {
      id: 1,
      title: "Dining out",
      balance: 420.69,
      flag: false,
      background: diningImg,
    },
    {
      id: 2,
      title: "Another dining out",
      balance: 4102.54,
      flag: false,
      background: diningImg,
    },
    {
      id: 3,
      title: "Last dining out",
      balance: 10.69,
      flag: false,
      background: diningImg,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: "-$40",
      date: "14 Sep 2022",
      title: "got hecked",
      subtitle: "Uber",
      art: {
        background: colors.green,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$69",
      date: "14 Sep 2022",
      title: "Ice cream truck",
      subtitle: "Handles",
      art: {
        background: colors.red,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount: "-$20",
      date: "14 Sep 2022",
      title: "New squirt gun",
      subtitle: "Walmart",
      art: {
        background: colors.yellow,
        icon: "airplane",
      },
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <Image
        source={{
          uri: "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
        }}
      />
      <BudgetCardSection data={budgets} />
      <TransactionSection data={transactionData} />
    </HomeContainer>
  );
};

export default Home;

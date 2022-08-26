import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { Container } from '../components/shared';
import { colors } from '../components/colors';
import BudgetCardSection from "../components/BudgetCards/BudgetCardSection";

// images
import diningImg from '../assets/cards/dining-out.jpeg'

const HomeContainer = styled(Container)`
    background-color: ${colors.white};
    flex: 1;
    width: 100%;
`;

const Home: FunctionComponent = () => {
    const cardsData = [
        {
            id: 1,
            title: 'Dining out',
            balance: 420.69,
            flag: false,
            background: diningImg,
        },
        {
            id: 2,
            title: 'Dining out',
            balance: 420.69,
            flag: false,
            background: diningImg,
        },
        {
            id: 3,
            title: 'Dining out',
            balance: 420.69,
            flag: false,
            background: diningImg,
        },
    ];

    return (
        <HomeContainer>
            <StatusBar style='dark' />
            <BudgetCardSection data={cardsData} />
        </HomeContainer>
    );
};

export default Home;
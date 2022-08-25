import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { Container } from '../components/shared';
import { colors } from '../components/colors';

const HomeContainer = styled(Container)`
    background-color: ${colors.white};
    flex: 1;
    width: 100%;
`;

const Home: FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar style='dark' />
        </HomeContainer>
    );
};

export default Home;
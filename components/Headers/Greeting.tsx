import React, { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";

// custom components
import Title1 from "../Texts/Title1";
import Overline from "../Texts/Overline";
import { colors } from "../colors";
// We will delete Overline after TUT

const StyledView = styled.View`
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <StyledView>
            <Title1 textStyles={[
                {
                    color: colors.neutral2,
                },
                props.mainTextStyles
            ]}>
                {props.mainText}
            </Title1>
            <Overline textStyles={[
                {
                    color: colors.neutral2,
                },
                props.subTextStyles
            ]}>
                {props.subText}

            </Overline>
        </StyledView>
    );
};

export default Greeting;
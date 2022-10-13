import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import H1 from "../components/Texts/H1";
import Body1 from "../components/Texts/Body1";
import RegularButton from "../components/Buttons/RegularButton";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.white};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 40px;
  flex: 1;
  justify-content: flex-end;
`;

// image
import background from "./../assets/bgs/Cookies1.jpeg";

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <H1 textStyles={{ width: "70%", marginBottom: 25 }}>
            Best way to track your money
          </H1>
          <Body1>
            Best way to track your spending, budget hard, and see pretty charts
          </Body1>
          <RegularButton
            onPress={() => {
              navigation.navigate("Home");
            }}
            textStyles={{ color: colors.neutral8 }}
          >
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

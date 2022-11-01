import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import styled from "styled-components/native";

// custom components
import { Container } from "../components/shared/sizes";
import { colors } from "../components/shared/colors";
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
import { RootStackParamList } from "../navigators/Navigation";
import { StackScreenProps } from "@react-navigation/stack";
// type Props = StackScreenProps<RootStackParamList, "Welcome">;

// const Welcome: FC = ({ navigation }) => {
const Welcome: FC = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <Text style={{ width: "70%", marginBottom: 25 }}>
            Best way to track your money
          </Text>
          <Text>
            Best way to track your spending, budget hard, and see pretty charts
          </Text>
          {/* <RegularButton
            onPress={() => {
              navigation.navigate("Home");
            }}
            textStyles={{ color: colors.neutral8 }}
          >
            Get Started
          </RegularButton> */}
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

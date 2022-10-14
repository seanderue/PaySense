import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// custom components
import { colors } from "../shared/colors";
import Title2 from "../Texts/Title2";
import Overline from "../Texts/Overline";

const AmountSectionBackground = styled.View`
  width: 100%;
  padding-top: 5px;
  align-items: center;
  flex: 1;
`;

// types
import { AmountProps } from "./types";

const AmountSection: FunctionComponent<AmountProps> = (props) => {
  return (
    <AmountSectionBackground>
      <Overline color={colors.neutral4}>Total Balance</Overline>
      <Title2 color={colors.neutral2}>$ {props.balance}</Title2>
    </AmountSectionBackground>
  );
};

export default AmountSection;

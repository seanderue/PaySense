import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// components
import { colors } from "../shared/colors";
import Cap1 from "../Texts/Cap1";
import Body1 from "../Texts/Body1";
import Title2 from "../Texts/Title2";

// icons
import { Ionicons } from "@expo/vector-icons";

// types
import { TransactionAviProps } from "./types";

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
  const StyledView = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${props.background};
  `;

  return (
    <StyledView>
      <Ionicons name={props.icon} size={25} color={colors.white} />
    </StyledView>
  );
};

export default TransactionAvi;

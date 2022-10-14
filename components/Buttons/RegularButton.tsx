import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// components
import { colors } from "../shared/colors";
import Cap1 from "../Texts/Cap1";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  color: ${colors.neutral8};
`;

// Types
import { ButtonProps } from "./types";

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <Cap1 textStyles={props.textStyles}>{props.children}</Cap1>
    </ButtonView>
  );
};

export default Button;

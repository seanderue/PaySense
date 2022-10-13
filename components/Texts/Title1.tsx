import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";

//types
import { TextProps } from "./types";

const Title1: FunctionComponent<TextProps> = (props) => {
  const StyledText = styled.Text`
    font-size: ${props.fontSize ? props.fontSize : "16px"};
    color: ${props.color ? props.color : colors.black};
    text-align: ${props.textAlign ? props.textAlign : "left"};
    line-height: 24px;
    font-family: Poppins-SemiBold;
  `;

  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default Title1;

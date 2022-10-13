import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";

//types
import { TextProps } from "./types";

const Body1: FunctionComponent<TextProps> = (props) => {
  const StyledText = styled.Text`
    font-size: ${props.fontSize ? props.fontSize : "14px"};
    color: ${props.color ? props.color : colors.black};
    text-align: ${props.textAlign ? props.textAlign : "left"};
    line-height: 20px;
    font-family: Poppins-Regular;
  `;

  return <StyledText>{props.children}</StyledText>;
};

export default Body1;

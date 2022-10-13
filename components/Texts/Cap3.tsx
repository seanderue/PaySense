import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";

//types
import { TextProps } from "./types";

const Cap3: FunctionComponent<TextProps> = (props) => {
  const StyledText = styled.Text`
    font-size: ${props.fontSize ? props.fontSize : "8px"};
    color: ${props.color ? props.color : colors.black};
    text-align: ${props.textAlign ? props.textAlign : "left"};
    line-height: 8px;
    font-family: Poppins-Medium;
  `;

  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default Cap3;

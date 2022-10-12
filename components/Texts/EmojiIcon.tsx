import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";

//types
import { TextProps } from "./types";

const EmojiIcon: FunctionComponent<TextProps> = (props) => {
  const StyledText = styled.Text`
    font-size: ${props.fontSize ? props.fontSize : "36px"};
    color: ${props.color ? props.color : colors.black};
    text-align: ${props.textAlign ? props.textAlign : "left"};
    line-height: 40px;
    font-family: Poppins-Medium;
  `;

  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default EmojiIcon;

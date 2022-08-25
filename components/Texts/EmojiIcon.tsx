import React, { FunctionComponent } from "react";
import styled from 'styled-components/native';

//colors
import {colors} from '../colors';

const StyledText = styled.Text`
    font-size: 36px;
    color: ${colors.black};
    text-align: left;
    line-height: 40px;
    font-family: Poppins-Medium;
`;

//types
import { TextProps } from './types';

const EmojiIcon: FunctionComponent<TextProps> = (props) => {
    return ( 
    <StyledText style={props.textStyles}>{props.children}</StyledText>
    );
};

export default EmojiIcon;
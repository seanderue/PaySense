import React, { FunctionComponent } from "react";
import styled from 'styled-components/native';

//colors
import {colors} from '../colors';

const StyledText = styled.Text`
    font-size: 14px;
    color: ${colors.black};
    text-align: left;
    line-height: 20px;
    font-family: Poppins-Medium;
`;

//types
import { TextProps } from './types';

const Cap1: FunctionComponent<TextProps> = (props) => {
    return ( 
    <StyledText style={props.textStyles}>{props.children}</StyledText>
    );
};

export default Cap1;
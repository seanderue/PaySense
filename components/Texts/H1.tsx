import React, { FunctionComponent } from "react";
import styled from 'styled-components/native';

//colors
import {colors} from '../colors';

//types
import { TextProps } from './types';

const H1: FunctionComponent<TextProps> = (props) => {
    const StyledText = styled.Text`
    font-size: ${props.fontSize ? props.fontSize : '24px'};
    color: ${props.color ? props.color : colors.black};
    text-align: left;
    line-height: 40px;
    font-family: Poppins-Medium;
`;

    return ( 
    <StyledText style={props.textStyles}>{props.children}</StyledText>
    );
};

export default H1;
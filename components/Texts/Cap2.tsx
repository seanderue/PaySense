import React, { FunctionComponent } from "react";
import styled from 'styled-components/native';

//colors
import {colors} from '../colors';

//types
import { TextProps } from './types';

const Cap2: FunctionComponent<TextProps> = (props) => {
    const StyledText = styled.Text`
    font-size: ${props.fontSize ? props.fontSize : '12px'};
    color: ${props.color ? props.color : colors.black};
    text-align: left;
    line-height: 20px;
    font-family: Poppins-Medium;
`;

    return ( 
    <StyledText style={props.textStyles}>{props.children}</StyledText>
    );
};

export default Cap2;
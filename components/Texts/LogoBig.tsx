import React, { FunctionComponent } from "react";
import styled from 'styled-components/native';

//colors
import {colors} from '../colors';

//types
import { TextProps } from './types';

const LogoBig: FunctionComponent<TextProps> = (props) => {
    const StyledText = styled.Text`
    font-size: ${props.fontSize ? props.fontSize : '24px'};
    color: ${props.color ? props.color : colors.black};
    text-align: left;
    line-height: 24px;
    font-family: Poppins-Bold;
`;

    return ( 
    <StyledText style={props.textStyles}>{props.children}</StyledText>
    );
};

export default LogoBig;
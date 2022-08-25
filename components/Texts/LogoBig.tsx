import React, { FunctionComponent } from "react";
import styled from 'styled-components/native';

//colors
import {colors} from '../colors';

const StyledText = styled.Text`
    font-size: 24px;
    color: ${colors.black};
    text-align: left;
    line-height: 24px;
    font-family: Poppins-Bold;
`;

//types
import { TextProps } from './types';

const LogoBig: FunctionComponent<TextProps> = (props) => {
    return ( 
    <StyledText style={props.textStyles}>{props.children}</StyledText>
    );
};

export default LogoBig;
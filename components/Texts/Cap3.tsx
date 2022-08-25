import React, { FunctionComponent } from "react";
import styled from 'styled-components/native';

//colors
import {colors} from '../colors';

const StyledText = styled.Text`
    font-size: 8px;
    color: ${colors.black};
    text-align: left;
    line-height: 8px;
    font-family: Poppins-Medium;
`;

//types
import { TextProps } from './types';

const Cap3: FunctionComponent<TextProps> = (props) => {
    return ( 
    <StyledText style={props.textStyles}>{props.children}</StyledText>
    );
};

export default Cap3;
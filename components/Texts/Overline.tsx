import React, { FunctionComponent } from "react";
import styled from 'styled-components/native';

//colors
import {colors} from '../colors';

//types
import { TextProps } from './types';

const Overline: FunctionComponent<TextProps> = (props) => {
    const StyledText = styled.Text`
    font-size: ${props.fontSize ? props.fontSize : '10px'};
    color: ${props.color ? props.color : colors.black};
    text-align: left;
    line-height: 16px;
    font-family: Poppins-Medium;
`;

    return ( 
    <StyledText style={props.textStyles}>{props.children}</StyledText>
    );
};

export default Overline;
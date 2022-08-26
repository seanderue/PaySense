import React, { FunctionComponent } from "react";
import styled from 'styled-components/native';

//colors
import {colors} from '../colors';

//types
import { TextProps } from './types';

const LogoSmall: FunctionComponent<TextProps> = (props) => {
    const StyledText = styled.Text`
    font-size: ${props.fontSize ? props.fontSize : '15px'};
    color: ${props.color ? props.color : colors.black};
    text-align: left;
    line-height: 15px;
    font-family: Poppins-Bold;
`;

    return ( 
    <StyledText style={props.textStyles}>{props.children}</StyledText>
    );
};

export default LogoSmall;
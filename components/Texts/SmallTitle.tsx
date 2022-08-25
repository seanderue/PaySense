import React, { FunctionComponent } from "react";
import styled from 'styled-components/native';

//colors
import {colors} from '../colors';

const StyledText = styled.Text`
    font-size: 12px;
    color: ${colors.black};
    text-align: left;
    line-height: 20px;
    font-family: Poppins-Regular;
`;

//types
import { TextProps } from './types';

const SmallTitle: FunctionComponent<TextProps> = (props) => {
    return ( 
    <StyledText style={props.textStyles}>{props.children}</StyledText>
    );
};

export default SmallTitle;
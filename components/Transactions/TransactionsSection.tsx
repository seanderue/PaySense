import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

// components
import { colors } from '../colors';
import Cap1 from '../Texts/Cap1';
import Body1 from '../Texts/Body1';
import Title2 from '../Texts/Title2';

const TransactionSectionBackground = styled.View`
    width: 100%;
    flex: 2;
    padding-right: 25px;
    padding-left: 25px;
    padding-top: 5px;
    
`;

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const TransactionList = styled.FlatList`
    width: 100%;
`;

// types
import { TransactionSectionProps } from './types';

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    return (
        <TransactionSectionBackground>
            
        </TransactionSectionBackground>

    );
};

export default TransactionSection
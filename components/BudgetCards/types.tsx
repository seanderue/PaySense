import { ImageSourcePropType } from "react-native";

export interface BudgetCardProps {
    id: number;
    title: string;
    balance: number;
    flag?: boolean;
    background: ImageSourcePropType;
}

export interface BudgetCardSectionProps {
    data: Array<BudgetCardProps>;
}
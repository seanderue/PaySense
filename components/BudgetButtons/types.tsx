import { SkiaMutableValue } from "@shopify/react-native-skia";
import { ImageSourcePropType } from "react-native";

export interface BudgetCardProps {
  id: string;
  title: string;
  balance: number;
  flag?: boolean;
  background: ImageSourcePropType;
}

//DELETE ME
export interface BudgetCardSectionProps {
  data: Array<BudgetCardProps>;
}

//May need to update the type of icon
//May want to make a custom enum type for flags
export interface BudgetButtonProps {
  id: string;
  title: string;
  balance: number;
  emojiIcon: string;
  flag?: boolean;
  percentRemaining: number;
}

export interface BudgetButtonPageProps {
  data: Array<BudgetButtonProps>;
  page: number;
}

export interface BudgetButtonDetailsProps {
  title: string;
  balance: number;
  percentRemaining: number;
}

export interface DonutGradientPathProps {
  strokeWidth: number;
  radius: number;
  //breadcrumb change (%remain to SkiaMut...<number> from number)
  percentRemaining: SkiaMutableValue<number>;
}

export interface BudgetIconProps {
  emoji: string;
  percentRemaining: SkiaMutableValue<number>;
}

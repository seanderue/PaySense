import { SkiaMutableValue } from "@shopify/react-native-skia";
import { ImageSourcePropType } from "react-native";

export interface BudgetCardProps {
  id: string;
  title: string;
  balance: number;
  flag?: boolean;
  background: ImageSourcePropType;
}

//May need to update the type of icon
//May want to make a custom enum type for flags

export interface BalanceButtonProps {
  id: number;
  title: string;
  balance: number;
  emojiIcon: string;
  flag?: boolean;
  percentRemaining: number;
  balanceType: string;
}

export interface BalanceButtonSectionProps {
  goalsToggled: boolean;
}

export interface BalanceButtonPageProps {
  data: Array<BalanceButtonProps>;
  page: number;
  goalsToggled: boolean;
}

export interface BalanceButtonDetailsProps {
  title: string;
  balance: number;
  percentRemaining: number;
}

export interface DonutGradientPathProps {
  strokeWidth: number;
  radius: number;
  percentRemaining: SkiaMutableValue<number>;
}

export interface BalanceIconProps {
  emoji: string;
  percentRemaining: SkiaMutableValue<number>;
}

import { SkiaMutableValue } from "@shopify/react-native-skia";

//May need to update the type of icon
//May want to make a custom enum type for flags

export interface FundButtonProps {
  id: string;
  title: string;
  balance: number;
  emojiIcon: string;
  flag?: boolean;
  percentRemaining: number;
  fundType: string;
  placement_index: number;
}

export interface FundButtonSectionProps {
  fundData: FundButtonProps[];
  goalsToggled: boolean;
}

export interface FundButtonPageProps {
  data: Array<FundButtonProps>;
  page: number;
}

export interface FundButtonDetailsProps {
  title: string;
  balance: number;
  percentRemaining: number;
}

export interface DonutGradientPathProps {
  strokeWidth: number;
  radius: number;
  percentRemaining: SkiaMutableValue<number>;
}

export interface FundIconProps {
  emoji: string;
  percentRemaining: SkiaMutableValue<number>;
  strokeWidth: number;
  iconFontSize: number;
  radius: number;
}

export interface FundDonutProps {
  strokeWidth: number;
  radius: number;
  percentRemaining: SkiaMutableValue<number>;
}

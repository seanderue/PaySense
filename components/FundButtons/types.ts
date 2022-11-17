import { SkiaMutableValue } from "@shopify/react-native-skia";
import { FundTypes } from "../../src/models";
//May need to update the type of icon
//May want to make a custom enum type for flags

export interface FundButtonProps {
  id: string;
  title: string;
  emojiIcon: string;
  fundBalance: number;
  totalFundSize: number;
  placementIndex: number;
  fundType: FundTypes;
  percentRemaining?: number;
  flag?: boolean;
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
  fundBalance: number;
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

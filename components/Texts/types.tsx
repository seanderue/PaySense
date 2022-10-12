import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface TextProps {
  textStyles?: StyleProp<TextStyle>;
  color?: string;
  fontSize?: string;
  textAlign?: string;
  children: ReactNode;
}

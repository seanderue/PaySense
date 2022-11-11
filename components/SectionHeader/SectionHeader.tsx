import React, { FC, ReactNode } from "react";
import { Text } from "react-native";
import { textStyles } from "../shared/textStyles";

type SectionHeaderProps = { text: string };

export const SectionHeader: FC<SectionHeaderProps> = ({ text }) => {
  return (
    <Text style={[textStyles.LogoBig, textStyles.textColorDark]}>{text}</Text>
  );
};

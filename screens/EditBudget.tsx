import React, { FC } from "react";
import { View } from "react-native";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";

export const EditBudget: FC = () => {
  return (
    <View>
      <SectionHeader text={"Budget Name"} />
    </View>
  );
};

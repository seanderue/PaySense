import React, { FC } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { colors } from "../shared/colors";
import { ScreenWidth } from "../shared/sizes";

type BackIconButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export const BackIconButton: FC<BackIconButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Icon
          name="chevron-left"
          color={colors.gray3}
          size={ScreenWidth * 0.08}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: colors.gray2,
    borderWidth: 2,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ScreenWidth * 0.13333,
    width: ScreenWidth * 0.13333,
    height: ScreenWidth * 0.13333,
  },
  buttonContainer: {
    // width: 100,
    // height: 100,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

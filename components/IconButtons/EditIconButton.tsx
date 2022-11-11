import React, { FC } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../shared/colors";
import { ScreenWidth } from "../shared/sizes";

type EditIconButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export const EditIconButton: FC<EditIconButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Icon
          name="edit"
          color={colors.gray3}
          size={ScreenWidth * 0.08}
          style={styles.iconPaddingAdjustment}
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
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconPaddingAdjustment: {
    paddingLeft: ScreenWidth * 0.0053,
  },
});

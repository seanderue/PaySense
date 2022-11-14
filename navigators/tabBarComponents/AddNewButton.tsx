import React, { FC } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../../components/shared/colors";
import { shadowStyles } from "../../components/shared/shadowStyles";
import { ScreenHeight } from "../../components/shared/sizes";
import { textStyles } from "../../components/shared/textStyles";
import Ionicon from "react-native-vector-icons/Ionicons";

interface AddNewButtonProps {
  label: string;
  description?: string;
  icon: string;
  onPress: () => void;
}

// ----constants----
const BUTTON_WIDTH = "100%";
const BUTTON_HEIGHT = Math.round(ScreenHeight * 0.0788);
const HELP_BUTTON_SIZE = BUTTON_HEIGHT * 0.375;

export const AddNewButton: FC<AddNewButtonProps> = ({
  label,
  icon,
  description,
  onPress,
}) => {
  return (
    <Pressable
      style={styles.buttonContainer}
      onPress={() => {
        onPress();
        console.log(`pressed ${label}`);
      }}
    >
      <View style={styles.buttonLabel}>
        <View style={styles.buttonIcon}>
          <Text style={textStyles.LogoBig}>{icon}</Text>
        </View>
        <Text style={[textStyles.BoldMedium, styles.buttonText]}>{label}</Text>
      </View>
      <Ionicon
        name="help-circle-outline"
        size={HELP_BUTTON_SIZE}
        color="#A1B2C8"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: BUTTON_HEIGHT,
    paddingHorizontal: BUTTON_HEIGHT * 0.1563,
    borderRadius: BUTTON_HEIGHT * 0.125,
    backgroundColor: colors.white,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    ...shadowStyles.shadow3,
  },
  buttonText: {
    color: colors.neutral3,
  },
  buttonIcon: {
    height: BUTTON_HEIGHT * 0.5652,
    width: BUTTON_HEIGHT * 0.5652,
    backgroundColor: colors.accentBlue,
    borderRadius: BUTTON_HEIGHT * 0.5652 * 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    paddingTop: 5,
  },
  buttonLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  tooltip: {},
});

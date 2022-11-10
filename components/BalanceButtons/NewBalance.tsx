import React, { FC } from "react";
import { Pressable, View, StyleSheet, PixelRatio, Text } from "react-native";
import { colors } from "../shared/colors";
import { textStyles } from "../shared/textStyles";

interface NewBalanceProps {}
const RADIUS = PixelRatio.roundToNearestPixel(79.32 / 2);

export const NewBalance: FC<NewBalanceProps> = () => {
  return (
    <Pressable
      style={styles.NewCategoryContainer}
      onPress={() => {
        console.log("new button");
      }}
    >
      <View style={styles.newButton}>
        <Text style={styles.plusIcon}>+</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={textStyles.Body2}>Add New</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  newButton: {
    height: RADIUS * 2,
    width: RADIUS * 2,
    borderRadius: 999,
    backgroundColor: "#D2FFE1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  NewCategoryContainer: {
    height: RADIUS * 2,
    width: RADIUS * 2,
  },
  plusIcon: {
    color: colors.white,
    fontFamily: "Poppins-Medium",
    fontSize: 30,
  },
});

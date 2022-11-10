import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { ScreenWidth } from "./sizes";

export const textStyles = StyleSheet.create({
  Body1: {
    fontSize: ScreenWidth * 0.0172,
    // lineHeight: ScreenWidth * 0.064,
    fontFamily: "Poppins-Regular",
  },
  Body2: {
    fontSize: ScreenWidth * 0.0172 * 2,
    // lineHeight: ScreenWidth * 0.064,
    fontFamily: "Poppins-Regular",
  },
  Cap1: {
    fontSize: ScreenWidth * 0.0172,
    // lineHeight: ScreenWidth * 0.0533,
    fontFamily: "Poppins-Medium",
  },
  Cap2: {
    fontSize: ScreenWidth * 0.0172 * 2,
    // lineHeight: ScreenWidth * 0.0533,
    fontFamily: "Poppins-Medium",
  },
  Cap3: {
    fontSize: ScreenWidth * 0.02133,
    lineHeight: ScreenWidth * 0.02133,
    fontFamily: "Poppins-Medium",
  },
  EmojiIcon: {
    fontSize: ScreenWidth * 0.096,
    lineHeight: ScreenWidth * 0.10667,
    fontFamily: "Poppins-Medium",
  },
  H1: {
    fontSize: ScreenWidth * 0.064,
    lineHeight: ScreenWidth * 0.10667,
    fontFamily: "Poppins-Medium",
  },
  H2: {
    fontSize: ScreenWidth * 0.0533,
    lineHeight: ScreenWidth * 0.08533,
    fontFamily: "Poppins-Medium",
  },
  LogoBig: {
    fontSize: ScreenWidth * 0.064,
    // lineHeight: ScreenWidth * 0.064,
    fontFamily: "Poppins-Bold",
  },
  LogoSmall: {
    fontSize: ScreenWidth * 0.04,
    // lineHeight: ScreenWidth * 0.04,
    fontFamily: "Poppins-Bold",
  },
  Subtitle2: {
    fontSize: ScreenWidth * 0.04,
    // lineHeight: ScreenWidth * 0.04,
    fontFamily: "Poppins-Regular",
  },
  BoldMedium: {
    fontSize: ScreenWidth * 0.0533,
    lineHeight: ScreenWidth * 0.064,
    fontFamily: "Poppins-Bold",
  },
  Overline: {
    fontSize: ScreenWidth * 0.02667,
    lineHeight: ScreenWidth * 0.04267,
    fontFamily: "Poppins-Medium",
  },
  SmallTitle: {
    fontSize: ScreenWidth * 0.032,
    lineHeight: ScreenWidth * 0.0533,
    fontFamily: "Poppins-Regular",
  },
  Subtitle1: {
    fontSize: ScreenWidth * 0.064,
    lineHeight: ScreenWidth * 0.10667,
    fontFamily: "Poppins-ExtraLight",
  },
  Title1: {
    fontSize: ScreenWidth * 0.04267,
    lineHeight: ScreenWidth * 0.064,
    fontFamily: "Poppins-SemiBold",
  },
  Title2: {
    fontSize: ScreenWidth * 0.04267,
    lineHeight: ScreenWidth * 0.064,
    fontFamily: "Poppins-Medium",
  },
  TinyLabel: {
    fontSize: ScreenWidth * 0.02133,
    letterSpacing: 0.8,
    fontFamily: "Poppins-Medium",
    textTransform: "uppercase",
  },
  Cap4: {
    fontSize: ScreenWidth * 0.032,
    fontFamily: "Poppins-Medium",
  },
  Title3: {
    fontSize: ScreenWidth * 0.04267,
    fontFamily: "Poppins-SemiBold",
  },
  textColorDark: {
    color: colors.darkGray1,
  },
  textColorLight: {
    color: colors.gray3,
  },
});

import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "./colors";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
`;

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

export const BALANCE_PAGE_MARGIN = ScreenWidth * 0.16;
export const CONTENT_WIDTH_PERCENTAGE = 0.8746;

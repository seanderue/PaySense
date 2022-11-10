import React, { FunctionComponent } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";

// components
import { colors } from "../shared/colors";
import { textStyles } from "../shared/textStyles";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  color: ${colors.neutral8};
`;

// Types
import { ButtonProps } from "./types";

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonView}>
      <Text style={textStyles.Cap1}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonView: {
    alignItems: "center",
    backgroundColor: colors.primary,
    width: "100%",
    padding: 20,
    borderRadius: 8,
    color: colors.neutral8,
  },
});

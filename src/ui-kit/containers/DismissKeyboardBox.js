import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import Box from "./Box";

/**
 * Seems we need to use React Native's Keyboard API to explicitly dismiss
 * keyboard on tapping outside of TextInputs.
 *
 * Source: https://stackoverflow.com/a/34779467
 */
const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};

const DismissKeyboardBox = DismissKeyboardHOC(Box);

export default DismissKeyboardBox;

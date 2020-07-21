import styled from "styled-components/native";
import TouchableOpacity from "./TouchableOpacity";

/**
 * TouchableOpacity for primary actions. TODO: Make it look
 * more attractive.
 *
 * Super long name but didn't want to name it as "Button" since
 * the Button and Touchable API are 2 different things and it might
 * mislead.
 */
const PrimaryTouchableOpacity = styled(TouchableOpacity).attrs(() => ({
  color: "black",
  borderWidth: "thin",
  borderColor: "grey",
  paddingX: "two",
  paddingY: "one",
}))``;

export default PrimaryTouchableOpacity;

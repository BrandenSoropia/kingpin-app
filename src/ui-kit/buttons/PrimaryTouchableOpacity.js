import styled from "styled-components/native";
import { space, color, border, layout, typography } from "styled-system";

/**
 * Super long name but didn't want to name it as "Button" since
 * the Button and Touchable API are 2 different things and it might
 * mislead.
 */
const PrimaryTouchableOpacity = styled.TouchableOpacity.attrs(() => ({
  color: "black",
  borderWidth: "thin",
  borderColor: "grey",
  paddingX: "two",
  paddingY: "one",
}))`
  ${space}
  ${color}
  ${border}
  ${layout}
  ${typography}
`;

export default PrimaryTouchableOpacity;

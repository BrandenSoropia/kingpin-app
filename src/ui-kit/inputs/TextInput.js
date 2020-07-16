import styled from "styled-components/native";
import { space, layout, color, typography, border } from "styled-system";

const TextInput = styled.TextInput.attrs(() => ({
  fontSize: "body",
  paddingY: "one",
}))`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
`;

export default TextInput;

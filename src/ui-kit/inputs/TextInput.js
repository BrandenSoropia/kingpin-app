import styled from "styled-components/native";
import {
  space,
  layout,
  color,
  typography,
  border,
  flexbox,
} from "styled-system";

const TextInput = styled.TextInput.attrs(() => ({
  fontSize: "body",
  paddingY: "one",
  width: "100%",
  borderColor: "grey",
  borderBottomWidth: "thin",
}))`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
  ${flexbox}
`;

export default TextInput;

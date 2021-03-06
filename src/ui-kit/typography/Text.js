import { space, layout, color, typography, flexbox } from "styled-system";
import styled from "styled-components/native";

/**
 * Base component that all text components (body, headings etc) should extend.
 */
const Text = styled.Text`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
`;

export default Text;

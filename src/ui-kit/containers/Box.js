import styled from "styled-components/native";
import { space, color, border, layout } from "styled-system";

/**
 * Base component for all containers.
 */
const Box = styled.View`
  ${space}
  ${color}
  ${border}
  ${layout}
`;

export default Box;

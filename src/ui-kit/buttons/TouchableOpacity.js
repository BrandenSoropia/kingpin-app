import styled from "styled-components/native";
import { space, color, border, layout, typography } from "styled-system";

/**
 * Base TouchableOpacity just with access to theme.
 */
const TouchableOpacity = styled.TouchableOpacity`
  ${space}
  ${color}
  ${border}
  ${layout}
  ${typography}
`;

export default TouchableOpacity;

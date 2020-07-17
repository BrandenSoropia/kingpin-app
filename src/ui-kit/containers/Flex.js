import styled from "styled-components/native";
import View from "./View";
import { flexbox } from "styled-system";

const Flex = styled(View).attrs(() => ({
  display: "flex",
}))`
  ${flexbox}
`;

export default Flex;

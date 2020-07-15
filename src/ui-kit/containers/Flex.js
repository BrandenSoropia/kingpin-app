import styled from "styled-components/native";
import Box from "./Box";
import { flexbox } from "styled-system";

const Flex = styled(Box).attrs(() => ({
  display: "flex",
}))`
  ${flexbox}
`;

export default Flex;

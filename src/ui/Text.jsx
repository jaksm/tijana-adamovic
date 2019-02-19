import styled from "styled-components";
import theme from "../theme";

const Text = styled.p`
  margin: 0;
  color: ${theme.color.black};
  font-weight: ${theme.font.weight.normal};
  line-height: ${theme.font.lineHeight.md};
  letter-spacing: ${theme.font.letterSpacing};
`;

export default Text;

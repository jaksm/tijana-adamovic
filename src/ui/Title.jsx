import styled from "styled-components";
import theme from "../theme";

const Title = styled.h1`
  margin: 1.25rem 0;
  color: ${theme.color.black};
  font-size: ${theme.font.size.lg};
  font-weight: ${theme.font.weight.bold};
  line-height: ${theme.font.lineHeight.lg};
  letter-spacing: ${theme.font.letterSpacing};
  @media screen and (max-width: 550px) {
    font-size: 32px;
  }
`;

export default Title;

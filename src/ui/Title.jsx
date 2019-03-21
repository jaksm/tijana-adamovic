import styled from "styled-components";
import theme from "../theme";

const Title = styled.h1`
  margin: 0;
  margin-bottom: 1rem;
  color: ${theme.color.black};
  font-size: ${({ size }) => (size ? theme.font.size[size] : theme.font.size.lg)};
  font-weight: ${theme.font.weight.bold};
  line-height: ${theme.font.lineHeight.lg};
  letter-spacing: ${theme.font.letterSpacing};
  @media screen and (max-width: 550px) {
    font-size: 32px;
  }
`;

export default Title;
